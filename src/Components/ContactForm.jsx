import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import {Box,   FormControl,  FormLabel,  Input, Textarea} from "@chakra-ui/react"
import CustomToastExample from './ToastButton';
//import "../styles/ContactForm.css"


const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_kgcie03', 'template_3ed7952', form.current, 'hTv1BtizVC6UUy0h9')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <Box display={"flex"} justifyContent="center">

      <FormControl width={["xl","xs","xs","xs","sm","sm"]}>
    <form ref={form} onSubmit={sendEmail} className="contact-form" >
      <FormLabel  >Name</FormLabel>
      <Input type="text"  className='formInput' width={["xs","xs","xs","xl","xl"]}  name="user_name" />
      <br />
      <FormLabel  >Email</FormLabel>
      <Input type="email" name="user_email" width={["xs","xs","xs","xl","xl"]} />
      
      <br />
      <FormLabel >Message</FormLabel>
      <Textarea  name="message" width={["xs","xs","xs","xl","xl"]} />
      <br />
      <CustomToastExample/>
    </form>
      </FormControl>
    </Box>
  )
}

export default ContactForm