import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import ReactPlayer from "react-player";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import styled from "styled-components";
import theme from "./components/theme.js";
import { ThemeProvider } from "styled-components";

//style components outside of the friend component!!!

const API_KEY = "PSQNBbhN0bzfyj4Zog80uvSVNgcEQD1Xa9OFWPRy";
const URL = "https://api.nasa.gov/planetary/apod?api_key=";

//style components outside of the friend component!!!

const WholePage = styled.div`
  background: ${(pr) => pr.theme.primaryColor};
`;

const Styledvideo = styled.div`
  padding: 30px;
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  margin-left: 25%;
`;

const Styledheader = styled.div`
  color: ${(pr) => pr.theme.secondaryColor};
  padding: 30px;
  margin: 5%;
  margin-left: 7%;
  margin-right: 7%;
`;

const StyledPara = styled.p`
  color: ${(pr) => pr.theme.secondaryColor};
  padding: 30px;
  margin: 1%;
  font-size: 2.5rem;
`;

const Styledbutton = styled.button`
  color: ${(pr) => pr.theme.dangerColor};
  padding: 4px;
  font-size: 1rem;
  &:hover {
    color: green;
    transition: all 0.5s ease-in-out;
    transform: scale(1.5);
  }
`;

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
      <WholePage>
        {/*This is the header*/}
        <Styledheader>
          <Header />
        </Styledheader>

        <p>
          <span role="img" aria-label="go!">
            <Styledvideo>
              <ReactPlayer url={photo} width={`100%`} controls={true} />
            </Styledvideo>
          </span>
        </p>

        <div>
          <StyledPara>
            Want to see and the meteors heading towards earth???
            {/* <img src="https://images.unsplash.com/photo-1536383389102-0ac333c44981?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzZ8fG1ldGVvcnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=800&q=60" /> */}
          </StyledPara>
          <img src="https://images.unsplash.com/photo-1536383389102-0ac333c44981?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzZ8fG1ldGVvcnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=800&q=60" />

          <Styledbutton>
            <a href="https://astronomy.com/news/2020/08/election-eve-asteroid-is-heading-for-earth-dont-panic">
              Click Here
            </a>
          </Styledbutton>
        </div>

        {/* THis is the footer*/}
        <Footer />
      </WholePage>
    </div>
  );
}

export default App;

//https://images.unsplash.com/photo-1536383389102-0ac333c44981?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzZ8fG1ldGVvcnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=800&q=60
