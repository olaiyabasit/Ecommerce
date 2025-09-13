import React from "react";

import { GetCatgoriesName } from "@/lib/lib";
function CategoryDropDown() {
  return (
    <>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="  bg-none">
          Categories
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          {GetCatgoriesName()}
        </ul>
      </div>
    </>
  );
}

export default CategoryDropDown;
