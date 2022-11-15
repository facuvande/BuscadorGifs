import './App.css';
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import logo from './logo.png'
import StaticContext from './context/StaticContext';

import { Link, Route } from "wouter"

function App() {
  return (
    <StaticContext.Provider value={{name: 'midudev',suscribiteAlCanal: true}}>
      <div className="App">
        <section className="App-content">
          <Link to='/'>
            <img className='App-logo' alt='Giffy logo' src={logo}/>
          </Link>
          <Route component={Home} path="/"/>
          <Route component={SearchResults} path="/search/:keyword"/>
          <Route component={Detail} path="/gif/:id"/>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
