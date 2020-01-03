import React, {Component} from 'react'
import './item-add.css'

export default class ItemAdd extends Component {

    state = {
        value: ''
    }

    submitAddItem = (e) => {
        this.props.onAddItem(this.state.value)
        e.preventDefault()
        this.setState({value: ''})
    }

    onChangeTodoItem = (event)=>this.setState({value: event.target.value})

    render() {
        return (
            <form className = 'item-add d-flex' onSubmit = {this.submitAddItem}>
                <input 
                    className = 'form-control'
                    type = 'text'
                    placeholder = 'Something new to be done?'
                    value = {this.state.value}
                    onChange = {this.onChangeTodoItem}
                />
                <button className = 'btn btn-outline-secondary'>add</button>
            </form>
        )
    }
} 

