import React from 'react';

function Footer({ loggedIn }) {

  return (
    <footer className= {loggedIn ? 'footer' : 'footer_invisible'}>
      <p className='footer__text'>© {new Date().getFullYear()} Mesto Russia</p>
    </footer>
  );
}

export default Footer;
