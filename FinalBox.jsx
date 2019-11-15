import React from 'react';
import './App.scss';
import FirstPicture from "./Pictures/Bottom_1st_Picture.png";
import SecondPicture from "./Pictures/Bottom_2nd_Picture.png";
import ThirdPicture from "./Pictures/Bottom_3rd_Picture.png";

import Pay from './PayContent'


class Final extends React.Component {
    render(){
  return (
      <div id="Final_Box">
          <p>ООО “Лучшее предложение”</p>
          <a href="#">Отписаться от рассылки</a>
      </div>
  )
    }
}

export default Final;
