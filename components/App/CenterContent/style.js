import styled from 'styled-components';

export const CenterContentContainer = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 92vh;
    background: #111;
`;

export const CenterContentContainerHeader = styled.div`
    width: 100%;
    padding: 20px 20px 20px 0;
    background: #050606;

    @media screen and (max-width: 680px) {
        padding: 20px;
    }
`;

export const CenterContentContainerGradient = styled.section`
    width: 100%;
    height: 40vh;
    padding: 20px 0;
    background: rgb(67,205,128);
    background: linear-gradient(180deg, rgba(67,205,128,1) 0%, rgba(17,17,17,1) 100%);

    @media screen and (max-width: 680px) {
        height: auto;
        padding: 48px 0;
    }
`;

export const CenterContentContainerUser = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`;

export const CenterContentContainerAlbumSelectedPlaylist = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 22px;
    width: 100%;
    padding: 0 35px 20px 35px;

    @media screen and (max-width: 680px) {
        align-items: baseline;
        flex-direction: column;
        padding: 0;
    }
`;

export const CenterContentContainerAlbumSelectedPlaylistImage = styled.div`
    width: 340px;
    height: 260px;
    object-fit: cover;

    img {
        width: 340px;
        height: 260px;
        object-fit: cover;
        object-position: top;
        transition: .22s transform;
        cursor: zoom-in;

        &:hover {
            transform: scale(1.4);

            @media screen and (max-width: 640px) {
                transform: scale(1.12);
            }
        }

        @media screen and (max-width: 640px) {
            width: 100%;
        }
    }
`;

export const CenterContentContainerAlbumSelectedPlaylistDescription = styled.div`
    h3 {
        margin: 20px 0;
        font-family: 'Roboto', sans-serif;
        font-size: 98px;
        line-height: 90px;
        font-weight: 700;
        color: #FFF;

        @media screen and (max-width: 640px) {
            margin: 0 8px 22px;
            font-size: 66px;
            line-height: 60px;
            width: 355px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    
    h4 {
        margin: 0;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
        color: #FFF;

        @media screen and (max-width: 640px) {
            margin-left: 15px;
        }
    }
`;

export const CenterContentContainerAlbumSelectedPlaylistFlex = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    @media screen and (max-width: 640px) {
        margin-left: 15px;
    }
`;

export const CenterContentContainerAlbumSelectedPlaylistUser = styled.div`
    display: flex;
    align-items: center;
`;

export const CenterContentContainerAlbumSelectedPlaylistUserImage = styled.div`
    margin-right: 6px;

    img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
`;

export const CenterContentContainerAlbumSelectedPlaylistUserName = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #FFF;
`;

export const CenterContentContainerAlbumSelectedPlaylistTotalSongs = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    
    &::before {
        content: '';
        display: block;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #FFF;
    }

    span {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: 300;
        color: #FFF;
    }
`;
