import React, {Component} from 'react';
import NumberContext from '../contexts/NumberContext'

export default class extends Component{
    constructor(props) {
        super(props);
        this.state = {
            number: 5
        };

        this.updateNumber = this.updateNumber.bind(this);
    }

    updateNumber() {
        this.setState({
            number: Math.random()
        })
    }

    render() {
        return(
            <NumberContext.Provider value={7}>
                {this.props.children}
            </NumberContext.Provider>
        )
    }
}
