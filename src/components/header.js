import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "PSQNBbhN0bzfyj4Zog80uvSVNgcEQD1Xa9OFWPRy";
const URL = "https://api.nasa.gov/planetary/apod?api_key=";

function Header() {
  const [description, setDescription] = useState(null);
  const [date, setDate] = useState(null);
  useEffect(() => {
    const fetchDescription = () => {
      axios
        .get(`${URL}${API_KEY}`)
        .then((response) => {
          setDescription(response.data.explanation);
          console.log(response.data.explanation);
          setDate(response.data.date);
        })
        .catch((error) => {
          console.log("you got an error", error);
        });
    };
    fetchDescription();
  }, []);
  return (
    <div className="header-date-description">
      <h2>Today in the Universe! {date}</h2>
      <h3>{description}</h3>
    </div>
  );
}

export default Header;
