import Header from "./sharedComponents/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home.jsx"
import AboutUs from "./pages/AboutUs.jsx"
import Footer from "./sharedComponents/Footer.jsx"
import Services from "./pages/Services.jsx"
function App() {
  return (
    <>
    <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={< Home/>} />
          <Route exact path="/about" element={<AboutUs />} />
          {/* <Route exact path="/contact" element={<Contact />} /> */}
          <Route exact path="/ourservices" element={<Services />} />
        </Routes>

        <Footer />
      </Router>
      {/* <Header/>
      <div style ={{ display : "flex" , justifyContent : "center"}}>
      <Home/>
      </div>
      <Footer/> */}
      
    </>
  )
}

export default App
