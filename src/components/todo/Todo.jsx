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
            <div>
                <Button variant='outline-dark' className='shadow-sm'>
                    삭제하기
                </Button>
                <Button variant='outline-success' className='shadow-sm'>
                    완료
                </Button>
            </div>
        </div>
    );
}