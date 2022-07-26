import './style.css'
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export default function MyForm (){
    return (
        <Form className='mb-4'>
            <div style={{flex: "0 0 auto"}}>
                <label>
                    제목
                </label>
                <input 
                type="text"
                style={{width: '160px'}}
                name="title"
                />
            </div>
            <div style={{flex: "0 0 auto"}}>
                <label>
                    내용
                </label>
                <input 
                type="text"
                style={{width: '160px'}}
                name="context"
                />
            </div>
            <Button variant='dark'
            type="submit">
                올리기
            </Button>
        </Form>
    );
}

const Form = styled.form`
background-color: #ddd;
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 10px;
border-radius: 10px;
`
