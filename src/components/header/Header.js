import Navbar from './navbar/Navbar.js';
import HederInner from './header-inner/HederInner.js';

function Header(){
    return (
        <header>
            <Navbar/>
            <HederInner/>
        </header>
    );
}

export default Header;