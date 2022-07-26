import List from '../list/List';

export default function TodoList(props){
    return (
        <div>
            <h3 className='my-3'>Working.. 🔥</h3>
            
            <List 
            done={false} 
            list={props.list.filter((ls)=>ls.isDone == false)}
            onSubmitHandler={props.onSubmitHandler}
            />

            <h3 className='my-3'>Done..! 🎉</h3>

            <List 
            done={true} 
            list={props.list.filter((ls)=>ls.isDone == true)}
            onSubmitHandler={props.onSubmitHandler}
            />
        </div>
    );
}