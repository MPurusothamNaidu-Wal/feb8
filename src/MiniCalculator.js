import propTypes from "prop-types" ;
function MiniCalculator(props){
    if(props.operation == "add"){
        let sum = props.numOne + props.numTwo
        return( 
        <div className="MiniCalculatorDiv">
        <h1>MiniCalculator</h1>
        <h3>Number 1: {props.numOne}</h3>
        <h3>Number 2 : {props.numTwo}</h3>
        Result is {sum}
        </div>)
    }
    else if(props.operation == "mul"){
        let product = props.numOne * props.numTwo
        return(
        <div className="MiniCalculatorDiv">
        <h1>MiniCalculator</h1>
        <h3>Number 1: {props.numOne}</h3>
        <h3>Number 2 : {props.numTwo}</h3>
        Result is {product}
        </div>

        ) 
    }
    else if(props.operation == "div"){
        let remainder = props.numOne / props.numTwo
        return(
        <div className="MiniCalculatorDiv">
        <h1>MiniCalculator</h1>
        <h3>Number 1: {props.numOne}</h3>
        <h3>Number 2 : {props.numTwo}</h3>
        Result is {remainder}
        </div>
        ) 
    }
    else if(props.operation == "sub"){
        let num = props.numOne - props.numTwo
        return(
        <div className="MiniCalculatorDiv">
        <h1>MiniCalculator</h1>
        <h3>Number 1: {props.numOne}</h3>
        <h3>Number 2 : {props.numTwo}</h3>
        Result is {num}
        </div>
        ) 
    }
}
MiniCalculator.propTypes = {
    numOne: propTypes.number,
    numTwo: propTypes.number,
}
export default MiniCalculator ;