
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import { Routes,Route } from 'react-router-dom'

function App() {
  

  return (
    <>
    <Routes>
    <Route exact path='/'  element={<LoginPage/>} /> 
    <Route path='/home' element={<Home/>} />

    </Routes>
    
    </>
  )
}

export default App
