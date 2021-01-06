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
import { AuthenticateUtils } from "@wso2is/core/utils";
import classNames from "classnames";
import _ from "lodash";
import React from "react";
import { Label, Menu } from "semantic-ui-react";
import { SidePanelItemGroup } from "./side-panel-item-group";
import { GenericIcon } from "../icon";
/**
 * Side panel item component.
 *
 * @param {SidePanelItemPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const SidePanelItem = (props) => {
    const { allowedScopes, caretIcon, categorized, footerHeight, headerHeight, iconSize, onSidePanelItemClick, route, selected, showEllipsis, translationHook, sidePanelItemHeight, hoverType, ["data-testid"]: testId } = props;
    const classes = classNames("side-panel-item", {
        [`hover-${hoverType}`]: hoverType,
        "active": selected && (selected.path === route.path),
        categorized,
        "ellipsis": showEllipsis
    });
    /**
     * Validates if any of the child routes is supposed to be shown
     * on the side panel.
     *
     * @param {ChildRouteInterface[]} children - Child routes.
     * @return {boolean} If valid or not.
     */
    const validateChildren = (children) => {
        if (!(children && children instanceof Array && children.length > 0)) {
            return false;
        }
        return children.some((child) => {
            return child.showOnSidePanel === true;
        });
    };
    /**
     * Checks if the child item is the selected, if so opens
     * the child items section automatically to improve UX.
     *
     * @param {boolean} isOpen - Passed as a prop when manually clicked.
     * @param {RouteInterface | ChildRouteInterface}selectedRoute - The selected route.
     * @param {ChildRouteInterface[]} children - Child routes.
     * @return {boolean} Should the child item section be opened or not.
     */
    const validateOpenState = (isOpen, selectedRoute, children) => {
        if (isOpen) {
            return true;
        }
        const recurse = (childrenArr) => {
            for (const child of childrenArr) {
                if (child.id === (selectedRoute === null || selectedRoute === void 0 ? void 0 : selectedRoute.id)) {
                    return true;
                }
                if (child.children) {
                    recurse(child.children);
                }
            }
            return false;
        };
        return recurse(children);
    };
    /**
     * Resolves the label color to display the status of the feature .
     *
     * @return {SemanticCOLORS} Resolved color.
     */
    const resolveFeatureStatusLabelColor = () => {
        if (route.featureStatus === "new") {
            return "red";
        }
        else if (route.featureStatus === "beta") {
            return "teal";
        }
        else if (route.featureStatus === "alpha") {
            return "orange";
        }
        return "blue";
    };
    return (React.createElement(React.Fragment, null,
        (route.showOnSidePanel && (route.scope ? AuthenticateUtils.hasScope(route.scope, allowedScopes) : true))
            ? (React.createElement(Menu.Item, { name: route.name, className: classes, active: selected && (selected.path === route.path), onClick: () => onSidePanelItemClick(route), "data-testid": `${testId}-${_.kebabCase(route.id)}` },
                React.createElement(GenericIcon, Object.assign({ transparent: true, className: "left-icon", size: iconSize, floated: "left", spaced: "right" }, route.icon, { "data-testid": `${testId}-icon` })),
                React.createElement("span", { className: "route-name", "data-testid": `${testId}-label` },
                    translationHook ? translationHook(route.name) : route.name,
                    route.featureStatus && (React.createElement(Label, { color: resolveFeatureStatusLabelColor(), className: "feature-status-label", size: "mini", "data-testid": `${testId}-version` }, route.featureStatus.toUpperCase()))),
                // Check if any of the child items are defined to be shown on the side panel.
                // If not hides the caret icon.
                (caretIcon && validateChildren(route.children))
                    ? (React.createElement(GenericIcon, { className: `caret ${route.open ? "down" : "right"}`, icon: caretIcon, size: "auto", floated: "right", "data-testid": `${testId}-caret`, transparent: true }))
                    : null))
            : null,
        (route.children && route.children.length && route.children.length > 0)
            ? (React.createElement(SidePanelItemGroup, { caretIcon: caretIcon, hoverType: hoverType, categorized: categorized, childRoutes: route.children, footerHeight: footerHeight, headerHeight: headerHeight, onSidePanelItemClick: onSidePanelItemClick, selected: selected, open: validateOpenState(route.open, selected, route.children), sidePanelItemHeight: sidePanelItemHeight, translationHook: translationHook, allowedScopes: allowedScopes }))
            : null));
};
/**
 * Default props for the side panel item component.
 */
SidePanelItem.defaultProps = {
    "data-testid": "side-panel-item",
    iconSize: "micro"
};
//# sourceMappingURL=side-panel-item.js.map