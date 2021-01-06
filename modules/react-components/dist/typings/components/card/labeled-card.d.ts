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
import React, { FunctionComponent } from "react";
import { CardProps, LabelProps, SemanticSIZES } from "semantic-ui-react";
import { GenericIconProps, GenericIconSizes } from "../icon";
/**
 * Proptypes for the labeled card component.
 */
export interface LabeledCardPropsInterface extends TestableComponentInterface {
    /**
     * Card Background color.
     */
    background?: "transparent" | "default";
    /**
     * Basic appearance with no borders etc.
     */
    basic?: boolean;
    /**
     * If a bottom margin should be added.
     */
    bottomMargin?: boolean;
    /**
     * Additional classes.
     */
    className?: string;
    /**
     * Is the card should be rendered as disabled.
     */
    disabled?: boolean;
    /**
     * The card will take the size of the container.
     */
    fluid?: boolean;
    /**
     * Id for the card.
     */
    id?: string;
    /**
     * Image to be displayed.
     */
    image: any;
    /**
     * Icon options.
     */
    imageOptions?: Omit<GenericIconProps, "icon" | "size">;
    /**
     * Size of the image.
     */
    imageSize?: GenericIconSizes;
    /**
     * Should the card be inline.
     */
    inline?: boolean;
    /**
     * Label of the card.
     */
    label: string;
    /**
     * Label ellipsis.
     */
    labelEllipsis?: boolean;
    /**
     * On click callback for the element.
     */
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>, data: CardProps) => void;
    /**
     * On click callback for the close button.
     */
    onCloseClick?: (event: React.MouseEvent<HTMLElement>, data: LabelProps) => void;
    /**
     * Padding.
     */
    padding?: "default" | "none";
    /**
     * Should raise on hover.
     */
    raiseOnHover?: boolean;
    /**
     * If the card should appear as selected.
     */
    selected?: boolean;
    /**
     * Set of sizes. Only tiny is currently supported.
     */
    size?: SemanticSIZES;
}
/**
 * Labeled card component.
 *
 * @param {LabeledCardPropsInterface} props - Props injected to the components.
 *
 * @return {React.ReactElement}
 */
export declare const LabeledCard: FunctionComponent<LabeledCardPropsInterface>;
