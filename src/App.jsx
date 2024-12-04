import { useContext, useState } from 'react'

import './App.css'
import Home from './pages/Home'
import { ThemeContext } from './context/ThemeContext'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Testimonies from './components/Testimonies'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
  const [theme,setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
    <div className={`${theme} ${theme == 'dark'?'bg-gray-900 text-white': null} min-h-screen 
    flex flex-col items-center justify-center `}>
      <Header />
       <Home />
       <About />
       <Services />
       <Projects />
       <Testimonies />
       <Contact />
       <Footer />
    </div>
    </ThemeContext.Provider>
  )
}

export default App
