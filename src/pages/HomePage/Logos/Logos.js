import React, {Component} from 'react';
import './Logos.scss';

class Logos extends Component{
    render(){
        return(
            <div className='logos__content col'>
                <div className='logos__container__image'>
                    <img src={this.props.logo.image} alt="logo azienda partner" />
                    <h6>{this.props.logo.name}</h6>
                </div>
            </div>
        );
    }
}

export default Logos;