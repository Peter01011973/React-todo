import React, {Component} from 'react'
import TodoList from '../todo-list/todo-list'
import './app.css'
import AppHeader from '../app-header/app-header'
import ItemAdd from '../item-add/item-add'
import SearchPanel from '../search-panel/search-panel'
import ToggleButton from '../toggleButton/toggleButton'
import ShowHide from '../ShowHide/show-hide'
import InputTemperature from '../inputTemperature/inputTemperature'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todoList: [
                {label: 'Drink coffe', important: false, done: false, id: 1},
                {label: 'Create an Awesome React App', important: false, done: false, id: 2},
                {label: 'Have a lunch', important: false, done: false, id: 3}
            ], 
            filter: 'all',
            search: '',
            scale: 'c',
            temperature: 0
        }
        this.temperatureCChangeHandler = this.temperatureCChangeHandler.bind(this)
        this.temperatureFChangeHandler = this.temperatureFChangeHandler.bind(this)
    }


    indexId = 100;

    toggleProperty = (arr, id, propName, value) => {
        const index = arr.findIndex((item)=>item.id === id)
        const item = propName === 'label' ? 
            { ...arr[index], [propName]: value } : { ...arr[index], [propName]: !arr[index][propName] } ;
        return [
          ...arr.slice(0, index),
          item,
          ...arr.slice(index + 1)
        ];
    };

    toggleImportantHandler = (id) => {
        this.setState(
            ({todoList})=>{ return {todoList: this.toggleProperty(todoList, id, 'important')}}
        )        
    }

    onToggleDoneHandler = (id) => {
        this.setState(
            ({todoList})=>{ return {todoList: this.toggleProperty(todoList, id, 'done')}}
        )        
    }

    onDeleteHandler = id => {
        this.setState(({todoList}) => {    
            return {todoList: [...todoList].filter(cur => cur.id !==id)}
        })
    }

    addItemHandler = value => {
        this.setState((state) =>
            {
                return { 
                    todoList: [
                        ...state.todoList,
                        {
                            label: value, 
                            important: false, 
                            done: false, 
                            id: ++this.indexId
                        }
                    ] 
                }
            }
        )  
    }

    changeFilterHandler = filter => {
        this.setState(
            () => {
                return {
                    ...this.state,
                    filter
                }
            }
        )   
    }

    filtered() {
        
        if (this.state.filter !== 'all') {
            
            if (this.state.filter === 'done') { return this.state.todoList.filter((item)=>(item[this.state.filter])) } 
            return this.state.todoList.filter((item)=>(!item.done))
        }
        return this.state.todoList
    }

    searched(arr) {
        if (this.state.search !== '') {
            return arr.filter((item)=>(item.label.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ))
        }
        return arr        
    }

    changeSearchHandler = search => { 
        this.setState({search})  
    }


    temperatureCChangeHandler = value => {
        this.setState(()=>{return {
            scale: 'c',
            temperature: value
        }})   
    }

    temperatureFChangeHandler = value => {
        this.setState(()=>{return {
            scale: 'f',
            temperature: value
        }})   
    }

    onEditCompliteHandler = (label, id) => {this.setState( ({todoList}) => {return {todoList: this.toggleProperty(todoList, id, 'label', label)}})}

    render() {
        const {scale, search, filter} = this.state
        const celsius = scale === 'f' ? this.state.temperature * 2 : this.state.temperature
        const fahrenheit = scale === 'c' ? this.state.temperature / 2 : this.state.temperature   
        
        return (
            <div className='app-cotainer'>
                <AppHeader 
                    amountTodo = {this.state.todoList.length}
                    amountDone = {this.state.todoList.reduce((totalDone, cur)=>cur.done?++totalDone:totalDone,0)}
                />
                <SearchPanel 
                    onChangeFilter = {this.changeFilterHandler}
                    search = {search}
                    changeSearch = {this.changeSearchHandler}
                    filter = {filter}
                />
                <TodoList 
                    todos = {this.searched(this.filtered())}
                    onToggleImportant = {this.toggleImportantHandler}
                    onToggleDone = {this.onToggleDoneHandler}
                    onDelete = {this.onDeleteHandler}
                    filter = {this.state.filter}
                    onEditComplite = {this.onEditCompliteHandler}
                />
                <ItemAdd  onAddItem = {this.addItemHandler}/>
                <ToggleButton />
                <ShowHide />
                <InputTemperature 
                    cOrF = 'celsius'
                    temperature = {celsius}
                    onTemperatureChange = {this.temperatureCChangeHandler}
                />
                <InputTemperature 
                    cOrF = 'fahrenheit'
                    temperature = {fahrenheit}
                    onTemperatureChange = {this.temperatureFChangeHandler}
                />
            </div>
        )
    }
}
