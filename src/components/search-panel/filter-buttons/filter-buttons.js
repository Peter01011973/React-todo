import React, {Component} from 'react'
import './filter-buttons.css'

export default class FilterButtons extends Component {
    constructor(props) {
        super(props)
        // this.onChangeFilter = this.onChangeFilter.bind(this)
    }
    render() {
        const {filter} = this.props;
        const buttons = [
            {name: 'all', label: 'All'},
            {name: 'active', label: 'Active'},
            {name: 'done', label: 'Done'}
        ].map(({name, label, id}) => {
            const isActive = name === filter;
            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button
                    key = {name}
                    className={`btn  ${clazz}`}
                    onClick={() => this.props.onChangeFilter(name)}
            >{label}</button>   
            )
        })
        return(
            <div className="btn-group" role="group" >
                {buttons}
            </div>            
        )
    }
}