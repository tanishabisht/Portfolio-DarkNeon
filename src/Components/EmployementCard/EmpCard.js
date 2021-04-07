import './empCard.scss'



const EmpCard = ({vertical, heading, content}) => {
  return (
    <div className='emp_container'>
      <p className='emp_vertical'>{vertical}</p>
      <h4 className='emp_heading'>{heading}</h4>
      <p className='emp_content'>{content}</p>
    </div>
  )
}



export default EmpCard