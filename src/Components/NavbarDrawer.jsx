import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
function NavbarDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
        className="drawer"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody fontWeight={"bold"} fontSize='lg' lineHeight={'30px'}>
            <Link href="#home" onClick={()=>{onClose()}}>
            <Text >Home</Text>
            </Link>
            <Link href="#about" onClick={()=>{onClose()}}>
            <Text>About</Text>
            </Link>
            <Link href="#skills" onClick={()=>{onClose()}}>
            <Text>Skills</Text>
            </Link>
            <Link href="#project" onClick={()=>{onClose()}}>
            <Text>Projects</Text>
            </Link>
            <Link href="#contact" onClick={()=>{onClose()}}>
            <Text>Contact</Text>
            </Link>
            <a href="https://drive.google.com/u/0/uc?id=15MfN-zojOawdlcPXLhgr7w8kIu-KZ8nd&export=download" onClick={()=>{window.open("https://drive.google.com/file/d/15MfN-zojOawdlcPXLhgr7w8kIu-KZ8nd/view") }} 
              
             >
              <Text>Resume</Text>
            </a>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default NavbarDrawer;
