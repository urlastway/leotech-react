import Header from './components/header/Header.js'
import Main from './components/Main/Main.js'
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
    </>
  );
}

export default App;
