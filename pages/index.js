import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getProviders, signIn } from 'next-auth/react';
import { scroller } from 'react-scroll';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LinkIcon, PlayIcon, PauseIcon, CheckIcon } from '@heroicons/react/solid';
import ImageHero from '/public/images/background.jpg';
import ImageSpotify from '/public/vectors/spotify-logo.svg';
import ImageAllDevices from '/public/vectors/all-devices.svg';
import ImageFiftyCent from '/public/images/album-artist01.jpg';
import imageBillieEilish from '/public/images/album-artist02.jpg';
import ImageEminem from '/public/images/album-artist03.jpg';

import * as S from '../pageStyles/Index';

const Home = ({ providers }) => {
  const audioPlayerFirst = useRef(null);
  const audioPlayerSecond = useRef();
  const audioPlayerThird = useRef();
  const [isPlayingFirstAudio, setIsPlayingFirstAudio] = useState(false);
  const [isPlayingSecondAudio, setIsPlayingSecondAudio] = useState(false);
  const [isPlayingThirdAudio, setIsPlayingThirdAudio] = useState(false);

  const scrollToIntroductionSection = () => {
    scroller.scrollTo('introductionSection', {
      duration: 1200,
      delay: 0,
      smooth: 'smooth',
    });
  };

  const scrollToPlansSection = () => {
    scroller.scrollTo('plansSection', {
      duration: 1200,
      delay: 0,
      smooth: 'smooth',
    });
  };

  const scrollToDownloadSection = () => {
    scroller.scrollTo('downloadSection', {
      duration: 1200,
      delay: 0,
      smooth: 'smooth',
    });
  };

  const scrollToCreateAccountSection = () => {
    scroller.scrollTo('createAccountSection', {
      duration: 1200,
      delay: 0,
      smooth: 'smooth',
    });
  };

  const playFirstAudio = () => {
    audioPlayerFirst?.current?.play();
    setIsPlayingFirstAudio(true);
  };


  const pauseFirstAudio = () => {
    audioPlayerFirst.current.pause();
    setIsPlayingFirstAudio(false);
  };
  
  const playSecondAudio = () => {
    audioPlayerSecond.current.play();
    setIsPlayingSecondAudio(true);
  };

  const pauseSecondAudio = () => {
    audioPlayerSecond.current.pause();
    setIsPlayingSecondAudio(false);
  };

  const playThirdAudio = () => {
    audioPlayerThird.current.play();
    setIsPlayingThirdAudio(true);
  };

  const pauseThirdAudio = () => {
    audioPlayerThird.current.pause();
    setIsPlayingThirdAudio(false);
  };

  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2800,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <main>
        <S.Hero>
          <S.HeroContainer>
            <Image
              src={ImageHero}
              width={0}
              height={0}
              alt='Spotify'
              layout='responsive'
              objectFit='cover'
            />
          </S.HeroContainer>
          <S.HeroEffect />
          <S.HeroBgBlack onClick={scrollToIntroductionSection} />
        </S.Hero>
        <S.Intro>
          <S.IntroContainer className='introductionSection'>
            <S.IntroContainerHeader>
              <S.IntroContainerHeaderLogo>
                <Image
                  src={ImageSpotify}
                  width={100}
                  height={100}
                  alt='Spotify'
                />
              </S.IntroContainerHeaderLogo>
              <S.IntroContainerHeaderList>
                <ul>
                  <li
                    title='Planos'
                    onClick={scrollToPlansSection}
                  >
                    Planos
                  </li>
                  <li
                    title='Cadastre-se no Spotify'
                    onClick={scrollToCreateAccountSection}
                  >
                    Cadastre-se
                  </li>
                  <li
                    title='Faça download do Spotify'
                    onClick={scrollToDownloadSection}
                  >
                    Baixe o Spotify
                  </li>
                  <li
                    title='Compartilhar o Spotify'
                  >
                    <LinkIcon />
                  </li>
                </ul>
              </S.IntroContainerHeaderList>
            </S.IntroContainerHeader>
            <S.IntroArticleContainer>
              <S.IntroArticlePanel>
                <S.IntroArticlePanelContainer>
                  <S.IntroArticlePanelItem />
                  <S.IntroArticlePanelItem />
                  <S.IntroArticlePanelItem />
                  <S.IntroArticlePanelItem />
                  <S.IntroArticlePanelItem />
                  <S.IntroArticlePanelItem />
                </S.IntroArticlePanelContainer>
                <S.IntroArticlePanelContainer>
                  <S.IntroArticlePanelItem />
                  <S.IntroArticlePanelItem />
                  <S.IntroArticlePanelItem />
                  <S.IntroArticlePanelItem />
                  <S.IntroArticlePanelItem />
                  <S.IntroArticlePanelItem />
                </S.IntroArticlePanelContainer>
                <S.IntroArticlePanelContainer>
                  <S.IntroArticlePanelItem />
                  <S.IntroArticlePanelItem />
                  <S.IntroArticlePanelItem />
                  <S.IntroArticlePanelItem />
                  <S.IntroArticlePanelItem />
                  <S.IntroArticlePanelItem />
                </S.IntroArticlePanelContainer>
                <S.IntroArticlePanelContainer>
                  <S.IntroArticlePanelItem />
                  <S.IntroArticlePanelItem />
                  <S.IntroArticlePanelItem />
                  <S.IntroArticlePanelItem />
                  <S.IntroArticlePanelItem />
                  <S.IntroArticlePanelItem />
                </S.IntroArticlePanelContainer>
                <S.IntroArticlePanelContainer>
                  <S.IntroArticlePanelItem />
                  <S.IntroArticlePanelItem />
                  <S.IntroArticlePanelItem />
                  <S.IntroArticlePanelItem />
                  <S.IntroArticlePanelItem />
                  <S.IntroArticlePanelItem />
                </S.IntroArticlePanelContainer>
                <S.IntroArticlePanelContainer>
                  <S.IntroArticlePanelItem />
                  <S.IntroArticlePanelItem />
                  <S.IntroArticlePanelItem />
                  <S.IntroArticlePanelItem />
                  <S.IntroArticlePanelItem />
                  <S.IntroArticlePanelItem />
                </S.IntroArticlePanelContainer>
              </S.IntroArticlePanel>
              <S.IntroArticleContainerText>
                <S.IntroArticleContainerTitle>Descubra novos</S.IntroArticleContainerTitle>
                <S.IntroArticleContainerTitle>artistas e <strong>músicas</strong></S.IntroArticleContainerTitle>
                <S.IntroArticleContainerTitle>quando <strong>quiser.</strong></S.IntroArticleContainerTitle>
                <S.IntroArticleContainerDescription>
                  Ouça seus artistas favoritos, conheça e teste novos gêneros musicais, crie sua playlist para ouvir quando e onde quiser,  compartilhe com seus amigos as músicas que você ouve em tempo real ou ouça os mais derivados podcasts.
                </S.IntroArticleContainerDescription>
                {Object.values(providers).map((provider) => (
                  <S.IntroArticleContainerButton
                    key={provider.name}
                    onClick={() => signIn(provider.id, {
                      callbackUrl: '/app'}
                    )}
                  >
                    <Image
                      src={ImageSpotify}
                      width={22}
                      height={22}
                      alt='Spotify'
                    />
                    <strong>Conecte-se ao {provider.name}</strong>
                  </S.IntroArticleContainerButton>
                ))}
              </S.IntroArticleContainerText>
              <S.IntroArticleContainerCarousel>
                <Slider {...settings}>
                  <S.IntroArticleContainerCarouselItem>
                    <S.IntroArticleContainerCarouselItemImage>
                      <Image
                        src={ImageFiftyCent}
                        width='0'
                        height='0'
                        layout='responsive'
                        alt='50cent'
                      />
                    </S.IntroArticleContainerCarouselItemImage>
                    <S.IntroArticleContainerCarouselItemWrapper>
                      <audio
                        src={require('../public/audio/artistmusic01.mp3')}
                        ref={audioPlayerFirst}
                      />
                      <S.IntroArticleContainerCarouselItemButton
                        onClick={
                          isPlayingFirstAudio === false
                            ? playFirstAudio
                            : pauseFirstAudio
                        }
                      >
                        {isPlayingFirstAudio === false ? <PlayIcon /> : <PauseIcon /> }
                      </S.IntroArticleContainerCarouselItemButton>
                    </S.IntroArticleContainerCarouselItemWrapper>
                  </S.IntroArticleContainerCarouselItem>

                  <S.IntroArticleContainerCarouselItem>
                    <S.IntroArticleContainerCarouselItemImage>
                      <Image
                        src={imageBillieEilish}
                        width='0'
                        height='0'
                        layout='responsive'
                        alt='Billie Eilish'
                      />
                    </S.IntroArticleContainerCarouselItemImage>
                    <S.IntroArticleContainerCarouselItemWrapper>
                      <audio
                        src={require('../public/audio/artistmusic02.mp3')}
                        ref={audioPlayerSecond}
                      />
                      <S.IntroArticleContainerCarouselItemButton
                        onClick={
                          isPlayingSecondAudio === false
                            ? playSecondAudio
                            : pauseSecondAudio
                        }
                      >
                        {isPlayingSecondAudio === false ? <PlayIcon /> : <PauseIcon /> }
                      </S.IntroArticleContainerCarouselItemButton>
                    </S.IntroArticleContainerCarouselItemWrapper>
                  </S.IntroArticleContainerCarouselItem>
                  <S.IntroArticleContainerCarouselItem>
                    <S.IntroArticleContainerCarouselItemImage>
                      <Image
                        src={ImageEminem}
                        width='0'
                        height='0'
                        layout='responsive'
                        alt='Eminem'
                      />
                    </S.IntroArticleContainerCarouselItemImage>
                    <S.IntroArticleContainerCarouselItemWrapper>
                      <audio
                        src={require('../public/audio/artistmusic03.mp3')}
                        ref={audioPlayerThird}
                      />
                      <S.IntroArticleContainerCarouselItemButton
                        onClick={
                          isPlayingThirdAudio === false
                            ? playThirdAudio
                            : pauseThirdAudio
                        }
                      >
                        {isPlayingThirdAudio === false ? <PlayIcon /> : <PauseIcon /> }
                      </S.IntroArticleContainerCarouselItemButton>
                    </S.IntroArticleContainerCarouselItemWrapper>
                  </S.IntroArticleContainerCarouselItem>
                  <S.IntroArticleContainerCarouselItem>
                    <S.IntroArticleContainerCarouselItemImage>
                      <Image
                        src={ImageFiftyCent}
                        width='0'
                        height='0'
                        layout='responsive'
                        alt='50cent'
                      />
                    </S.IntroArticleContainerCarouselItemImage>
                    <S.IntroArticleContainerCarouselItemWrapper>
                      <audio
                        src={require('../public/audio/artistmusic01.mp3')}
                        ref={audioPlayerFirst}
                      />
                      <S.IntroArticleContainerCarouselItemButton
                        onClick={
                          isPlayingFirstAudio === false
                            ? playFirstAudio
                            : pauseFirstAudio
                        }
                      >
                        {isPlayingFirstAudio === false ? <PlayIcon /> : <PauseIcon /> }
                      </S.IntroArticleContainerCarouselItemButton>
                    </S.IntroArticleContainerCarouselItemWrapper>
                  </S.IntroArticleContainerCarouselItem>

                  <S.IntroArticleContainerCarouselItem>
                    <S.IntroArticleContainerCarouselItemImage>
                      <Image
                        src={imageBillieEilish}
                        width='0'
                        height='0'
                        layout='responsive'
                        alt='Billie Eilish'
                      />
                    </S.IntroArticleContainerCarouselItemImage>
                    <S.IntroArticleContainerCarouselItemWrapper>
                      <audio
                        src={require('../public/audio/artistmusic02.mp3')}
                        ref={audioPlayerSecond}
                      />
                      <S.IntroArticleContainerCarouselItemButton
                        onClick={
                          isPlayingSecondAudio === false
                            ? playSecondAudio
                            : pauseSecondAudio
                        }
                      >
                        {isPlayingSecondAudio === false ? <PlayIcon /> : <PauseIcon /> }
                      </S.IntroArticleContainerCarouselItemButton>
                    </S.IntroArticleContainerCarouselItemWrapper>
                  </S.IntroArticleContainerCarouselItem>
                  <S.IntroArticleContainerCarouselItem>
                    <S.IntroArticleContainerCarouselItemImage>
                      <Image
                        src={ImageEminem}
                        width='0'
                        height='0'
                        layout='responsive'
                        alt='Eminem'
                      />
                    </S.IntroArticleContainerCarouselItemImage>
                    <S.IntroArticleContainerCarouselItemWrapper>
                      <audio
                        src={require('../public/audio/artistmusic03.mp3')}
                        ref={audioPlayerThird}
                      />
                      <S.IntroArticleContainerCarouselItemButton
                        onClick={
                          isPlayingThirdAudio === false
                            ? playThirdAudio
                            : pauseThirdAudio
                        }
                      >
                        {isPlayingThirdAudio === false ? <PlayIcon /> : <PauseIcon /> }
                      </S.IntroArticleContainerCarouselItemButton>
                    </S.IntroArticleContainerCarouselItemWrapper>
                  </S.IntroArticleContainerCarouselItem>
                </Slider>
              </S.IntroArticleContainerCarousel>
            </S.IntroArticleContainer>
          </S.IntroContainer>
        </S.Intro>
        <S.BePremium>
          <S.BePremiumContainer>
            <S.BePremiumContainerOffers />
          </S.BePremiumContainer>
        </S.BePremium>
        <S.Plans className='plansSection'>
          <S.PlansContainer>
            <S.PlansContainerTitle>
              Experimente o Spotify Premium por <strong>1 mês gratuitamente.</strong>
            </S.PlansContainerTitle>
            <S.PlansContainerSubTitle>
              Já pensou em ter o controle das suas músicas e poder escutá-las sem ser interrompido? Com o Premium você 
              escuta suas músicas sem propaganda e até sem internet, escute offline e sem limites. Tenha acesso a mais de 
              82 milhões de faixas, 3.6 milhões de títulos de podcasts e compartilhe o que você ouve com os seus amigos. 
            </S.PlansContainerSubTitle>
            <S.PlansContainerTablePrices>
            <S.PlansContainerTablePricesItem>
              <S.PlansContainerTablePricesItemAdvantages>
                <S.PlansContainerTablePricesItemPlan>Gratuito</S.PlansContainerTablePricesItemPlan>
                <S.PlansContainerTablePricesItemAdvantagesContent>
                  <S.PlansContainerTablePricesItemAdvantagesContentItem>
                    <CheckIcon />
                    <strong>Pausa de anúncios a cada 30 minutos.</strong>
                  </S.PlansContainerTablePricesItemAdvantagesContentItem>
                  <S.PlansContainerTablePricesItemAdvantagesContentItem>
                    <CheckIcon />
                    <strong>Limite para criação de playlists.</strong>
                  </S.PlansContainerTablePricesItemAdvantagesContentItem>
                  <S.PlansContainerTablePricesItemAdvantagesContentItem>
                    <CheckIcon />
                    <strong>Necessidade de internet para ouvir faixas.</strong>
                  </S.PlansContainerTablePricesItemAdvantagesContentItem>
                </S.PlansContainerTablePricesItemAdvantagesContent>
              </S.PlansContainerTablePricesItemAdvantages>
              <S.PlansContainerTablePricesItemConditions>
                <S.PlansContainerTablePricesItemConditionsName>
                  <h4>Plano Gratuito</h4>
                  <p>Plano gratuíto e individual que te dá acesso a todo o catálogo de músicas.</p>
                </S.PlansContainerTablePricesItemConditionsName>
                <S.PlansContainerTablePricesItemConditionsPrice>
                  <h4>0.00 <span>/ vitalício</span></h4>
                </S.PlansContainerTablePricesItemConditionsPrice>
              </S.PlansContainerTablePricesItemConditions>
            </S.PlansContainerTablePricesItem>
            <S.PlansContainerTablePricesItem>
              <S.PlansContainerTablePricesItemAdvantages>
                <S.PlansContainerTablePricesItemPlan>Estudante</S.PlansContainerTablePricesItemPlan>
                <S.PlansContainerTablePricesItemAdvantagesContent>
                  <S.PlansContainerTablePricesItemAdvantagesContentItem>
                    <CheckIcon />
                    <strong>Ouça músicas offline.</strong>
                  </S.PlansContainerTablePricesItemAdvantagesContentItem>
                  <S.PlansContainerTablePricesItemAdvantagesContentItem>
                    <CheckIcon />
                    <strong>Sem anúncios ou interrupções.</strong>
                  </S.PlansContainerTablePricesItemAdvantagesContentItem>
                  <S.PlansContainerTablePricesItemAdvantagesContentItem>
                    <CheckIcon />
                    <strong>O Spotify paga metade da sua mensalidade.</strong>
                  </S.PlansContainerTablePricesItemAdvantagesContentItem>
                </S.PlansContainerTablePricesItemAdvantagesContent>
              </S.PlansContainerTablePricesItemAdvantages>
              <S.PlansContainerTablePricesItemConditions>
                <S.PlansContainerTablePricesItemConditionsName>
                  <h4>Plano Estudante</h4>
                  <p>Plano com 50% de desconto que te dá acesso a todo o catálogo de músicas.</p>
                </S.PlansContainerTablePricesItemConditionsName>
                <S.PlansContainerTablePricesItemConditionsPrice>
                  <h4>4.99 <span>/ mensal</span></h4>
                </S.PlansContainerTablePricesItemConditionsPrice>
              </S.PlansContainerTablePricesItemConditions>
            </S.PlansContainerTablePricesItem>
            <S.PlansContainerTablePricesItem>
              <S.PlansContainerTablePricesItemAdvantages>
                <S.PlansContainerTablePricesItemPlan>Individual</S.PlansContainerTablePricesItemPlan>
                <S.PlansContainerTablePricesItemAdvantagesContent>
                  <S.PlansContainerTablePricesItemAdvantagesContentItem>
                    <CheckIcon />
                    <strong>Ouça músicas offline.</strong>
                  </S.PlansContainerTablePricesItemAdvantagesContentItem>
                  <S.PlansContainerTablePricesItemAdvantagesContentItem>
                    <CheckIcon />
                    <strong>Sem anúncios ou interrupções.</strong>
                  </S.PlansContainerTablePricesItemAdvantagesContentItem>
                  <S.PlansContainerTablePricesItemAdvantagesContentItem>
                    <CheckIcon />
                    <strong>Acesso à todo o catálogo.</strong>
                  </S.PlansContainerTablePricesItemAdvantagesContentItem>
                </S.PlansContainerTablePricesItemAdvantagesContent>
              </S.PlansContainerTablePricesItemAdvantages>
              <S.PlansContainerTablePricesItemConditions>
                <S.PlansContainerTablePricesItemConditionsName>
                  <h4>Plano Individual</h4>
                  <p>Plano premium para uma pessoas que te dá acesso a todo o catálogo de músicas.</p>
                </S.PlansContainerTablePricesItemConditionsName>
                <S.PlansContainerTablePricesItemConditionsPrice>
                  <h4>9.99 <span>/ mensal</span></h4>
                </S.PlansContainerTablePricesItemConditionsPrice>
              </S.PlansContainerTablePricesItemConditions>
            </S.PlansContainerTablePricesItem>
            <S.PlansContainerTablePricesItem>
              <S.PlansContainerTablePricesItemAdvantages>
                <S.PlansContainerTablePricesItemPlan>Duo</S.PlansContainerTablePricesItemPlan>
                <S.PlansContainerTablePricesItemAdvantagesContent>
                  <S.PlansContainerTablePricesItemAdvantagesContentItem>
                    <CheckIcon />
                    <strong>Ouça músicas offline.</strong>
                  </S.PlansContainerTablePricesItemAdvantagesContentItem>
                  <S.PlansContainerTablePricesItemAdvantagesContentItem>
                    <CheckIcon />
                    <strong>Sem anúncios ou interrupções.</strong>
                  </S.PlansContainerTablePricesItemAdvantagesContentItem>
                  <S.PlansContainerTablePricesItemAdvantagesContentItem>
                    <CheckIcon />
                    <strong>2 contas Premium para você e sua namorada(o).</strong>
                  </S.PlansContainerTablePricesItemAdvantagesContentItem>
                </S.PlansContainerTablePricesItemAdvantagesContent>
              </S.PlansContainerTablePricesItemAdvantages>
              <S.PlansContainerTablePricesItemConditions>
                <S.PlansContainerTablePricesItemConditionsName>
                  <h4>Plano Duo</h4>
                  <p>Plano premium para duas pessoas que te dá acesso a todo o catálogo de músicas.</p>
                </S.PlansContainerTablePricesItemConditionsName>
                <S.PlansContainerTablePricesItemConditionsPrice>
                  <h4>29.90 <span>/ mensal</span></h4>
                </S.PlansContainerTablePricesItemConditionsPrice>
              </S.PlansContainerTablePricesItemConditions>
            </S.PlansContainerTablePricesItem>
            <S.PlansContainerTablePricesItem>
              <S.PlansContainerTablePricesItemAdvantages>
                <S.PlansContainerTablePricesItemPlan>Família</S.PlansContainerTablePricesItemPlan>
                <S.PlansContainerTablePricesItemAdvantagesContent>
                  <S.PlansContainerTablePricesItemAdvantagesContentItem>
                    <CheckIcon />
                    <strong>Ouça músicas offline.</strong>
                  </S.PlansContainerTablePricesItemAdvantagesContentItem>
                  <S.PlansContainerTablePricesItemAdvantagesContentItem>
                    <CheckIcon />
                    <strong>Sem anúncios ou interrupções.</strong>
                  </S.PlansContainerTablePricesItemAdvantagesContentItem>
                  <S.PlansContainerTablePricesItemAdvantagesContentItem>
                    <CheckIcon />
                    <strong>6 contas Premium para você e sua família.</strong>
                  </S.PlansContainerTablePricesItemAdvantagesContentItem>
                </S.PlansContainerTablePricesItemAdvantagesContent>
              </S.PlansContainerTablePricesItemAdvantages>
              <S.PlansContainerTablePricesItemConditions>
                <S.PlansContainerTablePricesItemConditionsName>
                  <h4>Plano Família</h4>
                  <p>Plano família com acesso para até 6 pessoas e bloqueio de conteúdo explícito.</p>
                </S.PlansContainerTablePricesItemConditionsName>
                <S.PlansContainerTablePricesItemConditionsPrice>
                  <h4>49.90 <span>/ mensal</span></h4>
                </S.PlansContainerTablePricesItemConditionsPrice>
              </S.PlansContainerTablePricesItemConditions>
            </S.PlansContainerTablePricesItem>
            </S.PlansContainerTablePrices>
          </S.PlansContainer>
        </S.Plans>
        <S.CreateAccount className='createAccountSection'>
          <S.CreateAccountContainer>
          <S.CreateAccountContainerTitle>
            <h3>Hey, você ainda <strong>não possui uma conta Spotify?</strong> <strong>Crie uma agora mesmo.</strong></h3>
          </S.CreateAccountContainerTitle>
          <S.CreateAccountContainerDescription>
            <p>Crie sua conta e em menos de 5 minutos tenha acesso à músicas e podcasts de alta qualidade que te acompanharão aonde você estiver. Crie suas playlists e ouça em casa, na rua ou no trabalho, compartilhe seu bom-gosto musical com seus amigos.</p>
          </S.CreateAccountContainerDescription>
          <S.CreateAccountContainerButton>
            <Link href='https://www.spotify.com/br/signup' passHref>
              <span>
                <Image
                  src={ImageSpotify}
                  width={22}
                  height={22}
                  alt='Spotify'
                />
                Crie sua conta Spotify
              </span>
            </Link>
          </S.CreateAccountContainerButton>
          </S.CreateAccountContainer>
        </S.CreateAccount>
        <S.Download className='downloadSection'>
          <S.DownloadContainer>
            <S.DownloadContainerTitle>
              Baixe o Spotify, é <strong>de graça</strong> e <strong>sempre será.</strong>
            </S.DownloadContainerTitle>
            <S.DownloadContainerDescription>
              Escute mais de 82.000.000 milhões de faixas de músicas, mais de 3,6.000.000 milhões de títulos de podcasts, ouça suas faixas offline sem necessidade nenhuma de internet e sem a interrupção incômoda de diversos anúncios. Com uma conta você tem acesso a tudo isso através de diversos tipos de dispositivos como, por exemplo:
            </S.DownloadContainerDescription>
            <S.DownloadContainerDevices>
              <Image
                src={ImageAllDevices}
                width={800}
                height={200}
                alt='Dispositivos'
              />
            </S.DownloadContainerDevices>
            <S.DownloadContainerDevicesList>
              <S.DownloadContainerDevicesListItem>
                <Link href='https://spotify.link/T1vKH6Kr9ib?label=sp_cid%3A773fe976-ed48-4ca6-9ada-1ac42a8d65d8'>
                  Celular    
                </Link>
              </S.DownloadContainerDevicesListItem>
              <S.DownloadContainerDevicesListItem>
                <Link href='https://spotify.link/T1vKH6Kr9ib?label=sp_cid%3A773fe976-ed48-4ca6-9ada-1ac42a8d65d8'>
                  Tablet
                </Link>
              </S.DownloadContainerDevicesListItem>
              <S.DownloadContainerDevicesListItem>
                <Link href='https://www.microsoft.com/store/p/spotify-music/9ncbcszsjrsb?cid=spotifyweb-windows10-store-direct'>
                  Computador
                </Link>
              </S.DownloadContainerDevicesListItem>
              <S.DownloadContainerDevicesListItem>
                <Link href='https://spotify-everywhere.com/pages/gaming'>
                  PlayStation
                </Link>
              </S.DownloadContainerDevicesListItem>
              <S.DownloadContainerDevicesListItem>
                <Link href='https://spotify-everywhere.com/pages/gaming'>
                  XBOX
                </Link>
              </S.DownloadContainerDevicesListItem>
              <S.DownloadContainerDevicesListItem>
                <Link href='https://spotify-everywhere.com/collections/tv'>
                  TV
                </Link>
              </S.DownloadContainerDevicesListItem>
              <S.DownloadContainerDevicesListItem>
                <Link href='https://open.spotify.com'>
                  Web Player
                </Link>
              </S.DownloadContainerDevicesListItem>
              <S.DownloadContainerDevicesListItem>
                <Link href='https://spotify-everywhere.com/collections/car-audio'>
                  Carro
                </Link>
              </S.DownloadContainerDevicesListItem>
            </S.DownloadContainerDevicesList>
          </S.DownloadContainer>
        </S.Download>
        <S.SingersGallery className='singersSection'>
          <S.SingersGalleryContainer>
            <S.SingersGalleryContainerItem>
              <S.SingersGalleryContainerButton
                onClick={
                  isPlayingFirstAudio === false
                    ? playFirstAudio
                    : pauseFirstAudio
                }
              >
                <S.SingersGalleryContainerItemImage>
                  <Image
                    src={ImageFiftyCent}
                    width={0}
                    height={600}
                    alt='50cent'
                  />
                </S.SingersGalleryContainerItemImage>
              </S.SingersGalleryContainerButton>
            </S.SingersGalleryContainerItem>
            <S.SingersGalleryContainerItem>
              <S.SingersGalleryContainerButton
                onClick={
                  isPlayingSecondAudio === false
                    ? playSecondAudio
                    : pauseSecondAudio
                }
              >
                <S.SingersGalleryContainerItemImage>
                  <Image
                    src={imageBillieEilish}
                    width={0}
                    height={600}
                    alt='Billie Eilish'
                  />
                </S.SingersGalleryContainerItemImage>
              </S.SingersGalleryContainerButton>
            </S.SingersGalleryContainerItem>
            <S.SingersGalleryContainerItem>
              <S.SingersGalleryContainerButton
                onClick={
                  isPlayingThirdAudio === false
                  ? playThirdAudio
                  : pauseThirdAudio
                }
              >
              <S.SingersGalleryContainerItemImage>
                <Image
                  src={ImageEminem}
                  width={0}
                  height={0}
                  alt='Eminem'
                />
              </S.SingersGalleryContainerItemImage>
            </S.SingersGalleryContainerButton>
            </S.SingersGalleryContainerItem>
          </S.SingersGalleryContainer>
        </S.SingersGallery>
      </main>
    </>
  );
}

export default Home;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
