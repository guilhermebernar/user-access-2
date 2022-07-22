import RestrictedPage from './components/restrictedPage/restrictedPage'
import { useState } from 'react';
import './App.css';

function App() {
  
  const [isLoggedIn, setIsLoggedIn ] = useState(false)
  const user = "Guilherme Bernardo"

  const login = ()=>{
    return (
      setIsLoggedIn(true)
    )
  }

  const logout = ()=>{
    return (
      setIsLoggedIn(false)
    )
  }

  return (
    <div className="App">
      {isLoggedIn ? 
        (
          <header className="App-header">
            <RestrictedPage isLoggedIn={isLoggedIn} user={user} login={login} logout={logout}/>
          </header>
        ) 
        : 
        (
          <header className="App-header">
            <span>Você não pode acessar a pagina</span>
            <button onClick={login}>Entrar</button>
          </header>
        )
      }
    </div>
  )
}

export default App;
