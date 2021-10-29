import React from 'react';
//import artwork from './PORTFOLIO_STORY.png';
import portfolio from './portfolio.mp4'
import './home.styles.scss'


import Avatar from '../../comps/avatar/avatar.comp';
import {Player, ControlBar, LoadingSpinner} from 'video-react';
import '../../../node_modules/video-react/dist/video-react.css'; 

import {Animated} from "react-animated-css";

class Home extends React.Component {
    
    constructor(props, context) {
        super(props, context)

        this.state = {
            isButtonClicked : false,
            width:0,
            height:0
        }

        this.toggleFullscreen = this.toggleFullscreen.bind(this);
        this.play = this.play.bind(this);
        }



        toggleFullscreen() {
            this.player.toggleFullscreen()
        }

        play(){
            this.player.play()
            
        }

        buttonAction = () => {
            this.setState(prevState => ({
                isButtonClicked:!prevState.isButtonClicked
            }))

            if (!/Mobi/.test(navigator.userAgent)) {   
            this.player.toggleFullscreen()
            }

            const btn = document.getElementById('btn-vid')
            btn.innerText='Loading...'
        }

        componentDidMount() {
            this.updateWindowDimensions();
            window.addEventListener('resize', this.updateWindowDimensions);
          }

          componentWillUnmount() {
            window.removeEventListener('resize', this.updateWindowDimensions);
          }
          updateWindowDimensions = () =>  {
            this.setState({ width: window.innerWidth, height: window.innerHeight });
          }
          
        

    render() {
        return (
            <div className="container">
                <div className='mobile-msg'>
                <h1>Looking for a content creator? 
                Your search is over.<br/><br/>
                Discover my bio in video!</h1>
                <button id='btn-vid' className="ghost-button" onClick={this.buttonAction}>Tap to see</button>

                <div style={{display:none}}id="video-mobile">

                { this.state.isButtonClicked ? (
                <Player 
                loop={true}
                ref={player => { this.player = player;}}
                fluid={false} 
                width={0}
                muted
                autoPlay
                src={portfolio}>
                <LoadingSpinner />
                <ControlBar disableCompletely={true}/>
                </Player>) : null }
                </div>
                </div>
                { !/Mobi/.test(navigator.userAgent) ? (
                <div className="img-container" onDoubleClick={this.toggleFullscreen}>
                    <Player 
                    loop={true}
                    ref={player => { this.player = player;}}
                    className="test"
                    fluid={false}
                    autoPlay={true}
                    muted
                    playsinline
                    src={portfolio}>
                    <LoadingSpinner />
                    <ControlBar disableCompletely={true}/>
                    </Player>
                </div>) : null }
                <Animated className="avatar-div" animationIn="fadeInLeft" isVisible={true} animationInDuration={1000} animationOut="zoomOutDown"> 
                <Avatar />
                </Animated>
            </div>
        )
    }
}

export default Home;