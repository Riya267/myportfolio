import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ScrollToTop from './components/ScrollTop'
import Home from './components/Home'
import Services from './components/Services'
import Work from './components/Work'
import SocialLinksWrapper from './components/SocialLinks'
import Banner from './components/Banner'
import { BannerInfo } from './constants'

function App(): JSX.Element {
  return (
    <div
      className={`flex flex-row justify-end bg-gradient-to-r from-[#150f1e] via-[#240307] to-[#1f020a] text-white relative overflow-hidden text-white`}
    >
      <div className="top-banner flex flex-col justify-center items-center fixed top-0 lg:top-5 left-1/2 transform -translate-x-1/2 backdrop-blur-lg bg-opacity-15 py-2 w-full lg:rounded-full lg:rounded-tr-none z-10">
        {BannerInfo.map((banner) => (
          <Banner link={banner.link} message={banner.message} />
        ))}
        <SocialLinksWrapper />
      </div>
      <Header />
      <section className="w-full h-full lg:px-6 section-spacing">
        <main>
          <Home />
          <About />
          <Services />
          <Skills />
          <Work />
          <Projects />
          <Contact />
          <ScrollToTop />
        </main>
      </section>
    </div>
  )
}

export default App
