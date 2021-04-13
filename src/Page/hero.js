import {HeroText, LightBtn} from '../Components'
import './pages.scss'



const Hero = () => {
  return (
    <div className='container hero_container' id='hero'>
        <div className='row'>
            <div className='col col-2'></div>
            <div className='col col-8'>
                <h4 className='hero_pre_header'>This is</h4>
                <HeroText>EESHAN DUTTA</HeroText>
                <p className='hero_para'>I am a 2nd Year Computer Science Engineering student having interest in competitive programming , Flutter App development, Block-chain Technology and yes Debating and Anime. I have in hand experience in Flutter App Development in the industry and have also participated in numerous hackathons and competitive programming events all across the world.</p>
                <br/><LightBtn><a className='home_linkBtn' href='https://www.linkedin.com/in/eeshan-dutta-03508a1b5/'>Get In Touch</a></LightBtn>
            </div>
            <div className='col col-2'></div>
        </div>
    </div>
  )
}



export default Hero