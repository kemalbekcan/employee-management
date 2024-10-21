import { ErrorMessage, useField, Field, useFormikContext } from "formik";
import PropTypes from "prop-types";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Radio = (props) => {
  const { name, label, value = "" } = props;
  const [field, meta] = useField(name);
  const { values, setFieldValue } = useFormikContext();

  console.log("field", field);

  return (
    <div className="w-full flex-1">
      <label className="custom-checkbox flex items-center gap-2">
        <Field
          type="radio"
          className="absolute opacity-0 cursor-pointer "
          name={name}
          value={value}
          checked={values[name] === value}
          onChange={() => setFieldValue(name, value)}
        />
        <span
          className={clsx(
            "w-5 h-5 border-2  rounded relative",
            "cursor-pointer flex items-center justify-center",
            meta?.touched &&
              meta?.error &&
              "bg-red-500 border-gray-600 opacity-50",
            values[name] !== value && "bg-white border-gray-600/50",
            values[name] === value &&
              "bg-green-600 border-green-600 opacity-100"
          )}
        >
          {values[name] === value && (
            <span className="w-full h-full flex items-center justify-center">
              <FontAwesomeIcon icon={faCheck} className="text-white" />
            </span>
          )}
        </span>
        <span className="h-[22px] inline">
          {label} {value}
        </span>
      </label>

      <ErrorMessage
        name={name}
        component="div"
        className="text-sm font-medium pt-1.5 text-red-secondary"
      />
    </div>
  );
};

export default Radio;

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
