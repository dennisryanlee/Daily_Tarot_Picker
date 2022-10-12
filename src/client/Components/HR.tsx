import React, { useEffect, useState } from "react";
import * as Types from "../../../Types";

const HR_Component = (props: Types.NO_PROPS) => {
  return (
    <div className="d-flex justify-content-center">
      <hr style={{ width: "50%" }}></hr>
    </div>
  );
};

export default HR_Component;
