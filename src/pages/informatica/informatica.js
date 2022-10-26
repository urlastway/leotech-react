import React, {Component} from 'react';
import './informatica.scss';
import InformaticaData from '../../data/data_informatica'

class Informatica extends Component{
    render(){
        return(
            <main>
                <div className='informatica'>
                    <div className='container'>
                        <div className='informatica__content'>
                        <h1>Informatica</h1>
                            <div className='informatica__card'>
                                {InformaticaData.map(item =>
                                <section className='informatica__card__content'>
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

export default Informatica;