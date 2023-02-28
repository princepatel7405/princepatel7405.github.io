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
import project from "../images/mailcare.png";
import html from "../images/html-icon.png"
import css from "../images/css-icon.png"
import react from "../images/react-icon.png"
import js from "../images/js-icon.png"
import chakra from "../images/chakra-icon.png"
const SingleProject2 = () => {
  return (
    <Card maxW="md">
      <CardBody>
        <Image src={project} alt="mailchimp" borderRadius="lg" />
        <Stack mt="6" textAlign={"left"} spacing="3">
          <Heading size="md" textAlign={"center"}>
            Mailcare (clone of mailtrap)
          </Heading>
          <Heading size={"sm"}>About Project :-</Heading>
          <Text>
            The Brand which provides you Email Delivery Platform for individuals
            and businesses to test, send and control email infrastructure in one
            place.
          </Text>
          <Heading size={"sm"}>Tech Stacks :-</Heading>
          {/* <Text>React | chakraUi | JavaScript</Text> */}
          <SimpleGrid columns={[4,4,4,5,5]}>
            <img src={html} alt="html"/>
            <img src={css} alt="css"/>
            <img src={react} alt="react" />
            <img src={js} alt="js" />
            <img src={chakra} alt="chakra" />
          </SimpleGrid>
          <Heading size={"sm"}>My Role :-</Heading>
          <Text>
            This was Individual Project so, whole work was done by me{" "}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="2">
            <Button variant="solid" bgColor={"burlywood"} onClick={()=>window.open("https://github.com/princepatel7405/wanting-cent-7873")}>
              Github
            </Button>
            <Button variant="outline" borderColor={"burlywood"} onClick={()=>window.open("https://mailcare.netlify.app/")}>
              Netlify
            </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default SingleProject2;
