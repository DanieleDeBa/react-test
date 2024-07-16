import logo from './components/logo_oro.png';
import sfondo from './components/sfondo.jpeg';

function App() {
  return (
    <div class="card text-bg-dark">
      <img src={sfondo} class="card-img" alt="..."/>
      <div class="card-img-overlay">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <img src={logo} alt="Bootstrap" width="100" height="100"/>
          < div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Shiatsu Nagomi</span>
          </div>
        </nav>
      </div>
  </div >

    
  );
}

export default App;
