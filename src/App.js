import React from 'react';
import './App.css';
import YTForm from './components/YTForm'
import Admin from './components/Admin'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App =() => {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:guildId" component={YTForm} />
          <Route path="/admin/:guildId" component={Admin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
