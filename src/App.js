import React from 'react'
import styled from 'styled-components/macro'
import Todolist from './Components/Todolist/Todolist'
const Component = styled.div`
    display: flex;
    background-color: #fafafa;
    min-height:100vh;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
`
const Wrapper =styled.div`
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Header =styled.div`
    font-weight: 400;
    text-transform: uppercase;
    font-size: 2.5rem;
`

const App = () => (
    <Component>
        <Wrapper>
            <Header>
                Todo List
            </Header>
            <Todolist/>
        </Wrapper>
    </Component>
)

export default App