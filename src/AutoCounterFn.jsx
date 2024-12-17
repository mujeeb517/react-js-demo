import { useEffect, useState } from "react";

function AutoCounterFn() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1);
            console.log('incrementing...');
        }, 1000);

        return () => {
            console.log('unmounting');
            clearInterval(interval);
        }
    }, []);

    return (<div>
        <h1 className="font-bold text-xl text-gray-700">Count: {count} </h1>
    </div>);
}

export default AutoCounterFn;