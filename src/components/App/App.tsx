import React from 'react';
import './App.css';

import { ThemeCtx, DefaultThemeContext } from '../../theme/ThemeProvider'
import { Settings } from '../../pages/Settings/Settings'

import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";

const Layout = () => {
  return (
    <div className="dark" >
    <nav>
    <ul>
      <li>
        <Link to="/home">go home</Link>
      </li>
      </ul>
    </nav>
    <Outlet />
    </div>
  )
}
const NoMatch = () => {
  return (
    <div>
      <h1>Not found</h1>
    </div>
  )
}

const Home = () => {
  const theme = React.useContext(ThemeCtx)

  return (
      <h1>Home</h1>
  )
}

function App() {
  return (
    <ThemeCtx.Provider value={DefaultThemeContext}>
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
        </BrowserRouter>
    </ThemeCtx.Provider>
  )
}

export default App;
