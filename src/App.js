import Header from './components/header/Header.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js';
import './components-style/_reset.scss';
import './components-style/_typegrafy.scss';
import './App.scss'

function App() {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <Main/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
