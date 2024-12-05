import { useState } from 'react'
import Header from './Components/Header'
import Profile from './Components/Profile'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Education from './Components/Education'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Profile />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App