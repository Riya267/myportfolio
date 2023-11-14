import Footer from './components/Footer'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App(): JSX.Element {

  return (
    <div className="App">
      <Header  />
      <main id="home">
        <About />
        <Skills />
        <Projects  />
        <Contact />
      </main>
      <Footer  />
    </div>
  )
}

export default App