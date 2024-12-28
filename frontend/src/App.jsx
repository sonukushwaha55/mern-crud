import React from 'react'
import NavBar from './components/NavBar.jsx'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'

const App = () => {
  return (
    <>
    <div>
     <NavBar/>
     <Routes>
     <Route path='/' element= {<HomePage/>}/>
     <Route path='/create' element= {<CreatePage/>}/>
     </Routes>
    </div>
    </>
  )
}

export default App
