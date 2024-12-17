import AutoCounter from "./AutoCounter";
import AutoCounterFn from "./AutoCounterFn";
import Counter from "./Counter";
import CounterFn from "./CounterFn";

function Home() {
    return (<div className="m-4 h-screen">
        <h1 className="text-xl font-bold">Home Page</h1>
        {/* <Counter /> */}
        {/* <AutoCounter /> */}
        {/* <CounterFn /> */}
        <AutoCounterFn />
    </div>);
}

export default Home;