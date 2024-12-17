import { useState } from "react";

// hooks
// constructor -> didMount -> shouldUpdate -> didUpdate -> willUnmount
function CounterFn() {
    const [count, setCount] = useState(100);

    function inc() {
        setCount(count + 1);
    }

    function dec() {
        setCount(count - 1);
    }

    return (<div>
        <h3 className="text-xl font-bold">Count:{count}</h3>
        <button className="bg-orange-500 px-4 py-2 text-white hover:bg-orange-600" onClick={inc} >++</button>
        <button className="bg-orange-500 px-4 py-2 text-white hover:bg-orange-600 ml-2" onClick={dec}>--</button>
    </div>);
}

export default CounterFn;