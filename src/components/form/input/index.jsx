import { ErrorMessage, useField } from "formik";
// import { cn } from "@/utils/cn";
import clsx from "clsx";
import PropTypes from "prop-types";

const Input = (props) => {
  const { name, label, type = "text", ...rest } = props;

  const [field, meta] = useField({name});

  return (
    <div>
      <div className="relative">
        <input
          type={type}
          id="outlined_success"
          aria-describedby="outlined_success_help"
          className={clsx("block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer",
            meta.error && meta.touched && "border-red-500"
          )}
          placeholder=" "
          {...field}
          {...rest}
        />
        {label && (
          <label
          htmlFor="outlined_success"
          className={clsx("absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
            meta.error && meta.touched && "text-red-500"
          )}
        >
          {label}
        </label>
        )}
        
      </div>
      <ErrorMessage
        name={name}
        component="div"
        className="text-sm font-medium pt-1.5 text-red-600"
      />
    </div>
  );
};

export default Input;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}
