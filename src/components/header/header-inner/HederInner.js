import './hederInner.scss';
import videoInner from '../../../video/headerinner.mp4'

function HederInner(){
    return(
        <div className='headerInner'>
            <video src={videoInner} autoPlay loop muted />
            <div className='headerInner__img'>
                <div className='container'>
                    <div className='headerInner__text'>
                        <h1 className='headerInner__text__top'>Il tuo riderimento<br />
                            informatico a 360°</h1>
                        <p className='headerInner__text__bottom'>
                                Svolgiamo numerosi servizi al favore di: privati, PMI<br /> e pubbliche
                                amministrazioni; garantendo la totale<br /> funzionalità dei sistemi informatici.
                        </p>
                    </div>
                </div>
            </div>
            <div className='headerInner__under'>
                <div className='container'>
                    <div className="headerInner__under__text">
                        <h2>Leo Tech</h2>
                        <p>Scorri per scoprire di più</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HederInner;