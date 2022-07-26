import styled from 'styled-components';
import './style.css'

export default function Header(){
    return (
        <Nav>
            <a href="/">
                My Todo List
            </a>
            <span style={{display: 'block'}}>
                React
            </span>
        </Nav>        
    );
}

const Nav = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 10px;
`