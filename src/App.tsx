import Footer from './components/Footer'
import Header from './components/Header'
import { useState } from 'react'

function App (): JSX.Element {
  const [isDarkMode, setDarkMode] = useState(true)
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode)
  }
  return (
      <div className="App">
        <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
        <Footer isDarkMode={isDarkMode}/>
      </div>
  )
}

export default App
