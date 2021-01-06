/**
 * Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the 'License'); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { TestableComponentInterface } from "@wso2is/core/models";
import { FunctionComponent } from "react";
/**
 * Type of key-value object
 */
export interface KeyValue {
    key: string;
    value: string;
}
/**
 * Type of key object passed to a dropdown
 */
export interface KeyData {
    id: string;
    value: string;
}
/**
 * Prop types of `DynamicField` component
 */
export interface DynamicFieldPropsInterface extends TestableComponentInterface {
    /**
     * An array of  key-value pairs
     */
    data: KeyValue[];
    /**
     * The type of the key
     */
    keyType: "text" | "dropdown";
    /**
     * An array of Key data to be passed into a dropdown
     */
    keyData?: KeyData[];
    /**
     * Enable/Disable bottom margin.
     */
    bottomMargin?: boolean;
    /**
     * Triggers submit
     */
    submit: boolean;
    /**
     * The name of the key
     */
    keyName: string;
    /**
     * The name of the value
     */
    valueName: string;
    /**
     * Error message to be shown when the key is empty
     */
    keyRequiredMessage: string;
    /**
     * Error message to be shown when the value is empty
     */
    valueRequiredErrorMessage: string;
    /**
     * Sets if the key value pair is required or not
     */
    requiredField?: boolean;
    /**
     * Error message to be shown when the same key is chosen twice
     */
    duplicateKeyErrorMsg?: string;
    /**
     * A listener that is called when a key-value pair is added
     */
    listen?: (data: KeyValue[]) => void;
    /**
     * Called to initiate an update
     */
    update: (data: KeyValue[]) => void;
    /**
     * Make the form read only.
     */
    readOnly?: boolean;
}
/**
 * This displays a key-value pair of fields that can be dynamically added or removed.
 *
 * @param {DynamicFieldPropsInterface} props - Props injected to the component.
 * @return {React.ReactElement}
 */
export declare const DynamicField: FunctionComponent<DynamicFieldPropsInterface>;
