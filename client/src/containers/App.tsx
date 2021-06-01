import { Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import light from '../styles/themes/light'
import GlobalStyle from '../styles/global'

import Header from '../components/header/Header';
import { About, Articles, Contact, Forum } from '../template/Pages';

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <div className="App">
        <GlobalStyle />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/articles" />
          </Route>
          <Route path="/articles" component={Articles} />
          <Route path="/forum" component={Forum} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
