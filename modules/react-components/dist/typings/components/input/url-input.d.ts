/**
 * Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
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
import { TestableComponentInterface } from "@wso2is/core/models";
import { FunctionComponent, ReactNode } from "react";
export interface URLInputPropsInterface extends TestableComponentInterface {
    addURLTooltip?: string;
    duplicateURLErrorMessage: string;
    urlState: string;
    setURLState: any;
    placeholder?: string;
    labelName: string;
    computerWidth?: number;
    validation: (value?: any) => boolean;
    validationErrorMsg: string;
    value?: string;
    hint?: string;
    showError?: boolean;
    setShowError?: any;
    required?: boolean;
    disabled?: boolean;
    hideComponent?: boolean;
    /**
     * Allows submitting empty values.
     * When this is true, the `+` button will not be disabled when the input is empty.
     */
    allowEmptyValues?: boolean;
    /**
     * Custom label to be passed from outside.
     */
    customLabel?: ReactNode;
    /**
     * Show/Hide predictions.
     */
    showPredictions?: boolean;
    /**
     * Make the form read only.
     */
    readOnly?: boolean;
    /**
     * Passes the submit function as an argument.
     */
    getSubmit?: (submitFunction: (callback: (url?: string) => void) => void) => void;
    /**
     * CORS allowed origin list for the tenant.
     */
    allowedOrigins?: string[];
    /**
     * Tenant domain
     */
    tenantDomain?: string;
    /**
     * Callback to add the allowed origin
     */
    handleAddAllowedOrigin?: (url: string) => void;
    /**
     * Popup label availability
     */
    labelEnabled?: boolean;
    /**
     * Show or hide Allow button
     */
    isAllowEnabled?: boolean;
}
/**
 * URL Input component.
 *
 * @param {URLInputPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export declare const URLInput: FunctionComponent<URLInputPropsInterface>;
