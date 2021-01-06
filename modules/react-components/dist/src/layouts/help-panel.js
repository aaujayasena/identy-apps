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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { Menu, Sidebar } from "semantic-ui-react";
import { HelpPanel } from "../components";
/**
 * Help panel layout.
 *
 * @param {React.PropsWithChildren<HelpPanelLayoutLayoutPropsInterface>} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const HelpPanelLayout = (props) => {
    const sidebarRef = useRef();
    const contentRef = useRef();
    const { children, className, closeButtonTooltip, enabled, icons, onHelpPanelPinToggle, onHelpPanelVisibilityChange, isPinned, pinButtonTooltip, sidebarDirection, tabs, activeIndex, unpinButtonTooltip, visible } = props, rest = __rest(props, ["children", "className", "closeButtonTooltip", "enabled", "icons", "onHelpPanelPinToggle", "onHelpPanelVisibilityChange", "isPinned", "pinButtonTooltip", "sidebarDirection", "tabs", "activeIndex", "unpinButtonTooltip", "visible"]);
    const [helpSidebarVisibility, setHelpSidebarVisibility] = useState(false);
    const [helpPanelTabsActiveIndex, setHelpPanelTabsActiveIndex] = useState(0);
    const layoutClasses = classNames("layout", "help-panel-layout", className);
    const layoutContentClasses = classNames("layout-content");
    useEffect(() => {
        if (activeIndex == undefined || activeIndex == 0) {
            return;
        }
        setHelpPanelTabsActiveIndex(activeIndex);
    }, [activeIndex]);
    useEffect(() => {
        var _a, _b;
        if (!((_a = sidebarRef === null || sidebarRef === void 0 ? void 0 : sidebarRef.current) === null || _a === void 0 ? void 0 : _a.clientWidth)) {
            return;
        }
        contentRef.current.style.width = "calc(100% - " + ((_b = sidebarRef === null || sidebarRef === void 0 ? void 0 : sidebarRef.current) === null || _b === void 0 ? void 0 : _b.clientWidth) + "px)";
    }, [helpSidebarVisibility]);
    useEffect(() => {
        if (visible === undefined) {
            return;
        }
        setHelpSidebarVisibility(visible);
    }, [visible]);
    useEffect(() => {
        if (isPinned) {
            setHelpSidebarVisibility(true);
        }
    }, [isPinned]);
    /**
     * Handles sidebar mini item click event.
     *
     * @param {string} item - Clicked item.
     */
    const handleSidebarMiniItemClick = (item) => {
        getFilteredHelpPanelTabs().forEach((pane, index) => {
            if (pane.heading === item) {
                setHelpPanelTabsActiveIndex(index);
            }
        });
        setHelpSidebarVisibility(true);
        onHelpPanelVisibilityChange(true);
    };
    /**
     * Filter the help panel tabs and remove hidden tabs.
     *
     * @return {HelpPanelTabInterface[]} Modified tabs array.
     */
    const getFilteredHelpPanelTabs = () => {
        return tabs.filter((tab) => !tab.hidden);
    };
    /**
     * Handles the help panel toggle action.
     */
    const handleHelpPanelToggle = () => {
        setHelpSidebarVisibility(!helpSidebarVisibility);
        onHelpPanelVisibilityChange(!helpSidebarVisibility);
    };
    return (enabled
        ? (React.createElement(Sidebar.Pushable, { className: layoutClasses },
            React.createElement(HelpPanel, Object.assign({ as: Menu, direction: sidebarDirection, visible: helpSidebarVisibility, ref: sidebarRef, actions: [
                    {
                        icon: icons.pin,
                        onClick: onHelpPanelPinToggle,
                        tooltip: isPinned ? unpinButtonTooltip : pinButtonTooltip
                    },
                    {
                        icon: icons.close,
                        onClick: handleHelpPanelToggle,
                        tooltip: closeButtonTooltip
                    }
                ], tabsActiveIndex: helpPanelTabsActiveIndex, tabs: getFilteredHelpPanelTabs(), onSidebarMiniItemClick: handleSidebarMiniItemClick, onSidebarToggle: handleHelpPanelToggle }, rest)),
            React.createElement(Sidebar.Pusher, { className: layoutContentClasses },
                React.createElement("div", { ref: contentRef }, children))))
        : React.createElement(React.Fragment, null, children));
};
/**
 * Default props for the sidebar pusher layout.
 */
HelpPanelLayout.defaultProps = {
    animation: "overlay",
    bordered: "left",
    enabled: true,
    icon: "labeled",
    pinButtonTooltip: "Pin",
    raised: false,
    showLabelsOnSidebarMini: false,
    showTooltipsOnActionBar: true,
    showTooltipsOnSidebarMini: true,
    sidebarMiniEnabled: true,
    unpinButtonTooltip: "Unpin",
    vertical: true
};
//# sourceMappingURL=help-panel.js.map