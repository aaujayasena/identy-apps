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
import { FormValue, Validation } from "./models";
/**
 * Prop types for Form component
 */
interface FormPropsInterface {
    onSubmit?: (values: Map<string, FormValue>) => void;
    onChange?: (isPure: boolean, values: Map<string, FormValue>) => void;
    resetState?: boolean;
    submitState?: boolean;
    ref?: React.Ref<any>;
    onSubmitError?: (requiredFields: Map<string, boolean>, validFields: Map<string, Validation>) => void;
    [key: string]: any;
}
/**
 * This is a Forms component
 */
export declare const Forms: React.FunctionComponent<React.PropsWithChildren<FormPropsInterface>>;
export {};
