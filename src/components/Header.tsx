import style from '../assets/styles/header.module.css'


export const Header = () => {
    return (
        <div className={style['header']}>
            <p>Let's add what you have to do!</p>
            <p>Fill the input and click button or 'Enter' to add a new task into the list</p>
            <p>To mark as completed, just click directly to the task</p>            
        </div>
    )
}