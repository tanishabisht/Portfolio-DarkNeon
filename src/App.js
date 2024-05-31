import './App.css'
import {Navbar, Footer, SideLinks, SideMail} from './Components'
import {Hero, Employment, Projects} from './Page'
import { fbLink, instaLink, linkedInLink, gitHubLink, emailAddress } from './Content/variable'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Employment/>
      <Projects/>
      <Footer/>
      <SideLinks fb={fbLink} insta={instaLink} linkedIn={linkedInLink} github={gitHubLink} />
      <SideMail mail={`mailto:${emailAddress}`} />
    </div>
  )
}

export default App
