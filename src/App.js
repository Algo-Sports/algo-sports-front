import styles from './styles/Home.module.css'
import BaseLayout from './layouts/baseLayout'
import Main from './pages/main'
import SignIn from './pages/signin'
import {useState} from 'react'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div>
      {isLoggedIn ? <BaseLayout><Main/></BaseLayout> : <SignIn setIsLoggedIn = {setIsLoggedIn}/>}
    </div>
    
  )
}

export default App;