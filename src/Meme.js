import React from "react";

function Meme() {
  return (
    <main>
      <form>
        <div className="textFields">
          <input type="text" name="topText" placeholder="Top Text"></input>
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
          ></input>
        </div>
        <input
          type="submit"
          value="Get a new meme image 🐸"
          id="submit"
        ></input>
      </form>
    </main>
  );
}

export default Meme;
