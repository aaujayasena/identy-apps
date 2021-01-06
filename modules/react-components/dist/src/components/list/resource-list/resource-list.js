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
import React from "react";
import { List, Placeholder } from "semantic-ui-react";
import { ResourceListHeader } from "./resource-list-header";
import { ResourceListHeaderCell } from "./resource-list-header-cell";
import { ResourceListItem } from "./resource-list-item";
import { Avatar } from "../../avatar";
/**
 * Resource list component.
 *
 * @param {ResourceListPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const ResourceList = (props) => {
    const { celled, children, className, fill, isLoading, loadingStateOptions, transparent, ["data-testid"]: testId } = props, rest = __rest(props, ["celled", "children", "className", "fill", "isLoading", "loadingStateOptions", "transparent", "data-testid"]);
    const classes = classNames("resource-list", {
        transparent,
        [typeof fill === "boolean" ? "fill-default" : `fill-${fill}`]: fill
    }, className);
    /**
     * Shows the loading state placeholder rows.
     *
     * @return {React.ReactElement[]}
     */
    const showPlaceholders = () => {
        const placeholders = [];
        for (let i = 0; i < loadingStateOptions.count; i++) {
            placeholders.push(React.createElement(ResourceListItem, { key: i, avatar: (React.createElement(Avatar, { image: (React.createElement(Placeholder, { style: { height: 35, width: 35 } },
                        React.createElement(Placeholder.Image, null))), isLoading: true, shape: loadingStateOptions.imageType, size: "mini", floated: "left" })), itemHeader: (React.createElement(Placeholder, { style: { width: "300px" } },
                    React.createElement(Placeholder.Header, null,
                        React.createElement(Placeholder.Line, null),
                        React.createElement(Placeholder.Line, null)))), "data-testid": `${testId}-loading-placeholder` }));
        }
        return placeholders;
    };
    return (React.createElement(List, Object.assign({ className: classes, divided: celled, relaxed: "very", "data-testid": testId }, rest), isLoading
        ? showPlaceholders()
        : children));
};
/**
 * Default props for the component.
 */
ResourceList.defaultProps = {
    celled: true,
    "data-testid": "resource-list",
    isLoading: false,
    loadingStateOptions: {
        count: 10,
        imageType: "square"
    },
    transparent: true
};
ResourceList.Header = ResourceListHeader;
ResourceList.HeaderCell = ResourceListHeaderCell;
ResourceList.Item = ResourceListItem;
//# sourceMappingURL=resource-list.js.map