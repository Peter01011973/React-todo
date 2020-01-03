import './search-panel.css'
import React, {Component} from 'react'
import FilterButtons from './filter-buttons/filter-buttons'

class SearchPanel extends Component {
    
    render() {
        const {search, changeSearch, onChangeFilter, filter} = this.props;
        return (
            <div className='search-panel d-flex'>
                <input
                    type='text'
                    className='form-control'
                    placeholder='search'
                    value = {search}
                    onChange = {(event) => changeSearch(event.target.value)}
                />
                <FilterButtons 
                    onChangeFilter = {onChangeFilter}
                    filter = {filter}
                />
            </div>
        )
    }
} 

export default SearchPanel