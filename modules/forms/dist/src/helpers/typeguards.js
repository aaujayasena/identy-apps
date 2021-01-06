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
/**
 * Type guard to check if an input element is a text field
 * @param toBeDetermined
 */
export const isTextField = (toBeDetermined) => {
    return (toBeDetermined.type === "email" ||
        toBeDetermined.type === "password" ||
        toBeDetermined.type === "number" ||
        toBeDetermined.type === "text" ||
        toBeDetermined.type === "textarea");
};
/**
 * Type guard to check if an input element is of the type Radio
 * @param toBeDetermined
 */
export const isRadioField = (toBeDetermined) => {
    return toBeDetermined.type === "radio";
};
/**
 * Type guard to check if an input element is of the type Password
 * @param toBeDetermined
 */
export const isPasswordField = (toBeDetermined) => {
    return toBeDetermined.type === "password";
};
/**
 * Type guard to check if an input element is of the type Radio
 * @param toBeDetermined
 */
export const isDropdownField = (toBeDetermined) => {
    return toBeDetermined.type === "dropdown";
};
/**
 * Type guard to check if an input element is of the type Radio
 * @param toBeDetermined
 */
export const isCheckBoxField = (toBeDetermined) => {
    return toBeDetermined.type === "checkbox";
};
/**
 * Type guard to check if an input element is of the type Query Parameters
 * @param toBeDetermined
 */
export const isQueryParamsField = (toBeDetermined) => {
    return toBeDetermined.type === "queryParams";
};
/**
 * Type guard to check if an input element is of the type Radio
 * @param toBeDetermined
 */
export const isToggleField = (toBeDetermined) => {
    return toBeDetermined.type === "toggle";
};
/**
 * Type guard to check if an input element is of the type Radio
 * @param toBeDetermined
 */
export const isSubmitField = (toBeDetermined) => {
    return toBeDetermined.type === "submit";
};
/**
 * Type guard to check if an input element is of the type Radio
 * @param toBeDetermined
 */
export const isResetField = (toBeDetermined) => {
    return toBeDetermined.type === "reset";
};
/**
 * Type guard to check if an input element is of the type Radio
 * @param toBeDetermined
 */
export const isButtonField = (toBeDetermined) => {
    return toBeDetermined.type === "button";
};
/**
 * Type guard to check if an input element is of the type Radio
 * @param toBeDetermined
 */
export const isDivider = (toBeDetermined) => {
    return toBeDetermined.type === "divider";
};
/**
 * Type guard to check if an input element is of the type Radio
 * @param toBeDetermined
 */
export const isCustomField = (toBeDetermined) => {
    return toBeDetermined.type === "custom";
};
/**
 * Checks if the field is an input/checkbox/dropdown/radio/password field
 * @param toBeDetermined
 */
export const isInputField = (toBeDetermined) => {
    return (isTextField(toBeDetermined) ||
        isCheckBoxField(toBeDetermined) ||
        isDropdownField(toBeDetermined) ||
        isRadioField(toBeDetermined) ||
        isPasswordField(toBeDetermined) ||
        isToggleField(toBeDetermined) ||
        isQueryParamsField(toBeDetermined));
};
//# sourceMappingURL=typeguards.js.map