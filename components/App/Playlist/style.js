import styled from 'styled-components';

export const PlaylistContainer = styled.section`
    width: 100%;

    @media screen and (max-width: 680px) {
        padding: 10px 14px 38px;
    }
`;

export const PlaylistTitle = styled.h3`
    margin: 30px 0 10px 0;
    font-family: 'Roboto', sans-serif;
    font-size: 32px;
    font-weight: 700;
    color: #FFF;
`;

export const PlaylistWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    gap: 20px;
`;

export const PlaylistWrapperItem = styled.div``;

export const PlaylistWrapperItemName = styled.button`
    background: none;
    border: none;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #333;
    cursor: pointer;
`;

export const PlaylistWrapperItemImage = styled.div`

    img {
        width: 300px;
        height: 200px;
        object-fit: cover;
    }
`;
