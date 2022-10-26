import Header from './components/header/Header.js';
import HomePage from './pages/HomePage/HomePage.js';
import ContactsPage from './pages/ContactsPage/ContactsPage.js'
import Telefonia from './pages/telefonia/telefonia.js';
import Informatica from './pages/informatica/informatica.js';
import Web from './pages/web/web.js';
import ErrorsPage from './pages/ErrorsPage/ErrorsPage.js'
import Footer from './components/Footer/Footer.js';
import './components-style/_reset.scss';
import './components-style/_typegrafy.scss';
import './App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
        <Header/>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/contacts' element={<ContactsPage/>} />
            <Route path='/telefonia' element={<Telefonia/>} />
            <Route path='/informatica' element={<Informatica/>} />
            <Route path='/web' element={<Web/>} />
            <Route path='*' element={<ErrorsPage/>} />
          </Routes>
        </Router>
      </header>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
