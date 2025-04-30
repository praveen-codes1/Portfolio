import React, {useState} from 'react';


function Counter(){
    const [count, setCount]=useState(0);

    return(
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() =>setCount(count+1)}>
                INCREASE
            </button>
            <button onClick={() =>setCount(count-1)}>
                DECREASE
            </button>
            <button onClick={() =>setCount(0)}>
                RESET
            </button>
        </div>
    );
}
export default Counter;