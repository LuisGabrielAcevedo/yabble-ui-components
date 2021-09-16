import React, { useEffect } from "react";
import { SubtleIconOnlyButton } from "../Buttons/Buttons";
import "./Dropdowns.scss";
import addIcon from "./../../../assets/icons/svg/add.svg";

export const Menu = ({ filters, handleItemClick, item, setItem }) => {
  const show = item?.subject_type_id === "demographics";

  const click = (menu_item) => {
    if (item?.subject_type_id !== "demographics")
      handleItemClick({
        subject_type_id: menu_item.subject_type_id,
        subject_id: "",
      });
  };

  return (
    <div
      data-testid="dropdown__menu-item-container"
      onMouseLeave={() => setItem(null)}
    >
      {show && (
        <NestedMenuItemComp
          sid={item.subject_type_id}
          hic={handleItemClick}
          {...{ filters }}
        />
      )}
      <div className="dropdown__menu-content">
        {filters.map((menu_item, index) => (
          <div
            className="dropdown__menu-item"
            data-testid="dropdown__menu-item"
            key={index}
            onMouseOver={() => setItem(menu_item)}
            onClick={() => click(menu_item)}
          >
            {menu_item.subject_type_name}
          </div>
        ))}
      </div>
    </div>
  );
};

export const NestedMenuItemComp = ({ sid, hic, filters }) => {
  const subjects = filters.filter((data) => data.subject_type_id === sid)[0]
    .subjects;

  const addFilterAction = (subject) =>
    hic({
      subject_id: subject.subject_id,
      subject_type_id: sid,
    });

  return (
    <div className="dropdown__menu-content-nested">
      {subjects.map((subject, index) => (
        <div
          className="dropdown__menu-item"
          data-testid="dropdown__menu-subitem"
          key={index}
          onClick={() => addFilterAction(subject)}
        >
          {subject.subject_name}
        </div>
      ))}
    </div>
  );
};

export const NestedMenu = ({ addFilter, filters, disabled }) => {
  const [anchorEl, setAnchorEl] = React.useState(false);
  const [item, setItem] = React.useState(null);

  const handleRightClick = () => setAnchorEl(true);

  const handleClose = () => {
    if (anchorEl) setAnchorEl(false);
  };

  const handleItemClick = (item) => {
    addFilter(item);
    setAnchorEl(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  });

  return (
    <div className="u-pos-rel">
      <SubtleIconOnlyButton
        testId="add-filters"
        id="ddop"
        onClick={handleRightClick}
        label="Add filters"
        disabled={disabled}
        icon={addIcon}
      ></SubtleIconOnlyButton>
      {anchorEl && (
        <Menu {...{ filters, handleItemClick, item, setItem }}></Menu>
      )}
    </div>
  );
};
