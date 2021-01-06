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
import { FunctionComponent, MouseEvent } from "react";
import { CardProps, StatisticProps } from "semantic-ui-react";
import { GenericIconProps, GenericIconSizes } from "../icon";
/**
 * Proptypes for the stat count card component.
 */
export interface StatCountCardPropsInterface extends TestableComponentInterface {
    /**
     * Additional classes.
     */
    className?: string;
    /**
     * Display on full width;.
     */
    fluid?: boolean;
    /**
     * Stat value.
     */
    value: string | number;
    /**
     * Disabled mode.
     */
    disabled?: boolean;
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
     * Inline mode.
     */
    inline?: boolean;
    /**
     * Stat count card onclick event.
     * @param {React.MouseEvent<HTMLAnchorElement>} e - Event,
     * @param {CardProps} data - Card data.
     */
    onClick?: (e: MouseEvent<HTMLAnchorElement>, data: CardProps) => void;
    /**
     * Extra options for the stats component.
     */
    statOptions?: StatOptionsInterface;
    /**
     * Text align direction.
     */
    textAlign?: "center" | "left" | "right";
    /**
     * Stat label.
     */
    label: string;
}
/**
 * Statistics options interface.
 */
interface StatOptionsInterface extends StatisticProps {
    /**
     * Text align direction.
     */
    textAlign?: "center" | "left" | "right";
    /**
     * Text transform.
     */
    textTransform?: "uppercase" | "lowercase" | "capitalize";
}
/**
 * Stat count card component that can be used to represent statistics.
 *
 * @param {StatCountCardPropsInterface} props - Props injected to the components.
 *
 * @return {React.ReactElement}
 */
export declare const StatCountCard: FunctionComponent<StatCountCardPropsInterface>;
export {};
