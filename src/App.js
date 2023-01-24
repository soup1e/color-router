import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './Header/Header.js';
import Main from './Main/Main.js';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/rgb/:red/:green/:blue">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
