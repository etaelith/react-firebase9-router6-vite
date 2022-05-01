import { Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './routes/Login'
import Home from './routes/Home'
import RequireAuth from './components/RequireAuth'
const App = () => {
  return (
    <>
      <Navbar/>
      <h1>App</h1>
      <Routes>
        <Route path='/' element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default App
