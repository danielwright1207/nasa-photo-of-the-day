import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import ReactPlayer from "react-player";
import Header from "./components/header.js";
import Footer from "./components/footer.js";

const API_KEY = "PSQNBbhN0bzfyj4Zog80uvSVNgcEQD1Xa9OFWPRy";
const URL = "https://api.nasa.gov/planetary/apod?api_key=";

function App() {
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`${URL}${API_KEY}`)
        .then((response) => {
          setPhoto(response.data.url);
          console.log(response.data.url);
        })
        .catch((error) => {
          console.log("you got an error", error);
        });
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <Header />
      <p>
        <span role="img" aria-label="go!">
          <div className="Video-container">
            <ReactPlayer url={photo} width={`100%`} controls={true} />
          </div>
        </span>
      </p>
      <Footer />
    </div>
  );
}

export default App;
