import Footer from './components/Footer'
import Header from './components/Header'
import { useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App (): JSX.Element {
  const [isDarkMode, setDarkMode] = useState(true)

  const toggleDarkMode = (): void => {
    setDarkMode(!isDarkMode)
  }

  return (
      <div className="App">
        <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <main id="home">
          <About isDarkMode={isDarkMode}/>
          <Skills isDarkMode={isDarkMode}/>
          <Projects isDarkMode={isDarkMode}/>
          <Contact isDarkMode={isDarkMode}/>
        </main>
        <Footer isDarkMode={isDarkMode}/>
      </div>
  )
}

export default App
