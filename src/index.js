import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/table.css';
import './styles/tab.css';

import App from './App';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import GameList from './pages/gameList';
import Ranking from './pages/ranking';
import AwardList from './pages/awardList';
import PostList from './pages/postList';
import Profile from './pages/profile';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path = "/" exact={true} component = {App}/>
      <Route path = "/game" component = {GameList}/>
      <Route path = "/ranking" component = {Ranking}/>
      <Route path = "/awardList" component = {AwardList}/>
      <Route path = "/postList" component = {PostList}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
