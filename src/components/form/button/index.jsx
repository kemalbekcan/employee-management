import PropTypes from "prop-types";
import { TailSpin } from "react-loader-spinner"
import clsx from "clsx";

const Button = (props) => {
  const { type, isSubmitting = false, theme = "primary", size = "big", onClick, children } = props;
  
  return (
    <button type={type}
    disabled={isSubmitting}
    onClick={() => onClick()}
    className={clsx("flex items-center justify-center border rounded-sm w-full",
      theme === "primary" && "bg-blue-600 text-white",
      size === "big" && "h-9"
    )}
    >
      {isSubmitting && (
        <TailSpin
        height="30"
        width="30"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
      />
      )}
        {children}
    </button>
  )
}

export default Button

Button.propTypes = {
  type: PropTypes.string.isRequired,
  isSubmitting: PropTypes.bool,
  theme: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
}