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
import React, { PropsWithChildren } from "react";
/**
 * Common side panel base component Prop types.
 */
export interface CommonSidePanelPropsInterface extends TestableComponentInterface {
    /**
     * Caret icon.
     */
    caretIcon?: any;
    /**
     * Should the panel be categorized.
     */
    categorized?: boolean;
    /**
     * Content spacing.
     */
    desktopContentTopSpacing?: number;
    /**
     * height of the footer.
     */
    footerHeight: number;
    /**
     * Height of the header.
     */
    headerHeight: number;
    /**
     * Hover type.
     */
    hoverType?: "highlighted" | "background";
    /**
     * Should the panel routes be ordered.
     */
    ordered?: boolean;
    /**
     * Side panel item onclick callback.
     * @param {RouteInterface | ChildRouteInterface} route - Clicked route.
     */
    onSidePanelItemClick: (route: RouteInterface | ChildRouteInterface) => void;
    /**
     * Add more margins between items.
     */
    relaxed?: boolean;
    /**
     * Selected route.
     */
    selected: RouteInterface | ChildRouteInterface;
    /**
     * Show category dividers.
     */
    showCategoryDividers?: boolean;
    /**
     * Show ellipsis in side panel items.
     */
    showEllipsis?: boolean;
    /**
     * Side panel item height.
     */
    sidePanelItemHeight?: number;
    /**
     * Position of the side panel.
     */
    sidePanelPosition?: "absolute" | "fixed" | "inherit" | "initial" | "relative" | "static" | "sticky" | "unset";
    /**
     * Top margin.
     */
    sidePanelTopMargin?: number | boolean;
    /**
     * i18next translation hook.
     */
    translationHook?: any;
    /**
     * Scopes allowed for the user.
     */
    allowedScopes: string;
}
/**
 * Side panel base component Prop types.
 */
export interface SidePanelPropsInterface extends CommonSidePanelPropsInterface {
    bordered?: "left" | "right" | "top" | "bottom" | boolean;
    fluid?: boolean;
    mobileSidePanelVisibility: boolean;
    onSidePanelPusherClick: () => void;
    routes: RouteInterface[];
}
/**
 * Side panel base component.
 *
 * @param {SidePanelPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export declare const SidePanel: React.FunctionComponent<PropsWithChildren<SidePanelPropsInterface>>;
