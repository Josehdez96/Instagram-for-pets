import { useState } from "react";
export var useInputValue = function (initialValue) {
    var _a = useState(initialValue), value = _a[0], setValue = _a[1];
    var onChange = function (e) { return setValue(e.target.value); };
    return { value: value, onChange: onChange };
};
