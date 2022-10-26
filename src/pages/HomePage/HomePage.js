import React, {Component} from 'react';
import Card from './Cards/Card.js';
import Logos from './Logos/Logos.js';
import './HomePage.scss';

import telefonia from '../../img/Cards/telefonia.png';
import pc from '../../img/Cards/pc.png';
import web from '../../img/Cards/web.png';

import partenr1 from '../../img/partners/logo-partner_1.png';
import partenr2 from '../../img/partners/logo-partner_2.png';
import partenr3 from '../../img/partners/logo-partner_3.png';
import partenr4 from '../../img/partners/logo-partner_4.png';


class HomePage extends Component{

    state = {
        cards: [
            {id: 0, name: "Telefonia", image: telefonia, link: '../telefonia', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"},

            {id: 1, name: "Computer", image: pc, link: '../informatica', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"},

            {id: 2, name: "Web", image: web, link: '../Web', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}
        ],
        logos: [
            {id:0, name: "Nome Azienda", image: partenr1},
            {id:1, name: "Nome Azienda", image: partenr2},
            {id:2, name: "Nome Azienda", image: partenr3},
            {id:3, name: "Nome Azienda", image: partenr4},
        ],
    }

    render() {

        // function HideCookies(){
        //     let cookies = document.getElementsByClassName("cookies");
        //     cookies.classList.add("hidden");
        // }

        return(
            <>
            <main>
                <div className='page__content'>
                    <div className='cards'>
                        <div className='container'>
                            <h2>Visualizza i nostri <span className='secected__text'>numerosi servizzi:</span></h2>
                            <div className='cards__content row'>
                                {this.state.cards.map(card =>(
                                    <Card 
                                    key = {card.id}
                                    card = {card}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='logos__partners'>
                        <div className='container'>
                            <div className='logos__partners__text'>
                                <h1 className='logos__partners__text__up'>I nostri <span>partner:</span></h1>
                            </div>
                            <div className='row'>
                                {this.state.logos.map(logo => (
                                    <Logos 
                                    key = {logo.id}
                                    logo = {logo}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* {<div className='cookies'>
                    <div className='container'>
                        <div className='cookies__content'>
                            <h3>Questo sito utilizza i cookie per fornire i suoi servizi. Un cookie è una piccola quantità di dati inviati al tuo browser di navigazione da un sito web e che viene successivamente memorizzato sul disco fisso del tuo computer.</h3>
                            <button onClick={HideCookies}>Accetta</button>
                        </div>
                    </div>
                </div>} */}
            </main>
            </>
        )
    }
}

export default HomePage