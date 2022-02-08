import { useState } from "react";
function Average(){
    let sum=0;
    let avg = 0;
        let [num, setWork] = useState([]);
        function add(event){
            event.preventDefault();
            let formTag = event.target;
            let inputTag = formTag.num1;
            let newNum = [...num, inputTag.value];
            setWork(newNum);
            inputTag.value= ""
        }
        function average(event){
            num.map(function (val , index){
                sum += Number(val);
            })
            console.log(num.length)
            console.log(sum)
            avg = sum/(num.length );
            document.querySelector(".ban").innerHTML = "The average is " + avg
        }
    return(
        <div className="divAvg">  
            <h1>Average Function</h1>
            <form onSubmit={add}>
                <input type="number" className="Todoinput" placeholder="number" name="num1" /><br/>
                <button className="AvgSubmit">Show</button>
            </form>
            
            <button className="AvgSubmit" onClick={average}>Average</button>
            <h1 className="ban"></h1>
            {
                num.map(function (val , index){
                    return ( val + " ")
                })
            }
        </div>
    )
        }
export default Average;