import './App.css';
import Header from './components/Header/Header'
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer'
import Sobre from './components/Sobre/Sobre';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Teste2 from './components/Teste2';
import Teste from './components/Teste'
import Pessoa from './components/Pessoa/Pessoa';
import Time from './components/Time/Time';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
        <Route path="/drinks">
            <Teste/>
          </Route>
          <Route path="/sobre">
            <Sobre/>
          </Route>
          <Route path="/contato">
            <Form/>
          </Route>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/time">
            <Time/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
