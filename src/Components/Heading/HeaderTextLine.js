import './headerText.scss'

const HeaderTextLine = ({children}) => {
    return (
        <>
            <h3 className='main_header_underline'>{children}</h3><br/>
        </>
    )
}

export default HeaderTextLine