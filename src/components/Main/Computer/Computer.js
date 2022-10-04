import './Computer.scss'
import informaticaIMG from '../../../img/informatica.png';

function Computer (){
    return(
    <div className='informatica'>
        <div className='container'>
            <div className='immagine__informatica'>
                <img src={informaticaIMG} alt='immagine-informatica' />
                <div class="informatica__text">
                    <h1>Informatica</h1>
                    <div className='informatica__text__list'>
                        <p>Riparazioni.</p>
                        <p>Vendita.</p>
                        <p>Diagnosi.</p>
                    </div>
                    <div className='informatica__text__description'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                    </div>
                    <button>Scopri di più</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Computer;