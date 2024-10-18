import { ErrorMessage, useField } from "formik";
import PropTypes from "prop-types";
import clsx from "clsx";

const Select = (props) => {
  const { name, label = "", ...rest } = props;
  const [field, meta, helpers] = useField({ name });

  const data = [
    {
      id: 1,
      value: "1",
      label: "Türkçe",
    },
    {
      id: 2,
      value: "2",
      label: "İngilizce",
    },
    {
      id: 3,
      value: "3",
      label: "Fransızca",
    },
    {
      id: 4,
      value: "4",
      label: "Almanca",
    },
  ];

  return (
    <>
      <div className="relative">
        <select
          name={name}
          value={field.value}
          className={clsx(
            "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer",
            meta.error && meta.touched && "border-red-500"
          )}
          {...field}
          {...rest}
        >
          <option value="" disabled>{label}</option>
          {data &&
            data.map((item) => (
              <option key={item.id} value={item.value} onChange={(e) => helpers.setValue(e.target.value)}>
                {item.label}
              </option>
            ))}
        </select>
        {label && (
          <label
            htmlFor="outlined_success"
            className={clsx(
              "absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
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
    </>
  );
};

export default Select;

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
