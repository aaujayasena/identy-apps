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
import React, { PropsWithChildren } from "react";
import { SemanticVERTICALALIGNMENTS } from "semantic-ui-react";
/**
 * Proptypes for the Generic Icon component.
 */
export interface GenericIconProps extends TestableComponentInterface {
    /**
     * Render as.
     */
    as?: "data-url" | "svg";
    /**
     * Background fill color.
     */
    background?: "primary" | "secondary" | "accent1" | "accent2" | "accent3" | "default" | boolean;
    /**
     * Should the icon appear bordered.
     */
    bordered?: boolean;
    /**
     * Additional CSS classes.
     */
    className?: string;
    /**
     * Should the icon appear colored.
     */
    colored?: boolean;
    /**
     * Should the icon appear default i.e grey.
     */
    defaultIcon?: boolean;
    /**
     * Inactive status of this icon element.
     * The default value is always false. Refer {@link GenericIcon.defaultProps}
     */
    disabled?: boolean;
    /**
     * Icon fill color.
     */
    fill?: "primary" | "secondary" | "accent1" | "accent2" | "accent3" | "default" | "white" | boolean;
    /**
     * Floated direction.
     */
    floated?: string;
    /**
     * Is hover style enabled.
     */
    hoverable?: boolean;
    /**
     * Hover type.
     */
    hoverType?: "rounded" | "square" | "circular";
    /**
     * Icon for the component.
     */
    icon: any;
    /**
     * Should the icon appear inline.
     */
    inline?: boolean;
    /**
     * Should the icon appear as a link. i.e On hover it'll be highlighted.
     */
    link?: boolean;
    /**
     * Hover color of the icon.
     */
    linkType?: "primary";
    /**
     * Icon onclick callback.
     * @param {React.MouseEvent<HTMLDivElement>} event - Click event.
     */
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    /**
     * Relaxed padding.
     */
    relaxed?: boolean | "very";
    /**
     * Should the icon appear rounded.
     * @deprecated use `shape` instead.
     */
    rounded?: boolean;
    /**
     * Shape of the icon.
     */
    shape?: "square" | "circular" | "rounded";
    /**
     * Size of the icon.
     */
    size?: GenericIconSizes;
    /**
     * Spacing direction.
     */
    spaced?: "left" | "right";
    /**
     * Custom style object.
     */
    style?: object;
    /**
     * Should the icon be squared.
     * @deprecated use `shape` instead.
     */
    square?: boolean;
    /**
     * Should the icon be transparent.
     */
    transparent?: boolean;
    /**
     * Should the icon be twoTone. i.e. Primary & secondary.
     */
    twoTone?: boolean;
    /**
     * Vertical alignment.
     */
    verticalAlign?: SemanticVERTICALALIGNMENTS;
}
/**
 * Icon sizes.
 */
export declare type GenericIconSizes = "auto" | "nano" | "default" | "micro" | "mini" | "x50" | "x60" | "tiny" | "small" | "medium" | "large" | "big" | "huge" | "massive";
/**
 * Generic component to render icons.
 *
 * @param {GenericIconProps} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export declare const GenericIcon: React.FunctionComponent<PropsWithChildren<GenericIconProps>>;
