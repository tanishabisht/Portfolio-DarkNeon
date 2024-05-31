import './footer.scss'
import { linkedInLink } from '../../Content/variable'

const Footer = () => {
  return (
    <div className='footer_container'>
        <p className='footer_text text-center'>BUILT BY <a rel="noreferrer" target='_blank' style={{textDecoration:'none'}} href={linkedInLink}>TANISHA</a></p>
    </div>
  )
}

export default Footer