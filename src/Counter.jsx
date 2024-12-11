import React from 'react';
//Component: Function or class
// UI or null
// props: external, readonly
// state: internal, mutate
class Counter extends React.Component {
    state = {
        count: 10,
    }

    inc = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    dec = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        return <div>
            <h3>{this.state.count}</h3>
            <button onClick={this.inc}>++</button>
            <button onClick={this.dec}>--</button>
        </div>
    }
}

export default Counter;
