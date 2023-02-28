import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import "../styles/Github.css";
const Github = () => {
  return (
    <div >
      <Heading size={["xl","xl","xl","xl","xl"]} color={"burlywood"} mt="5%">
        Github
      </Heading>
      <Box className="github-main">
        <GitHubCalendar
          username="princepatel7405"
          showWeekdayLabels="true"
          labels="Labels"
          children={<ReactTooltip html />}
        />
        
      </Box>
      <Box className="Github-steaks">
      <Box  className="Github-steak-one">
              <Image
                border="2px  solid burlywood"
                borderRadius={"5px"}
                align="center"
                src="https://github-readme-streak-stats.herokuapp.com?user=princepatel7405&theme=radical&hide_border=true"
              />
            </Box>
            <Box  className="Github-steak-two">
              <Image  border="2px  solid burlywood"
                width={"500px"}
                borderRadius={"5px"}
                align="center"
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=princepatel7405&layout=compact&theme=radical&hide_border=true"
              />
            </Box>
            <Box  className="Github-steak-three">
              <Image 
              width={"500px"}
              border="2px  solid burlywood"
              borderRadius={"5px"}
                align="center"
                src="https://github-readme-stats.vercel.app/api?username=princepatel7405&theme=radical&show_icons=true&hide_border=true&bg_color=#674d89"
              />
      </Box>
      </Box>
    </div>
  );
};

export default Github;
