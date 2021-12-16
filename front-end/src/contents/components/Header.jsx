import React, {useEffect} from "react";
import './header.css';
import {Link} from 'react-router-dom';
import { HeartOutlined, PlusSquareOutlined } from '@ant-design/icons';



const Header = () => {

  return (
          <div className="header">
              <img className="main-logo" src={process.env.PUBLIC_URL + '/Img/main-logo.jpg'} alt="" />
            <div className="a"/>
            <Link to="/write" className="plus" ><PlusSquareOutlined /></Link>
            <div className="heart"><HeartOutlined /> </div>
          </div>
        )
}

export default Header;
