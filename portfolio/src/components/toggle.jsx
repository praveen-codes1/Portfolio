import React, {useState} from 'react';

function ToggleMessage(){
    const [show, setShow]=useState(true);

    return(
        <div>
            <button onClick={()=>setShow(!show)}>
                {show?"Hide":"Show"}Message
            </button>
            {show && <p>He is lovely</p>}
        </div>
    );
}
export default ToggleMessage;