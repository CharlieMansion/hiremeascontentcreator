import React from 'react';
import logo from './NN_LOGO.png';
import './logo.styles.scss';
import { Link } from 'react-router-dom';

import {Animated} from "react-animated-css";

const Logo = () => {
    return (
        
        <div className="logo-container">    
            <Animated animationIn="fadeInDown" isVisible={true} animationInDuration={1000} animationOut="zoomOutDown"> 
                <Link to="/" className="menu-text">  
                    <img className="logo" alt="Logo" src={logo}/>
                </Link> 
             </Animated>
        </div>
       
          
    )
    
}

export default Logo;