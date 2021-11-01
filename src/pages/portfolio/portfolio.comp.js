import React from 'react';
import './portfolio.styles.scss'
// import dribbble from './dribbble-4.svg'

// import {Animated} from "react-animated-css";

import BottomScrollListener from 'react-bottom-scroll-listener';
import arrow from './arrow.png';

class Portfolio extends React.Component {
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
        <div className="portfolio-sup-container">
            <div className="portfolio-container">
            <BottomScrollListener offset="10" onBottom={this.handleContainerOnBottom}>
            { scrollRef => (
                <div className="portfolio" ref={scrollRef}>
                    <h2>Want to see more of my work?
                    <br/>
                    Check it here.</h2>
                    <br/>
                    <div>
                    <h3>Digital content creation, graphic design & video animations</h3>
                      <hr/> 
                    <p>For a showcase overview of a few animated visuals and designs I created as a freelancer and beyond, I invite you to check out my Dribbble portfolio <a href="http://niconol.dribbble.com/" rel="noopener noreferrer" target="_blank">here</a>. </p> 
                    <p>For five years, I notably took care of the content creation for the [PIAS] Belgium & [CHEZ PIAS] socials, including video animations production, graphic design, copies, as well as developing their new visual rebranding and graphic chart, visible in some recent concepts & stories.
                    <br/>
                    <br/>I also contributed in developing concepts for posts, writing up captions and managing the posting, setting up the agendas, and interacting with their respective audiences. 
                    You can check out the Instagram profiles and Facebook pages here : 
                    <br/>
                    <br/>
                    [PIAS] Belgium :
                    <br/>
                    <ul>
                    <li>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/piasbelgium/?hl=fr">Instagram</a>
                    </li>
                    <li>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/piasbelgium/">Facebook</a>
                    </li>
                    </ul>
                  
                    [CHEZ PIAS] :
                    <br/>
                    <ul>
                    <li>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/chezpias/?hl=fr">Instagram</a>
                    </li>
                    <li>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/chezpias/">Facebook</a>
                    </li>
                    </ul>
                    Beside these socials, I've created a very large number of digital content for many artists present on the global [PIAS] catalogue.
                    These included visuals for posts, stories, banners, videos, artworks, websites, newsletters, ads, headers, graphic PR's, etc.
                    <br/>
                    <br/>
                    On my more 'serious' business side, I'm currently a consultant graphic designer/social media expert at the European Commission for Culture, Youth & Education. I look after creating digital content for their social media channels which include things like Erasmus+, Creative Europe, European Youth and the Digital Education Action Plan.
                    You can check them out here : 
                    <br/>
                    <br/>
                    Erasmus+ :
                    <br/>
                    <ul>
                    <li>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/EUErasmusPlusProgramme">Facebook</a> (500k+ followers)
                    </li>
                    <li>
                    <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/EUErasmusPlus">Twitter</a>
                    </li>
                    </ul>
                  
                    Creative Europe :
                    <br/>
                    <ul>
                    <li>
                    <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/europe_creative">Twitter</a>
                    </li>
                    <li>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/CreativeEuropeEU">Facebook</a>
                    </li>
                    </ul>

                    European Youth :
                    <br/>
                    <ul>
                    <li>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/european_youth_eu/">Instagram</a>
                    </li>
                    <li>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/EuropeanYouthEU">Facebook</a>
                    </li>

                    <li>
                    <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/EuropeanYouthEU">Twitter</a>
                    </li>
                    </ul>
                  
                    Digital Education Action Plan :
                    <br/>
                    <ul>
                    <li>
                    <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/EUDigitalEdu/">Twitter</a>
                    </li>
         
                    </ul>
                    Aside from these, I also entirely take care of the socials and related content creation for a music project I'm part of, called Whatever!. You can check out our 
                    Instagram <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/whateverisaband/?hl=fr">here</a> and our Facebook page <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/whateverisaband/">here</a>.
                    </p>
                    <br/>
                    
                      <h3>Video Production & Editing</h3>
                      <hr/> 
                      <p>I have made an extensive number of video edits apart from the video animations examples present on my Dribbble portfolio. This includes Youtube & Spotify prerolls ads, video clips snippets for a large number of [PIAS] artists.
                      <br/>
                      <br/>
                      I've also entirely produced a few music videos and live sessions for my own band Whatever, which you can find <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/channel/UCfyVAXXAjXCHXGcrniSml4Q">here</a>.
                      </p> 
                      <br/>
                      <h3>Web Development</h3>
                      <hr/> 
                      <p>Aside from developing this whole website from Scratch with React.js on my own, I've also developed a series of websites for various clients, including 62TV Records' e-commerce store that you can check <a href="https://62tvrecords-webstore.com">here</a> as an example.
                      A load of code for other stuff is also present on my <a rel="noopener noreferrer" target="_blank" href="https://github.com/CharlesMansion">Github</a>  account, including a sample face recognition app and a full virtual clothing eCommerce app called CRWN Clothing.
                      </p>
                      <br/>
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

export default Portfolio;

