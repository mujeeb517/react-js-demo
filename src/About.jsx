import React, { useContext } from 'react';
import ValueContext from './context/ValueContext';

function Level3() {
    const value = useContext(ValueContext);
    console.log(value);
    return <div>
        <b>Level 3</b>
        <b>The value is : {value}</b>
    </div>
}

function Level2() {
    return <div>
        <b>Level 2</b>
        <Level3 />
    </div>
}

function Level1() {
    return <div>
        <b>Level 1</b>
        <Level2 />
    </div>
}


function Parent() {
    return <div>
        <Level1 />
    </div>
}

function About() {
    return (<div className="m-4">
        <h1 className="text-xl font-bold">About Page</h1>
        <ValueContext.Provider value={200202}>
            <Parent />
        </ValueContext.Provider>
    </div>);
}

export default About;