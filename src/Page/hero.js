import { HeroText, LightBtn } from '../Components'
import { nameCapitals, bioContent } from '../Content/variable'
import './pages.scss'



const Hero = () => {
  return (
    <div className='container hero_container' id='hero'>
        <div className='row'>
            <div className='col col-2'></div>
            <div className='col col-8'>
                <h4 className='hero_pre_header'>This is</h4>
                <HeroText>{nameCapitals}</HeroText>
                <p className='hero_para'>{bioContent}</p>
                <br/><LightBtn><a target='_blank' rel="noreferrer" className='home_linkBtn' href='https://www.linkedin.com/in/tanisha-bisht/'>Get In Touch</a></LightBtn>
            </div>
            <div className='col col-2'></div>
        </div>
    </div>
  )
}



export default Hero