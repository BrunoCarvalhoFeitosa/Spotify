import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { shuffle } from 'lodash';
import { useRecoilState, useRecoilValue } from 'recoil';
import { playlistState, playlistIdState } from '../../../atoms/playlistAtom';
import useSpotify from '../../../hooks/useSpotify';
import Search from '../Search';
import UserInformations from '../UserInformations';
import Playlist from '../Playlist';
import Songs from '../Songs';

import * as S from './style';

const colors = [
  "#43CD80",
];

const CenterContent = () => {
  const spotifyApi = useSpotify();
  const { data: session } = useSession();
  const [color, setColor] = useState(null);
  const playlistId = useRecoilValue(playlistIdState);
  const [playlist, setPlaylist] = useRecoilState(playlistState);

  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, [playlistId]);

  useEffect(() => {
    spotifyApi
      .getPlaylist(playlistId)
      .then((data) => {
        setPlaylist(data.body);
      })
      .catch((error) => console.error('A error ocurred while the playlist is fetched.', error));
  }, [spotifyApi, playlistId, setPlaylist]);

  return (
    <S.CenterContentContainer>
      <S.CenterContentContainerHeader>
        <S.CenterContentContainerUser>
          <Search />
          <UserInformations />
        </S.CenterContentContainerUser>
        <Playlist />
      </S.CenterContentContainerHeader>
      <S.CenterContentContainerGradient style={{
        background: `linear-gradient(180deg, ${color} 0%, rgba(17,17,17,1) 100%)`
      }}>
        <S.CenterContentContainerAlbumSelectedPlaylist>
          <S.CenterContentContainerAlbumSelectedPlaylistImage>
            <img
              src={playlist?.images?.[0]?.url}
              alt={playlist?.name}
              title={playlist?.name}
            />
          </S.CenterContentContainerAlbumSelectedPlaylistImage>
          <S.CenterContentContainerAlbumSelectedPlaylistDescription>
            <h4>Playlist</h4>
            <h3>{playlist?.name}</h3>
            <S.CenterContentContainerAlbumSelectedPlaylistFlex>
              <S.CenterContentContainerAlbumSelectedPlaylistUser>
                <S.CenterContentContainerAlbumSelectedPlaylistUserImage>
                  <img
                    src={session?.user.image}
                    alt={session?.user.name}
                    title={session?.user.name}
                  />
                </S.CenterContentContainerAlbumSelectedPlaylistUserImage>
                <S.CenterContentContainerAlbumSelectedPlaylistUserName>
                  {session?.user.name}
                </S.CenterContentContainerAlbumSelectedPlaylistUserName>
              </S.CenterContentContainerAlbumSelectedPlaylistUser>
              <S.CenterContentContainerAlbumSelectedPlaylistTotalSongs>
                <span>{playlist?.tracks?.items.length} músicas</span>
              </S.CenterContentContainerAlbumSelectedPlaylistTotalSongs>
            </S.CenterContentContainerAlbumSelectedPlaylistFlex>
          </S.CenterContentContainerAlbumSelectedPlaylistDescription>
        </S.CenterContentContainerAlbumSelectedPlaylist>
      </S.CenterContentContainerGradient>
      <Songs />
    </S.CenterContentContainer>
  );
}

export default CenterContent;
