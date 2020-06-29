import React from "react";
import { Button } from "./styles";
import PropTypes from "prop-types";
export var SubmitButton = function (_a) {
    var children = _a.children, onClick = _a.onClick, disabled = _a.disabled;
    return (React.createElement(Button, { disabled: disabled, onClick: onClick }, children));
};
SubmitButton.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    childen: PropTypes.node.isRequired,
};
