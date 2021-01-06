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
import React, { useState } from "react";
import { Button, Divider, Dropdown, Grid, Icon, Popup } from "semantic-ui-react";
import { Pagination } from "../components";
/**
 * List layout.
 *
 * @param {React.PropsWithChildren<ListLayoutPropsInterface>} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const ListLayout = (props) => {
    const { advancedSearch, advancedSearchPosition, children, className, leftActionPanel, minimalPagination, onItemsPerPageDropdownChange, onPageChange, onSortStrategyChange, onSortOrderChange, paginationOptions, resetPagination, rightActionPanel, showPagination, showPaginationPageLimit, showTopActionPanel, sortOptions, sortStrategy, totalListSize, totalPages, ["data-testid"]: testId } = props, rest = __rest(props, ["advancedSearch", "advancedSearchPosition", "children", "className", "leftActionPanel", "minimalPagination", "onItemsPerPageDropdownChange", "onPageChange", "onSortStrategyChange", "onSortOrderChange", "paginationOptions", "resetPagination", "rightActionPanel", "showPagination", "showPaginationPageLimit", "showTopActionPanel", "sortOptions", "sortStrategy", "totalListSize", "totalPages", "data-testid"]);
    const [isAscending, setIsAscending] = useState(true);
    const classes = classNames("layout", "list-layout", className);
    return (React.createElement("div", { className: classes, "data-testid": testId },
        showTopActionPanel && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "top-action-panel", "data-testid": `${testId}-top-action-panel` },
                React.createElement(Grid, null,
                    React.createElement(Grid.Row, null,
                        React.createElement(Grid.Column, { mobile: 16, tablet: 8, computer: 8 },
                            React.createElement("div", { className: "left-aligned actions" },
                                advancedSearchPosition === "left" && advancedSearch,
                                leftActionPanel)),
                        React.createElement(Grid.Column, { mobile: 16, tablet: 8, computer: 8 },
                            React.createElement("div", { className: "actions right-aligned" },
                                advancedSearchPosition === "right" && advancedSearch,
                                rightActionPanel,
                                sortOptions &&
                                    sortStrategy &&
                                    onSortStrategyChange &&
                                    onSortOrderChange &&
                                    React.createElement("div", { className: "sort-list" },
                                        React.createElement(Dropdown, { onChange: onSortStrategyChange, options: sortOptions, placeholder: "Sort by", selection: true, value: (sortOptions === null || sortOptions === void 0 ? void 0 : sortOptions.length) === 1
                                                ? sortOptions[0].value
                                                : sortStrategy.value, disabled: (sortOptions === null || sortOptions === void 0 ? void 0 : sortOptions.length) === 1, "data-testid": `${testId}-sort` }),
                                        React.createElement(Popup, { trigger: React.createElement(Button, { icon: true, onClick: () => {
                                                    setIsAscending(!isAscending);
                                                    onSortOrderChange(!isAscending);
                                                }, className: "left-aligned-action" },
                                                React.createElement(Icon, { name: isAscending
                                                        ? "sort amount down"
                                                        : "sort amount up" })), content: isAscending
                                                ? "Sort in the descending order"
                                                : "Sort in the ascending order", inverted: true }))))))),
            React.createElement(Divider, { hidden: true }))),
        React.createElement("div", { className: "list-container" },
            children,
            (showPagination && totalListSize)
                ? (React.createElement(Pagination, Object.assign({ minimal: minimalPagination, showItemsPerPageDropdown: showPaginationPageLimit, "data-testid": `${testId}-pagination`, resetPagination: resetPagination, totalListSize: totalListSize, totalPages: totalPages, onPageChange: onPageChange, onItemsPerPageDropdownChange: onItemsPerPageDropdownChange }, paginationOptions)))
                : null)));
};
/**
 * Default props for the list layout.
 */
ListLayout.defaultProps = {
    advancedSearchPosition: "left",
    "data-testid": "list-layout",
    minimalPagination: true,
    showPagination: false,
    showPaginationPageLimit: true,
    showTopActionPanel: true
};
//# sourceMappingURL=list.js.map