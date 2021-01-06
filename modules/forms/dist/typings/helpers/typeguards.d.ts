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
import { CheckboxField, CustomField, DropdownField, FormButton, FormDivider, FormField, FormSubmit, PasswordField, QueryParamsField, RadioField, Reset, TextField, ToggleField } from "../../src";
/**
 * Type guard to check if an input element is a text field
 * @param toBeDetermined
 */
export declare const isTextField: (toBeDetermined: FormField) => toBeDetermined is TextField | PasswordField;
/**
 * Type guard to check if an input element is of the type Radio
 * @param toBeDetermined
 */
export declare const isRadioField: (toBeDetermined: FormField) => toBeDetermined is RadioField;
/**
 * Type guard to check if an input element is of the type Password
 * @param toBeDetermined
 */
export declare const isPasswordField: (toBeDetermined: FormField) => toBeDetermined is PasswordField;
/**
 * Type guard to check if an input element is of the type Radio
 * @param toBeDetermined
 */
export declare const isDropdownField: (toBeDetermined: FormField) => toBeDetermined is DropdownField;
/**
 * Type guard to check if an input element is of the type Radio
 * @param toBeDetermined
 */
export declare const isCheckBoxField: (toBeDetermined: FormField) => toBeDetermined is CheckboxField;
/**
 * Type guard to check if an input element is of the type Query Parameters
 * @param toBeDetermined
 */
export declare const isQueryParamsField: (toBeDetermined: FormField) => toBeDetermined is QueryParamsField;
/**
 * Type guard to check if an input element is of the type Radio
 * @param toBeDetermined
 */
export declare const isToggleField: (toBeDetermined: FormField) => toBeDetermined is ToggleField;
/**
 * Type guard to check if an input element is of the type Radio
 * @param toBeDetermined
 */
export declare const isSubmitField: (toBeDetermined: FormField) => toBeDetermined is FormSubmit;
/**
 * Type guard to check if an input element is of the type Radio
 * @param toBeDetermined
 */
export declare const isResetField: (toBeDetermined: FormField) => toBeDetermined is Reset;
/**
 * Type guard to check if an input element is of the type Radio
 * @param toBeDetermined
 */
export declare const isButtonField: (toBeDetermined: FormField) => toBeDetermined is FormButton;
/**
 * Type guard to check if an input element is of the type Radio
 * @param toBeDetermined
 */
export declare const isDivider: (toBeDetermined: FormField) => toBeDetermined is FormDivider;
/**
 * Type guard to check if an input element is of the type Radio
 * @param toBeDetermined
 */
export declare const isCustomField: (toBeDetermined: FormField) => toBeDetermined is CustomField;
/**
 * Checks if the field is an input/checkbox/dropdown/radio/password field
 * @param toBeDetermined
 */
export declare const isInputField: (toBeDetermined: FormField) => toBeDetermined is TextField | PasswordField | RadioField | CheckboxField | ToggleField | DropdownField;
