import React, { useState } from 'react';

export default function MyComponent() {

    const [name, setName] = useState("Guest");

    const [a, setA] = useState(18);

    const[isEmployed, setIsEmployed] = useState(false);

    const updateAandName = () => {
        setA(a + 1);
        setName("Guest")
    }

    const updateName = () => {
        setName("John Doe"); 
    }
    const toggleEmployment = () => {
        setIsEmployed(!isEmployed);
    }

    return(<div>
            <p>Name: {name}</p>
            <button onClick= {updateName}>Set Name</button>

            <p>Age: {a}</p>
            <button onClick= {updateAandName}>{a}</button>

            <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick= {toggleEmployment}>Toggle!</button>

            </div>);
}