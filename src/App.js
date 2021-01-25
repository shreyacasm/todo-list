import React from 'react'
import styled from 'styled-components/macro'
import Todolist from './Components/Todolist/Todolist'
const Component = styled.div`
    display: flex;
    min-height:100vh;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
`
const Wrapper =styled.div`
    min-width: 50%;
    align-items: center;
`
const Header =styled.div`
    font-weight: 500;
    margin-bottom: 80px;
    margin-top: 80px;
    text-align : center;
    text-transform: uppercase;
    font-size: 3.5rem;
    color: white;
    text-shadow: 3px 3px 5px #000000;
`
const Footer =styled.div`
    font-weight: 200;
    width: 100%;
    margin-bottom: 0;
    text-align : center;
    font-size: 1.2rem;
    background-color: black;
    color: white;
    text-shadow: 3px 3px 5px #000000;
    left: 0;
    bottom: 0;
`

const App = () => (
    <>
    <Component>
        <Wrapper className="comp_app" >
            <Header>
                Todo List
            </Header>
            <Todolist/>
        </Wrapper>
    </Component>
    <Footer> with ❤️ by shreyacasm </Footer>
    </>
)

export default App