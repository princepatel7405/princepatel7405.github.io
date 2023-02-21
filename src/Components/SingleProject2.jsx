import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import project from "../images/mailcare.png";
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
          <Text>React | chakraUi | JavaScript</Text>
          <Heading size={"sm"}>My Role :-</Heading>
          <Text>
            This was Individual Project so, whole work was done by me{" "}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="2">
          <Link href="https://github.com/princepatel7405/wanting-cent-7873">
            <Button variant="solid" bgColor={"burlywood"}>
              Github
            </Button>
          </Link>
          <Link href="https://mailcare.netlify.app/">
            <Button variant="outline" borderColor={"burlywood"}>
              Netlify
            </Button>
          </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default SingleProject2;
