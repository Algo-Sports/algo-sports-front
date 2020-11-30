import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/table.css';
import './styles/tab.css';
import './styles/gameDetail.css';

import App from './App';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {GameList, Game, Ranking, AwardList, PostList, Profile, Signin, Signup, LoginPage} from './pages';
import {Provider} from 'react-redux';
import store from './_helpers/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
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
        <Route path = "/testSignin" component = {LoginPage}/>
        
      </Router>
    </Provider>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
