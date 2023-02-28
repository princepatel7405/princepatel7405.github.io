import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import DarkmodeButton from "./DarkmodeButton";
import NavbarDrawer from "./NavbarDrawer";
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className="nav-main">
      <Flex padding={"10px"} >
        <a href="#home" >
        <Heading ><span style={{color:"brown"}}>P</span>rince <span className="name"> <span style={{color:"brown"}}>M</span>endpara</span></Heading>
        </a>
        <Spacer/>
        <Flex className="nav-bar">
            <Flex className="list" fontSize={'lg'} mr="5px" gap="40px" p="10px"  justifyContent="center" fontWeight={"bold"} >
            <a href="#home">
            <Text>Home</Text>
            </a>
            <a href="#home">
            <Text>About</Text>
            </a>
            <a href="#skills">
            <Text>Skills</Text>
            </a>
            <a href="#project">
            <Text>Projects</Text>
            </a>
            <a href="#contact">
            <Text>Contact</Text>
            </a>
            <a href="https://drive.google.com/u/0/uc?id=15MfN-zojOawdlcPXLhgr7w8kIu-KZ8nd&export=download"
            onClick={()=>{window.open("https://drive.google.com/file/d/15MfN-zojOawdlcPXLhgr7w8kIu-KZ8nd/view")}} >
              <Text>Resume</Text>
            </a>
            </Flex>
            <Box  mt="5px" mr="5px">
            <DarkmodeButton />
            </Box>
            <div className="hamburger">
            <NavbarDrawer />
            </div>
        </Flex>
      </Flex>
    </div>
  );
};

export default Navbar;
