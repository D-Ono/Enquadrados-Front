import React from 'react';

import { FooterContainer } from './style';
import { FaFacebook, FaInstagramSquare, FaTwitterSquare, FaYoutube } from "react-icons/fa";

function Footer() {
  return(
    <FooterContainer>
      <FaFacebook className="icon"></FaFacebook>
      <FaInstagramSquare className="icon"></FaInstagramSquare>
      <FaTwitterSquare className="icon"></FaTwitterSquare>
      <FaYoutube className="icon"></FaYoutube>
    </FooterContainer>
  );
}

export default Footer;