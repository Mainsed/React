import React from 'react';
import './App.scss';
import Twitter from '../src/Pictures/Twitter.png';
import VK from '../src/Pictures/Vk.png';
import Facebook from '../src/Pictures/FB.png';


function Header() {
  return (
      <div id="UpperBox">
        <div id="Upper_Logo">
          <p id="YouLogo" className="inline_block">YouLogo</p>
          <div id="Socials" className="inline_block">
            <a href="#"><img src={Twitter} alt="Twitter"/></a>
            <a href="#"><img src={VK} alt="Vk"/></a>
            <a href="#"><img src={Facebook} alt="Facebook"/></a>
          </div>
        </div>

        <div id="Upper_Text">
          <p id="MidText">САМОЕ ЛУЧШЕЕ ПРЕДЛОЖЕНИЕ, ИЗ ВСЕХ КОТОРЫЕ ВЫ ПОЛУЧАЛИ</p>
        </div>

        <div id="Upper_Details">
          <a href="#">ПОДРОБНЕЕ</a>
          <div id="Upper_White_Box"></div>
        </div>
      </div>
  );
}

export default Header;
