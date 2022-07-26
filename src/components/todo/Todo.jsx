import Button from 'react-bootstrap/Button';
import './style.css'

export default function Todo(props){
    return (
        <div className='Todo shadow-sm'>
            <h4>
                {props.title}
            </h4>
            <p className='mb-4'>
                {props.context}
            </p>
            <div className='btn-container'>
                <Button variant='outline-dark'
                className='shadow-sm'
                name='btnDelete'
                value={props.id}
                onClick={props.onSubmitHandler}>
                    삭제하기
                </Button>
                <Button variant='outline-success'
                className='shadow-sm'
                name='btnDone'
                value={props.id}
                onClick={props.onSubmitHandler}>
                    완료
                </Button>
            </div>
        </div>
    );
}