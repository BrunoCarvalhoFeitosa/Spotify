import styled from 'styled-components';

export const Hero = styled.section`
    width: 100%;
    background: #000;
    overflow: hidden;
    cursor: pointer;
    
    @media screen and (min-width: 1080px) {
        height: 100vh;
    }
`;

export const HeroContainer = styled.div`
    position: relative;

    > img {
        width: 100%;
        height: 100vh;
        object-fit: cover;

        @media screen and (max-width: 1080px) {
            object-fit: cover;
        }
    }
`;

export const HeroEffect = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 220px;
    background: linear-gradient(to top, #000 50%, transparent 60%);
`;

export const HeroBgBlack = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: .5;
`;

export const Intro = styled.section`
    width: 100%;
    background: #000;

    @media screen and (min-width: 1081px) {
        height: 82vh;
    }
`;

export const IntroContainer = styled.div`
    width: 100%;
`;

export const IntroContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;

    @media screen and (max-width: 620px) {
        width: 94%;
    }
`;

export const IntroContainerHeaderLogo = styled.div`
    position: relative;
    top: 20px;
    cursor: pointer;

    @media screen and (max-width: 320px) {
        img {
            width: 50px !important;
            height: 50px !important;
        }
    }

    @media screen and (min-width: 321px) and (max-width: 680px) {
        img {
            width: 66px !important;
            height: 66px !important;
        }
    }

    @media screen and (min-width: 1081px) {
        top: 40px;
    }
`;

export const IntroContainerHeaderList = styled.div`
    position: relative;
    top: 20px;

    @media screen and (min-width: 1081px) {
        top: 40px;
    }

    ul {
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        gap: 20px;

        li {
            display: flex;
            align-items: center;
            gap: 4px;
            font-family: 'Roboto', sans-serif;
            font-size: 16px;
            font-weight: 500;
            color: #FFF;
            cursor: pointer;

            @media screen and (max-width: 320px) {
                &:last-of-type {
                    display: none;
                }
            }

            @media screen and (max-width: 680px) {
                font-size: 13px;
            }

            &:nth-of-type(2),
            &:nth-of-type(4) {
                svg {
                    fill: #FFF;
                    height: 25px;
                }
            }

            &:nth-of-type(3) {
                svg {
                    stroke: #FFF;
                    height: 25px;
                }
            }
        }
    }
`;

export const IntroArticleContainer = styled.article`
    position: relative;
    display: flex;
    align-items: center;
    width: 95%;
    margin: 140px auto 0;

    @media screen and (max-width: 1080px) {
        flex-direction: column;
        width: 90%;
    }
`;

export const IntroArticlePanel = styled.div`
    position: absolute;
    top: -42px;
    left: -18px;
    opacity: .5;
    
    @media screen and (min-width: 1081px) {
        position: relative;
        bottom: 140px;
        top: initial;
        left: initial;
        opacity: 1;
    }
`;

export const IntroArticlePanelContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const IntroArticlePanelItem = styled.div`
    margin: 20px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #43CD80;
    animation: pulse 1.5s cubic-bezier(0.2, 0, 0.4, 1) infinite;

    @media screen and (max-width: 680px) {
        margin: 14px;
    }

    @media screen and (min-width: 681px) and (max-width: 1080px) {
        margin: 20px;
    }
`;

export const IntroArticleContainerText = styled.div`
    width: 100%;

    @media screen and (min-width: 1081px) {
        width: 45%;
        transform: translateX(-160px);
    }
`;

export const IntroArticleContainerTitle = styled.h2`
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 70px;
    line-height: 70px;
    font-weight: 900;
    color: #FFF;

    @media screen and (max-width: 680px) {
        font-size: 45px;
        line-height: 45px;
    }

    @media screen and (min-width: 681px) and (max-width: 1080px) {
        font-size: 70px;
        line-height: 70px;
    }

    &:nth-of-type(2) {
        strong {
            color: #43CD80;
        }
    }

    &:nth-of-type(3) {
        strong {
            color: #222;
        }
    }
`;

export const IntroArticleContainerDescription = styled.p`
    margin-top: 52px;
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
    line-height: 30px;
    font-weight: 300;
    color: #FFF;
`;

export const IntroArticleContainerButton = styled.button`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px 40px;
    width: 400px;
    border-radius: 40px;
    background: #43CD80;
    border: none;
    cursor: pointer;

    @media screen and (max-width: 320px) {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        width: 92%;
        z-index: 99;
    }

    @media screen and (min-width: 321px) and (max-width: 1080px) {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        width: 85%;
        z-index: 99;
    }

    img {
        filter: brightness(.4);
    }
    
    strong {
        margin-left: 10px;
        font-family: 'Roboto', sans-serif;
        font-size: 17px;
        font-weight: 900;
        color: #000;
        opacity: .7;
    }
`;

export const IntroArticleContainerCarousel = styled.div`
    width: 100%;
    padding-bottom: 120px;

    @media screen and (max-width: 1081px) {
        padding-bottom: 50px;
    }

    @media screen and (min-width: 1081px) {
        width: 52%;
        padding-bottom: 0;
    }
`;

export const IntroArticleContainerCarouselItem = styled.div`
    position: relative;
    box-sizing: border-box;
    background: #222;
    cursor: grab;
    
    @media screen and (min-width: 1081px) {
        margin-left: 40px;
        width: 300px !important;
        height: 300px !important;
    }
`;

export const IntroArticleContainerCarouselItemImage = styled.div`
    img {
        object-fit: cover;
    }
`;

export const IntroArticleContainerCarouselItemWrapper = styled.div`
    display: flex;
    justify-content: end;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;

    @media screen and (min-width: 1081px) {
        padding: 0 20px 10px;
    }
`;

export const IntroArticleContainerCarouselItemButton = styled.button`

    background: transparent;
    border: none;
    cursor: pointer;

    svg {
        fill: #43CD80;
        height: 60px;
    }
`;

export const IntroArticleContainerCarouselItemAlbum = styled.div`
    position: absolute;
    top: 0;
    right: -130px;
    background: #333;
    border-radius: 8px;
    overflow: hidden;

    img {
        filter: grayscale(1);
        width: 100%;
    }
`;

export const BePremium = styled.section`
    width: 100%;
    background: #000;
`;

export const BePremiumContainer = styled.div`
    display: flex;
    justify-content: end;
    width: 100%;
`;

export const BePremiumContainerOffers = styled.div`
    display: flex;
    width: 95%;
    height: 55vh;
    background: rgb(153,0,255);
    background: linear-gradient(90deg, rgba(153,0,255,1) 27%, rgba(67,205,128,1) 100%, rgba(67,205,128,1) 100%);

    @media screen and (max-width: 1080px) {
        width: 100%;
        background: rgb(153,0,255);
        background: linear-gradient(124deg, rgba(153,0,255,1) 27%, rgba(67,205,128,1) 100%, rgba(67,205,128,1) 100%);
    }
`;

export const BePremiumContainerNumber = styled.h3`
    position: relative;
    font-family: 'Roboto', sans-serif;
    font-size: 98px;
    font-weight: 900;
    color: #000;

    &::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        display: block;
        width: 5px;
        height: 270px;
        background: #000;
    }
