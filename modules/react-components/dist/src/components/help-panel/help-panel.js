/*
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
import React, { forwardRef, useEffect, useState } from "react";
import { Menu, Sidebar } from "semantic-ui-react";
import { HelpPanelActionBar } from "./help-panel-action-bar";
import { ReactComponent as CaretLeftIcon } from "../../assets/images/caret-left-icon.svg";
import { GenericIcon } from "../icon";
import { ResourceTab } from "../tab";
import { Tooltip } from "../typography";
/**
 * Help side panel.
 *
 * @param {React.PropsWithChildren<HelpPanelComponentPropsInterface>} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const HelpPanel = forwardRef((props, ref) => {
    const { actions, bordered, children, className, onSidebarToggle, tabs, raised, showLabelsOnSidebarMini, showTooltipsOnActionBar, showTooltipsOnSidebarMini, sidebarMiniEnabled, sidebarToggleTooltip, visible, tabsActiveIndex, onSidebarMiniItemClick, ["data-testid"]: testId } = props, rest = __rest(props, ["actions", "bordered", "children", "className", "onSidebarToggle", "tabs", "raised", "showLabelsOnSidebarMini", "showTooltipsOnActionBar", "showTooltipsOnSidebarMini", "sidebarMiniEnabled", "sidebarToggleTooltip", "visible", "tabsActiveIndex", "onSidebarMiniItemClick", "data-testid"]);
    const [activeIndex, setActiveIndex] = useState(tabsActiveIndex);
    const [tabPanes, setTabPanes] = useState([]);
    const classes = classNames("help-panel", {
        [typeof bordered === "boolean" ? "bordered-default" : `bordered-${bordered}`]: bordered,
        mini: sidebarMiniEnabled && !visible,
        raised
    }, className);
    /**
     * Called on tab active index change.
     */
    useEffect(() => {
        if (!tabsActiveIndex || tabsActiveIndex === activeIndex) {
            return;
        }
        setActiveIndex(tabsActiveIndex);
    }, [tabsActiveIndex]);
    /**
     * Called on tabs array change.
     */
    useEffect(() => {
        if (!tabs) {
            return;
        }
        setTabPanes(tabs.map((tab) => {
            return {
                icon: tab.icon,
                menuItem: tab.heading,
                render: () => (React.createElement(ResourceTab.Pane, { attached: false }, tab.content))
            };
        }));
    }, [tabs]);
    return (React.createElement(Sidebar, Object.assign({ animation: "overlay", className: classes, visible: sidebarMiniEnabled || visible, "data-testid": testId }, rest),
        React.createElement("div", { className: "help-panel-content-container", ref: ref },
            sidebarMiniEnabled && !visible && (React.createElement("div", { className: "sidebar-mini-menu" },
                React.createElement(Menu.Item, { as: "a", onClick: onSidebarToggle, "data-testid": `${testId}-visibility-toggle` },
                    React.createElement(Tooltip, { compact: true, trigger: (React.createElement("div", null,
                            React.createElement(GenericIcon, { link: true, hoverable: true, defaultIcon: true, transparent: true, icon: CaretLeftIcon, size: "default", hoverType: "circular", "data-testid": `${testId}-visibility-toggle-icon` }))), content: sidebarToggleTooltip, size: "mini" })),
                tabPanes && tabPanes instanceof Array && tabPanes.length > 0 && (tabPanes.map((pane, index) => (React.createElement(Menu.Item, { as: "a", key: index, onClick: () => onSidebarMiniItemClick(pane.menuItem), "data-testid": `${testId}-sidebar-mini-item-${index}` },
                    React.createElement(Tooltip, { compact: true, disabled: showLabelsOnSidebarMini || !showTooltipsOnSidebarMini, trigger: (React.createElement("div", null,
                            React.createElement(GenericIcon, Object.assign({ link: true, hoverable: true, defaultIcon: true, transparent: true, size: "default", hoverType: "circular", "data-testid": `${testId}-sidebar-mini-item-${index}-icon` }, pane.icon)))), content: pane.menuItem, size: "mini" }),
                    showLabelsOnSidebarMini && pane.menuItem)))))),
            visible && (React.createElement(React.Fragment, null,
                actions && actions instanceof Array && actions.length > 0 && (React.createElement(HelpPanel.ActionBar, { "data-testid": `${testId}-action-bar` }, actions.map((action, index) => (React.createElement(Tooltip, { compact: true, key: index, 
                    // TODO: Enable after fixing the flickering issue.
                    disabled: true, trigger: (React.createElement("div", null,
                        React.createElement(GenericIcon, Object.assign({ link: true, inline: true, hoverable: true, transparent: true, defaultIcon: true, size: "default", "data-testid": `${testId}-action-bar-action-${index}` }, action)))), content: action.tooltip, size: "mini" }))))),
                React.createElement(ResourceTab, { className: "help-panel-tabs", panes: tabPanes, defaultActiveIndex: tabsActiveIndex, "data-testid": `${testId}-tabs` }),
                children)))));
});
/**
 * Default props for the help panel component.
 */
HelpPanel.defaultProps = {
    bordered: "left",
    "data-testid": "help-panel",
    direction: "right",
    raised: false,
    showLabelsOnSidebarMini: false,
    showTooltipsOnActionBar: true,
    showTooltipsOnSidebarMini: true,
    sidebarMiniEnabled: true,
    sidebarToggleTooltip: "Open help panel",
    visible: true
};
HelpPanel.ActionBar = HelpPanelActionBar;
//# sourceMappingURL=help-panel.js.map