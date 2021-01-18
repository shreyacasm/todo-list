import React, {Component} from 'react';
import styled from 'styled-components/macro'
import Filter from './Filter'
import Input from './Input'
import List from './List'

const Wrapper = styled.div`
    back-ground-color: #fff;
    border-radius: 0.375rem;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.15);
    min-width: 350px;
    
`

class Todolist extends Component {
    state = {
        mode: 'all'
    }

    handleModeChange = mode => () => {
        this.setState({ mode })
    }

    render () {
        const { mode } = this.state
        return (
           <Wrapper>
               <Filter mode={mode} onModeChange={this.handleModeChange} />
               <Input/>
               <List/>
           </Wrapper>
           

        )
    }
}
export default Todolist