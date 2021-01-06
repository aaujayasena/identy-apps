/**
 * Copyright (c) 2019, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import classNames from "classnames";
import React from "react";
import { Button, Divider, Form, Icon, Radio } from "semantic-ui-react";
import { Password } from "./password";
import { QueryParameters } from "./query-parameters";
import { isButtonField, isCheckBoxField, isCustomField, isDivider, isDropdownField, isPasswordField, isQueryParamsField, isRadioField, isResetField, isSubmitField, isTextField, isToggleField } from "../helpers";
import { filterPassedProps } from "../utils";
/**
 * The enter key.
 * @constant
 * @type {string}
 */
const ENTER_KEY = "Enter";
/**
 * This produces a InnerField component
 * @param props
 */
export const InnerField = React.forwardRef((props, ref) => {
    const { passedProps, formProps } = props;
    const formField = Object.assign({}, passedProps);
    const filteredProps = filterPassedProps(Object.assign({}, passedProps));
    const { checkError, handleBlur, handleChange, handleToggle, handleChangeCheckBox, handleReset, form } = formProps;
    const formFieldClasses = classNames({
        hidden: formField.hidden,
        ["read-only"]: formField.readOnly
    }, formField.className);
    /**
     * Generates a semantic Form element
     * @param inputField
     */
    const formFieldGenerator = (inputField) => {
        var _a;
        const { isError, errorMessages } = checkError(inputField);
        if (isTextField(inputField)) {
            if (isPasswordField(inputField)) {
                return (React.createElement(Password, Object.assign({}, passedProps, { label: inputField.label !== "" ? inputField.label : null, width: inputField.width, error: isError
                        ? {
                            content: errorMessages.map((errorMessage, index) => {
                                return React.createElement("p", { key: index }, errorMessage);
                            })
                        }
                        : false, type: inputField.type, placeholder: inputField.placeholder, name: inputField.name, value: form.get(inputField.name) || "", onBlur: (event) => {
                        handleBlur(event, inputField.name);
                    }, onChange: (event) => {
                        handleChange(event.currentTarget.value, inputField.name);
                    }, showPassword: inputField.showPassword, hidePassword: inputField.hidePassword, autoFocus: inputField.autoFocus || false, readOnly: inputField.readOnly, disabled: inputField.disabled, required: inputField.label ? inputField.required : false, onKeyPress: (event) => {
                        event.key === ENTER_KEY && handleBlur(event, inputField.name);
                    } })));
            }
            else if (inputField.type === "textarea") {
                return (React.createElement(Form.TextArea, Object.assign({}, filteredProps, { label: inputField.label !== "" ? inputField.label : null, width: inputField.width, error: isError
                        ? {
                            content: errorMessages.map((errorMessage, index) => {
                                return React.createElement("p", { key: index }, errorMessage);
                            })
                        }
                        : false, type: inputField.type, placeholder: inputField.placeholder, name: inputField.name, value: ((_a = form.get(inputField.name)) === null || _a === void 0 ? void 0 : _a.toString()) || "", onBlur: (event) => {
                        handleBlur(event, inputField.name);
                    }, onChange: (event) => {
                        handleChange(event.target.value, inputField.name);
                    }, autoFocus: inputField.autoFocus || false, readOnly: inputField.readOnly, disabled: inputField.disabled, required: inputField.label ? inputField.required : false, onKeyPress: (event) => {
                        event.key === ENTER_KEY && handleBlur(event, inputField.name);
                    } })));
            }
            else {
                return (React.createElement(Form.Input, Object.assign({}, filteredProps, { label: inputField.label !== "" ? inputField.label : null, width: inputField.width, error: isError
                        ? {
                            content: errorMessages.map((errorMessage, index) => {
                                return React.createElement("p", { key: index }, errorMessage);
                            })
                        }
                        : false, type: inputField.type, placeholder: inputField.placeholder, name: inputField.name, value: form.get(inputField.name) || "", onBlur: (event) => {
                        handleBlur(event, inputField.name);
                    }, onChange: (event) => {
                        handleChange(event.target.value, inputField.name);
                    }, autoFocus: inputField.autoFocus || false, readOnly: inputField.readOnly, disabled: inputField.disabled, required: inputField.label ? inputField.required : false, onKeyPress: (event) => {
                        event.key === ENTER_KEY && handleBlur(event, inputField.name);
                    } })));
            }
        }
        else if (isRadioField(inputField)) {
            return (React.createElement(Form.Group, { grouped: true },
                inputField.label !== "" ? React.createElement("label", null, inputField.label) : null,
                inputField.children.map((radio, index) => {
                    return (React.createElement(Form.Field, { key: index },
                        React.createElement(Radio, Object.assign({}, filteredProps, { label: radio.label, name: inputField.name, value: radio.value, checked: form.get(inputField.name) === radio.value, onChange: (event, { value }) => {
                                handleChange(value.toString(), inputField.name);
                            }, onBlur: (event) => {
                                handleBlur(event, inputField.name);
                            }, autoFocus: inputField.autoFocus || false, readOnly: inputField.readOnly, disabled: inputField.disabled, onKeyPress: (event) => {
                                event.key === ENTER_KEY && handleBlur(event, inputField.name);
                            } }))));
                })));
        }
        else if (isDropdownField(inputField)) {
            return (React.createElement(Form.Select, Object.assign({}, filteredProps, { label: inputField.label !== "" ? inputField.label : null, placeholder: inputField.placeholder, options: inputField.children, value: form.get(inputField.name), width: inputField.width, onChange: (event, { value }) => {
                    handleChange(value.toString(), inputField.name);
                }, onBlur: (event) => {
                    handleBlur(event, inputField.name);
                }, error: isError
                    ? {
                        content: errorMessages.map((errorMessage, index) => {
                            return React.createElement("p", { key: index }, errorMessage);
                        })
                    }
                    : false, autoFocus: inputField.autoFocus || false, disabled: inputField.readOnly, required: inputField.label ? inputField.required : false, onKeyPress: (event) => {
                    event.key === ENTER_KEY && handleBlur(event, inputField.name);
                } })));
        }
        else if (isCheckBoxField(inputField)) {
            return (React.createElement(Form.Group, { grouped: true },
                React.createElement("label", null,
                    inputField.label,
                    inputField.label && inputField.required
                        ? React.createElement("span", { className: "ui text color red" }, "*")
                        : null),
                inputField.children.map((checkbox, index) => {
                    return (React.createElement(Form.Field, { key: index },
                        React.createElement(Form.Checkbox, Object.assign({}, filteredProps, { label: checkbox.label, name: inputField.name, value: checkbox.value, checked: form.get(inputField.name) &&
                                form.get(inputField.name).includes(checkbox.value), onChange: (event, { value }) => {
                                handleChangeCheckBox(value.toString(), inputField.name);
                            }, onBlur: (event) => {
                                handleBlur(event, inputField.name);
                            }, error: index === 0
                                ? isError
                                    ? {
                                        content: errorMessages.map((errorMessage, indexError) => {
                                            return React.createElement("p", { key: indexError }, errorMessage);
                                        }),
                                        pointing: "left"
                                    }
                                    : false
                                : isError, autoFocus: inputField.autoFocus || false, readOnly: inputField.readOnly || checkbox.readOnly, disabled: inputField.disabled, defaultChecked: inputField.defaultChecked, onKeyPress: (event) => {
                                event.key === ENTER_KEY && handleBlur(event, inputField.name);
                            } }))));
                })));
        }
        else if (isQueryParamsField(inputField)) {
            return (React.createElement(Form.Group, { grouped: true },
                React.createElement("label", null,
                    inputField.label,
                    inputField.label && inputField.required
                        ? React.createElement("span", { className: "ui text color red" }, "*")
                        : null),
                React.createElement(QueryParameters, { name: inputField.name, value: inputField.value, onChange: (event) => {
                        handleChange(event.target.value, inputField.name);
                    } })));
        }
        else if (isToggleField(inputField)) {
            return (React.createElement(Form.Checkbox, Object.assign({}, filteredProps, { label: inputField.label, name: inputField.name, value: inputField.value, checked: form.get(inputField.name) === "true", onChange: () => {
                    handleToggle(inputField.name);
                }, onBlur: (event) => {
                    handleBlur(event, inputField.name);
                }, error: isError
                    ? {
                        content: errorMessages.map((errorMessage, indexError) => {
                            return React.createElement("p", { key: indexError }, errorMessage);
                        }),
                        pointing: "left"
                    }
                    : false, autoFocus: inputField.autoFocus || false, readOnly: inputField.readOnly, disabled: inputField.disabled, defaultChecked: inputField.defaultChecked, onKeyPress: (event) => {
                    event.key === ENTER_KEY && handleBlur(event, inputField.name);
                } })));
        }
        else if (isSubmitField(inputField)) {
            return (React.createElement(Button, Object.assign({}, filteredProps, { primary: true, size: inputField.size, className: inputField.className, type: inputField.type, disabled: inputField.disabled ? inputField.disabled(form) : false }),
                inputField.icon && React.createElement(Icon, { name: inputField.icon }),
                inputField.value));
        }
        else if (isResetField(inputField)) {
            return (React.createElement(Button, Object.assign({}, filteredProps, { size: inputField.size, className: inputField.className, onClick: handleReset, disabled: inputField.disabled ? inputField.disabled(form) : false }),
                inputField.icon && React.createElement(Icon, { name: inputField.icon }),
                inputField.value));
        }
        else if (isButtonField(inputField)) {
            return (React.createElement(Button, Object.assign({}, filteredProps, { size: inputField.size, className: inputField.className, onClick: (event) => {
                    event.preventDefault();
                    inputField.onClick();
                }, disabled: inputField.disabled ? inputField.disabled(form) : false }),
                inputField.icon && React.createElement(Icon, { name: inputField.icon }),
                inputField.value));
        }
        else if (isDivider(inputField)) {
            return React.createElement(Divider, { hidden: inputField.hidden });
        }
        else if (isCustomField(inputField)) {
            return inputField.element;
        }
    };
    return (React.createElement(Form.Field, { className: formFieldClasses },
        React.createElement("div", { ref: ref }, formFieldGenerator(formField))));
});
//# sourceMappingURL=field.js.map