import React from "react";
import memesData from "../memesData.js"

export default function Meme() {

    let url 
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
    }

    return (
        <main>
            <div className="form">
            
                <input
                    className="form--input"
                    type="text"
                    placeholder="Top text"
                />
                <input
                    className="form--input"
                    type="text"
                    placeholder="Bottom text"
                />
                <button className="form--button"
                    onClick={getMemeImage}
                >Get a new image</button>





            </div>
        </main>
    )
}