import './style.css'
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export default function MyForm (props){
    const {onChangeHandler, onSubmitHandler}=props;
    return (
        <Form className='mb-4'>
            <div style={{flex: "0 0 auto"}}>
                <label className='mx-3'>
                    제목:
                </label>
                <input 
                type="text"
                style={{width: '160px'}}
                name="title"
                onChange={onChangeHandler}
                />
            </div>
            <div style={{flex: "0 0 auto"}}>
                <label className='mx-3'>
                    내용:
                </label>
                <input 
                type="text"
                style={{width: '160px'}}
                name="context"
                onChange={onChangeHandler}
                />
            </div>
            <Button 
            variant='dark'
            // type="submit"
            onClick={onSubmitHandler}
            name='btnSubmit'
            >
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
