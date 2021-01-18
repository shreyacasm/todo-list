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
        mode: 'all',
        items: [ 
        {
            id: 1,
            label: "Make the list component",
            completed: false
        },
        {
            id: 2,
            label: "Inhale wisely",
            completed: true
        },
        {
            id: 3,
            label: "Drink a cup of tea",
            completed: false
        }
        ]
    }

    handleModeChange = mode => () => {
        this.setState({ mode })
    }

    render () {
        const { mode, items } = this.state
        return (
           <Wrapper>
               <Filter mode={mode} onModeChange={this.handleModeChange} />
               <Input/>
               <List items={items}/>
           </Wrapper>
           

        )
    }
}
export default Todolist