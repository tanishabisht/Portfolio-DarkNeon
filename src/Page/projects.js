import {HeaderText, ProjCard} from '../Components'
import 'bootstrap/dist/css/bootstrap.min.css'
import './pages.scss'

const Projects = () => {

    const projValues = [
        {name:'SaferX', duration:'Dec 2020 — Dec 2020', content:'App on Women Safety. Won 1st Prize in Geekathon 2020, organized by Geek for Geeks Club SRM', skillsArr:['FLUTTER', 'NODE JS', 'MONGO DB']},
        {name:'MedWatch', duration:'Nov 2020 — Nov 2020', content:'Updated Elixir. Won Best Mobile/Web Application - Codestellation 2020 (organized by Brandeis University at Waltham, Massachusetts)', skillsArr:['FLUTTER', 'FIREBASE']},
        {name:'Elixir', duration:'Nov 2020 — Dec 2020', content:'1st Prize in HackYuva Hackathon, Best Health Hack in Synthacks 2020', skillsArr:['FLUTTER']},
        {name:'HealthX', duration:'Oct 2020 — Oct 2020', content:'Application for the pressing issue of breast cancer worldwide', skillsArr:['FLUTTER', 'NODE JS', 'MONGO DB']},
    ]


    return (
        <div className='container proj_page_container' id='projects'>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col'>
                    <HeaderText>PROJECTS</HeaderText>
                    <div className='row'>
                        {projValues.map(({name, duration, content, skillsArr}) => <div className='col-xs-12 col-sm-12 col-md-6'><ProjCard name={name} duration={duration} content={content}  skillsArr={skillsArr} /></div> )}                    
                    </div>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    )
}

export default Projects
