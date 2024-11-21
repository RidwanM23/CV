import { useState } from 'react'
import Header from './Components/Header'
import Profile from './Components/Profile'
import About from './Components/About'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Profile />
      <About />
    </>
  )
}

export default App
