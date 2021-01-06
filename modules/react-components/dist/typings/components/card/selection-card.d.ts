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
import { CardProps } from "semantic-ui-react";
import { GenericIconProps, GenericIconSizes } from "../icon";
/**
 * Proptypes for the selection card component.
 */
export interface SelectionCardPropsInterface extends Omit<CardProps, "image">, TestableComponentInterface {
    /**
     * Content top border.
     */
    contentTopBorder?: boolean;
    /**
     * Is card disabled.
     */
    disabled?: boolean;
    /**
     * Id for the card.
     */
    id?: string;
    /**
     * Image for the card.
     */
    image?: any;
    /**
     * Icon options.
     */
    imageOptions?: Omit<GenericIconProps, "icon" | "size">;
    /**
     * Side of the image.
     */
    imageSize?: GenericIconSizes;
    /**
     * Should the description have two lines.
     */
    multilineDescription?: boolean;
    /**
     * If the card is selected.
     */
    selected?: boolean;
    /**
     *
     */
    selectionType?: "underlined" | "filled";
    /**
     * Should text be shown i.e Header & Description.
     */
    showText?: boolean;
    /**
     * Should tooltips be shown.
     */
    showTooltips?: boolean;
    /**
     * Card size.
     */
    size?: "x100" | "x120" | "small" | "default" | "auto";
    /**
     * Add spacing to the card.
     */
    spaced?: "bottom";
    /**
     * Text alignment.
     */
    textAlign?: "center" | "left" | "right";
    /**
     * If the card should be inline.
     */
    inline?: boolean;
}
/**
 * Selection card component.
 *
 * @param {SelectionCardPropsInterface} props - Props injected to the components.
 *
 * @return {React.ReactElement}
 */
export declare const SelectionCard: FunctionComponent<SelectionCardPropsInterface>;
