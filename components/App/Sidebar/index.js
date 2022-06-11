import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRecoilState } from 'recoil';
import useSpotify from '../../../hooks/useSpotify';
import { playlistIdState } from '../../../atoms/playlistAtom';

import * as S from './style';

const Sidebar = () => {
  const spotifyApi = useSpotify();
  const { data: session } = useSession();
  const [playlists, setPlaylists] = useState([]);
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);

  console.log('playlists', playlists)

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items);
      });
    }
  }, [session, spotifyApi]);

  return (
    <S.AppSidebar>
      <S.AppSidebarContainer />
    </S.AppSidebar>
  );
}

export default Sidebar;
