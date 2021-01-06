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
import { LinkedAccountInterface, TestableComponentInterface } from "@wso2is/core/models";
import React, { FunctionComponent, ReactNode } from "react";
import { DropdownItemProps, SemanticICONS } from "semantic-ui-react";
/**
 * Header component prop types.
 */
export interface HeaderPropsInterface extends TestableComponentInterface {
    /**
     * Top announcement component.
     */
    announcement?: ReactNode;
    /**
     * Set of extensions.
     */
    extensions?: HeaderExtension[];
    basicProfileInfo: any;
    brand?: React.ReactNode;
    brandLink?: string;
    children?: any;
    className?: string;
    fixed?: "left" | "right" | "bottom" | "top";
    fluid?: boolean;
    isProfileInfoLoading?: boolean;
    linkedAccounts?: LinkedAccountInterface[];
    profileInfo: any;
    onLinkedAccountSwitch?: (account: LinkedAccountInterface) => void;
    onSidePanelToggleClick?: () => void;
    showSidePanelToggle?: boolean;
    showUserDropdown?: boolean;
    userDropdownIcon?: any;
    userDropdownInfoAction?: React.ReactNode;
    userDropdownLinks?: HeaderLinkInterface[];
}
/**
 * Header extension interface.
 */
interface HeaderExtension {
    /**
     * Component to render.
     */
    component: ReactNode;
    /**
     * Float direction.
     */
    floated: "left" | "right";
}
/**
 * Header links dynamic interface to pass in extra props for `Link` component.
 */
export interface HeaderLinkInterface extends StrictHeaderLinkInterface {
    [key: string]: any;
}
/**
 * Header links strict interface.
 */
export interface StrictHeaderLinkInterface {
    /**
     * Children content.
     */
    content?: ReactNode;
    /**
     * Link icon.
     */
    icon?: SemanticICONS;
    /**
     * Link name.
     */
    name: string;
    /**
     * Called on dropdown item click.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onClick?: (event: React.MouseEvent<HTMLDivElement>, data: DropdownItemProps) => void;
}
/**
 * Header component.
 *
 * @param {HeaderPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export declare const Header: FunctionComponent<HeaderPropsInterface>;
export {};
