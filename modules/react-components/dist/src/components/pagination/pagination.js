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
import { Dropdown, Pagination as SemanticPagination } from "semantic-ui-react";
/**
 * Pagination component.
 *
 * @param {PaginationPropsInterface} props - Props injected in to the component.
 *
 * @return {React.ReactElement}
 */
export const Pagination = (props) => {
    const [activePage, setActivePage] = useState(1);
    const init = useRef(true);
    const { className, disableNextButton, disablePreviousButton, itemsPerPageDropdownLabel, itemsPerPageDropdownLowerLimit, itemsPerPageDropdownMultiple, itemsPerPageDropdownUpperLimit, minimal, nextButtonText, onItemsPerPageDropdownChange, onPageChange, previousButtonText, resetPagination, showItemsPerPageDropdown, showPagesOnMinimalMode, totalPages, ["data-testid"]: testId } = props, rest = __rest(props, ["className", "disableNextButton", "disablePreviousButton", "itemsPerPageDropdownLabel", "itemsPerPageDropdownLowerLimit", "itemsPerPageDropdownMultiple", "itemsPerPageDropdownUpperLimit", "minimal", "nextButtonText", "onItemsPerPageDropdownChange", "onPageChange", "previousButtonText", "resetPagination", "showItemsPerPageDropdown", "showPagesOnMinimalMode", "totalPages", "data-testid"]);
    const classes = classNames("pagination-bar", className);
    useEffect(() => {
        if (init.current) {
            init.current = false;
        }
        else {
            setActivePage(1);
        }
    }, [resetPagination]);
    const generatePageCountDropdownOptions = () => {
        const options = [];
        for (let i = itemsPerPageDropdownLowerLimit; i <= itemsPerPageDropdownUpperLimit; i += itemsPerPageDropdownMultiple) {
            options.push({
                key: i,
                text: i,
                value: i
            });
        }
        return options;
    };
    /**
     * This is called when page change occurs.
     *
     * @param {React.MouseEvent<HTMLAnchorElement, MouseEvent>} event Mouse event.
     * @param {PaginationProps} data Semantic pagination props.
     */
    const pageChangeHandler = (event, data) => {
        setActivePage(parseInt(data.activePage.toString()));
        onPageChange(event, data);
    };
    /**
     * Renders the content based on the mode.
     * @return {React.ReactElement}
     */
    const renderChildren = () => {
        const ItemsPerPageDropdown = (showItemsPerPageDropdown && (React.createElement("label", { className: "page-limit-label" },
            itemsPerPageDropdownLabel,
            React.createElement(Dropdown, { "data-testid": `${testId}-items-per-page-dropdown`, className: "labeled horizontal right page-limit-dropdown", compact: true, defaultValue: itemsPerPageDropdownLowerLimit, options: generatePageCountDropdownOptions(), onChange: onItemsPerPageDropdownChange, selection: true }))));
        if (minimal) {
            return (React.createElement(React.Fragment, null,
                ItemsPerPageDropdown,
                React.createElement(SemanticPagination, Object.assign({}, rest, { totalPages: totalPages, className: "list-pagination", "data-testid": `${testId}-steps`, activePage: activePage, onPageChange: pageChangeHandler, ellipsisItem: null, firstItem: null, lastItem: null, pageItem: showPagesOnMinimalMode ? undefined : null, prevItem: {
                        "aria-label": "Previous Page",
                        content: previousButtonText,
                        disabled: disablePreviousButton !== undefined
                            ? disablePreviousButton
                            : (activePage === 1)
                    }, nextItem: {
                        "aria-label": "Next Page",
                        content: nextButtonText,
                        disabled: disableNextButton !== undefined
                            ? disableNextButton
                            : (activePage === totalPages)
                    } }))));
        }
        return (React.createElement(React.Fragment, null,
            ItemsPerPageDropdown,
            React.createElement(SemanticPagination, Object.assign({}, rest, { totalPages: totalPages, className: "list-pagination", "data-testid": `${testId}-steps`, activePage: activePage, onPageChange: pageChangeHandler }))));
    };
    return (React.createElement("div", { className: classes, "data-testid": testId }, renderChildren()));
};
/**
 * Prop types for the Pagination component.
 */
Pagination.defaultProps = {
    "data-testid": "pagination",
    float: "right",
    itemsPerPageDropdownLabel: "Items per page",
    itemsPerPageDropdownLowerLimit: 10,
    itemsPerPageDropdownMultiple: 10,
    itemsPerPageDropdownUpperLimit: 50,
    minimal: false,
    nextButtonText: "Next",
    previousButtonText: "Previous",
    showItemsPerPageDropdown: false,
    showPagesOnMinimalMode: false
};
//# sourceMappingURL=pagination.js.map