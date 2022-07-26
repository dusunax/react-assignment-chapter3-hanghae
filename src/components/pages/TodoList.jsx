import List from '../list/List';

export default function TodoList(props){
    return (
        <div>
            <h3 className='my-3'>Working.. 🔥</h3>
            <List {...props} />
            <h3 className='my-3'>Done..! 🎉</h3>
        </div>
    );
}