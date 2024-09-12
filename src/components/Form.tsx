import style from '../assets/styles/form.module.css'
import { useState } from 'react';


interface FormProps {
    addTodo: (title: string) => void;
}


export const Form = ({addTodo} : FormProps) => {

    
    const [inputText, setInputText] = useState<string>('');
    
    const createTodoList = (e: any) =>{
        e.preventDefault();
        if(inputText === '') return;
        addTodo (inputText);
        //clear value after submit
        setInputText('');
        const input = document.querySelector('input');
        if(input){
            input.value = '';
        }

    }

    return (
        <form className={style['form']}>
            <input type="text" onChange={(e) => setInputText(e.target.value)}/>
            <button className='btnAdd' type="submit"  onClick={createTodoList}>+</button>
        </form>
    )
}