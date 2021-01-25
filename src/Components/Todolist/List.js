import React from "react";
import styled from 'styled-components/macro'

const Component = styled.div`
    padding: 1rem;
    background-color: #8abaf3;
    //border-bottom: 1px solid #e2e8f0;
`
const Item = styled.div`
    display: flex;
    align-items: center;
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    text-shadow: 1px 1px 2px white, 0 0 25px white, 0 0 5px white;
    &:not(:last-of-type) {
        margin-bottom: 1.5rem;
    }
`
const buttonStyles = `
    background-color: transparent;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0rem;
    font-size: 1.1rem;
    border:0;

    &:focus {
        outline: 0;
    }

    &:hover {
        cursor: pointer;
        filter: brightness(105%);
    }



`
const Complete = styled.button`
    ${buttonStyles};
    border: ${props => props.completed ? 0 : '2px solid black'};
    border: ${props => props.completed ? 0 : '2px solid black'};


`
const Label = styled.p`
    margin: 0 0 0 0.8rem;
    flex: 1;
 
    text-decoration: ${(props) => (props.completed ? 'line-through' : 'none' )};
    color: ${(props) => (props.completed ? '#080808' : 'black' )};
    
    &:hover {
        cursor: pointer;
        color: #4a5568;
    } 
`
const Delete = styled.button`
    ${buttonStyles};
`
const NoItems = styled.p`
 margin: 0;
 text-align: center;
 font-weight: 500;
 color: white;
  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
`

const List = ({ items, onComplete, onDelete }) => (
    <Component>
        {items.map(({id, completed, label}) => (
            <Item key={id}>
                <Complete completed={completed} onClick={onComplete(id)} >{completed && '✅'}</Complete>
                <Label completed={completed}>{label}</Label>
                <Delete onClick={onDelete(id)}> ❌ </Delete>
            </Item>
        ))}
        {items.length === 0 && <NoItems>Oops... Your todo list is empty</NoItems>}
    </Component>
)
export default List