import React, { useState, useEffect } from "react";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState([]);

  function getMeme() {
    const memesArr = allMemeImages;
    const randomNum = Math.floor(Math.random() * memesArr.length);
    const url = memesArr[randomNum].url;

    setMeme((previousValue) => ({
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

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);

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
