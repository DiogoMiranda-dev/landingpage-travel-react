import React, { useMemo } from 'react';
import Tokyo from '../videos/Tokyo.mp4';
import RioDeJaneiro from '../videos/RioDeJaneiro.mp4';
import Egypt from '../videos/Egypt.mp4';
import Maldives from '../videos/Maldives.mp4';

import './App.css';

function App() {
  /*  const slideShow = document.getElementById('slideShow');
  console.log(slideShow);
  const slides = slideShow.getElementsByTagName('video'); */

  const slideShow = useMemo(() => document.getElementById('slideShow'), []);
  const slides = useMemo(() => document.getElementsByTagName('video'), []);
  var index = 0;

  function nextSlide() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }

  function prevSlide() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
  }

  function toggleMenu() {
    const menuIcon = document.querySelector('.menuIcon');
    const navbar = document.querySelector('#navbar');
    menuIcon.classList.toggle('active');
    navbar.classList.toggle('active');
  }

  return (
    <section>
      <div className="bannerVideo" id="slideShow">
        <video src={Tokyo} autoPlay muted loop className="active"></video>
        <video src={RioDeJaneiro} autoPlay muted loop></video>
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
                Home
              </a>
            </li>
            <li>
              <a href="/#">Destination</a>
            </li>
            <li>
              <a href="/#">About</a>
            </li>
            <li>
              <a href="/#">Contact</a>
            </li>
          </ul>
          <span className="menuIcon" onClick={toggleMenu}></span>
        </header>
        {/* Main */}
        <div className="content">
          <div className="bannerText" id="slideShowText">
            <div className="active">
              <h2>Tokyo</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Inventore ad natus iusto sunt quis. Porro, omnis autem similique
                quod, incidunt dicta repudiandae ut esse mollitia cupiditate rem
                iusto fugiat ipsam.
              </p>
            </div>
            <div>
              <h2>Paris</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Inventore ad natus iusto sunt quis. Porro, omnis autem similique
                quod, incidunt dicta repudiandae ut esse mollitia cupiditate rem
                iusto fugiat ipsam.
              </p>
            </div>
            <div>
              <h2>Egypt</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Inventore ad natus iusto sunt quis. Porro, omnis autem similique
                quod, incidunt dicta repudiandae ut esse mollitia cupiditate rem
                iusto fugiat ipsam.
              </p>
            </div>
            <div>
              <h2>Maldives</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Inventore ad natus iusto sunt quis. Porro, omnis autem similique
                quod, incidunt dicta repudiandae ut esse mollitia cupiditate rem
                iusto fugiat ipsam.
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
        {/* controles slider */}
        <ul className="controls">
          <li onclick={prevSlide}>
            <img src="/images/left.png" alt="left" />
          </li>
          <li onclick={nextSlide}>
            <img src="/images/right.png" alt="right" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default App;
