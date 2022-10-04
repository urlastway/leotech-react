import './Web.scss'
import WebIMG from '../../../img/web.png';

function Web (){
    return(
    <div className='web'>
        <div className='container'>
            <div className='immagine__web'>
                <img src={WebIMG} alt='immagine-web' />
                <div class="web__text">
                    <h1>Informatica</h1>
                    <div className='web__text__list'>
                        <p>Riparazioni.</p>
                        <p>Vendita.</p>
                        <p>Diagnosi.</p>
                    </div>
                    <div className='web__text__description'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                    </div>
                    <button>Scopri di più</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Web;