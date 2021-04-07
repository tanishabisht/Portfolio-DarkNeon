import './sidelinks.scss'
import {LinkLine} from '../../Images'


const SideMail = ({mail}) => {
  return (
    <div className='sidemail_container'>
        <a className='mailVertical' href={mail}><p>{mail}</p></a>
        <LinkLine/>
    </div>
  )
}


export default SideMail