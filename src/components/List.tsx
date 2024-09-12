import style from '../assets/styles/list.module.css'
import Task from '../interfaces/todo.interface';
import iconTrash from '../assets/trash-solid.svg'

interface ListProps {
    tasks: Task[];
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    filterTodos: (filter: string) => void;
}

export const List = ({ tasks, toggleTodo, deleteTodo, filterTodos }: ListProps) => {


    return (
        <div className={style['list']}>
            <div className={style['list-header']}>
                <h3>List: </h3>
                <select name="" className={style['filter']} onChange={(e) => filterTodos(e.target.value)}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incompleted">Incompleted</option>
                </select>
            </div>

            <ul className={style['listItems']}>
                {tasks.map((item, index) => (
                    <li
                        key={item.id}
                        className={item.completed ? style['completed'] : style['incompleted']}
                        onClick={() => toggleTodo(item.id)}
                    >
                        <p>
                            {index + 1}. {item.title}
                        </p>
                        <img src={iconTrash} alt="delete" className={style['iconTrash']}
                             onClick={(e) => {
                                e.stopPropagation();
                                deleteTodo(item.id)
                            }
                        }/>
                    </li>
                ))}
            </ul>
        </div>
    )
}