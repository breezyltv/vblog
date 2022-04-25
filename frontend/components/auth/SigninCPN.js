import React from "react";
import { Formik, Field, Form } from "formik";
import {
   Heading,
   FormControl,
   FormLabel,
   Input,
   FormErrorMessage,
   Button,
   Box,
   InputGroup,
   InputRightElement,
   Container,
} from "@chakra-ui/react";

const SigninCPN = () => {
   const [show, setShow] = React.useState(false);
   const handleClick = () => setShow(!show);

   function validateName(value) {
      let error;
      if (!value) {
         error = "Name is required";
      } else if (value.toLowerCase() !== "naruto") {
         error = "Jeez! You're not a fan 😱";
      }
      return error;
   }

   return (
      <Container  maxW='md' py="5rem">
         <Heading as="h2" size="xl" py="3rem">
            Signin
         </Heading>
         <Formik
            initialValues={{ email: "sasuke@naruto.edu" }}
            onSubmit={(values, actions) => {
               setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
               }, 1000);
            }}
         >
            {(props) => (
               <Form>
                  <Field name="email" validate={validateName}>
                     {({ field, form }) => (
                        <FormControl
                           isInvalid={form.errors.email && form.touched.email}
                        >
                           <FormLabel htmlFor="email">Email</FormLabel>
                           <Input {...field} id="email" placeholder="email" />
                           <FormErrorMessage>
                              {form.errors.email}
                           </FormErrorMessage>
                        </FormControl>
                     )}
                  </Field>
                  <Field type="password" name="password">
                     {({ field, form }) => (
                        <FormControl
                           isInvalid={
                              form.errors.Password && form.touched.Password
                           }
                        >
                           <FormLabel htmlFor="password">Password</FormLabel>
                           <InputGroup size="md">
                              <Input
                                 pr="4.5rem"
                                 type={show ? "text" : "password"}
                                 placeholder="Enter password"
                                 {...field}
                                 id="password"
                              />
                              <InputRightElement width="4.5rem">
                                 <Button
                                    h="1.75rem"
                                    size="sm"
                                    onClick={handleClick}
                                 >
                                    {show ? "Hide" : "Show"}
                                 </Button>
                              </InputRightElement>
                           </InputGroup>
                           <FormErrorMessage>
                              {form.errors.password}
                           </FormErrorMessage>
                        </FormControl>
                     )}
                  </Field>
                  <Button
                     mt={4}
                     colorScheme="teal"
                     isLoading={props.isSubmitting}
                     type="submit"
                  >
                     Submit
                  </Button>
               </Form>
            )}
         </Formik>
      </Container>
   );
};

export default SigninCPN;
