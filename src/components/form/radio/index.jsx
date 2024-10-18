import { ErrorMessage, useField } from "formik"
import PropTypes from "prop-types";
import clsx from "clsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

const Radio = (props) => {
  const { name, label, val, id, ...rest} = props;
  const [field, meta, helpers] = useField({name})
  return (
    <div className="w-full flex-1">
      <label className="custom-checkbox flex items-center gap-2">
        <input
          type="radio"
          className="absolute opacity-0 cursor-pointer "
          id={id}
          value={val}
          checked={field.value === val}
          onChange={(e) => helpers.setValue(e.target.value)}
          {...field}
          {...rest}
        />
        <span
          className={clsx(
            "w-5 h-5 border-2  rounded relative",
            "cursor-pointer flex items-center justify-center",
            meta?.touched && meta?.error && "!border-red-secondary",
            !field.value && "bg-white border-gray-600 opacity-50",
            field.value && "bg-green-600 border-green-600 opacity-100"
          )}
        >
          {field.value === val && (
            <span className="w-full h-full flex items-center justify-center">
              <FontAwesomeIcon icon={faCheck} className="text-white" />
            </span>
          )}
        </span>
        <span className="h-[22px] inline">{label} {val}</span>
      </label>

      <ErrorMessage
        name={name}
        component="div"
        className="text-sm font-medium pt-1.5 text-red-secondary"
      />
    </div>
  )
}

export default Radio

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  val: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}