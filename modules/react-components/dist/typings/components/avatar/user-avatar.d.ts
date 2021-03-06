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
import { AuthReducerStateInterface, ProfileInfoInterface, TestableComponentInterface } from "@wso2is/core/models";
import React, { FunctionComponent } from "react";
import { AvatarPropsInterface } from "./avatar";
/**
 * Prop types for the user avatar component.
 */
export interface UserAvatarPropsInterface extends AvatarPropsInterface, TestableComponentInterface {
    /**
     * Authenticated users basic information.
     */
    authState?: AuthReducerStateInterface;
    /**
     * Text to show on gravatar avatar hover.
     */
    gravatarInfoPopoverText?: React.ReactNode;
    /**
     * Profile information.
     */
    profileInfo?: ProfileInfoInterface;
    /**
     * If the gravatar label should be displayed or not.
     */
    showGravatarLabel?: boolean;
}
/**
 * User Avatar component.
 *
 * @param {UserAvatarPropsInterface} props - Props injected in to the user avatar component.
 *
 * @return {React.ReactElement}
 */
export declare const UserAvatar: FunctionComponent<UserAvatarPropsInterface>;
