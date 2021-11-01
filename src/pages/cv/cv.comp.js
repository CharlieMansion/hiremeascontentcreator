import React from 'react';
import './cv.styles.scss'
// import dribbble from './dribbble-4.svg'

// import {Animated} from "react-animated-css";

import BottomScrollListener from 'react-bottom-scroll-listener';
import arrow from './arrow.png';

class Cv extends React.Component {
constructor() {
    super()

    this.state = {
        isScrolled : false
    }
}


handleContainerOnBottom = () => {

this.setState((prevState) => {
    return {isScrolled : !prevState.isScrolled}
})
}
    render() {
    return (
        <div className="container">
        <div className="cv-sup-container">
            <div className="cv-container">
            <BottomScrollListener offset="10" onBottom={this.handleContainerOnBottom}>
            { scrollRef => (
                <div className="cv" ref={scrollRef}>
                    <h2>What's my background?
                    <br/>
                    Check it here.</h2>
                    <br/>
                    <div>
                    <h3>Professional Experience</h3>
                      <hr/> 
                   
                    <p className="date">May 2020 – today</p>
                   <p className="title">Freelance digital content creator & web developer/designer</p>
                  
                    <p className="date">May 2020 – today</p>
                   <p className="title">Graphic designer & social media expert, European Commission</p>
               
                  <p className="date">Sep. 2015 – May 2020 </p>
                    <p className="title">Digital Content Creator & Social Media Manager at [PIAS] Belgium </p>

                    <p className="date">Déc. 2014 – Jan. 2018 </p>
                    <p className="title">Writer, photographer, video producer at [PIAS] Belgium </p>
                
                    
                  {/* <Animated animationIn="fadeInDown" isVisible={true} animationInDuration={1000} animationOut="zoomOutDown">
                        <img className="dribbble" alt="dribbble logo" width="150" src={dribbble}></img>
                       </Animated>

                    */}
                    <br/>
                    <h3>Education</h3>
                      <hr/> 
                      <p className="date">2010 – 2015</p>
                      <p className="title">Master Degree in Communication & Public Relations</p>
                      <p className="date">2005 – 2010</p>
                      <p className="title">Secondary School Diploma with a 6 years English immersion program </p>
                      
                      <br/>
                    <h3>Other Certifications</h3>
                      <hr/> 
                      <p>
                            <ul>
                                <li>
                                Cambridge 1st Certificate in English  - British Council
                                </li>  
                                <li>
                                Complete React Developer Diploma - Udemy
                                </li> 
                                <li>
                                Complete Senior Web Developer Diploma - Udemy
                                </li>   
                                <li>
                                Advanced Javascript Concepts - Udemy
                                </li> 
                                <li>
                                Data Structures & Algorithms Diploma - Udemy
                                </li> 
                            </ul>
                      </p>
                      <br/>
                    <h3>Skills</h3>
                      <hr/>
                      <p>#adobe #creativecloud #aftereffects #premierepro #photoshop #illustrator #indesign #lightroom #reaperaudio #protools #html #css #javascript #React.js #Node.js #Redux #Hooks #SQL #AWS #mailchimp #analytics #officesuite #projectmgmt #copywriting</p> 
                      <br/>
                      <h3>Languages</h3>
                        <hr/> 
                        <p>
                              <ul>
                                  <li>
                                  French - Mother tongue
                                  </li>  
                                  <li>
                                  English - Excellent / Bilingual
                                  </li> 
                                  <li>
                                  Dutch - Very Good
                                  </li>   
                                  <li>
                                  German - Advanced Beginner
                                  </li> 
                                  <li>
                                  Spanish - Basic
                                  </li> 
                                  <li>
                                  Japanese - Basic (but currently hard working on it!)
                                  </li> 
                              </ul>
                        </p>
                        <br/>
                        <h3>Interests & Hobbies</h3>
                          <hr/> 
                          <p>
                          <ul>
                          <li>
                          Music
                          </li>  
                          <li>
                          Cinema
                          </li> 
                          <li>
                          Tech & Geeky Stuff
                          </li>   
                          <li>
                          Travel
                          </li> 
                          <li>
                          Japan
                          </li> 
                          <li>
                          Avid Everyday Learner
                          </li> 

                      </ul>
                          </p>
                      </div>
                </div>)}
                </BottomScrollListener>
            </div>
            <div className={`${this.state.isScrolled ? 'hidden' : null } arrow-container`}>
          
            <img  className='pf-arrow' alt="arrow" src={arrow}/> 
             <p className='scroll-for-more'>Scroll for more</p>
            </div>
        </div>
        </div>
    )
                }
}

export default Cv;

