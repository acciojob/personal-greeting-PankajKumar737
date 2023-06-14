import React from 'react'
import { useState } from 'react'

const Greeting = () => {
    let[name, setName] = useState("");
    return(
            <div>
                <p>Enter your name :</p> 
                <input type="text" onChange={(e)=>setName("Hello " + e.target.value +"!")}/>
                <p>{name}</p>
            </div>
        );
 }

 export default Greeting;