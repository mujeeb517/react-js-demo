// Conditional rendering
function Result(props) {
    return <div>
        {/* {props.marks >= 40 ? <h1>Passed</h1> : <h1>Failed</h1>} */}
        {props.marks >= 40 && <h1>Passed!</h1>}
    </div>
}

export default Result;