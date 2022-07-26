import Button from 'react-bootstrap/Button';
import './style.css'

export default function Todo(){
    return (
        <div className='Todo shadow-sm'>
            <h4>
                리액트 공부하기
            </h4>
            <p className='mb-4'>
                리액트 기초를 공부해봅시다.
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