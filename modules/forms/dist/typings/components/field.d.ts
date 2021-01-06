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
import React from "react";
import { FormField, FormValue } from "../models";
/**
 * prop types for the Field component
 */
interface InnerFieldPropsInterface {
    passedProps: any;
    formProps: {
        checkError: (inputField: FormField) => {
            isError: boolean;
            errorMessages: string[];
        };
        handleBlur: (event: React.KeyboardEvent, name: string) => void;
        handleChange: (value: string, name: string) => void;
        handleToggle: (name: string) => void;
        handleChangeCheckBox: (value: string, name: string) => void;
        handleReset: (event: React.MouseEvent) => void;
        form: Map<string, FormValue>;
    };
}
/**
 * This produces a InnerField component
 * @param props
 */
export declare const InnerField: React.ForwardRefExoticComponent<InnerFieldPropsInterface & React.RefAttributes<any>>;
export {};
