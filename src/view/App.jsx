import React, { useMemo } from 'react';
import Tokyo from '../videos/Tokyo.mp4';
import Paris from '../videos/Paris.mp4';
import Egypt from '../videos/Egypt.mp4';
import Maldives from '../videos/Maldives.mp4';

import './App.css';

function App() {
  const slides = useMemo(() => document.getElementsByTagName('video'), []);
  const slidesText = useMemo(
    () => document.getElementsByClassName('slideShowText'),
    []
  );

  var index = 0;

  function nextSlide() {
    slides[index].classList.remove('active');
    slidesText[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
    slidesText[index].classList.add('active');
  }

  function prevSlide() {
    slides[index].classList.remove('active');
    slidesText[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
    slidesText[index].classList.add('active');
  }

  function toggleMenu() {
    const menuIcon = document.querySelector('.menuIcon');
    const navbar = document.querySelector('#navbar');
    menuIcon.classList.toggle('active');
    navbar.classList.toggle('active');
  }

  return (
    <>
      <section>
        <div className="bannerVideo" id="slideShow">
          <video src={Tokyo} autoPlay muted loop className="active"></video>
          <video src={Paris} autoPlay muted loop></video>
          <video src={Egypt} autoPlay muted loop></video>
          <video src={Maldives} autoPlay muted loop></video>
        </div>
        <div className="container">
          {/* Header */}
          <header id="navbar">
            <a href="/#" className="logo">
              Travel DM
            </a>
            <ul>
              <li>
                <a href="/#" className="active">
                  Início
                </a>
              </li>
              <li>
                <a href="/#">Destino</a>
              </li>
              <li>
                <a href="/#">Sobre</a>
              </li>
              <li>
                <a href="/#">Contato</a>
              </li>
            </ul>
            <span className="menuIcon" onClick={toggleMenu}></span>
          </header>
          {/* Main */}
          <div className="content">
            <div className="bannerText" id="slideShowText">
              <div className="slideShowText active">
                <h2>Tokyo</h2>
                <p>
                  Pense em uma cidade grande, moderna, com prédios altos,
                  centenas de restaurantes, letreiros enormes piscando, muitos
                  shoppings, transporte eficiente e milhares de pessoas andando
                  nas ruas… agora dobre isso tudo: Tokyo é mais ou menos assim e
                  mais um pouco! Uma cidade que tinha tudo para ser caótica, mas
                  que é muito organizada, limpa e que tem uma população super
                  educada.
                </p>
              </div>
              <div className="slideShowText">
                <h2>Paris</h2>
                <p>
                  Conhecida como Cidade Luz, Paris é uma cidade importante na
                  história do mundo. Já foi considerada a mais importante cidade
                  de todo o mundo ocidental. No século XVII, era a capital da
                  maior potência política europeia; no século XVIII, era o
                  centro cultural da Europa e, no século XIX, era a capital da
                  arte e do lazer, o berço da Belle Époque.
                </p>
              </div>
              <div className="slideShowText">
                <h2>Egito</h2>
                <p>
                  O Egito é considerado berço de uma das mais importantes
                  civilizações da Antiguidade, e possui uma das histórias mais
                  longas do mundo. Dinastias de Faraós ergueram construções
                  grandiosas, como as pirâmides de Quéops, Quéfren e Miquerinos,
                  consideradas patrimônios da humanidade pela Organização das
                  Nações Unidas para a Educação, a Ciência e a Cultura (Unesco).
                </p>
              </div>
              <div className="slideShowText">
                <h2>Maldivas</h2>
                <p>
                  Maldivas! Poucos destinos despertam tantos suspiros quanto o
                  arquipélago de 1.190 ilhas ao Sul da Ásia. As Maldivas são o
                  lugar perfeito para férias paradisíacas, com praias desertas,
                  águas cristalinas, resorts de luxo e bangalôs sobre o mar. Mas
                  na hora de planejar uma viagem para as Maldivas, pequenos
                  detalhes podem passar despercebidos e afetar sua experiência.
                </p>
              </div>
            </div>
          </div>
          {/* rede social */}
          <ul className="sci">
            <li>
              <a href="/#">
                <img src="/images/facebook.png" alt="facebook" />
              </a>
            </li>
            <li>
              <a href="/#">
                <img src="/images/instagram.png" alt="instagram" />
              </a>
            </li>
            <li>
              <a href="/#">
                <img src="/images/twitter.png" alt="twitter" />
              </a>
            </li>
          </ul>
          <div className="footer">
            Feito com{' '}
            <span
              role="img"
              aria-label="coração"
              className="footer-emoji-heart"
            >
              ❤
            </span>{' '}
            por{' '}
            <a href="http://diogomiranda.dev.br/" target="__blank">
              Diogo Miranda
            </a>
            <br />
          </div>
          {/* controles slider */}
          <ul className="controls">
            <li>
              <a onClick={prevSlide} href="/#">
                <img src="/images/left.png" height="30" width="30" alt="left" />
              </a>
            </li>
            <li>
              <a onClick={nextSlide} href="/#">
                <img
                  src="/images/right.png"
                  height="30"
                  width="30"
                  alt="right"
                />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
