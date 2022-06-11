import styled from 'styled-components';

export const UserInformationsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
`;

export const UserInformationsContainerUserTexts = styled.div`
    position: fixed;
    top: 78px;
    background: #222;
    border-radius: 32px;
`;

export const UserInformationsContainerSaudation = styled.div`
    h1 {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: 300;
        text-transform: uppercase;
        color: #FFF;

        > strong {
            font-weight: 700;
        }
    }
`;

export const UserInformationsContainerLogout = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const UserInformationsContainerLogoutButton = styled.button`
    padding: 10px 32px;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    color: #FFF;
    border: none;
    background: none;
    cursor: pointer;
`;

export const UserInformationsContainerUser = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    background: #222;
    border-radius: 32px;
    padding-left: 10px;
`;

export const UserInformationsContainerUserOpen = styled.button`
    display: flex;
    border: none;
    background: none;
    cursor: pointer;

    svg {
        width: 16px;
        height: 16px;
        stroke: #FFF;
    }
`;

export const UserInformationsContainerUserPicture = styled.div`
    display: flex;

    img {
        border-radius: 50%;
        width: 50px;
        height: 50px;
    }
`;
