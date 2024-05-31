import { HeaderText, ProjCard } from '../Components'
import { allProjects } from '../Content/variable'
import 'bootstrap/dist/css/bootstrap.min.css'
import './pages.scss'

const Projects = () => {
    return (
        <div className='container proj_page_container' id='projects'>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col'>
                    <HeaderText>PROJECTS</HeaderText>
                    <div className='row'>
                        {allProjects.map(({name, duration, content, skillsArr}) => <div className='col-xs-12 col-sm-12 col-md-6'><ProjCard name={name} duration={duration} content={content}  skillsArr={skillsArr} /></div> )}                    
                    </div>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    )
}

export default Projects