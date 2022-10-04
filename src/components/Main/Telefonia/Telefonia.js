import './Telefonia.scss'
import immagineTelefonia from '../../../img/telefonia.png'
function Telefonia(){
    return(
        <div className='telefonia'>
            <div className='container'>
                <div className='immagine__telefonia'>
                    <img src={immagineTelefonia} alt='immagine-telefonia' />
                    <div class="telefonia__text">
                        <h1>Telefonia</h1>
                        <div className='telefonia__text__list'>
                            <p>Riparazioni.</p>
                            <p>Vendita.</p>
                            <p>Diagnosi.</p>
                        </div>
                        <div className='telefonia__text__description'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                        </div>
                        <button>Scopri di più</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Telefonia