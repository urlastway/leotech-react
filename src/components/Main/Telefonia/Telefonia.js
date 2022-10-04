import './Telefonia.scss'
import immagineTelefonia from '../../../img/leotech-telefonia.jpg'
function Telefonia(){
    return(
        <div className='telefonia'>
            <div className='container'>
                <div className='telefonia__content'>
                    <div className='telefonia__content__left'>

                    </div>
                    <div className='telefonia__content__right'>
                        <img src={immagineTelefonia} alt="immagine-telefonia" />
                    </div>
                    <div className='telefonia-text'>
                        <div className='telefonia-text-title'>
                            <h1>Telefonia</h1>
                            <h2>Scopri tutti vantaggi e servizi da noi offerti</h2>
                        </div>
                        <div className='telefonia-text-subtitle'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Telefonia