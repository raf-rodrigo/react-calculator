import './calculator.css';
import {Container, Hidden} from '@mui/material';
import {Box} from '@mui/system';
import { useState } from 'react';

export default function Calculator() {
    const [num, setNum] = useState(0);
    const [oldNum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();

    function inputNum(e){
        if (num === 0) {
            setNum(e.target.value);
        }else {
            setNum(num + e.target.value);
        }
    }

    function clear(e){
        setNum(0);
    }

    function porcentagem(){
        setNum(num / 100);
    }

    function changeSign(){
        if (num > 0) {
            setNum(-num);
        }else {
            setNum(Math.abs(num));
        }
    }

    function operatorHandler(e){
        var opteratorInput = e.target.value;
        setOperator(opteratorInput);
        setOldNum(num);
        setNum(0);
    }

    function calculate(){
        if(operator === "/") {
            setNum(parseFloat(oldNum) / parseFloat(num));
        }else if (operator === '*'){
            setNum(parseFloat(oldNum) * parseFloat(num));
        }else if (operator === '-'){
            setNum(parseFloat(oldNum) - parseFloat(num));
        }else if (operator === '+')
            setNum(parseFloat(oldNum) + parseFloat(num)); 
    }

    return(
        <div>
            <Box m={5}/>
            <Container maxWidth='xs'>
                <div className='wrapper'>
                    <h1 className='result'>{num}</h1>
                    <button onClick={clear}>AC</button>
                    <button onClick={changeSign}>+/-</button>
                    <button onClick={porcentagem}>%</button>
                    <button className='orange' onClick={operatorHandler} value={"/"}>/</button>

                    <button className='gray' onClick={inputNum} value={7}>7</button>
                    <button className='gray' onClick={inputNum} value={8}>8</button>
                    <button className='gray' onClick={inputNum} value={9}>9</button>
                    <button className='orange' onClick={operatorHandler} value={"*"}>*</button>

                    <button className='gray' onClick={inputNum} value={4}>4</button>
                    <button className='gray' onClick={inputNum} value={5}>5</button>
                    <button className='gray' onClick={inputNum} value={6}>6</button>
                    <button className='orange' onClick={operatorHandler} value={"-"}>-</button>
                    
                    <button className='gray' onClick={inputNum} value={1}>1</button>
                    <button className='gray' onClick={inputNum} value={2}>2</button>
                    <button className='gray' onClick={inputNum} value={3}>3</button>
                    <button className='orange' onClick={operatorHandler} value={"+"}>+</button>
                    
                    <button className='gray number_zero' onClick={inputNum} value={0}>0</button>
                    <button className='gray' onClick={inputNum} value={","}>,</button>
                    <button className='orange' onClick={calculate}>=</button>
                </div>
            </Container>
        </div>
    );
}