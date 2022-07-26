import List from '../list/List';

export default function TodoList(){
    return (
        <div>
            <h3 className='my-3'>Working.. 🔥</h3>
            <List />
            <h3 className='my-3'>Done..! 🎉</h3>
            <List />
        </div>
    );
}