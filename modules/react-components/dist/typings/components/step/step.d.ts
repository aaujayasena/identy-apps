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
import { FunctionComponent } from "react";
/**
 * Interface for the step component.
 */
export interface StepPropsInterface extends TestableComponentInterface {
    /**
     * Determines if the step is active or not.
     */
    active?: boolean;
    /**
     * Additional classes.
     */
    className?: string;
    /**
     * Icon for the step.
     */
    icon: any;
    /**
     * Determines the status of the step.
     */
    status?: undefined | "active" | "completed";
    /**
     * Step number.
     */
    stepNumber?: number;
    /**
     * Custom styles object
     */
    style?: object;
    /**
     * Title for the step.
     */
    title?: string;
}
/**
 * Step component.
 *
 * @param {StepPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export declare const Step: FunctionComponent<StepPropsInterface>;
