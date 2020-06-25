import React from "react";
import { Button } from "./styles";
import PropTypes from "prop-types";

export const SubmitButton = ({ children, onClick, disabled }) => {
  return (
    <Button disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  );
};

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  childen: PropTypes.node.isRequired,
};
