import React from 'react';
//import avatar2 from './PIC1.png';
//import avatar from './PIC2.png';
import avatar3 from './PIC3.jpg';
import './avatar.styles.scss';

class Avatar extends React.Component {
    constructor() {
        super()
        this.state = {
            avatar: avatar3
        }
    }
        toggleAvatar = () => {
            this.setState({avatar:avatar3})
        }

        toggleAvatarAgain = () => {
            this.setState({avatar:avatar3})
        }

        render() {
            return (
                <div>
                    <img className="avatar" alt="Avatar" src={this.state.avatar} onMouseEnter={this.toggleAvatar} onMouseLeave={this.toggleAvatarAgain}/>
                </div>
            )
        }
}

export default Avatar;