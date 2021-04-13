import './sidelinks.scss'
import {LinkLogoFacebook, LinkLogoInstagram, LinkLogoLinkedin, LinkLogoGithub, LinkLine} from '../../Images'


const SideLinks = ({fb, insta, linkedIn, github}) => {
  return (
    <div className='sidelinks_container'>
      <a className='sidelinks_item' href={fb}><LinkLogoFacebook/></a>
      <a className='sidelinks_item' href={insta}><LinkLogoInstagram/></a>
      <a className='sidelinks_item' href={linkedIn}><LinkLogoLinkedin/></a>
      <a className='sidelinks_item' href={github}><LinkLogoGithub/></a>
      <LinkLine/>
    </div>
  )
}


export default SideLinks