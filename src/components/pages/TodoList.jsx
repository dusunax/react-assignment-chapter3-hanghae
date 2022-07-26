import List from '../list/List';

export default function TodoList(props){
    const doneList=''
    const notDoneList=''
    console.log(props.list)
    return (
        <div>
            <h3 className='my-3'>Working.. 🔥</h3>
            <List {
                ...props
            } />
            <h3 className='my-3'>Done..! 🎉</h3>
        </div>
    );
}