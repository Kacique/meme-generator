import React, { useState } from "react";
import memeData from "../memeData";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memeData);

  function getMeme() {
    const memesArr = allMemeImages.data.memes;
    const randomNum = Math.floor(Math.random() * memesArr.length);
    const url = memesArr[randomNum].url;

    setMeme((previousValue) => ({
      //Because we want to access the previous
      //Top and Bottom Text
      ...previousValue,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  return (
    <main>
      <div className="form">
        <div className="textFields">
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            onChange={handleChange}
            value={meme.topText}
          ></input>
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            onChange={handleChange}
            value={meme.bottomText}
          ></input>
        </div>
        <button id="submit" onClick={getMeme}>
          Get a new meme image 🐸
        </button>
        <div className="meme">
          <img src={meme.randomImage} alt="Meme" className="meme-image" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </main>
  );
}

export default Meme;
