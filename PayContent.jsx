import React from 'react';
import './App.scss';
import FirstPicture from "./Pictures/Bottom_1st_Picture.png";
import SecondPicture from "./Pictures/Bottom_2nd_Picture.png";
import ThirdPicture from "./Pictures/Bottom_3rd_Picture.png";



class Pay extends React.Component {
    render(){
      return (
          <div className={this.props.className}>
              <img src={this.props.imgNum} alt={this.props.altImg}/>
              <div className="Buttom_Box_Content">
                  <p>2000 грн</p>
                  <a href="#">Заказать</a>
              </div>
          </div>
      )
    }
}

export default Pay;
