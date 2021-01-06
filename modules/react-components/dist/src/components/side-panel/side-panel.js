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
import { UIConstants } from "@wso2is/core/constants";
import classNames from "classnames";
import sortBy from "lodash/sortBy";
import React, { useEffect, useState } from "react";
import { Container, Responsive, Sidebar } from "semantic-ui-react";
import { SidePanelItems } from "./side-panel-items";
/**
 * Side panel base component.
 *
 * @param {SidePanelPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const SidePanel = (props) => {
    const { allowedScopes, bordered, categorized, children, desktopContentTopSpacing, footerHeight, fluid, headerHeight, mobileSidePanelVisibility, ordered, onSidePanelItemClick, onSidePanelPusherClick, routes, ["data-testid"]: testId } = props;
    const [items, setItems] = useState(routes);
    const wrapperClasses = classNames("side-panel-wrapper", {
        bordered,
        [typeof bordered === "boolean" ? "all" : `${bordered}`]: bordered
    });
    const mainLayoutStyles = {
        paddingBottom: `${footerHeight}px`,
        paddingTop: `${headerHeight}px`
    };
    const desktopContentStyle = {
        minHeight: `calc(100vh - ${headerHeight + footerHeight}px`,
        paddingTop: `${desktopContentTopSpacing}px`
    };
    /**
     * Update items when the routes prop changes
     */
    useEffect(() => {
        setItems(routes);
    }, [routes]);
    /**
     * Evaluate if the child item section should be extended or not. If so, adds
     * `open` attribute to the route section.
     *
     * @param {RouteInterface[] | ChildRouteInterface[]} routesArray - Array of routes.
     * @param {RouteInterface | ChildRouteInterface} route - Evaluating route.
     *
     * @return {RouteInterface[]} Modified set of routes.
     */
    const evaluateSidePanelItemExtension = (routesArray, route) => {
        return [...routesArray].filter((evalRoute) => {
            if (evalRoute.id === route.id) {
                evalRoute.open = !evalRoute.open;
            }
            if (evalRoute.children) {
                evaluateSidePanelItemExtension(evalRoute.children, route);
            }
            return true;
        });
    };
    /**
     * Handles side panel item onclick.
     *
     * @param {RouteInterface | ChildRouteInterface} route - Clicked on route.
     */
    const handleItemOnClick = (route) => {
        setItems(evaluateSidePanelItemExtension(routes, route));
        onSidePanelItemClick(route);
    };
    /**
     * Categorize the routes.
     *
     * @param {RouteInterface[]} routes - Routes array.
     * @return {CategorizedRouteInterface} Categorized routes.
     */
    const getCategorizedItems = (routes) => {
        const categorizedRoutes = {};
        for (const route of sortRoutes(routes, "order")) {
            if (route.category) {
                if (categorizedRoutes[route.category]) {
                    categorizedRoutes[route.category].push(route);
                    continue;
                }
                categorizedRoutes[route.category] = [route];
            }
        }
        return categorizedRoutes;
    };
    /**
     * Sorted routes based on the provided criteria.
     *
     * @param {RouteInterface[]} routes - Routes array.
     * @param {"order"} criteria - Sorting criteria.
     * @return {RouteInterface[]} Sorted routes.
     */
    const sortRoutes = (routes, criteria = "order") => {
        return sortBy(routes, criteria);
    };
    return (React.createElement("div", { style: mainLayoutStyles, className: "layout-content" },
        React.createElement(Responsive, Object.assign({}, Responsive.onlyMobile, { className: "mobile-container" }),
            React.createElement(Sidebar.Pushable, null,
                React.createElement(Sidebar, { animation: "push", visible: mobileSidePanelVisibility, "data-testid": testId },
                    React.createElement(SidePanelItems, Object.assign({}, props, { type: "mobile", onSidePanelItemClick: handleItemOnClick, routes: categorized
                            ? getCategorizedItems(items)
                            : ordered
                                ? sortRoutes(items)
                                : items, "data-testid": `${testId}-items`, allowedScopes: allowedScopes }))),
                React.createElement(Sidebar.Pusher, { onClick: onSidePanelPusherClick, className: "side-panel-pusher" },
                    React.createElement("div", { className: "content-wrapper" }, children)))),
        React.createElement(Responsive, { as: Container, className: "desktop-container", fluid: fluid, style: desktopContentStyle, minWidth: Responsive.onlyTablet.minWidth },
            React.createElement("div", { className: wrapperClasses, "data-testid": testId },
                React.createElement(SidePanelItems, Object.assign({}, props, { type: "desktop", onSidePanelItemClick: handleItemOnClick, routes: categorized
                        ? getCategorizedItems(items)
                        : ordered
                            ? sortRoutes(items)
                            : items, "data-testid": `${testId}-items` }))),
            React.createElement("div", { className: "content-wrapper" }, children))));
};
/**
 * Default props for the side panel items component.
 */
SidePanel.defaultProps = {
    categorized: false,
    "data-testid": "side-panel",
    desktopContentTopSpacing: UIConstants.DEFAULT_DASHBOARD_LAYOUT_DESKTOP_CONTENT_TOP_SPACING,
    fluid: false,
    hoverType: "highlighted",
    ordered: true,
    showCategoryDividers: true,
    showEllipsis: true,
    sidePanelItemHeight: UIConstants.DEFAULT_SIDE_PANEL_ITEM_HEIGHT,
    sidePanelTopMargin: false,
    translationHook: null
};
//# sourceMappingURL=side-panel.js.map