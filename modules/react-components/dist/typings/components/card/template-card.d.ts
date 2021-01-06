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
import { FunctionComponent, MouseEvent, ReactNode } from "react";
import { CardProps } from "semantic-ui-react";
import { GenericIconProps, GenericIconSizes } from "../icon";
/**
 * Proptypes for the template card component.
 */
export interface TemplateCardPropsInterface extends TestableComponentInterface {
    /**
     * Additional classes.
     */
    className?: string;
    /**
     * Template description
     */
    description: string;
    /**
     * Set of tags for the template.
     */
    tags?: TemplateCardTagInterface[] | string[];
    /**
     * Element to render the tag as.
     */
    tagsAs?: "icon" | "label" | "default";
    /**
     * Title for the tags section.
     */
    tagsSectionTitle?: ReactNode;
    /**
     * Disabled mode.
     */
    disabled?: boolean;
    /**
     * Template Name.
     */
    name: string;
    /**
     * Template ID.
     */
    id?: string;
    /**
     * Template image.
     */
    image?: GenericIconProps["icon"];
    /**
     * Size of the image.
     */
    imageSize?: GenericIconSizes;
    /**
     * Icon options.
     */
    imageOptions?: Omit<GenericIconProps, "icon" | "size">;
    /**
     * Template card onclick event.
     * @param {React.MouseEvent<HTMLAnchorElement>} e - Event,
     * @param {CardProps} data - Card data.
     */
    onClick: (e: MouseEvent<HTMLAnchorElement>, data: CardProps) => void;
    /**
     * Selected mode flag.
     */
    selected?: boolean;
    /**
     * Show/Hide tags section.
     */
    showTags?: boolean;
    /**
     * Show/Hide tag icon.
     */
    showTagIcon?: boolean;
    /**
     * Text align direction.
     */
    textAlign?: "center" | "left" | "right";
    /**
     * Inline mode.
     */
    inline?: boolean;
}
/**
 * Template card tag interface.
 */
export interface TemplateCardTagInterface {
    /**
     * Tag name.
     */
    name: string;
    /**
     * Tag display name.
     */
    displayName?: string;
    /**
     * Tag image.
     */
    logo?: any;
}
/**
 * Template card component that can be used to represent application and IDP templates.
 *
 * @param {TemplateCardPropsInterface} props - Props injected to the components.
 *
 * @return {React.ReactElement}
 */
export declare const TemplateCard: FunctionComponent<TemplateCardPropsInterface>;
