import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import gif from "../images/website.gif";
import ContactForm from "./ContactForm";
import phone from "../images/phone.png";
import email from "../images/email.png";
import "../styles/Contact.css";
const Contact = () => {
  return (
    <div id="contact" style={{ marginBottom: "50px", paddingTop: "50px" }}>
      <Heading
        size={["md", "md", "xl", "xl", "xl"]}
        color={"burlywood"}
        m="20px"
      >
        Contact
      </Heading>
      <Stack direction={["column", "column", "row", "row"]}>
        <img src={gif} alt="contact me" />
        <ContactForm />
      </Stack>
      <div className="contact-details">
        <a href="https://mail.google.com/mail/u/0/#inbox">
          <Flex justifyContent={"center"} gap={"2"}>
            <img style={{ width: "20px" }} src={email} alt="email" />
            <Text>prince.m.7405@gmail.com</Text>
          </Flex>
        </a>
        <br />
        <a href="tel:7405868873">
          <Flex justifyContent={"center"}>
            <img style={{ width: "20px" }} src={phone} alt="phone" />
            <Text>+917405868873</Text>
          </Flex>
        </a>
        <br />
        <Flex justifyContent={"center"} gap="10px">
          <a href="https://github.com/princepatel7405">
            <Flex>
              <img
                src={
                  "https://as1.ftcdn.net/v2/jpg/04/52/18/48/1000_F_452184858_iZXfI1h2BdKB5i9cDwpu9Ue1il8Mxxfq.jpg"
                }
                style={{ width: "30px", borderRadius: "50%" }}
                alt="git"
              />
            </Flex>
          </a>
          <br />
          <a href="https://www.linkedin.com/in/prince-mendpara-1384a11b6/">
            <Flex>
              <img
                src={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAMAAACZQ1hUAAAAYFBMVEUBAQH///8AAADs7Ow0NDSdnZ1RUVHQ0NCoqKiMjIzz8/MhISHi4uLV1dXKysoODg75+fm/v79cXFzc3NwYGBi0tLRXV1dmZmZzc3N/f38sLCwnJydhYWFKSko6Ojo/Pz8GQtJ5AAAEr0lEQVR4nO2ciXLiMAyGY4WQg+YwRxqOwPu/5eYyJJEEAWyH3UXTmU5xpvkq/bZlW64jxuYmwX55cMDRa+Ac8n2QuOh9QjjDHyOZH6Exp6GY9m3SY60dcxndZci8c/t6Y1b/+ouX8Qy7lVmAK0cqGQb3ZAOgozi5FEO86ItgohBefRpgEWMG35oTlCuSMYNthBpiN2SIWzFai0Xzlfp9Bndh2wu1wTbrMZzmQKggfm8MO+ti6Bg6SVQM2QqPzBb0UHfRhdsxePN4oTYIWoboPCMDtAyyisRMsegU4Yh8Pjd0XcNxj7MyQDVGOMlMHVNBVNOGE9yJ2dR06g31QFgx7Dk3gDKDXqjeUlQMS/Id1au3hRfsAq/YGsWAPBPOgXoBwFqqpC+TpUEIKCNBxgza8etqXjuEGNHD2RUO8ScCxGJo5ma1esqgPr5lOANPGGRA/oITQhBiZSoWpB9wJExGg2FYZgSDqSGdYdgTCEKUJhlQhDySoQCbeghIBnZM1+EH9CntB6MMyDu8HuzFguwXkaFl0DPjg7Q6PlyXPwMjp1dtDHisBokQPJgcYR16qCE2liLBxgJ7IjSXxDCxqD0Ep1j1jkheHqW2BmLReALyfSAT6RVns/kkz+Dc0mqzifVdBkvG6+GdCGvTgzX7HAbN3h3Z6+MkZVMa69ZjEUg/SXwZ7I/pw17FzVnnXYAsTKF7SYgbg0I1noOf/gDr7n4fUHAMa2Le3FwZ6My/aSoT3BRV9HcouHmTYojTrhF8onXX7FWMz0aUM/KhLKbogWdwOAYJg434sd1ZKb7GwGRZ6Q/xuTJ+w0lfLCSkFNrNfO58Rmcs8FJ9aNx6VSMDlYIOLTTNEFNHp0PL6AUrp4ecY2D1MMV8eEYPLAPrh0lGbkpzDEszDGQH5WLBMrwVCyEuxLxr2Q8iYP2glSGWMqZnjco2RDB0M8h1m0yUeK3YGqFKvXqIiltKE9KP7PF2r1Y/RGU/m6IhpK5YMFP0YP+fWrpX5pplGKUIcKEeyrAoX9MDyRCN9yfQ9kHDcEbbGBr9MM6UxqcPna0ZP+hgyNA5bX1GhK0wGItoXD8BtCD2b8Vis73nhw3++4BiwImMPgaf6HSfwEBNGxzDND00DKwefGIQRiVpQm2umdED5QeawW4snmH4xuLL0Gf46uFzGP7GWFCZ4r8Qi0/ww7N6YBgs6OFnNb8ezDJMi0XD8I3Ff8Dw1cPnMHxj8ckMpW0GXGTCMxjTA0az7gdc8GOXoa6nzWeORV1XjOvgyH7h3vVDTPhh4h5IoerMRyEKPGThNZ8scKNHFPQB8ZhH7A2GdL39G+f+j34LfipR9w4GesCj96Nvrz/d3juY+f5FXcPsUBv69hC6eyjRZT4I2Aqh7iXNpAdo62br+1npXI6AQ9QxGKxMfMRwvafW3tebIRbqfGHOe4tqSrne35wBQR03dfdY7d+Q6k1+6j6vVOc0jh099Off671mf2vTFYNzv9v97uzXFkTlhKKf4QzuuS+ArBfRG4vqHYdhFdHgvr8bMLmAVh9svVGaN/q/B6Ip9DNpJ1xJNWaodJGERV6eF9qtzIswobJMzNBwRK5+i7gCEZrBrv0B3lNM3KZk8nsAAAAASUVORK5CYII="
                }
                style={{ width: "30px", borderRadius: "10px" }}
                alt="git"
              />
            </Flex>
          </a>
        </Flex>
      </div>
    </div>
  );
};

export default Contact;
