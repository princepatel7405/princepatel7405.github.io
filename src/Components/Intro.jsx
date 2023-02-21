import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import '../styles/Intro.css'

const Intro = () => {
  return (
    <div className='intro-main' id="home">
        

        <img className="profile-pic" src='https://avatars.githubusercontent.com/u/107980690?s=400&u=aa96a5e8dc2cd986452c1765ecc7f588920a7fa2&v=4' alt='profile' />
        
        <Box className='intro-contents'>
            <Heading>I'm Prince Mendpara</Heading>
            <Heading color={'brown'}>Full Stack Developer</Heading>
            <Text textAlign={"center"}> MERN Developer from Bhavnagar,Gujarat 
            </Text>
            <Text>
              who want's to build carrier with dedicated people in 
            </Text>
                <Text>
                an organization that encourages creativity and innovation.
                </Text>
             <Text> with <span style={{color:"brown",fontWeight:"bold"}}> 1200+</span> Hrs coding Practice. 
            </Text>
            <br />
            <a href="https://drive.google.com/u/0/uc?id=15MfN-zojOawdlcPXLhgr7w8kIu-KZ8nd&export=download" onClick={window.open("https://drive.google.com/file/d/15MfN-zojOawdlcPXLhgr7w8kIu-KZ8nd/view?usp=share_link")}  >
              <Button variant={"outline"} color="burlywood" borderColor={"burlywood"} onClick={()=>{window.open("https://drive.google.com/file/d/15MfN-zojOawdlcPXLhgr7w8kIu-KZ8nd/view")}}>Resume</Button>
            </a>
        </Box>
    </div>
  )
}

export default Intro