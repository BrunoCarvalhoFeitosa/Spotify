import styled from 'styled-components';

export const SongContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 8px 22px;
    cursor: pointer;

    &:hover {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 12px;
    }

    @media screen and (max-width: 640px) {
        justify-content: flex-start;
        align-items: center;
        gap: 18px;
    }
`;

export const SongContainerTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    width: 28%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media screen and (max-width: 680px) {
        width: initial;
        flex: 1;
    }
`;

export const SongContainerTitleOrder = styled.strong`
    width: 16px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 300;
    color: #FFF;

    @media screen and (max-width: 640px) {
        display: none;
    }
`;

export const SongContainerTitleImageAlbum = styled.div`
    display: flex;

    img {
        width: 50px;
        height: 50px;
    }
`;

export const SongContainerTitleImageText = styled.div`
    
`;

export const SongContainerTitleImageTextArtist = styled.h3`
    margin: 0 0 2px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #FFF;

    @media screen and (max-width: 680px) {
        font-size: 11px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export const SongContainerTitleImageTextSongName = styled.h4`
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 300;
    color: #FFF;
    
    @media screen and (max-width: 640px) {
        font-size: 12px;
    }
`;

export const SongContainerAlbum = styled.div`
    @media screen and (max-width: 640px) {
        display: none;
    }
`;

export const SongContainerAlbumText = styled.h4`
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 300;
    color: #FFF;
`;

export const SongContainerFlexContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const SongContainerAdded = styled.div`
    svg {
        height: 20px;
        stroke: #FFF;
    }
`;

export const SongContainerDuration = styled.p`
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 300;
    color: #FFF;
`;
