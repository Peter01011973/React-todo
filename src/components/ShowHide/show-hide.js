import React, {Component} from 'react'

function Warning({warn}) {
    if (warn) {return null}
    return (
        <h1>Be careful !!!</h1>
    )
}

Array.prototype.double = function() {return this.map(item => item*2)}

export default class ShowHide extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showHide: false
        }
        this.showOrHide = this.showOrHide.bind(this)
    }

    showOrHide() {
        this.setState(state => ({showHide: !state.showHide}))
    }

    // showOrHide = () => this.setState(state => ({showHide: !this.state.showHide}))

    render() {
        const shortid = require('shortid');
 
        // console.log(shortid.generate());
        return (
            <div>
                <Warning warn = {this.state.showHide}/>
                {/* <p>{[1,2,3,4,5].double().map(item=>String(item)+',')}</p> */}
                <button 
                    type="button" 
                    className="btn btn-info"
                    onClick = {this.showOrHide}
                >{this.state.showHide ? 'Show' : 'Hide'}</button>
            </div>
        )
    }
}