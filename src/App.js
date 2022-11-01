import { Route, Switch } from 'react-router-dom';
import './App.css';
import './style/dark.scss';
import { productInputs, userInputs } from './formSource';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Login from './pages/login/Login';
import New from './pages/new/New';
import Single from './pages/single/Single';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';

function App() {
  const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/users/new" component={() => <New inputs={userInputs} title="Add New Use" />} />
        <Route path="/users/:id" component={Single} />
        <Route path="/users" component={List} />
        <Route path="/products/new" render={() => <New inputs={productInputs} title="Add New Product" />} />
        <Route path="/products/:productId" component={Single} />
        <Route path="/products" component={List} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
