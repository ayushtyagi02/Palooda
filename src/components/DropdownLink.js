
import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";
// import DropdownList from "./DropDownList";
import ViewProfile from "./ViewProfile";
import DropdownList from "./DropdownList";

function DropdownLink(props) {
  const [showDropdown, setShowDropdown] = useState(false);

  DropdownLink.handleClickOutside = () => {
    setShowDropdown(false);
  };

  return (
    <div>
      <div
        class="nav-item nav-link profile-link"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        John
      </div>
      {showDropdown ? <DropdownList /> : null}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => DropdownLink.handleClickOutside,
};
export default DropdownLink