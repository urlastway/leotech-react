import React, {Component} from 'react';
import './Card.scss'

class Card extends Component{

    

    render(){
        return(
            <div className='card__single col'>
                <div className='container'>
                    <div className='card__content'>
                        <h1>{this.props.card.name}</h1>
                        <div className='card__content__text__list'>
                            <p>Riparazioni.</p>
                            <p>Vendita.</p>
                            <p>Diagnosi.</p>
                        </div>
                        <div className='image__settings'>
                            <img src={this.props.card.image} alt='immagine-telefonia' />
                        </div>
                        <div className='card__text__description'>
                            <p>{this.props.card.text}</p>
                        </div>
                        <a href={this.props.card.link}><button>Scopri di più</button></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card