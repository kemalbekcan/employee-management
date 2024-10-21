import clsx from "clsx";
import PropTypes from "prop-types";

const ProgressBar = (props) => {
  const { label, name = "file", value } = props;
  
  return (
    <div className="flex items-center gap-[0.625rem]">
      {label && <label htmlFor={name} className="text-gray-primary text-xs font-bold leading-4">{label}:</label>}
      <progress
        id={name}
        value={value}
        max="100"
        className={clsx("w-[4.688rem] h-[0.938rem] [&::-webkit-progress-bar]:rounded-[5rem] [&::-webkit-progress-value]:rounded-[5rem]",
            "[&::-webkit-progress-bar]:bg-gray-dark",
            value < 26 && value >= 0 && "[&::-webkit-progress-value]:bg-red-primary [&::-moz-progress-bar]:bg-red-primary",
            value < 51 && value > 25 && "[&::-webkit-progress-value]:bg-orange-secondary [&::-moz-progress-bar]:bg-orange-secondary", 
            value < 101 && value > 50 && "[&::-webkit-progress-value]:bg-green-primary [&::-moz-progress-bar]:bg-green-primary"
        )}  
      >
        {" "}
        {value}%{" "}
      </progress>
    </div>
  );
};

export default ProgressBar;

ProgressBar.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number
}
