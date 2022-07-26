import Button from 'react-bootstrap/Button';
import './style.css'

export default function Todo(props){
    const {done, title, context, id, onSubmitHandler} = props
    return (
        <div className={
            done? 'done Todo shadow-sm':'Todo shadow-sm'
        }>
            <h4>
                {title}
            </h4>
            <p className='mb-4'>
                {context}
            </p>
            <div className='btn-container'>
                <Button variant='outline-dark'
                className='shadow-sm'
                name='btnDelete'
                value={id}
                onClick={onSubmitHandler}>
                    삭제하기
                </Button>
                <Button variant='outline-success'
                className='shadow-sm'
                name={done?'btnDone':'btnUndone'}
                value={id}
                onClick={onSubmitHandler}>
                    {done?"완료취소":"완료하기"}
                </Button>
            </div>
        </div>
    );
}