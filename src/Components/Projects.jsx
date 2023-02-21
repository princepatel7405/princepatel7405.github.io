import { Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import SingleProject from './SingleProject'
import SingleProject2 from './SingleProject2'
import SingleProject3 from './SingleProject3'
import SingleProject4 from './SingleProject4'

const Projects = () => {
  return (
    <div  id="project" style={{padding:"50px"}}>
      <Heading size={["md","md","xl","xl","xl"]} color={'burlywood'} m="40px">
         PROJECTS
        </Heading>
        <SimpleGrid columns={[1,1,2,2,2]} spacing="20px" justifyItems={"center"}  >
      <SingleProject/>
      <SingleProject2 />
      <SingleProject3/>
      <SingleProject4/>
        </SimpleGrid>
      </div>
  )
}

export default Projects
