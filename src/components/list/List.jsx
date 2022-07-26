import Todo from '../todo/Todo';
import './style.css'

export default function List(props){
    return (
        <div className='todo-container'>
            {props.list.map((e, idx)=>{
                if(e.id !== 0){
                    return <Todo key={idx} {...e} />
                }
            })}
        </div>
    );
}