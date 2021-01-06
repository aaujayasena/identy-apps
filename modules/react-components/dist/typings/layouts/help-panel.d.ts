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
import { FunctionComponent, PropsWithChildren } from "react";
import { GenericIconProps, HelpPanelPropsInterface } from "../components";
/**
 * Help panel layout Prop types.
 */
export interface HelpPanelLayoutLayoutPropsInterface extends HelpPanelPropsInterface {
    /**
     * Extra CSS classes.
     */
    className?: string;
    /**
     * Tooltip for the close button.
     */
    closeButtonTooltip?: string;
    /**
     * Completely disables the sidebar.
     */
    enabled?: boolean;
    /**
     * Set of icons for the action panel.
     */
    icons: HelpPanelIconsInterface;
    /**
     * Callback for pin button click.
     */
    onHelpPanelPinToggle: () => void;
    /**
     * Callback for help panel visibility change.
     * @param {boolean} isVisible - Is sidebar visible.
     */
    onHelpPanelVisibilityChange?: (isVisible: boolean) => void;
    /**
     * Flag to distinguish if the panel is pinned.
     */
    isPinned?: boolean;
    /**
     * Tooltip for the pin button.
     */
    pinButtonTooltip?: string;
    /**
     * Direction of the sidebar.
     */
    sidebarDirection?: HelpPanelPropsInterface["direction"];
    /**
     * Toggle the visibility of the sidebar. Mini version will be shown if it is enabled.
     */
    sidebarVisibility?: HelpPanelPropsInterface["visible"];
    /**
     * Is mini sidebar enabled.
     */
    sidebarMiniEnabled?: HelpPanelPropsInterface["sidebarMiniEnabled"];
    /**
     * Array of objects describing tabs.
     */
    tabs: HelpPanelPropsInterface["tabs"];
    /**
     * Tooltip for the unpin button.
     */
    unpinButtonTooltip?: string;
    /**
     * Tabs active index.
     */
    activeIndex?: number;
    /**
     * Side panel external visibility state.
     */
    visible?: boolean;
}
/**
 * Interface for help panel icons.
 */
export interface HelpPanelIconsInterface {
    /**
     * Pin icon.
     */
    pin: GenericIconProps["icon"];
    /**
     * Close icon.
     */
    close: GenericIconProps["icon"];
}
/**
 * Help panel layout.
 *
 * @param {React.PropsWithChildren<HelpPanelLayoutLayoutPropsInterface>} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export declare const HelpPanelLayout: FunctionComponent<PropsWithChildren<HelpPanelLayoutLayoutPropsInterface>>;
