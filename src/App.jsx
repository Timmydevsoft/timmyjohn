import { useState } from 'react'
import './App.css'
import Header from './component/Header'
// import Introduction from './component/Introduction'
import More from './component/More'
import Stack from './component/Stack'
import Project from "./component/Project"
import Achievement from './component/Achievement'
import Interest from './component/Interest'
import Introductions from './component/Introductions'
import Footer from './component/Footer'
// import Passion from './component/Passion'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Router>
        <Header
            home = "Home"
            about = "About"
            project = "Projects"
            contact =" Reach me"
            interest = "Interest"
            award = "Award"
          />

          <Introductions/>
          <Stack/>
          <More/>
          <Project/>
          <Interest/>
          <Achievement/>
          <Footer/>
      </Router>
    </>
  )
}

export default App
