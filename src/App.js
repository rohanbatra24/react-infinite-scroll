import React, { useEffect, useState } from "react";

import axios from "axios";

import "./App.css";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const results = await axios.get(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&per_page=5&q=${searchTerm}`
    );

    console.log(results.data.hits);

    setImages(results.data.hits);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="App">
      <input onChange={(e) => setSearchTerm(e.target.value)}></input>
      <button onClick={() => getImages()}>Get</button>
      {images.map((img) => (
        <img src={img.previewURL}></img>
      ))}
    </div>
  );
}
