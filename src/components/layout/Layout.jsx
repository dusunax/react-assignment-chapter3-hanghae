import './style.css'
import Container from 'react-bootstrap/Container';

import { useState } from 'react';

import Header from '../header/Header'
import Form from '../form/Form';
import TodoList from '../pages/TodoList';

export default function Layout(){    
    const initialList=[{id: 0, title: "", context: "", isDone: false}]
    const [list, setList]=useState(initialList);
    const [state, setState]=useState({title: "", context: ""});
    const onChangeHandler=(e)=>{
        let newState;
        let newValue=e.target.value;
        if(e.target.name === 'title'){
            newState = {
                title: newValue, 
                context: state.context
            }
        } else {
            newState = { 
                title: state.title, 
                context: newValue
            }
        }
        setState(newState);
    }
    const onSubmitHandler=()=>{
        if(state.title.length===0){
            alert("제목을 입력해주세요.");
            document.querySelector('input[name="title"]').focus();
        } else if(state.context.length===0){
            alert("내용을 입력해주세요.");
            document.querySelector('input[name="context"]').focus();
        } else {
            setList([...list, {...state, id: list.length, isDone: false}]);
        }
    }

    return (
        <Container>
            <Header />
            <Form onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} />
            <TodoList list={list} onSubmitHandler={onSubmitHandler} />
        </Container>
    );
}