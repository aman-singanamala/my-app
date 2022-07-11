import React from "react";
import memesData from "../memesData.js"

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState()
    let url
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
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
            <img src={memeImage} className="imm" />
        </main>
    )
}