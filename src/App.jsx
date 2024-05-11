import { useState } from 'react'
import Header from "./sharedComponents/Header"
import './App.css'
import Home from "./pages/Home.jsx"
import Footer from "./sharedComponents/Footer.jsx"
function App() {
  return (
    <>
      <Header/>
      <div style ={{ display : "flex" , justifyContent : "center"}}>
      <Home/>
      </div>
      <Footer/>
      {/* <h1>stackmentalist</h1> */}
        
    </>
  )
}

export default App