`;

export const Plans = styled.section`
    width: 100%;
    padding: 90px 0;
    background: #000;

    @media screen and (max-width: 1080px) {
        padding: 50px 0;
    }
`;

export const PlansContainer = styled.div`
    width: 100%;
`;

export const PlansContainerTitle = styled.h3`
    margin: 0;
    position: relative;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    color: #FFF;

    @media screen and (max-width: 1080px) {
        margin: 0 auto;
        width: 90%;
        font-size: 45px;
        line-height: 45px;
    }
    
    @media screen and (min-width: 1081px) {
        margin: 0 auto;
        width: 50%;
        font-size: 60px;
        line-height: 60px;
    }

    strong {
        &:nth-of-type(1) {
            color: #43CD80;
        }
    }

    strong {
        &:nth-of-type(2) {
            color: #222;
        }
    }
`;

export const PlansContainerSubTitle = styled.h4`
    margin: 30px auto 0;
    width: 57%;
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
    line-height: 30px;
    font-weight: 300;
    text-align: center;
    color: #FFF;

    @media screen and (max-width: 1080px) {
        width: 90%;
    }
`;

export const PlansContainerTablePrices = styled.div`
    margin: 120px auto 0;
    width: 70%;
    
    @media screen and (max-width: 1080px) {
        margin: 55px auto 0;
        width: 90%;
    }
`;

export const PlansContainerTablePricesItem = styled.div`
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 1080px) {
        flex-direction: column;
    }
    
    &:not(:last-of-type) {
        margin-bottom: 120px;

        @media screen and (max-width: 1080px) {
            margin-bottom: 85px;
        }
    }
`;

export const PlansContainerTablePricesItemAdvantages = styled.div`
    width: 40%;

    @media screen and (max-width: 1080px) {
        width: 100%;
    }
`;

export const PlansContainerTablePricesItemAdvantagesContent = styled.div`
    padding-top: 30px;
`;

export const PlansContainerTablePricesItemPlan = styled.button`
    padding: 6px 30px;
    background: #43CD80;
    border: none;
    outline: none;
    border-radius: 30px;
    color: #000;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    animation: pulse 1s infinite;
    cursor: pointer;
`;

export const PlansContainerTablePricesItemAdvantagesContentItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 20px;

    strong {
        font-weight: 300;
        color: #FFF;
    }

    svg {
        height: 20px;
        fill: #43CD80;
    }
`;

export const PlansContainerTablePricesItemConditions = styled.div`
    display: flex;
    align-items: center;
    gap: 70px;
    padding: 5px 40px;
    background: #111;
    border-radius: 10px;
    width: 60%;

    @media screen and (max-width: 1080px) {
        width: 100%;
        flex-direction: column;
        gap: 10px;
        padding: 5px 20px;
    }
`;

