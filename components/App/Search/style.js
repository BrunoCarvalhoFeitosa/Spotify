import styled from 'styled-components';

export const SearchContainer = styled.div`
    width: 100%;
`;

export const SearchContainerWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 15px 0px 15px 46px;
    background: #111;
    border-radius: 32px;

    @media screen and (max-width: 640px) {
        padding: 15px 0px 15px 20px;
    }
    
    > svg {
        width: 25px;
        height: 25px;
        stroke: #FFF;
    }    
`;

export const SearchContainerInputWrapper = styled.div`
    width: 100%;

    @media screen and (max-width: 640px) {
        width: initial;
    }

    input {
        width: 55%;
        background: none;
        border: none;
        font-family: 'Roboto',sans-serif;
        font-size: 14px;
        color: #FFF;

        &::-webkit-input-placeholder {
            font-family: 'Roboto', sans-serif;
            font-size: 14px;
            color: #555;
        }

        @media screen and (max-width: 640px) {
            width: initial;
        }
    }
`;

export const SearchContainerFiltersWrappper = styled.div`
    position: absolute;
    right: 20px;
    display: flex;
    align-items: center;
    gap: 10px;

    @media screen and (max-width: 680px) {
        display: none;
    }
`;

export const SearchContainerFiltersLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    padding-right: 32px;
    border-right: 1px solid #333;
    `;

export const SearchContainerFiltersLeftButton = styled.button`
    padding: 4px 12px;
    border-radius: 32px;
    background: #333;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #FFF;
    border: none;
    cursor: pointer;

    @media screen and (max-width: 680px) {
        &:nth-of-type(3) {
            display: none;
        }
    }
`;

export const SearchContainerFiltersRight = styled.div`
    padding-left: 10px;
`;

export const SearchContainerFiltersRightButton = styled.button`
    display: flex;
    align-items: center;
    gap: 6px;
    background: none;
    border: none;
    cursor: pointer;

    > svg {
        width: 25px;
        height: 25px;
        stroke: #FFF;
    }
`;

export const SearchContainerFiltersRightText = styled.span`
    font-family: 'Roboto',sans-serif;
    font-size: 16px;
    color: #FFF;
`;
