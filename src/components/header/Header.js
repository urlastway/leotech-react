import Navbar from './navbar/Navbar.js';
import HederInner from './header-inner/HederInner.js';
import './HeaderStyle.scss';

function Header(){
    return (
        <header>
            <div className='HederInner'>
                <HederInner/>
            </div>
            <div className='Navbar'>
                <Navbar/>
            </div>
        </header>
    );
}

export default Header;