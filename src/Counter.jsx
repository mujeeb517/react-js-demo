import React from 'react';
//Component: Function or class
// UI or null
// props: external, readonly
// state: internal, mutate
class Counter extends React.Component {
    state = {
        count: 10,
    }

    // x1
    constructor() {
        super();
        console.log('constructor');
    }

    // x1
    componentDidMount() {
        // api calls
        console.log('did mount');
    }

    // xN
    shouldComponentUpdate(props, state) {
        console.log(props, state)
        return state.count <= 20
    }

    // xN
    componentDidUpdate() {
        console.log('did update');
    }

    // x1
    componentWillUnmount() {
        // cleanup
        console.log('will unmount');
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
            <h3 className="text-xl font-bold">Count: {this.state.count}</h3>
            <button className="bg-orange-500 px-4 py-2 text-white hover:bg-orange-600" onClick={this.inc}>++</button>
            <button className="bg-orange-500 px-4 py-2 text-white hover:bg-orange-600 ml-2" onClick={this.dec}>--</button>
        </div>
    }
}

export default Counter;
