import React, {Component} from 'react';
import './telefonia.scss';
import TelefoniaData from '../../data/data_telefonia.js'

class Telefonia extends Component{
    render(){
        return(
            <main>
                <div className='telefonia'>
                    <div className='container'>
                        <div className='telefonia__content'>
                        <h1>Telefonia</h1>
                            <div className='telefonia__card'>
                                {TelefoniaData.map(item =>
                                <section className='telefonia__card__content'>
                                    <img src={item.img} alt={item.title}/>
                                    <h2>{item.title}</h2>
                                    <p>{item.text}</p>
                                </section>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Telefonia;