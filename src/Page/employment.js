import {EmpCard, HeaderText} from '../Components'
import './pages.scss'

const Employment = () => {

    const empValues = [
        {heading:'Flutter App Developer at Mentor Match India', content:'Making the app with my team for this startup which will launch in both Google Play Store and Apple App Store.', duration:'Dec 2021 Present'},
        {heading:'Technical Lead at SRM Team Hackerearth', content:'Guide juniors in the club and do multiple projects and also organize events like hackathons, competitive coding events, quizes etc', duration:'Oct 2021 Present'},
        {heading:'Block-chain Associate at Next Tech Lab', content:'Work as a block-chain researcher and do projects on it', duration:'Sep 2020 Present'},
        {heading:'Block-chain researcher at Data Science Community SRM', content:'Work in development and research of Block-chain Projects', duration:'Aug 2020 Present'},
        {heading:'Work in development and research of Block-chain Projects', content:'Work in development and research of Block-chain Projects', duration:'Jul 2019 Oct 2020'}
    ]


    return (
        <div className='container emp_page_container' id='employment'>
            <div className='row'>
                <div className='col col-2'></div>
                <div className='col col-8'>
                    <HeaderText>EMPLOYMENT HISTORY</HeaderText>
                    {empValues.map(({heading, content, duration}) => <EmpCard heading={heading} content={content} vertical={duration} /> )}                    
                </div>
                <div className='col col-2'></div>
            </div>
        </div>
    )
}

export default Employment
