import React from 'react';
import './bio.styles.scss'
import arrow from './arrow.png';
import BottomScrollListener from 'react-bottom-scroll-listener';



class Bio extends React.Component {
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
                <div className="bio-sup-container">
                     <div className="bio-container" >
                     <BottomScrollListener offset="10" onBottom={this.handleContainerOnBottom}>
                { scrollRef => (
                    <div className="bio" ref={scrollRef} >
                    <h2>Searching for a content creator?
                    <br/>
                    Look no further.</h2>
                    <br/>
                        Hello, my name is Nico. I'm a digital creative & web developer based in Brussels.
                        <br/> 
                        <br/>
                        My main interests are music 🎹, graphic design, video & visual art ✏️ and new media, tech & web development 💻.
                        <br/>
                        <br/>
                        I've already been working about 6 years in the music industry as digital content creator, community manager and record shop manager.
                        <br/>
                        <br/>During that time, I created tons of projects. Visuals, stories, banners, videos, artworks, websites, newsletters, ads, headers, graphic PR's... all of this for hundreds of very different projects. I also took care of several online communities from various brands, and sold many records.
                        <br/>
                        <br/>I also have a master degree in Communication & Public Relations and I have strong self-taught skills in all things digital.
                        I love to learn new stuff everyday.
                        <br/>
                        <br/>
                        I am often described as a creative, independent and hard-working person.
                        <br/> 
                        <br/>
                        I mainly speak French, English and Dutch, but I also know a little of German, Spanish and 日本語 (Japanese).
                        <br/> 
                        <br/>
                        Today, I am now more than willing to bring my career to the next level, and ready to take up on new challenges 🚀
                        <br/> 
                        <br/>
                        Searching for your ideal content creator? Look no further.
                        
                        </div>
                        )}
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

export default Bio;