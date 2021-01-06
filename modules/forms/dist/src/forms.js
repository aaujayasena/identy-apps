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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useEffect, useRef, useState } from "react";
import { Form } from "semantic-ui-react";
import { Field, GroupFields, InnerField, InnerGroupFields } from "./components";
import { isCheckBoxField, isDropdownField, isInputField, isRadioField, isTextField, isToggleField } from "./helpers";
import { useNonInitialEffect } from "./utils";
/**
 * This is a Forms component
 */
export const Forms = React.forwardRef((props, ref) => {
    const { onSubmit, resetState, submitState, onChange, onSubmitError, children } = props, rest = __rest(props, ["onSubmit", "resetState", "submitState", "onChange", "onSubmitError", "children"]);
    // This holds the values of the form fields
    const [form, setForm] = useState(new Map());
    // This specifies if any of the fields in the form has been touched or not
    const [isPure, setIsPure] = useState(true);
    // This specifies if a field's value is valid or not
    const [validFields, setValidFields] = useState(new Map());
    const validFieldsRef = useRef(new Map());
    // This specifies if a field has been touched or not
    const [touchedFields, setTouchedFields] = useState(new Map());
    // This specifies if the required fields are  filled or not
    const [requiredFields, setRequiredFields] = useState(new Map());
    const requiredFieldsRef = useRef(new Map());
    // This specifies if the `Submit` method has been called or not
    const [isSubmitting, setIsSubmitting] = useState(false);
    // This specifies if the submit has been clicked or not.
    const [startSubmission, setStartSubmission] = useState(false);
    const initialValues = useRef(new Map());
    // This specifies if a form field is currently validating or not.
    const [isValidating, setIsValidating] = useState(false);
    const isValidatingRef = useRef(false);
    // This holds all the form field components
    const formFields = [];
    const flatReactChildren = [];
    // The lock to be used by `initMutex`
    let locked = false;
    /**
     * Calls the onChange prop
     */
    const propagateOnChange = (formValue) => {
        if (onChange && typeof onChange === "function") {
            onChange(isPure, formValue);
        }
    };
    /**
     * This function calls the listener prop of the field that is calling the `handleChange` function
     * @param name
     * @param newForm
     */
    const listener = (name, newForm) => {
        React.Children.map(flatReactChildren, (element) => {
            if (element.props.name
                && element.props.name === name
                && element.props.listen
                && typeof element.props.listen === "function") {
                element.props.listen(newForm);
            }
        });
    };
    /**
     * Handler for the onChange event
     * @param value
     * @param name
     */
    const handleChange = (value, name) => {
        const tempForm = new Map(form);
        const tempTouchedFields = new Map(touchedFields);
        tempForm.set(name, value);
        tempTouchedFields.set(name, true);
        listener(name, tempForm);
        propagateOnChange(tempForm);
        setForm(tempForm);
        setIsPure(false);
        setTouchedFields(tempTouchedFields);
    };
    /**
     * This toggles the boolean value
     * @param {string} name Field name
     */
    const handleToggle = (name) => {
        const tempForm = new Map(form);
        const tempTouchedFields = new Map(touchedFields);
        tempForm.set(name, tempForm.get(name) === "true" ? "false" : "true");
        tempTouchedFields.set(name, true);
        listener(name, tempForm);
        propagateOnChange(tempForm);
        setForm(tempForm);
        setIsPure(false);
        setTouchedFields(tempTouchedFields);
    };
    /**
     * Handler for the onChange event of checkboxes
     * @param value
     * @param name
     */
    const handleChangeCheckBox = (value, name) => {
        const tempForm = new Map(form);
        const selectedItems = tempForm.get(name);
        const tempTouchedFields = new Map(touchedFields);
        let itemIndex = -1;
        selectedItems.forEach((item, index) => {
            if (item === value) {
                itemIndex = index;
            }
        });
        itemIndex === -1 ? selectedItems.push(value) : selectedItems.splice(itemIndex, 1);
        tempForm.set(name, selectedItems);
        tempTouchedFields.set(name, true);
        listener(name, tempForm);
        propagateOnChange(tempForm);
        setForm(tempForm);
        setIsPure(false);
        setTouchedFields(tempTouchedFields);
    };
    /**
     * This function checks if a form field is valid
     * @param name
     * @param requiredFieldsParam
     * @param validFieldsParam
     */
    const validate = (name, requiredFieldsParam, validFieldsParam) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c;
        const inputField = formFields.find((formField) => {
            return isInputField(formField) && formField.name === name;
        });
        const value = form.get(name);
        if (isInputField(inputField) && !isRadioField(inputField) && inputField.required) {
            if (!isCheckBoxField(inputField) && !isToggleField(inputField)) {
                const tempForm = new Map(form);
                tempForm.set(name, (_b = (_a = tempForm.get(name)) === null || _a === void 0 ? void 0 : _a.toString()) === null || _b === void 0 ? void 0 : _b.trim());
                setForm(tempForm);
                value !== null && ((_c = value === null || value === void 0 ? void 0 : value.toString()) === null || _c === void 0 ? void 0 : _c.trim()) !== ""
                    ? requiredFieldsParam.set(name, true)
                    : requiredFieldsParam.set(name, false);
            }
            else if (isToggleField(inputField)) {
                value !== null && value !== "false"
                    ? requiredFieldsParam.set(name, true)
                    : requiredFieldsParam.set(name, false);
            }
            else {
                value !== null && value.length > 0
                    ? requiredFieldsParam.set(name, true)
                    : requiredFieldsParam.set(name, false);
            }
        }
        const validation = {
            errorMessages: [],
            isValid: true
        };
        if ((isTextField(inputField) || isDropdownField(inputField))
            && inputField.validation
            && !(form.get(name) === null || form.get(name) === "")) {
            yield inputField.validation(form.get(name), validation, new Map(form));
        }
        validFieldsParam.set(name, {
            errorMessages: validation.errorMessages,
            isValid: validation.isValid
        });
    });
    /**
     * Handler for the onBlur event.
     *
     * @param {KeyBoardEvent} event - Event object.
     * @param {string} name - The name of the field.
     */
    const handleBlur = (event, name) => __awaiter(void 0, void 0, void 0, function* () {
        const tempRequiredFields = new Map(requiredFieldsRef.current);
        const tempValidFields = new Map(validFieldsRef.current);
        isValidatingRef.current = true;
        setIsValidating(true);
        yield validate(name, tempRequiredFields, tempValidFields);
        validFieldsRef.current = new Map(tempValidFields);
        requiredFieldsRef.current = new Map(tempRequiredFields);
        isValidatingRef.current = false;
        setIsValidating(false);
        setValidFields(tempValidFields);
        setRequiredFields(tempRequiredFields);
    });
    /**
     * Initialize form
     * @param {boolean} isReset
     */
    const init = (isReset) => {
        const tempForm = new Map(form);
        const tempRequiredFields = new Map(requiredFieldsRef.current);
        const tempValidFields = new Map(validFieldsRef.current);
        const tempTouchedFields = new Map(touchedFields);
        const formFieldNames = new Set();
        formFields.forEach((inputField) => {
            /**
             * Check if the element is an input element(an element that can hold a value)
             *      -> Then:
             *          Check if the field has not been touched OR the reset button has been pressed
             *             OR enableReInitialize is true and the initial value has changed
             *          -> Then:
             *              Check if the element has a value and the reset button has not been clicked
             *                  -> Then:
             *                      Set the value of the element to the corresponding key in the FormValue map
             *                  -> Else:
             *                      Check if the element is a (radio OR Dropdown) AND it has a default value
             *                          -> Then:
             *                              Assign the default value to the corresponding FormValue key
             *                          -> Else:
             *                              Check if the  element is checkbox
             *                                  -> Then:
             *                                      Assign an empty array to the corresponding FormValue key
             *                                  -> Else:
             *                                          Check if the element is a toggle
             *                                              -> Then:
             *                                                  Assign false
             *                                              -> Else:
             *                                                  Assign an empty string value to the
             *                                                  corresponding FormValue key
             */
            if (isInputField(inputField)) {
                if (!touchedFields.get(inputField.name)
                    || isReset
                    || (inputField.enableReinitialize
                        && initialValues.current.get(inputField.name) !== inputField.value)) {
                    inputField.value && !isReset
                        ? tempForm.set(inputField.name, inputField.value)
                        : (isRadioField(inputField) || isDropdownField(inputField)) && inputField.default
                            ? tempForm.set(inputField.name, inputField.default)
                            : isCheckBoxField(inputField)
                                ? tempForm.set(inputField.name, [])
                                : isToggleField(inputField)
                                    ? tempForm.set(inputField.name, "false")
                                    : tempForm.set(inputField.name, "");
                    initialValues.current.set(inputField.name, inputField.value);
                }
                /**
                 * {
                 *      {
                 *          If the value is an array check if its length is zero
                 *          OR check if it the value is empty or false
                 *      } OR
                 *      the reset button has been clicked
                 * } AND
                 *          it is not a radio field AND
                 *          the field is required
                 *
                 * Then: Set required to false
                 * Else: Set required to true
                 *
                 */
                const value = tempForm.get(inputField.name);
                (!((value instanceof Array && value.length > 0)
                    || (!(value instanceof Array) && !!value.trim()))
                    || isReset)
                    && (!isRadioField(inputField) && inputField.required)
                    ? tempRequiredFields.set(inputField.name, false)
                    : tempRequiredFields.set(inputField.name, true);
                if (!tempValidFields.has(inputField.name) || isReset) {
                    tempValidFields.set(inputField.name, {
                        errorMessages: [],
                        isValid: true
                    });
                    tempTouchedFields.set(inputField.name, false);
                }
                formFieldNames.add(inputField.name);
            }
        });
        /**
         * This removes all the redundant elements from the passed Map object and returns the stripped Map object
         * @param iterable a Map object which should have redundant elements removed
         * @param neededFields a Set object containing the names of the needed fields
         *
         * @returns {Map} stripped Map object
         */
        const removeRedundant = (iterable, neededFields) => {
            const tempIterable = new Map(iterable);
            iterable.forEach((value, key) => {
                if (!neededFields.has(key)) {
                    tempIterable.delete(key);
                }
            });
            return tempIterable;
        };
        /**
         * In case an existing form field is dynamically removed, remove all its data.
         */
        const leanForm = removeRedundant(tempForm, formFieldNames);
        const leanRequiredFields = removeRedundant(tempRequiredFields, formFieldNames);
        const leanValidFields = removeRedundant(tempValidFields, formFieldNames);
        const leanTouchedFields = removeRedundant(tempTouchedFields, formFieldNames);
        /**
         * Touched should not change if it is a reset
         */
        if (!isReset) {
            setTouchedFields(leanTouchedFields);
        }
        setForm(leanForm);
        validFieldsRef.current = leanValidFields;
        requiredFieldsRef.current = leanRequiredFields;
        setValidFields(leanValidFields);
        setRequiredFields(leanRequiredFields);
    };
    /**
     * This is a mutex that wraps the `init` function.
     * This prevents `init` from being called twice when reset is triggered.
     * @param {boolean} lock A boolean value that specifies if the mutex should be locked or not
     */
    const initMutex = (lock) => {
        if (locked) {
            locked = false;
        }
        else {
            if (lock) {
                locked = true;
                init(true);
            }
            else {
                init(false);
            }
        }
    };
    /**
     * Resets form
     */
    const reset = () => {
        setIsSubmitting(false);
        initMutex(true);
    };
    /**
     * Handles reset button click
     * @param event
     */
    const handleReset = (event) => {
        event.preventDefault();
        reset();
        locked = false;
    };
    /**
     * Checks if all the required fields are filled
     */
    const checkRequiredFieldsFilled = () => {
        let requiredFilled = true;
        requiredFieldsRef.current.forEach((requiredFieldParam) => {
            if (!requiredFieldParam) {
                requiredFilled = false;
            }
        });
        return requiredFilled;
    };
    /**
     * Checks if all the fields are validated
     */
    const checkValidated = () => {
        let isValidated = true;
        validFieldsRef.current.forEach((validField) => {
            if (!validField.isValid) {
                isValidated = false;
            }
        });
        return isValidated;
    };
    useEffect(() => {
        if (startSubmission && !isValidatingRef.current) {
            if (checkRequiredFieldsFilled() && checkValidated()) {
                setStartSubmission(false);
                setIsSubmitting(false);
                onSubmit && onSubmit(form);
            }
            else {
                onSubmitError && onSubmitError(requiredFields, validFields);
                setIsSubmitting(true);
                setStartSubmission(false);
            }
        }
        else {
            if (startSubmission) {
                setIsSubmitting(true);
            }
        }
    }, [startSubmission, isValidating]);
    /**
     * This validates the form and calls the `onSubmit` prop function
     */
    const submit = () => {
        setStartSubmission(true);
    };
    /**
     * Handler for onSubmit event
     * @param {React.FormEvent} event
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        submit();
    };
    /**
     * Checks if the field has any errors (required but not filled | not validated)
     * @param inputField
     */
    const checkError = (inputField) => {
        if (isInputField(inputField)
            && !isRadioField(inputField)
            && inputField.required
            && !requiredFields.get(inputField.name)
            && (isSubmitting
                || (touchedFields.get(inputField.name)
                    && inputField.displayErrorOn === "blur"))) {
            return {
                errorMessages: [inputField.requiredErrorMessage],
                isError: true
            };
        }
        else if ((isTextField(inputField) || isDropdownField(inputField)) &&
            validFields.get(inputField.name) &&
            !validFields.get(inputField.name).isValid &&
            (isSubmitting
                || (touchedFields.get(inputField.name)
                    && inputField.displayErrorOn === "blur"))) {
            return {
                errorMessages: validFields.get(inputField.name).errorMessages,
                isError: true
            };
        }
        else {
            return {
                errorMessages: [],
                isError: false
            };
        }
    };
    /**
     * Calls submit when submit is triggered externally
     */
    useNonInitialEffect(() => {
        submit();
    }, [submitState]);
    /**
     * Calls reset when reset is triggered externally
     */
    useNonInitialEffect(() => {
        reset();
    }, [resetState]);
    /**
     * Initializes the state of the from every time the passed formFields prop changes
     */
    useEffect(() => {
        initMutex(false);
    }, [children]);
    /**
     * Parses the children and
     * 1.passes form event handler functions as props to all the Field components
     * 2.extracts the props of the Field components
     * @param elements
     * @param fields
     */
    const parseChildren = (elements, fields) => {
        return React.Children.map(elements, (element) => {
            if (element) {
                if (element.type === Field) {
                    fields.push(element.props);
                    flatReactChildren.push(element);
                    return React.createElement(InnerField, {
                        formProps: {
                            checkError,
                            form,
                            handleBlur,
                            handleChange,
                            handleChangeCheckBox,
                            handleReset,
                            handleToggle
                        },
                        passedProps: Object.assign({}, element.props),
                        ref: element.ref
                    });
                }
                else if (element.type === GroupFields) {
                    return React.createElement(InnerGroupFields, Object.assign(Object.assign({}, element.props), { children: parseChildren(element.props.children, fields) }));
                }
                else if (element.props
                    && element.props.children
                    && React.Children.count(element.props.children) > 0) {
                    return React.createElement(element.type, Object.assign(Object.assign({}, element.props), { children: parseChildren(element.props.children, fields) }));
                }
                else {
                    return element;
                }
            }
        });
    };
    const mutatedChildren = children ? [...parseChildren(children, formFields)] : null;
    return React.createElement(Form, Object.assign({}, rest, { noValidate: true, ref: ref, onSubmit: handleSubmit }), mutatedChildren);
});
Forms.defaultProps = {
    resetState: false,
    submitState: false
};
//# sourceMappingURL=forms.js.map