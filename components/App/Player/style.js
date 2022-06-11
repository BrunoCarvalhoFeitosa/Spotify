import styled from 'styled-components';

export const PlayerContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #333;

    @media screen and (max-width: 640px) {
        background: #050606;
    }
`;

export const PlayerContainerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 15px;

    @media screen and (max-width: 640px) {
        flex-direction: column;
    }
`;

export const PlayerContainerWrapperAlbum = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const PlayerContainerWrapperAlbumCover = styled.div`
    img {
        width: 60px;
        height: 60px;
    }
`;

export const PlayerContainerWrapperAlbumDetails = styled.div`
    h4 {
        margin: 0 0 2px;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: 400;
        color: #FFF;
        cursor: pointer;
        
        &:hover {
            text-decoration: underline;
        }
    }
    
    h5 {
        margin: 0;
        font-family: 'Roboto', sans-serif;
        font-size: 11px;
        font-weight: 300;
        color: #FFF;
        cursor: pointer;
        
        &:hover {
            text-decoration: underline;
        }
    }
`;

export const PlayerContainerWrapperControls = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    svg {
        height: 20px;
        cursor: pointer;

        &:nth-of-type(1) {
            stroke: #FFF;
        }

        &:nth-of-type(2),
        &:nth-of-type(3),
        &:nth-of-type(4),
        &:nth-of-type(5) {
            fill: #FFF;
        }

        &:nth-of-type(3) {
            height: 45px;
        }
    }
`;

export const PlayerContainerWrapperOptions = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    svg {
        height: 20px;
        cursor: pointer;

        &:first-of-type {
            stroke: #FFF;
        }

        &:last-of-type {
            fill: #FFF;
        }
    }

    input[type=range]:focus::-ms-fill-lower {
        background: #888;
    }
`;
