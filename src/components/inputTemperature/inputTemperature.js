import React, {Component} from 'react'

export default class InputTemperature extends Component {
    constructor(props) {
        super(props)
        this.changeHandle = this.changeHandle.bind(this)
    }

    changeHandle(e) {        
        this.props.onTemperatureChange(e.target.value)
    }

    render() {
        const {temperature, cOrF} = this.props
        return(
            <div>
                <fieldset>
                    <legend>Input temperature in {cOrF}</legend>
                    <input 
                        type = 'number'
                        value = {temperature}
                        onChange = {this.changeHandle}
                        className = 'form-control'
                    />
                </fieldset>
            </div>
        )
    }
}