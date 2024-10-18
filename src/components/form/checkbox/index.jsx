import { ErrorMessage, useField } from "formik"
import PropTypes from "prop-types";
import clsx from "clsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

const Checkbox = (props) => {
  const { name, label, ...rest} = props;
  const [field, meta] = useField({name})
  return (
    <div className="w-full flex-1">
      <label className="custom-checkbox flex items-center gap-2">
        <input
          type="checkbox"
          className="absolute opacity-0 cursor-pointer "
          checked={field.value}
          {...field}
          {...rest}
        />
        <span
          className={clsx(
            "w-5 h-5 border-2  rounded relative",
            "cursor-pointer flex items-center justify-center",
            meta?.touched && meta?.error && "!border-red-secondary",
            field.value === false && "bg-white border-gray-600 opacity-50",
            field.value === true && "bg-green-600 border-green-600 opacity-100"
          )}
        >
          {field.value && (
            <span className="w-full h-full flex items-center justify-center">
              <FontAwesomeIcon icon={faCheck} className="text-white" />
            </span>
          )}
        </span>
        <span className="h-[22px] inline">{label}</span>
      </label>

      <ErrorMessage
        name={name}
        component="div"
        className="text-sm font-medium pt-1.5 text-red-secondary"
      />
    </div>
  )
}

export default Checkbox

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}