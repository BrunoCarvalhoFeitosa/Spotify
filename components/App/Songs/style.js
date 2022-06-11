import styled from 'styled-components';

export const SongsContainer = styled.section`
    width: 100%;
    max-height: 60vh;
    padding: 20px 40px;
    overflow-y: auto;

    @media screen and (max-width: 640px) {
        max-height: none;
        overflow-y: unset;
        padding: 0;
        background: #333;
    }
`;
