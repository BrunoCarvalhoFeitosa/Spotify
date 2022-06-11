import { useRecoilValue } from 'recoil';
import { playlistState } from '../../../atoms/playListAtom';
import Song from '../Song';

import * as S from './style';

const Songs = () => {
  const playlist = useRecoilValue(playlistState);

  return (
    <S.SongsContainer>
      {playlist?.tracks?.items.map((track, index) => (
        <Song
          key={track.track.id}
          track={track}
          order={index}
        />
      ))}
    </S.SongsContainer>
  );
}

export default Songs;