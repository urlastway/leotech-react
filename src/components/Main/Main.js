import Telefonia from './Telefonia/Telefonia.js';
import Computer from './Computer/Computer.js';
import Web from './Web/web.js';
import './Main.scss';

function Main (){
    return(
        <>
        <main>
            <div className='cards'>
                <div className='container'>
                    <h2>Visualizza i nostri <span className='secected__text'>numerosi servizzi:</span></h2>
                    <div className='cards__content'>
                        <div className='cards__content__left'>
                            <div className='cards__content__first'>
                                <Telefonia />
                            </div>
                        </div>
                        <div className='cards__content__right'>
                            <div className='cards__content__second'>
                                <Computer />
                            </div>
                            <div className='cards__content__thr'>
                                <Web />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}

export default Main