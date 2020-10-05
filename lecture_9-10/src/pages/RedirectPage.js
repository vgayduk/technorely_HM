import React from "react";
import "./RedirectPage.css";

import RedirectButton from "../components/RedirectButton";

export default function RedirectPage() {
  return (
    <div className="redirect">
      <RedirectButton
        title={"Using Global State"}
        linkTo={"./pages/MainGlobalState"}
      />
      <RedirectButton title={"Using Redux"} linkTo={"./pages/MainRedux"} />
    </div>
  );
}
