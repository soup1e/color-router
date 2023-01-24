import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import NotFound from './NotFound/NotFound.js';
import Home from './Home/Home.js';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/rgb/:red/:green/:blue">
          <Main />
        </Route>

        <Route path="/">
          <Home />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
