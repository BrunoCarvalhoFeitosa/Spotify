import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRecoilState } from 'recoil';
import useSpotify from '../../../hooks/useSpotify';
import { currentTrackIdState, isPlayingState } from '../../../atoms/songAtom';
import { millisToMinutesAndSeconds } from '../../../lib/time';
import { HeartIcon } from '@heroicons/react/outline';

import * as S from './style';

const Song = ({ order, track }) => {
  const spotifyApi = useSpotify();
  const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

  const playSong = () => {
    setCurrentTrackId(track.track.id);
    setIsPlaying(true);
    spotifyApi.play({
      uris: [track.track.uri],
    });
  };

  return (
    <S.SongContainer onClick={playSong}>
      <S.SongContainerTitle>
        <S.SongContainerTitleOrder>
          {order + 1}
        </S.SongContainerTitleOrder>
        <S.SongContainerTitleImageAlbum>
          <img
            src={track.track.album.images[0].url}
            alt={track.track.name}
          />
        </S.SongContainerTitleImageAlbum>
        <S.SongContainerTitleImageText>
          <S.SongContainerTitleImageTextArtist>
            {track.track.name}
          </S.SongContainerTitleImageTextArtist>
          <S.SongContainerTitleImageTextSongName>
            {track.track.artists[0].name}
          </S.SongContainerTitleImageTextSongName>
        </S.SongContainerTitleImageText>
      </S.SongContainerTitle>
      <S.SongContainerAlbum>
        <S.SongContainerAlbumText>
          {track.track.album.name}
        </S.SongContainerAlbumText>
      </S.SongContainerAlbum>
      <S.SongContainerFlexContainer>
        <S.SongContainerAdded>
          <HeartIcon />
        </S.SongContainerAdded>
        <S.SongContainerDuration>
          {millisToMinutesAndSeconds(track.track.duration_ms)}
        </S.SongContainerDuration>
      </S.SongContainerFlexContainer>
    </S.SongContainer>
  );
}

export default Song;