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
import React from "react";
/**
 * Text component prop types.
 */
export interface TextPropsInterface extends TestableComponentInterface {
    /**
     * Additional CSS classes.
     */
    className?: string;
    /**
     * Display style.
     */
    display?: "block" | "inline" | "inline-block" | "flex" | "inline-flex" | string;
    /**
     * Hide the margins and make the component compact.
     */
    compact?: boolean;
    /**
     * Display inline.
     */
    inline?: boolean;
    /**
     * Should the text have lighter color.
     */
    muted?: boolean;
    /**
     * Font size.
     */
    size?: number | string;
    /**
     * Custom styles object.
     */
    styles?: object;
    /**
     * De-emphasises the heading.
     */
    subHeading?: boolean;
    /**
     * Truncate the text and adds ellipsis on overflow.
     */
    truncate?: boolean;
    /**
     * Determines if the font weight should be bold.
     */
    weight?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "bold" | "normal" | "lighter" | string;
    /**
     * Width of the container.
     */
    width?: number;
}
/**
 * Text component.
 *
 * @param {TextPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export declare const Text: React.FunctionComponent<TextPropsInterface>;
