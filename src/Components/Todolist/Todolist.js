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
    handleComplete = id => () => {
        const newItems = [ ...this.state.items]

        const filteredItem = newItems.filter((item) => item.id === id)[0]

        filteredItem.completed = !filteredItem.completed

        this.setState({ item: newItems })
        //console.log(filteredItem)
    }

    handleDelete = id => () => {
        const filteredItems = this.state.items.filter(item => item.id !== id)

        this.setState({ items: filteredItems })
    }
    handleTaskAdd = (value) => {
        console.log(value)
    }

    render () {
        const { mode, items } = this.state
        return (
           <Wrapper>
               <Filter mode={mode} onModeChange={this.handleModeChange} />
               <Input onTaskAdd={this.handleTaskAdd} />
               <List items={items} onComplete={this.handleComplete} onDelete={this.handleDelete}/>
           </Wrapper>
           

        )
    }
}
export default Todolist