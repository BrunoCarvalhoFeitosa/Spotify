import styled from 'styled-components';

export const AppSidebar = styled.div`
    width: 260px;
    height: 92vh;
    background: #050606;

    @media screen and (max-width: 1080px) {
        display: none;
    }
`;

export const AppSidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px 16px;
`;
