import BaseLayout from './layouts/baseLayout'
import Main from './pages/main'
import {Signin} from './pages/signin'
import {useState} from 'react'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div>
      {isLoggedIn ? <BaseLayout><Main/></BaseLayout> : <Signin setIsLoggedIn = {setIsLoggedIn}/>}
    </div>
    
  )
}

export default App;