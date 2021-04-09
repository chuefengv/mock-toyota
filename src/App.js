import './App.css';
import {Header, Body, Footer} from './components/index';

function App() {
  return (
    <div className='container'>

      <div className='header'>
        <Header />
      </div>

      <div className='body'>
        <Body />
      </div>

      <div className='footer'>
        <Footer />
      </div>

    </div>
  );
}

export default App;
