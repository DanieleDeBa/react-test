import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Logo from './components/Logo';
import texts from './texts/texts.json';


function App() {
  return (
    <>
      <section className='hero'>
        <div className='content'>
          <div className='header'>
            <Logo />
            <Navbar />
          </div>
          <div className='body'>
            <h1> {texts.title} </h1>
            <p> {texts.paragraph1}</p>
          </div>
        </div>
      </section>
      <section className='hero' id="pg2" >
        <div className='content'>
          <div className='header'>
            <Navbar />
          </div>
          <div className='body'>
            <h1> {texts.title} </h1>
            <p> {texts.paragraph1}</p>
          </div>
        </div>
      </section>
    </>
  );

}

export default App;
