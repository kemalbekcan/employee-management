import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import PropTypes from "prop-types";

const DropdownButton = (props) => {
  const { label, anchor = "bottom start", children } = props;
  return (
    <Menu as="div" className="relative">
      <MenuButton className="w-full px-[15px] py-[9px] border rounded">
        {label}
      </MenuButton>
      <MenuItems
        anchor={anchor}
        className="position z-10 bg-white shadow-md border mt-2"
      >
        { children }
      </MenuItems>
    </Menu>
  );
};

export default DropdownButton;

DropdownButton.propTypes = {
  label: PropTypes.string.isRequired,
  anchor: PropTypes.string,
  children: PropTypes.node.isRequired
}
