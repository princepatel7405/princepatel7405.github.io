import lumen from '../images/lumen5.png'
import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
import html from "../images/html-icon.png"
import css from "../images/css-icon.png"
import js from "../images/js-icon.png"

  const SingleProject3 = () => {
    return (
      <Card maxW="md">
        <CardBody>
          <Image src={lumen} alt="mailchimp" borderRadius="lg" />
          <Stack mt="6" textAlign={"left"} spacing="3">
            <Heading size="md" textAlign={"center"}>
              Clone of lumen5
            </Heading>
            <Heading size={"sm"}>About Project :-</Heading>
            <Text>
              The Brand which provides you online video making and editing plateform which is easy to use.
            </Text>
            <Heading size={"sm"}>Tech Stacks :-</Heading>
            {/* <Text>HTML | CSS | JavaScript</Text> */}
            <Flex>
              <img src={html} alt="html"/>
              <img src={css} alt="css"/>
              <img src={js} alt="js"/>
            </Flex>
            <Heading size={"sm"}>My Role :-</Heading>
            <Text>
            This was Group Project and I have done work on the enterprice page.
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing="2">
            
              <Button variant="solid" bgColor={"burlywood"} onClick={()=>window.open("https://github.com/princepatel7405/plucky-throne-4544")}>
                Github
              </Button>
            
            
              <Button variant="outline" borderColor={"burlywood"} onClick={()=>window.open("https://rad-douhua-cf3a2e.netlify.app/")}>
                Netlify
              </Button>
            
          </ButtonGroup>
        </CardFooter>
      </Card>
    );
  };
  
  export default SingleProject3;
  