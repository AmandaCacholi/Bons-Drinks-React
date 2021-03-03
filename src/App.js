import './App.css';
import Header from './components/Header/Header'
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer'
import Sobre from './components/Sobre/Sobre';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      <Header/>
      <Form/>
      {/* <Sobre/> */}
      <Footer/>
    </div>
  );
}

export default App;
