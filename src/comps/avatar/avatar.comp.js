import React from 'react';
//import avatar2 from './PIC1.png';
//import avatar4 from './PIC2.png';
//import avatar3 from './PIC3.jpg';
//import avatar4 from './PIC4.jpg';
import avatar from './mobile-pic.png';
import './avatar.styles.scss';

class Avatar extends React.Component {
    constructor() {
        super()
        this.state = {
            avatar: avatar
        }
    }
        toggleAvatar = () => {
            this.setState({avatar:avatar})
        }

        toggleAvatarAgain = () => {
            this.setState({avatar:avatar})
        }

        render() {
            return (
                <div className='avatar-container'>
                    <img className="avatar" alt="Avatar" src={this.state.avatar} onMouseEnter={this.toggleAvatar} onMouseLeave={this.toggleAvatarAgain}/>
                </div>
            )
        }
}

export default Avatar;