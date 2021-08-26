import React, { Component } from 'react';

export class Timer extends Component {

    state = {
        timeLeft: 10
    }

    componentDidMount = () => {
        this.interval = setInterval(
            () => this.setState({
                timeLeft: this.state.timeLeft - 1
            }), 1000)
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.timeLeft === 1){
            clearInterval(this.interval)
        }
    }

    componentWillUnmount = () => {
        clearInterval(this.interval)
    }

    render() {
        console.log(this.state);
        return (
            <>
            {this.state.timeLeft > 0 
            ?
            <>
            <div id="time"> TIME LEFT:</div>
            <div id="clock">
               <p id="time">{this.state.timeLeft} <br/>sec </p>
            </div>
            </>
            :
            <div id="kaboom">
                KABOOM!
            </div>
            }
            </>
        )
    }
}

export default Timer