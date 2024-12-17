import React from 'react';
//Component: Function or class
// UI or null
// props: external, readonly
// state: internal, mutate
class AutoCounter extends React.Component {
    state = {
        count: 0,
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ count: this.state.count + 1 });
            console.log('incremented');
        }, 1000);
    }

    componentWillUnmount() {
        console.log('will unmount');
        clearInterval(this.interval);
    }

    render() {
        return <div>
            <h3 className="text-xl font-bold">Auto Count: {this.state.count}</h3>
        </div>
    }
}

export default AutoCounter;
