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
import classNames from "classnames";
import React, { Fragment } from "react";
import { Menu } from "semantic-ui-react";
import { SidePanelItem } from "./side-panel-item";
/**
 * Side panel items component.
 *
 * @param {SidePanelItemsPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const SidePanelItems = (props) => {
    const { allowedScopes, desktopContentTopSpacing, headerHeight, relaxed, routes, showCategoryDividers, sidePanelPosition, sidePanelTopMargin, type, translationHook, ["data-testid"]: testId } = props;
    const menuClasses = classNames("side-panel", {
        relaxed,
        [type]: type
    });
    const categoryClasses = classNames("side-panel-category", {
        "with-dividers": showCategoryDividers
    });
    const calcSidePanelTopMargin = () => {
        if (!sidePanelTopMargin) {
            return undefined;
        }
        if (typeof sidePanelTopMargin === "number") {
            return `${sidePanelTopMargin}px`;
        }
        else if (typeof sidePanelTopMargin === "boolean" && sidePanelTopMargin === true) {
            return `${headerHeight + desktopContentTopSpacing}px`;
        }
        return undefined;
    };
    const style = type === "desktop"
        ? {
            position: sidePanelPosition,
            top: calcSidePanelTopMargin()
        }
        : null;
    /**
     * Renders a re-usable side panel item.
     *
     * @param {RouteInterface} route - Route object.
     * @param {number} index - Index.
     * @return {any}
     */
    const renderItem = (route, index) => (React.createElement(SidePanelItem, Object.assign({ key: route.level ? `level-${route.level}-${index}` : `level-${0}-${index}`, route: route, "data-testid": `${testId}-item`, allowedScopes: allowedScopes }, props)));
    return (React.createElement(Menu, { className: menuClasses, style: style, "data-testid": testId, vertical: true, fluid: true }, routes && (routes instanceof Array
        ? routes.map((route, index) => (renderItem(route, index)))
        : Object.entries(routes).map(([key, value]) => (React.createElement(Fragment, { key: key },
            React.createElement("div", { className: categoryClasses }, translationHook ? translationHook(key) : key),
            value instanceof Array && value.map((route, index) => (renderItem(route, index)))))))));
};
/**
 * Default props for the side panel items component.
 */
SidePanelItems.defaultProps = {
    "data-testid": "side-panel-items"
};
//# sourceMappingURL=side-panel-items.js.map