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
import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import { HeaderProps, SegmentProps } from "semantic-ui-react";
import { SemanticCOLORS } from "semantic-ui-react/dist/commonjs/generic";
import { GenericIconProps, GenericIconSizes } from "../icon";
/**
 * Proptypes for the jumbotron component.
 */
export interface JumbotronPropsInterface extends Omit<SegmentProps, "color">, TestableComponentInterface {
    /**
     * Background color.
     */
    background?: "primary" | "secondary" | "accent1" | "accent2" | "accent3" | "white" | "default" | SemanticCOLORS;
    /**
     * Border radius.
     */
    borderRadius?: "default" | number;
    /**
     * Enable borders.
     */
    bordered?: "bottom" | "top" | boolean;
    /**
     * Should the content be inline.
     */
    contentInline?: boolean;
    /**
     * Jumbotron heading.
     */
    heading?: ReactNode;
    /**
     * Element to render heading.
     */
    headingAs?: HeaderProps["as"];
    /**
     * Custom style object.
     */
    style?: object;
    /**
     * Jumbotron sub heading.
     */
    subHeading?: ReactNode;
    /**
     * Element to render sub heading.
     */
    subHeadingAs?: HeaderProps["as"];
    /**
     * Enable matching padding same as the page layout.
     */
    matchedPadding?: boolean;
    /**
     * Icon to represent the stats.
     */
    icon?: GenericIconProps["icon"];
    /**
     * Icon options.
     */
    iconOptions?: Omit<GenericIconProps, "icon" | "size">;
    /**
     * Size of the icon.
     */
    iconSize?: GenericIconSizes;
    /**
     * Additional content to appear before the heading.
     */
    topContent?: ReactNode;
}
/**
 * Component to showcase key marketing messages.
 *
 * @param {JumbotronPropsInterface} props - Props injected to the components.
 *
 * @return {React.ReactElement}
 */
export declare const Jumbotron: FunctionComponent<PropsWithChildren<JumbotronPropsInterface>>;
