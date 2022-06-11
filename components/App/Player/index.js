import { useState, useEffect, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import { debounce } from 'lodash';
import { useRecoilState } from 'recoil';
import useSpotify from '../../../hooks/useSpotify';
import useSongInfo from '../../../hooks/useSongInfo';
import { currentTrackIdState, isPlayingState } from '../../../atoms/songAtom';
import { SwitchHorizontalIcon, VolumeOffIcon } from '@heroicons/react/outline';
import { FastForwardIcon, PauseIcon, PlayIcon, ReplyIcon, RewindIcon, VolumeUpIcon } from '@heroicons/react/solid';

import * as S from './style';

const Player = () => {
  const spotifyApi = useSpotify();
  const { data: session } = useSession();
  const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [volume, setVolume] = useState(50);
  const songInfo = useSongInfo();

  const fetchCurrentSong = () => {
    if (!songInfo) {
      spotifyApi.getMyCurrentPlayingTrack().then((data) => {
        setCurrentTrackId(data.body?.item?.id);

        spotifyApi.getMyCurrentPlaybackState().then((data) => {
          setIsPlaying(data.body?.is_playing);
        });
      });
    }
  };

  const handlePlayPause = () => {
    spotifyApi.getMyCurrentPlaybackState().then((data) => {
      if (data.body?.is_playing) {
        spotifyApi.pause();
        setIsPlaying(false);
      } else {
        spotifyApi.play();
        setIsPlaying(true);
      }
    });
  };

  useEffect(() => {
    if (spotifyApi.getAccessToken() && !currentTrackId) {
      fetchCurrentSong();
      setVolume(50);
    }
  }, [spotifyApi, session, currentTrackId, fetchCurrentSong]);

  useEffect(() => {
    if (volume > 0 && volume < 100) {
      debouncedAdjustVolume(volume);
    }
  }, [volume]);

  const debouncedAdjustVolume = useCallback(
    debounce((volume) => {
      spotifyApi.setVolume(volume).catch((error) => {});
    }, 500), []
  );

  return (
    <S.PlayerContainer>
      <S.PlayerContainerWrapper>
        <S.PlayerContainerWrapperAlbum>
            <S.PlayerContainerWrapperAlbumCover>
              <img src={songInfo?.album?.images?.[0]?.url} />
            </S.PlayerContainerWrapperAlbumCover>
            <S.PlayerContainerWrapperAlbumDetails>
              <h4>{songInfo?.name}</h4>
              <h5>{songInfo?.artists?.[0]?.name}</h5>
            </S.PlayerContainerWrapperAlbumDetails>
        </S.PlayerContainerWrapperAlbum>
        <S.PlayerContainerWrapperControls>
          <SwitchHorizontalIcon />
          <RewindIcon />
          {isPlaying ? (
            <PauseIcon onClick={handlePlayPause} />
          ) : (
            <PlayIcon onClick={handlePlayPause} />
          )}
          <FastForwardIcon />
          <ReplyIcon />
        </S.PlayerContainerWrapperControls>
        <S.PlayerContainerWrapperOptions>
            <VolumeOffIcon onClick={() => volume > 0 && setVolume(volume - 10)} />
            <input
              type='range'
              value={volume}
              onChange={event => setVolume(Number(event.target.value))}
              min={0}
              max={100}/>
            <VolumeUpIcon onClick={() => volume < 100 && setVolume(volume + 10)} />
        </S.PlayerContainerWrapperOptions>
      </S.PlayerContainerWrapper>
    </S.PlayerContainer>
  );
}

export default Player;
