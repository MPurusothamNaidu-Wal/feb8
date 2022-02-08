import propTypes from "prop-types" ;
function MiniCalculator(props){
    if(props.operation == "add"){
        let sum = props.numOne + props.numTwo
        return( 
        <div className="MiniCalculatorDiv">
        <h1>MiniCalculator</h1>
        <h3>Num 1: {props.numOne}</h3>
        <h3>Num 2 : {props.numTwo}</h3>
        After Addition, Output is <strong>{sum}</strong>
        </div>)
    }
    else if(props.operation == "mul"){
        let sum = props.numOne * props.numTwo
        return(
        <div className="MiniCalculatorDiv">
        <h1>MiniCalculator</h1>
        <h3>Num 1: {props.numOne}</h3>
        <h3>Num 2 : {props.numTwo}</h3>
        After Multiplication, Output is <strong>{sum}</strong>
        </div>

        ) 
    }
    else if(props.operation == "div"){
        let sum = props.numOne / props.numTwo
        return(
        <div className="MiniCalculatorDiv">
        <h1>MiniCalculator</h1>
        <h3>Num 1: {props.numOne}</h3>
        <h3>Num 2 : {props.numTwo}</h3>
        After Division, Output is <strong>{sum}</strong>
        </div>
        ) 
    }
    else if(props.operation == "sub"){
        let sum = props.numOne - props.numTwo
        return(
        <div className="MiniCalculatorDiv">
        <h1>MiniCalculator</h1>
        <h3>Num 1: {props.numOne}</h3>
        <h3>Num 2 : {props.numTwo}</h3>
        After Substrattion, Output is <strong>{sum}</strong>
        </div>
        ) 
    }
    else{
        return null;
    }

   
}
MiniCalculator.propTypes = {
    numOne: propTypes.number,
    numTwo: propTypes.number,
}
export default MiniCalculator ;