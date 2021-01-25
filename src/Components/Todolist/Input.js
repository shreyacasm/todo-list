import React, {Component} from "react";
import styled from 'styled-components/macro'

const Wrapper = styled.div`
    border-bottom: 1px solid #e2e8f0;
    display: flex;
`
const StyledInput = styled.input`
    width: 100%;
    padding: 0.8rem;
    font-size: 1.4rem;
    border: 0;
    color: white;
    text-shadow: 1px 1px 1px white;
    background-color: #2d4059;

    &:focus {
        outline: 0;

    }
`
const Button = styled.button`
    border: 0;
    border-left: 1px solid #e2e8f0;
    background-color: #f5564e;
    color: #000000;
    padding: 1rem 2rem;

    transition: all 0.2s ease-in-out;

    &: focus {
        outline: 0;
    }    
    &: hover {
        cursor: pointer;

    }
`
class Input extends Component {
    state = {
        value: '',
        edit: false
    }

    handleChange = (event) => {
        const inputValue = event.target.value

        this.setState({ value: inputValue })

        if( inputValue === ''){
            this.setState({ edit:false })
        }
        else {
            this.setState({ edit: true })
        }
    }
    handleKeyPress = event =>{
        if(event.key === 'Enter') {
            this.handleSubmit()
        }
    }
    handleSubmit = () =>{
        this.props.onTaskAdd(this.state.value)
        this.setState({ value: '', edit: false})
    }
    render (){
        return (
            <Wrapper>
                <StyledInput 
                type='text' 
                placeholder="Add new task here" 
                value={this.state.value} 
                onChange = {this.handleChange}
                onKeyPress={this.handleKeyPress}
                />
                {this.state.edit && <Button onClick={this.handleSubmit}>Add</Button>}
            </Wrapper>
        )
    }
}

export default Input