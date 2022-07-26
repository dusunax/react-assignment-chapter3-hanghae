import './style.css'
import Container from 'react-bootstrap/Container';

import { useState } from 'react';

import Header from '../header/Header'
import Form from '../form/Form';
import TodoList from '../pages/TodoList';

export default function Layout(){    
    const initialList=[{id: 0, title: "", body: "", isDone: false}]
    const [list, setList]=useState(initialList);
    const [state, setState]=useState();
    const onChangeHandler=(props)=>{
        
    }

    return (
        <Container>
            <Header />
            <Form />
            <TodoList />
        </Container>
    );
}