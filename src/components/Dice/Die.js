import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'

library.add(faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix)

class Die extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="Dice">
                    <FontAwesomeIcon icon={`fa-solid fa-dice-${this.props.num}`} className={`${this.props.wobble} text-cyan-700 text-9xl`} />
                </div>
            </div>
        );
    }
}

export default Die;
