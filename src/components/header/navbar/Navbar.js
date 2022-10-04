import React, {useState} from 'react'; 
import './navbar.scss';
import logo_small from '../../../img/lotech_logo_small.png';


/**/

function Navbar(){

    const [showMenu, setShowMenu] = useState(false);
    let menu
    if(showMenu){
        menu = <div className='navbar__links__media'>
                    <ul>
                        <li>
                            <a href='#'><p>Home</p></a>
                        </li>
                        <li>
                            <a href='#'><p>Contatti</p></a>
                        </li>
                    </ul>
                </div>
    }

    return(
        <div className='header__nav'>
            <div className='container'>
                <nav className='navbar'>
                    <img src={logo_small} alt="logo-leotech" className='logo_small'/>
                    <a href='#' className='hamburgher__button' onClick={() => setShowMenu(!showMenu)}>
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </a>
                    {menu}
                    <div className='navbar__links'>
                        <ul>
                            <li>
                                <a href='#'><p>Home</p></a>
                            </li>
                            <li>
                                <a href='#'><p>Contatti</p></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;