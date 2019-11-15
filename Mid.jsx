import React from 'react';
import './App.scss';
import Lapa from '../src/Pictures/Lapa.png';
import Telegram from '../src/Pictures/Telegram.png';
import Case from '../src/Pictures/Case.png';


function Mid() {
  return (
      <div id="Mid_Box">
        <div id="Up_Mid">

          <div className="Round_Picture Round_Picture_Margin">
            <img src={Lapa} alt=""/>
              <p>У нас есть лапки</p>
          </div>

          <div className="Round_Picture Round_Picture_Margin">
            <img src={Telegram} alt=""/>
              <p>... и бумажные
                самолетики</p>
          </div>

          <div className="Round_Picture Round_Picture_Margin">
            <img src={Case} alt=""/>
              <p>Кроме того, у нас
                есть чемодан</p>
          </div>

        </div>
        <div id="Order_Offer_Button">
          <a href="#">ЗАКАЗЫВАЯ СЕЙЧАС - ПОЛУЧАЕТЕ СКИДКУ</a>
        </div>
      </div>

  );
}

export default Mid;
