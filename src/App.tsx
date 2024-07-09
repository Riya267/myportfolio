import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ScrollToTop from './components/ScrollTop'
import Home from './components/Home'
import Services from './components/Services'
import Work from './components/Work'

function App(): JSX.Element {
  return (
    <div className={`flex flex-row justify-end bg-fuchsia-950 text-white`}>
      <Header />
      <section className='w-full h-full lg:px-6'>
        <main id="home">
          <Home />
          <About />
          <Services />
          <Skills />
          <Work />
          <Projects  />
          <Contact />
          <ScrollToTop />
        </main>
      </section>
    </div>
  )
}

export default App