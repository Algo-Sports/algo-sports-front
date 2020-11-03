import Head from 'next/head'
import styles from '../styles/Home.module.css'
import BaseLayout from './layouts/baseLayout'
import Main from './main'
import SignIn from './signin'
import {useState} from 'react'

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div>
      {isLoggedIn ? <BaseLayout><Main/></BaseLayout> : <SignIn setIsLoggedIn = {setIsLoggedIn}/>}
    </div>
    
  )
}

export default Home;