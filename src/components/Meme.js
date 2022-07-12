import React, { useState } from "react";
import memeData from "../memeData";

function Meme() {
  /**
   * Challenge: Update our state to save the meme-related
   * data as an object called `meme`. It should have the
   * following 3 properties:
   * topText, bottomText, randomImage.
   *
   * The 2 text states can default to empty strings for now,
   * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
   *
   * Next, create a new state variable called `allMemeImages`
   * which will default to `memesData`, which we imported above
   *
   * Lastly, update the `getMemeImage` function and the markup
   * to reflect our newly reformed state object and array in the
   * correct way.
   */

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memeData);

  function getMeme() {
    const memesArr = allMemeImages.data.memes;
    const randomNum = Math.floor(Math.random() * memesArr.length);
    const url = memesArr[randomNum].url;

    setMeme(() => {
      return {
        randomImage: url,
      };
    });
  }

  return (
    <main>
      <div className="form">
        <div className="textFields">
          <input type="text" name="topText" placeholder="Top Text"></input>
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
          ></input>
        </div>
        <button id="submit" onClick={getMeme}>
          Get a new meme image 🐸
        </button>
        <img src={meme.randomImage} alt="Meme" />
      </div>
    </main>
  );
}

export default Meme;
