import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      Feito com{' '}
      <span role="img" aria-label="coração" className="footer-emoji-heart">
        ❤
      </span>{' '}
      por{' '}
      <a href="http://diogomiranda.dev.br/" target="__blank">
        Diogo Miranda
      </a>
      <br />
    </footer>
  );
}