import Button from "@/components/form/button"
import Input from "@/components/form/input"
import Select from "@/components/form/select"
import Checkbox from "@/components/form/checkbox"
import Radio from "@/components/form/radio"
import { Formik, Form } from "formik"

const Admin = () => {
  return (
    <div className="border">
      <Formik
        // validationSchema={LoginSchema}
        initialValues={{
            email: '',
            password: '',
            city: '',
            enabled: false,
            gender: '',
            error: ''
        }}
        onSubmit={async (values, helper) => {
          try {
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
              <Select name="city" label="Bir şey seçin" />
              <Checkbox name='enabled' label="Enabled" />
              <Radio name="gender" label="Men" val="men" id="men" />
              <Radio name="gender" label="Girl" val="girl" id="girl" />

              <Button type="submit" label="send" isSubmitting={isSubmitting}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
    </div>
  )
}

export default Admin