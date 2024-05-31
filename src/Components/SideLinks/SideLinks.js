import './sidelinks.scss'
import { LinkLogoFacebook, LinkLogoInstagram, LinkLogoLinkedin, LinkLogoGithub, LinkLine } from '../../Images'


const SideLinks = ({fb, insta, linkedIn, github}) => {
  return (
    <div className='sidelinks_container'>
      <a className='sidelinks_item' rel="noreferrer" target='_blank' href={fb}><LinkLogoFacebook/></a>
      <a className='sidelinks_item' rel="noreferrer" target='_blank' href={insta}><LinkLogoInstagram/></a>
      <a className='sidelinks_item' rel="noreferrer" target='_blank' href={linkedIn}><LinkLogoLinkedin/></a>
      <a className='sidelinks_item' rel="noreferrer" target='_blank' href={github}><LinkLogoGithub/></a>
      <LinkLine/>
    </div>
  )
}


export default SideLinks