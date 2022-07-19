import React, { Component } from 'react'
import Die from './Die';
import './Dice.css'

class Dice extends Component {
    static defaultProps = { sides: ["one", "two", "three", "four", "five", "six"] }
    constructor(props) {
        super(props)
        this.state = { dice1: 'six', dice2: 'six', rolling: false }
        this.roll = this.roll.bind(this)
    }

    roll() {
        const interval = setInterval(() => {
            const randNum1 = this.props.sides[Math.floor(Math.random() * 6)]
            const randNum2 = this.props.sides[Math.floor(Math.random() * 6)]
            this.setState({ dice1: randNum1, dice2: randNum2, rolling: true })
        }, 200)
        document.getElementById("diceSound").play()
        setTimeout(() => {
            clearInterval(interval)
            this.setState({ rolling: false })
        }, 1000)
    }

    render() {
        return (
            <div className='max-w-7xl mx-auto sm:px-6 lg:px-8' >
                <div className='flex flex-col justify-center items-center gap-y-20 mt-48'>
                    <div className='flex justify-center items-center gap-x-4'>
                        <Die num={this.state.dice1} wobble={this.state.rolling ? "wobble" : ""} />
                        <Die num={this.state.dice2} wobble={this.state.rolling ? "wobble" : ""} />
                    </div>
                    <button onClick={this.roll} type="button"
                        className="inline-flex w-60 md:w-40 justify-center items-center px-4 py-2 border border-transparent text-md font-medium rounded-full shadow-sm text-white bg-rose-600 hover:bg-rose-700 disabled:bg-rose-400 focus:outline-none transition-all duration-500"
                        disabled={this.state.rolling}>
                        {this.state.rolling ? "Rolling..." : "Roll"}
                    </button>
                </div>

                <audio id="diceSound">
                    <source src={'dice.mp3'} type="audio/mp3" />
                    Your browser does not support the audio element.
                </audio>
            </div >
        );
    }
}

export default Dice;
