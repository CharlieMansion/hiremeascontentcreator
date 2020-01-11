import React from 'react'
//import instaIcon from './insta-icon-dark-gray.png';
//import fbIcon from './facebook-icon-dark-gray.png';
import emailIcon from './email-icon-dark-gray.png';
import dribbbleIcon from './dribbble-icon-dark-gray.png';
import linkedInIcon from './linkedin-icon-dark-gray.png';
import githubIcon from './github-icon-dark-gray.png';
import './header.styles.scss';
import { Link } from 'react-router-dom';

import {Animated} from 'react-animated-css';

import { ReactComponent as MenuBar } from './menu-bar.svg';

class Header extends React.Component {
    constructor() {
        super()

        this.state = {
            slideIn: false
        }
    }

    toggleClass = () => {
   
        this.setState(prevState=> ({
            slideIn: !prevState.slideIn
          }))
    }

    render() {
    return (
        
        <div className="header-sup" onClick={this.toggleClass}>
        <MenuBar className="menu-bar"/>
            <div className={`${this.state.slideIn ? 'come-on-in' : 'come-on-out' } hamburger-menu`} >
                <div className="menu-item-mobile">
                    <Link to="/cv" className="menu-text">>cv</Link>    
                </div>
                <div className="menu-item-mobile">
                    <Link to="bio" className="menu-text">>bio</Link>    
                </div>
                <div className="menu-item-mobile">
                    <Link to="/contact" className="menu-text">>contact</Link>    
                </div>
                <div className="menu-item-mobile">
                    <Link to="/portfolio" className="menu-text">>portfolio</Link>    
                </div>
            </div>
            <div className="right-stuff">
                <Animated animationIn="fadeInRight" isVisible={true} animationInDuration={1000} animationOut="zoomOutDown">
                    <div className="nav">
                        <div className="nav-sub">
                            <div className="menu-item">
                                <Link to="/cv" className="menu-text">>cv</Link>    
                            </div>
                            <div className="menu-item">
                                <Link to="/bio" className="menu-text">>bio</Link>    
                            </div>
                            <div className="menu-item">
                                <Link to="/contact" className="menu-text">>contact</Link>    
                            </div>
                            <div className="menu-item">
                                <Link to="/portfolio" className="menu-text">>portfolio</Link>    
                            </div>
                        </div>
                    </div>
                </Animated>
                <Animated animationIn="fadeInUp" isVisible={true} animationInDuration={1000} animationOut="zoomOutDown">
                    <div className="socials-footer">
                        <p className="footer-text"></p>
                        <div className="socials-icons">
                            <a href="http://niconol.dribbble.com/" rel="noopener noreferrer" target="_blank">
                             <img className="socials-icon" alt="dribbble-icon" src={dribbbleIcon}/>
                            </a>
                            <a href="https://www.linkedin.com/in/nicolas-nollomont-4b68a5a9/" rel="noopener noreferrer" target="_blank">
                            <img className="socials-icon" alt="dribbble-icon" src={linkedInIcon}/>
                           </a>
                           <a href="https://github.com/CharlesMansion" rel="noopener noreferrer" target="_blank">
                           <img className="socials-icon" alt="dribbble-icon" src={githubIcon}/>
                          </a>
                            <a href="mailto:nicolasnollomont@gmail.com" rel="noopener noreferrer" target="_blank">
                                <img className="socials-icon" alt="insta-icon" src={emailIcon}/>
                            </a>
                        </div>
                    </div> 
                </Animated>
            </div>
        </div>
    )
    }
}

export default Header;