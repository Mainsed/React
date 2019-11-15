import React from 'react';
import './App.scss';
import FirstPicture from "./Pictures/Bottom_1st_Picture.png";
import SecondPicture from "./Pictures/Bottom_2nd_Picture.png";
import ThirdPicture from "./Pictures/Bottom_3rd_Picture.png";

import Pay from './PayContent'


class Footer extends React.Component {
    render(){
  return (
        <div id="Bottom_Box">
          <div id="First_Bottom_Box" className="Buttom_Box_Group">
            <Pay className="First_Buttom_Box_Group" imgNum={FirstPicture} altImg="1st Img"/>
            <Pay className="Second_Buttom_Box_Group" imgNum={SecondPicture} altImg="2nd Img"/>
          </div>

          <div id="Second_Bottom_Box" className="Buttom_Box_Group">
            <Pay className="First_Buttom_Box_Group" imgNum={ThirdPicture} altImg="3rd Img"/>
            <Pay className="Second_Buttom_Box_Group" imgNum={SecondPicture} altImg="4th Img"/>
          </div>
      </div>
  )
    }
}

export default Footer;
