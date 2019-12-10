import React, {useState, useEffect} from 'react'
import './SimpsonQuotes.css'

const SimpsonQuotes = () => {
    const[citation, setCitation] = useState();
    const[img, setImg] = useState();

    const recup = () => {
        fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
        .then(res => res.json())
        .then(res => {
            setCitation(res[0].quote)
            setImg(res[0].image)
            console.log(res)
        })
        
    }

    return (
        <div className="content">
            <button id="buttonGenerate" onClick={recup}>press here</button>
            <h1 className="citation">{citation}</h1>
            <img src={img}/>
        </div>
    )
}

export default SimpsonQuotes;
