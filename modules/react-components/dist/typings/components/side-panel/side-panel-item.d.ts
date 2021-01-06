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
import { ChildRouteInterface, RouteInterface, TestableComponentInterface } from "@wso2is/core/models";
import React from "react";
import { CommonSidePanelPropsInterface } from "./side-panel";
import { GenericIconSizes } from "../icon";
/**
 * Side panel item component Prop types.
 */
export interface SidePanelItemPropsInterface extends CommonSidePanelPropsInterface, TestableComponentInterface {
    /**
     * Size of the icon.
     */
    iconSize?: GenericIconSizes;
    /**
     * Route of the item.
     */
    route: RouteInterface | ChildRouteInterface;
    /**
     * Scopes allowed for the user.
     */
    allowedScopes: string;
}
/**
 * Side panel item component.
 *
 * @param {SidePanelItemPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export declare const SidePanelItem: React.FunctionComponent<SidePanelItemPropsInterface>;
