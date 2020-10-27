import React, {useState} from 'react'

const Body = () => {
    const [numArr, setNumArr] = useState([false, false, false, false, 0]);
    const [numberInput, setNumberInput] = useState("");

    const submitNumberHandler = (e) =>{
        e.preventDefault();

        const newArray = Array.from(numArr);

        newArray[4]=numberInput;

        //Odd/Even
        numberInput%2 ? newArray[0] = false : newArray[0] = true;

        //Prime
        if(!newArray[0]){
            let temp = (numberInput/2)+1;
            let flag = false;
            for (let index = 3; index < temp; index += 2) {
                if(!(numberInput%index)){
                    flag = true;
                    break;
                }
            }
            newArray[1] = !flag;
        }

        //Armstrong
        if(numberInput>0){
            let len =  numberInput.length;
            let tempNum = numberInput;
            let sum = 0;
            for (let index = 0; index < len; index++) {
                let temp = tempNum%10;
                tempNum = parseInt(tempNum/10);
                sum += temp ** len;
                //console.log(`temp ${temp} and tempNum ${tempNum} and Sum ${sum}`);
            }
            //console.log(`numberInput: ${numberInput} ${typeof(numberInput)}|| sum: ${sum} ${typeof(sum)}`);
            //console.log(numberInput == sum); //true
            let num = parseInt(numberInput); 
            newArray[2] = (num === sum);
        }

        //Palindrome
        if(numberInput>9){
            let str =  numberInput.toString();
            let splitString = str.split("");
            let reverseArray = splitString.reverse();
            let joinArray = reverseArray.join("");
            newArray[3] = (str === joinArray);
        }else{
            newArray[3] = true;
        }
        console.log(newArray);

        setNumArr(newArray);
        
        console.log("numArr: "+numArr);
        setNumberInput("");
    }

    const numberInputChangeHandler = (e) =>{
        setNumberInput(e.target.value);
    }

    return (
        <div className="container mt-1">
            <div className="d-flex justify-content-center">
                <form className="form-inline m-2">
                    <div className="form-group m-2">
                        <input value={numberInput} onChange={numberInputChangeHandler} type="number" className="form-control" id="num" placeholder="Number" />
                    </div>
                    <button onClick={submitNumberHandler} type="submit" className="btn btn-primary m-2">Check</button>
                </form>
            </div>
            <div>
                <ul className="list-group m-2 p-2 ">
                    <li className="list-group-item">{numArr[4]} is a {numArr[0] ? "Even" : "Odd"} Number.</li>
                    <li className="list-group-item">{numArr[4]} is a {numArr[1] ? "Prime" : "not a Prime"} Number.</li>
                    <li className="list-group-item">{numArr[4]} is a {numArr[2] ? "Armstrong" : "not a Armstrong"} Number.</li>
                    <li className="list-group-item">{numArr[4]} is a {numArr[3] ? "Palindrome" : "not a Palindrome"} Number.</li>
                </ul>
            </div>
            <h1>@Akash_react_2020</h1>
        </div>
    )
}

export default Body;
