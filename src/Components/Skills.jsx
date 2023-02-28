import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import "../styles/Skills.css";
import html from "../images/html-5.png";
import css from "../images/css-3.png";
import mongo from "../images/mongodb.webp";
import redux from "../images/redux.png";
import react from "../images/science.png";
import node from "../images/node.jpg";
import git from "../images/Git.png";
import netlify from '../images/netlify.png';
import chakra from '../images/chakra.png'
import json from "../images/json.png"
import js from '../images/js.png'
const Skills = () => {
  return (
    <div id="skills" style={{paddingTop:"70px",paddingBottom:"50px"}}>
      <Heading size={["xl","xl","xl","xl","xl"]} mb={'50px'} color="burlywood"> SKILLS</Heading>
      <SimpleGrid className="main-grid" justifyContent={"center"}    columns={[2,2,3,4,4]} spacing="40px">
        <Box className="logo-div">
          <img className="logo" src={html} alt="html" />
          <p>HTML</p>
        </Box>
        <Box className="logo-div">
          <img className="logo" src={css} alt="css" />
          <p>CSS</p>
        </Box>
        <Box className="logo-div">
          <img className="logo" src={react} alt="react" />
          <p>REACT</p>
        </Box>
        <Box className="logo-div">
          <img className="logo" src={redux} alt="redux" />
          <p>REDUX</p>
        </Box>
        <Box className="logo-div">
          <img className="logo" src={mongo} alt="mongodb" />
          <p>MONGO-DB</p>
        </Box>
        <Box className="logo-div">
          <img
            className="logo"
            src={"https://www.mementotech.in/assets/images/icons/express.png"}
            alt="express"
          />
          <p>EXPRESS JS</p>
        </Box>
        <Box className="logo-div">
          <img className="logo" src={node} alt="node" />
          <p>NODE</p>
        </Box>
        <Box className="logo-div">
          <img className="logo" src={chakra} alt="chakra" />
          <p>Chakra</p>
        </Box>
        <Box className="logo-div">
          <img className="logo" src={js} alt="Js" />
          <p>Java Script</p>
        </Box>
      </SimpleGrid>
      <Heading size={["xl","xl","xl","xl","xl"]} mt="50px" mb={'50px'} color="burlywood"> TOOLS</Heading>
      <SimpleGrid className="main-grid" justifyContent={"center"}    columns={[2,2,3,4,4]} spacing="40px">
        <Box className="logo-div">
          <img className="logo" src={json} alt="Json" />
          <p>Json-Server</p>
        </Box>
        <Box className="logo-div">
          <img className="logo" src={git} alt="Git" />
          <p>Git</p>
        </Box>
        <Box className="logo-div">
          <img className="logo" src={"data:image/jpeg;base64,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"} alt="Js" />
          <p>Vs Code</p>
        </Box>
        <Box className="logo-div">
          <img className="logo" src={netlify} alt="Netlify" />
          <p>Netlify</p>
        </Box>
        <Box className="logo-div">
          <img className="logo" src={"data:image/png;base64,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"} alt="Vercel" />
          <p>Vercel</p>
        </Box>

      </SimpleGrid>
    </div>
  );
};

export default Skills;
