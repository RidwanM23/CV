import { useState } from 'react'
import Header from './Components/Header'
import Profile from './Components/Profile'
import About from './Components/About'
import Skills from './Components/Skills'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Profile />
      <About />
      <Skills />
    </>
  )
}

export default App
