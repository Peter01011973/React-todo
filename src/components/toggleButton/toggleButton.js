import React, {Component} from 'react'

export default class ToggleButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle: true
        }
        // this.toggleHandler = this.toggleHandler.bind(this)
    } 
    // toggleHandler() {
    //     this.setState((state)=>({toggle: !state.toggle}))
    // }
    toggleHandler = () => this.setState((state)=>({toggle: !state.toggle}))

    render() {
        return (
            <div>
                {/* <p>Status: {this.state.toggle ? 'ON' : 'OFF'}</p> */}
                <button 
                    type="button" 
                    className="btn btn-warning"
                    // onClick = {() => this.setState((state)=>{return {toggle: !state.toggle}})}
                    onClick = {this.toggleHandler}
                >Status: {this.state.toggle ? 'ON' : 'OFF'}</button>
            </div>
        )
    }
}