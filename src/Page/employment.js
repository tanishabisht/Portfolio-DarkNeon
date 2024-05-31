import { EmpCard, HeaderText } from '../Components'
import { allExperiences } from '../Content/variable'
import './pages.scss'

const Employment = () => {
    return (
        <div className='container emp_page_container' id='employment'>
            <div className='row'>
                <div className='col col-2'></div>
                <div className='col col-8'>
                    <HeaderText>EMPLOYMENT HISTORY</HeaderText>
                    {allExperiences.map(({heading, content, duration}) => <EmpCard heading={heading} content={content} vertical={duration} /> )}                    
                </div>
                <div className='col col-2'></div>
            </div>
        </div>
    )
}

export default Employment