import React from "react";

import { StyledButton } from "./styles";

export const typeOptions = ["", "primary", "success"];
export const sizeOptions = ["", "large"];

function Button({ ...props }) {
  return <StyledButton {...props} />;
}

export default Button;
