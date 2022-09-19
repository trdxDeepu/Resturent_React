import React from "react";
import "./Style.css";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((currElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(currElem)}
              >
                {currElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
