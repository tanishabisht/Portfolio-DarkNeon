import './App.css'
import {Navbar, Footer, SideLinks, SideMail} from './Components'
import {Hero, Employment, Projects} from './Page'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Employment/>
      <Projects/>
      <Footer/>
      <SideLinks fb='#' insta='#' linkedIn='#' medium='#' twitter='#' utube='#' />
      <SideMail mail='eeshandutta@gmail.com' />
    </div>
  )
}

export default App
