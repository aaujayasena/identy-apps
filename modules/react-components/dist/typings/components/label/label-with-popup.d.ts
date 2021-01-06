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
import { FunctionComponent, ReactNode } from "react";
import { LabelProps, PopupProps } from "semantic-ui-react";
export interface LabelWithPopupPropsInterface extends LabelProps {
    /**
     * Header of the popup
     */
    popupHeader?: string;
    /**
     * Sub heading of the popup
     */
    popupSubHeader?: ReactNode | string;
    /**
     * Popup content
     */
    popupContent?: ReactNode | string;
    /**
     * Popup footer right actions
     */
    popupFooterRightActions?: any;
    /**
     * Popup footer left actions
     */
    popupFooterLeftActions?: any;
    /**
     * Popup footer left side content
     */
    popupFooterLeftContent?: ReactNode | string;
    /**
     * Other props for the popup.
     */
    popupOptions?: PopupProps;
    /**
     * Color of the circular label.
     */
    labelColor: LabelProps["color"];
}
/**
 * Content loader component.
 *
 * @param {ContentLoaderPropsInterface} props - Props injected to the global loader component.
 *
 * @return {React.ReactElement}
 */
export declare const LabelWithPopup: FunctionComponent<LabelWithPopupPropsInterface>;
