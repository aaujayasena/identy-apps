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
import { AlertInterface, TestableComponentInterface } from "@wso2is/core/models";
import { FunctionComponent } from "react";
/**
 * Prop types interface for the Alert component.
 */
export interface AlertPropsInterface extends TestableComponentInterface {
    /**
     * Unset the position of the alert.
     */
    absolute?: boolean;
    /**
     * Alert object.
     */
    alert: AlertInterface;
    /**
     * Position of the notification. Available: tr (top right), tl (top left),
     * tc (top center), br (bottom right), bl (bottom left), bc (bottom center)
     */
    alertsPosition?: "tr" | "tl" | "tc" | "br" | "bl" | "bc";
    /**
     * Alert system instance.
     */
    alertSystem: any;
    /**
     * Settings controlling if the alert is dismissible or not.
     */
    dismissible?: boolean;
    /**
     * Delay in seconds for the alert to go away.
     */
    dismissInterval?: number;
    /**
     * Callback to be triggered to initialize the alert system.
     * @param ref
     */
    onAlertSystemInitialize: (ref: any) => void;
    /**
     * If the icon should be visible or not.
     */
    withIcon?: boolean;
}
/**
 * Alert component to show success, error, warning and info notifications on the front end dashboards.
 *
 * @param {AlertPropsInterface} props - Props injected in to the alert component.
 *
 * @return {React.ReactElement}
 */
export declare const Alert: FunctionComponent<AlertPropsInterface>;
