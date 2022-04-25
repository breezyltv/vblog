import React from "react";
import { Formik } from "formik";
import {
   Heading,
   Form,
   FormControl,
   FormLabel,
   Input,
   FormErrorMessage,
   Field,
   Button,
} from "@chakra-ui/react";
const SignupCPN = () => {
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
      <Box>
         <Heading as="h2" size="2xl">
            SignIn
         </Heading>
         <Formik
            initialValues={{ name: "Sasuke" }}
            onSubmit={(values, actions) => {
               setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
               }, 1000);
            }}
         >
            {(props) => (
               <Form>
                  <Field name="name" validate={validateName}>
                     {({ field, form }) => (
                        <FormControl
                           isInvalid={form.errors.name && form.touched.name}
                        >
                           <FormLabel htmlFor="name">First name</FormLabel>
                           <Input {...field} id="name" placeholder="name" />
                           <FormErrorMessage>
                              {form.errors.name}
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
      </Box>
   );
};

export default SignupCPN;