export const PlansContainerTablePricesItemConditionsName = styled.div`
    width: 70%;

    @media screen and (max-width: 1080px) {
        width: 100%;
    }

    h4 {
        margin: 0 0 20px;
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        font-weight: 600;
        color: #FFF;

        @media screen and (max-width: 1080px) {
            margin: 20px 0;
            text-align: center;
        }
    }

    span {
        padding: 5px 25px;
        border-radius: 30px;
        background: rgba(255, 255, 255, 0.2);
        color: #FFF;
    }

     p {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        line-height: 22px;
        color: #FFF;

        @media screen and (max-width: 1080px) {
            text-align: center;
        }
     }
`;

export const PlansContainerTablePricesItemConditionsPrice = styled.div`
    h4 {
        font-family: 'Roboto', sans-serif;
        font-size: 30px;
        font-weight: 600;
        color: #FFF;

        @media screen and (max-width: 1080px) {
            margin: 0 0 20px;
        }

        span {
            font-size: 14px;
            font-weight: 300;
        }
    }
`;

export const CreateAccount = styled.section`
    width: 100%;
    background: #000;
`;

export const CreateAccountContainer = styled.div`
    padding: 10px 0 180px;

    @media screen and (max-width: 680px) {
        padding: 10px 0 80px;
    }
`;

export const CreateAccountContainerTitle = styled.div`
    margin: 0 auto;
    width: 50%;

    @media screen and (max-width: 680px) {
        width: 90%;
    }

    h3 {
        font-family: 'Roboto', sans-serif;
        font-size: 60px;
        font-weight: 800;
        text-align: center;
        color: #FFF;

        strong {
            &:first-of-type {
                color: #222;
            }

            &:last-of-type {
                color: #43CD80;
            }
        }

        @media screen and (max-width: 680px) {
            font-size: 45px;
            line-height: 45px;
        }
    }
`;

export const CreateAccountContainerDescription = styled.div`
    margin: 0 auto;
    width: 40%;

    @media screen and (max-width: 680px) {
        width: 90%;
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        line-height: 30px;
        text-align: center;
        color: #FFF;
    }
`;

export const CreateAccountContainerButton = styled.button`
    margin: 32px auto 0;
    display: flex;
    justify-content: center;
    border-radius: 40px;
    border: none;
    width: 400px;
    padding: 24px 0;
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
    font-weight: 900;
    cursor: pointer;

    @media screen and (max-width: 680px) {
        width: 85%;
    }

    span {
        display: flex;
        align-items: center;
        gap: 10px;

        img {
            filter: brightness(0.1);
        }
    }
`;

export const Download = styled.section`
    width: 100%;
    background: #000;
`;

export const DownloadContainer = styled.section`
    width: 95%;
    padding: 30px 0 180px;
    background: #000;
`;

export const DownloadContainerTitle = styled.h4`
    margin: 0 auto;
    width: 70%;
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-weight: 600;
    text-align: center;
    color: #FFF;

    @media screen and (max-width: 680px) {
        width: 90%;
        font-size: 45px;
        line-height: 45px;
    }
    
    @media screen and (min-width: 1081px) {
        margin: 0 auto;
        width: 50%;
        font-size: 60px;
        line-height: 60px;
    }

    strong {
        &:nth-of-type(1) {
            color: #43CD80;
        }
    }

    strong {
        &:nth-of-type(2) {
            color: #222;
        }
    }
`;

export const DownloadContainerDescription = styled.p`
    margin: 30px auto 0;
    width: 60%;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 30px;
    font-weight: 300;
    text-align: center;
    color: #FFF;

    @media screen and (max-width: 1080px) {
        width: 90%;
    }
`;

export const DownloadContainerDevices = styled.div`
    margin: 40px auto 0;
    display: flex;
    justify-content: center;
`;

export const DownloadContainerDevicesList = styled.ul`
    margin: 40px 0 0 0;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 25px;
    list-style: none;

    @media screen and (max-width: 1080px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const DownloadContainerDevicesListItem = styled.li`
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 300;
    color: #FFF;

    @media screen and (max-width: 1080px) {
        text-align: center;
    }

    &::before {
        content: '';
        display: block;
        margin-right: 5px;
        width: 10px;
        height: 10px;
        background: #43CD80;
        border-radius: 50%;
    }
`;


export const SingersGallery = styled.section`
    width: 100%;
`;

export const SingersGalleryContainer = styled.div`
    display: flex;

    @media screen and (max-width: 1080px) {
        flex-direction: column;
    }
`;

export const SingersGalleryContainerItem = styled.div`
    position: relative;
    width: calc(100% / 2 - 20px);
    filter: brightness(0.25);
    overflow: hidden;
    
    &:hover {
        filter: brightness(.47);
    }

    @media screen and (max-width: 1080px) {
        width: 100%;
    }
`;

export const SingersGalleryContainerButton = styled.button`
    border: none;
    outline: none;
    padding: 0;
    cursor: pointer;
`;

export const SingersGalleryContainerItemImage = styled.div`
    img {
        width: 100%;
        height: 600px !important;
        object-fit: cover;
        animation: animateFocusGallery 5s linear infinite;
    }
`;
