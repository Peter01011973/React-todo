import React, {Component} from 'react'
import './todo-list-item.css'

class TodoListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            edit: true,
            editLabel: this.props.label
        }
    }

    onChangeEditLabel = e => {this.setState({editLabel: e.target.value})}

    onEdit = (e) => {
        if (!this.state.edit) {this.props.onEditComplite(this.state.editLabel)}
        this.setState(state => { return {edit: !state.edit}})
    }

    render() {
        const {label, important, done, onToggleImportant, onToggleDone, onDelete} = this.props
        let classNames = 'todo-list-item d-flex'
        if (important) {classNames +=' important'}
        if (done) {classNames +=' done'}

        return (
            <span className={classNames}>
                
                {
                    this.state.edit ? (
                        <span
                            style={important ? { color: 'tomato' } : { color: 'black' }}
                            onClick={onToggleDone}
                        >
                            {label}
                        </span>
                    ) : (
                            <input
                                type='text'
                                value={this.state.editLabel}
                                className='form-control'
                                onChange = {this.onChangeEditLabel}
                            />
                        )
                }

                {
                    this.state.edit &&
                    <div>
                        <button
                            className='btn btn-outline-danger btn-sm float-right'
                            onClick={onDelete}
                        >
                            <i className='fa fa-trash-o'></i>
                        </button>

                        <button
                            className='btn btn-outline-success btn-sm float-right'
                            onClick={onToggleImportant}
                        >
                            <i className='fa fa-exclamation'></i>
                        </button>
                    </div>
                }
                <button 
                    className='btn btn-outline-primary btn-sm float-right'
                    onClick = {this.onEdit}
                >
                    <i className='fa fa-edit'></i>
                </button>
            </span>
        )
    }
} 

export default TodoListItem