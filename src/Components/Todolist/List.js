import React from "react";
import styled from 'styled-components/macro'

const Component = styled.div`
    padding: 1rem;
    border-bottom: 1px solid #e2e8f0;
`
const Item = styled.div``
const Complete = styled.button``
const label = styled.p``
const Delete = styled.button``
const List = ({ items }) => (
    <Component>
        {items.map((item) => (
            <Item key={item.id}>
                <Complete>completed</Complete>
                <label>{item.label}</label>
                <Delete>X</Delete>
            </Item>
        ))}
    </Component>
)
export default List