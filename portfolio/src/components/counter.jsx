import React, {useState} from 'react';


function Counter(){
    const [count, setCount]=useState(0);

    return(
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() =>setCount(count+1)}>
                UP
            </button>
            <button onClick={() =>setCount(count-1)}>
                DOWN
            </button>
            <button onClick={() =>setCount(0)}>
                AGAIN
            </button>
        </div>
    );
}
export default Counter;