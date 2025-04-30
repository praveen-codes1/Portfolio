import React,{useState} from 'react';
import About from './about.jsx';

function Event(){
    const [showAbout,setShowAbout]=useState(false);

    function handleToggleAbout(){
        setShowAbout(!showAbout);
    }
    return(
        <div>
            <button onClick={handleToggleAbout}>
                {showAbout?"Hide":"Show"} About Me
            </button>
            {showAbout && <About/>}
        </div>
    );
}
export default Event;