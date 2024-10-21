import Button from "@/components/form/button"
import Input from "@/components/form/input"
import Select from "@/components/form/select"
import Checkbox from "@/components/form/checkbox"
import Radio from "@/components/form/radio"
import { Formik, Form } from "formik"
import DropdownButton from "@/components/dropdown-button"
import { MenuItem } from "@headlessui/react";

const Admin = () => {
  return (
    <div className="border">
      <DropdownButton label="Dropdown">
      <MenuItem>
          <a href="/account-settings">Account settings</a>
        </MenuItem>
        <MenuItem>
          <a href="/account-settings">Documentation</a>
        </MenuItem>
        <MenuItem disabled>
          <span className="block px-4 py-2 text-gray-400">
            Invite a friend (coming soon!)
          </span>
        </MenuItem>
      </DropdownButton>
      <Formik
        // validationSchema={LoginSchema}
        enableReinitialize
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
              <Radio name="gender" label="Gender" value="men" id="men" />
              <Radio name="gender" label="Gender" value="women" id="women" />
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