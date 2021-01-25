import React from "react";
import styled from "styled-components/macro";

const Component = styled.div`
    border-bottom: 1px solid #e2e8f0;
    display:flex;
`
const Button = styled.button`
    background-color: ${props => props.selected ? '#edf2f7' : "#909090"};
    border: 0;
    flex: 1;
    font-size: 1rem;
    font-weight: ${props => props.selected ? 600 : 500};
    padding: 0.8rem;
    transition: all 0.25s ease-in-out;
    text-transform: uppercase;
    &:first-of-type {
        border-radius: 0.375rem 0 0 0;
        border-right: 1px solid #e2e8f0;
        
    }
    &:first-of-type {
        border-radius: 0 0.375rem 0 0;
        border-left: 1px solid #e2e8f0;
        
    }
    &:focus{
        outline: 0;
    }
    &:hover{
        cursor: pointer;
        background-color: #e2e8f0;
    }
`
const buttons = [
    {
        value: 'all',
        label: 'All'
    },
    {
        value: 'active',
        label: 'Active'
    },
    {
        value: 'completed',
        label: 'Completed'
    }
]

const Filter = ( { mode, onModeChange } ) => (
    <Component>
        { buttons.map(({ value, label }) => 
        (
            <Button 
                key={value} 
                onClick={onModeChange(value)}
                selected={ mode === value}
            >
                {label}
            </Button>
        ))}
    </Component>
) 
export default Filter