import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/table.css';
import './styles/tab.css';
import './styles/gameDetail.css';

import App from './App';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {GameList, Game, Ranking, AwardList, PostList, Profile, Signin, Signup} from './pages';
import {Provider} from 'react-redux';
import store from './_helpers/store';
import {history} from './_helpers/history';
import NotFoundPage from './pages/NotFoundPage';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} history = {history}>
      <Router>
        <Switch>
          <Route key = "/" path = "/" exact={true} component = {App}/>
          <Route key = "/gamelist" path = "/gamelist" component = {GameList}/>
          <Route key = "/game/:game_id" path = "/game/:game_id" component = {Game}/>
          <Route key = "/ranking" path = "/ranking" component = {Ranking}/>
          <Route key = "/awardList" path = "/awardList" component = {AwardList}/>
          <Route key = "/postList" path = "/postList" component = {PostList}/>
          <Route key = "/profile" path = "/profile" component = {Profile}/>
          <Route key = "/signin" path = "/signin" component = {Signin}/>
          <Route key = "/signup" path = "/signup" component = {Signup}/>
          <Route key = "404" path = "/*" component = {NotFoundPage}/>
        </Switch>
      </Router>
    </Provider>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
