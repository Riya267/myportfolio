import Footer from './components/Footer'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ScrollToTop from './components/ScrollToTop'
import Home from './components/Home'

function App(): JSX.Element {

  return (
    <div className="App">
      <Header  />
      <main id="home">
        <Home />
        <About />
        <Skills />
        <Projects  />
        <Contact />
        <ScrollToTop />
      </main>
      <Footer  />
    </div>
  )
}

export default App