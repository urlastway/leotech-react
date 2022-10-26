import React, {Component} from 'react';
import './web.scss';
import WebData from '../../data/data_web.js'

class Web extends Component{
    render(){
        return(
            <main>
                <div className='web'>
                    <div className='container'>
                        <div className='web__content'>
                        <h1>Web</h1>
                            <div className='web__card'>
                                {WebData.map(item =>
                                <section className='web__card__content'>
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

export default Web;

