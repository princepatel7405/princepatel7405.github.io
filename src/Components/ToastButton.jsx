import {  Button, useToast } from "@chakra-ui/react"

  const CustomToastExample=() =>{
    const toast = useToast()
    return (
      <Button type="submit"
      onClick={() =>
        toast({
          title: 'Message Sent.',
          description: "We've Sent your Message for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }
      variant={"outline"} mb="20px" mt="20px" borderColor="burlywood"
      >
        Send
      </Button>
    )
  }
  export default CustomToastExample