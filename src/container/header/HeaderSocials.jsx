import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaInstagramSquare } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/aman-kumar-691169252/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
           <a href="https://github.com/AM-Tech0" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.instagram.com/aman__mehta___08/" target="_blank" rel="noreferrer" ><FaInstagramSquare /></a>
    </div>
  )
}

export default HeaderSocials