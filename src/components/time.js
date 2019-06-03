import React, { Component } from 'react';

export default class App extends Component {
    interval = null;

    currentTime() {
        return new Date().toLocaleTimeString();
    };
    constructor(props) {
        super(props);
        this.state= {
            time: this.currentTime()
        }
    }

    render() {
        return (
            <div className="App" style={timeClass}>
                <h2>{this.state.time}</h2>
            </div>
        );
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({time: this.currentTime()}), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
}

const timeClass = {
    width: "300px",
    fontSize: "40px",
    margin: "30px auto",
    boxSizing: "border-box",
    textAlign: "center"
}