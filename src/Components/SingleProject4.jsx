import lumen from '../images/lumen5.png'
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
  const SingleProject4 = () => {
    return (
      <Card maxW="md">
        <CardBody>
          <Image src={lumen} alt="mailchimp" borderRadius="lg" />
          <Stack mt="6" textAlign={"left"} spacing="3">
            <Heading size="md" textAlign={"center"}>
              clone of lumen5
            </Heading>
            <Heading size={"sm"}>About Project :-</Heading>
            <Text>
              The Brand which provides you online video making and editing plateform which is easy to use.
            </Text>
            <Heading size={"sm"}>Tech Stacks :-</Heading>
            <Text>HTML | CSS | JavaScript</Text>
            <Heading size={"sm"}>My Role :-</Heading>
            <Text>
              This was Individual Project so, whole work was done by me{" "}
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing="2">
            <Link href="https://github.com/princepatel7405/plucky-throne-4544">
              <Button variant="solid" bgColor={"burlywood"}>
                Github
              </Button>
            </Link>
            <Link href="https://rad-douhua-cf3a2e.netlify.app/">
              <Button variant="outline" borderColor={"burlywood"}>
                Netlify
              </Button>
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
    );
  };
  
  export default SingleProject4;
  