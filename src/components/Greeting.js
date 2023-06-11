import React from 'react'

import { useState } from 'react'

const Greeting = () => {
    let[name, setName] = useState("");
    function handler(event){
        setName(event.target.value);
    }
    return(
        <>
        <P>Enter Your Name : </P>
        <input type="text" placeholder='enter your name' onChange={handler}/>
        <p>Hello {name}!</p>
        
        </>
    );
}

export default Greeting;