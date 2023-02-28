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
import react from "../images/react-icon.png"
import js from "../images/js-icon.png"
import chakra from "../images/chakra-icon.png"
import redux from "../images/redux-icon.png"
import ts from "../images/ts-icon.png"


export default function SingleProject() {
  return (
    <Card maxW="md">
      <CardBody >
        <Image
          src="https://user-images.githubusercontent.com/97978681/208676376-071694f2-788b-40a7-9040-681005f8b147.png"
          alt="mailchimp"
          borderRadius="lg"
        />
        <Stack mt="6" textAlign={"left"} spacing="3">
          <Heading size="md" textAlign={"center"}>Cyber Domain (clone of mailchimp)</Heading>
          <Heading size={'sm'} >About Project :-</Heading>
          <Text  >
            ​Easily Create A Website That Promotes Your Brand Online With
            Pre-Set Themes and Layouts and this is the smartest and most
            intuitive platform for growing businesses. Thrive digitally as we
            guide your business with the right marketing & sales tools.​
          </Text>
          <Heading size={"sm"}>Tech Stacks :-</Heading>
          {/* <Text>React | chakraUi | Redux | TypeScript | JavaScript</Text> */}
          <SimpleGrid columns={[4,4,5,5,5]}>
            <img src={react} alt="react"/>
            <img src={js} alt="js"/>
            <img src={chakra} alt="chakra"/>
            <img src={redux} alt="redux"/>
            <img src={ts} alt="ts"/>
          </SimpleGrid>
          <Heading size={"sm"}>My Role :-</Heading>
          <Text>This was group Project and I'm responsible for making sign-up , log-in and navbar </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="2">
            <Button variant="solid" bgColor={"burlywood"} onClick={()=>window.open("https://github.com/shivamsherje/Mailchimp-clone")}>
              Github
            </Button>
            <Button variant="outline" borderColor={"burlywood"} onClick={()=>window.open("https://stalwart-sherbet-79368e.netlify.app/")}>
              Netlify
            </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
