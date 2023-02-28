import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Flex,
    Heading,
    Image,
    SimpleGrid,
    Stack,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  import react from "../images/react-icon.png"
  import html from "../images/html-icon.png"
  import chakra from "../images/chakra-icon.png"
  import redux from "../images/redux-icon.png"
  import node from "../images/node-icon.png"
  import ex from "../images/ex-icon.png"
  import mongo from "../images/mongo-icon.png"
import upstyle from "../images/upstyle.png"
  const SingleProject4 = () => {
    return (
      <Card maxW="md">
        <CardBody>
          <Image src={upstyle} alt="upstyle" borderRadius="lg" />
          <Stack mt="6" textAlign={"left"} spacing="3">
            <Heading size="md" textAlign={"center"}>
              Upstyle
            </Heading>
            <Heading size={"sm"}>About Project :-</Heading>
            <Text>
            The E-commerce brand has fam for selling trending fashionable products and giving a good experience of online shopping.
            </Text>
            <Heading size={"sm"}>Tech Stacks :-</Heading>
            {/* <Text>HTML | CSS | JavaScript</Text> */}
            <SimpleGrid columns={[5,5,7,7,7]}>
              <img src={html} alt="html"/>
              <img src={react} alt="react"/>
              <img src={chakra} alt="chakra" />
              <img src={redux} alt="redux" />
              <img src={node} alt="node" />
              <img src={mongo} alt="mongo" />
              <img src={ex} alt="express" />

            </SimpleGrid>
            <Heading size={"sm"}>My Role :-</Heading>
            <Text>
            This was Group Project and I'm responsible for making the order status page, admin dashboard, sidebar, and navbar for the admin side.
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing="2">
              <Button variant="solid" bgColor={"burlywood"} onClick={()=>window.open("https://github.com/kaushalragini/pushy-dime-8312")}>
                Github
              </Button>
              <Button variant="outline" borderColor={"burlywood"} onClick={()=>window.open("https://upstylesss.netlify.app/")}>
                Netlify
              </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    );
  };
  
  export default SingleProject4;
  