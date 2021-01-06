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
 * Copy to clipboard input field props.
 */
export interface CopyInputFieldPropsInterface extends TestableComponentInterface {
    /**
     * Input value.
     */
    value: string;
    /**
     * Additional CSS classes.
     */
    className?: string;
    /**
     * Popup label for secret show state.
     */
    showSecretLabel?: string;
    /**
     * Popup label for secret hide state.
     */
    hideSecretLabel?: string;
    /**
     * Should the content appear as a secret.
     */
    secret?: boolean;
}
/**
 * Copy to clipboard input field component.
 *
 * @param {CopyInputFieldPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export declare const CopyInputField: FunctionComponent<CopyInputFieldPropsInterface>;
