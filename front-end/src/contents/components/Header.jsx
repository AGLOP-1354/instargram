import React from "react";
import './Header.css';
import { HeartOutlined, PlusSquareOutlined } from '@ant-design/icons';



const Header = () => {
  return (
    <div className="body">
      <div className="header">
        <img className="main-logo" src={process.env.PUBLIC_URL + '/Img/main-logo.jpg'} alt="" />
        <div className="a">   </div>
        <div className="plus"><PlusSquareOutlined /></div>
        <div className="heart"><HeartOutlined /> </div>
      </div>
    </div>
  )
}

export default Header;