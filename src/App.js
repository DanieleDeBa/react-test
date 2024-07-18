import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Logo from './components/Logo';

// function App() {
//   return (
//     <div className="container">
//       <div className="card text-bg-dark">
//         <img src={sfondo} class="card-img" alt="..."/>
//         <div className="card-img-overlay">
//           <Navbar/>
//         </div>
//       </div>
//     </div>
    
//   );
// }

function App() {
  return (
      <section className='hero'>
        <div className='content'>
          <div className='header'>
            <Logo/>
            <Navbar/>
          </div>
          <div  className='body'>
            <h1> Shiatsu Nagomi</h1>
            <p>Paragraph of shiatsu Nagomi</p>
          </div>
        </div>
      </section>
  );
}

export default App;
