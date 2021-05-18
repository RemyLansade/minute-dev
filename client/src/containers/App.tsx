import { Route, Switch, Redirect } from 'react-router-dom';

import Header from '../components/header/Header';
import { About, Articles, Contact, Forum } from '../template/Pages';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/articles" />
        </Route>
        <Route path="/articles" component={Articles} />
        <Route path="/forum" component={Forum} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
