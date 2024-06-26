import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ScrollToTop from './components/ScrollToTop'
import Home from './components/Home'
import StarsCanvas from '././utils/star'
import Services from './components/Services'

function App(): JSX.Element {
  return (
    <div className={`flex flex-row justify-end bg-slate-900 text-white`}>
      <Header />
      <section className='w-[80%] h-full'>
        <main id="home">
         <div className='relative z-0'>
          <Home />
          <About />
          <Services />
          <Skills />
          <Projects  />
          <Contact />
          <StarsCanvas />
          </div>
          <ScrollToTop />
        </main>
      </section>
    </div>
  )
}

export default App