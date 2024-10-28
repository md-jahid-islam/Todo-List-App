import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import ResetPass from './Pages/ResetPass'
import LayoutOne from './Layouts/LayoutOne'
function App() {
  const mainroute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/login' element = {<Login/>} />
        <Route path='/register' element = {<Register/>} />
        <Route path='/resetpass' element = {<ResetPass/>} />

        <Route path='/' element ={<LayoutOne/>}>
        <Route index element = {<Home/>} />
    
        
        </Route>

      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={mainroute}/>
    </>
  )
 }
 
 export default App
