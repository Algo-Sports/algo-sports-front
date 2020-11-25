import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/table.css';
import './styles/tab.css';
import './styles/gameDetail.css';

import App from './App';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {GameList, Ranking, AwardList, PostList, Profile, Game, Signin, Signup} from './pages';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path = "/" exact={true} component = {App}/>
      <Route path = "/gamelist" component = {GameList}/>
      <Route path = "/game/:game_id" component = {Game}/>
      <Route path = "/ranking" component = {Ranking}/>
      <Route path = "/awardList" component = {AwardList}/>
      <Route path = "/postList" component = {PostList}/>
      <Route path = "/profile" component = {Profile}/>
      <Route path = "/signin" component = {Signin}/>
      <Route path = "/signup" component = {Signup}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
