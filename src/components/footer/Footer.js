import React, { useState } from "react";

import "./footer.css";

const Footer = () => {


  return (
    <footer>
      <div className={'title'}>© 2023 Tuco</div>
      <hr className="separator" />
      <div className={'subtitle'}>{'Hand Crafted by '}
           <a href={'https://github.com/sydhrs'}  target="_blank" rel="noopener noreferrer">
               Syed Haris
           </a>
      </div>
    </footer>
  );
}


export default Footer;