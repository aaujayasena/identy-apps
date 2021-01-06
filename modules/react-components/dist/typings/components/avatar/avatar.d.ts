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
import React, { FunctionComponent, PropsWithChildren, SyntheticEvent } from "react";
import { ImageProps, SemanticSIZES } from "semantic-ui-react";
import { GenericIconProps } from "../icon";
/**
 * Prop types for the Avatar component.
 */
export interface AvatarPropsInterface extends TestableComponentInterface, Omit<ImageProps, "size"> {
    /**
     * To determine if avatar with initials should be displayed.
     */
    avatar?: boolean;
    /**
     * The number of initials that should be displayed.
     */
    avatarInitialsLimit?: 1 | 2;
    /**
     * Default icon.
     */
    defaultIcon?: any;
    /**
     * If the avatar is editable or not.
     */
    editable?: boolean;
    /**
     * Edit icon.
     */
    editIcon?: GenericIconProps["icon"];
    /**
     * Edit icon size.
     */
    editIconSize?: GenericIconProps["size"];
    /**
     * Image to be displayed as an avatar.
     */
    image?: React.ReactNode;
    /**
     * If the avatar should be displayed inline.
     */
    inline?: boolean;
    /**
     * Color of the avatar initials.
     */
    initialsColor?: "white" | "primary";
    /**
     * If the avatar is in a loading state.
     */
    isLoading?: boolean;
    /**
     * A label for the avatar.
     */
    label?: string;
    /**
     * User's name.
     */
    name?: string;
    /**
     * On Edit Icon click callback.
     * @param {React.SyntheticEvent} e - Click event.
     */
    onEditIconClick?: (e: SyntheticEvent) => void;
    /**
     * On click callback.
     * @param {React.SyntheticEvent} e - Click event.
     */
    onClick?: (e: SyntheticEvent) => void;
    /**
     * Fired on mouse out.
     * @param {MouseEvent} e - Mouse event.
     */
    onMouseOut?: (e: MouseEvent) => void;
    /**
     * Fired on mouse over.
     * @param {MouseEvent} e - Mouse event.
     */
    onMouseOver?: (e: MouseEvent) => void;
    /**
     * Set overflow attribute to the wrapper.
     */
    overflow?: "auto" | "hidden";
    /**
     * Adds padding to the avatar content.
     */
    relaxed?: boolean | "very";
    /**
     * Shape of the avatar.
     */
    shape?: "circular" | "square";
    /**
     * Size of the avatar.
     */
    size?: AvatarSizes;
    /**
     * Adds a space to the specified direction.
     */
    spaced?: "left" | "right";
    /**
     * Custom CSS styles.
     */
    style?: object;
    /**
     * Makes the avatar transparent.
     */
    transparent?: boolean;
    /**
     * Width of the inner image.
     */
    width?: "auto" | "full";
    /**
     * Adjust styling to enable background images.
     */
    withBackgroundImage?: boolean;
}
/**
 * Type to handle Avatar sizes.
 */
export declare type AvatarSizes = SemanticSIZES | "x60" | "little";
/**
 * Avatar component.
 *
 * @param {AvatarPropsInterface} props - Props passed in to the Avatar component.
 *
 * @return {React.ReactElement}
 */
export declare const Avatar: FunctionComponent<PropsWithChildren<AvatarPropsInterface>>;
