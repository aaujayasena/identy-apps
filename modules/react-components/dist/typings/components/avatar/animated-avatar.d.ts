/**
* Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
*
* WSO2 Inc. licenses this file to you under the Apache License,
* Version 2.0 (the 'License'); you may not use this file except
* in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied. See the License for the
* specific language governing permissions and limitations
* under the License.
*/
import { FunctionComponent } from "react";
import { ImageProps } from "semantic-ui-react";
/**
 * Prop types of the component
 */
export interface AnimatedAvatarPropsInterface extends ImageProps {
    /**
     * Sets if the avatar is of primary color or not
     */
    primary?: boolean;
    /**
     * Name to be passed in.
     */
    name?: string;
}
/**
 * Animated avatar component.
 * This is a mosaic of 6x6 squares with random opacity values between `0.8` and `1`.
 *
 * @param {AnimatedAvatarPropsInterface} props - Props injected in to the component.
 * @return {React.ReactElement}
 */
export declare const AnimatedAvatar: FunctionComponent<AnimatedAvatarPropsInterface>;
