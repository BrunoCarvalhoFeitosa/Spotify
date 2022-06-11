import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRecoilState } from 'recoil';
import useSpotify from '../../../hooks/useSpotify';
import { playlistIdState } from '../../../atoms/playListAtom';

import * as S from './style';

const Playlist = () => {
  const spotifyApi = useSpotify();
  const { data: session } = useSession();
  const [playlists, setPlaylists] = useState([]);
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items);
      });
    }
  }, [session, spotifyApi]);


  return (
    <S.PlaylistContainer>
      <S.PlaylistTitle>Suas playlists</S.PlaylistTitle>
      <S.PlaylistWrapper>
        {playlists && playlists?.map((playlist) => (
          <S.PlaylistWrapperItem
            key={playlist?.id}
            onClick={() => setPlaylistId(playlist.id)}
          >
          <S.PlaylistWrapperItemName>
            {playlist?.name}
          </S.PlaylistWrapperItemName>
        </S.PlaylistWrapperItem>
        ))}
      </S.PlaylistWrapper>
    </S.PlaylistContainer>
  ) ; 
}

export default Playlist;
