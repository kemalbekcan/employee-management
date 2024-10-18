// import { useState } from "react"
import { Form, Formik } from "formik";
import { LoginSchema } from "@/validations/auth/login";
import Input from "@/components/form/input";
import Button from "@/components/form/button";
// import { createFakeJWT } from "@/utils/fakeJwt"

const Login = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="border p-8">
        <h3 className="text-[1.625rem] text-center font-medium mb-[0.313rem]">
          Login
        </h3>
        <p className="text-[#7A7C7F] text-lg text-center">
          Access to our dashboard
        </p>

        

        <Formik
        validationSchema={LoginSchema}
        initialValues={{
            email: '',
            password: '',
            error: ''
        }}
        onSubmit={async (values, helper) => {
          try {
            // const fakePayload = {
            //   sub: "1234567890",
            //   name: "John Doe",
            //   iat: Math.floor(Date.now() / 1000),
            // };
            // const fakeToken = createFakeJWT(fakePayload);
            // localStorage.setItem('token', fakeToken);
            // setIsLoggedIn(true);
            console.log("values", values)
            console.log("helper", helper)
          } catch (error) {
            console.log("error", error)
          }
        }}
        >
          {({ handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <Input name="email" label="Email" type="email" />
              <Input name="password" label="Password" type="password" />

              <Button type="submit" label="send" isSubmitting={isSubmitting}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
