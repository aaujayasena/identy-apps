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
 *
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
import get from "lodash/get";
import isEqual from "lodash/isEqual";
import React, { Fragment, useEffect, useState } from "react";
import { Dropdown, Grid, Header, Icon, Placeholder, Popup, Responsive, Table } from "semantic-ui-react";
import { DataTableBody } from "./data-table-body";
import { DataTableCell } from "./data-table-cell";
import { DataTableColumnSelector } from "./data-table-column-selector";
import { DataTableFooter } from "./data-table-footer";
import { DataTableHeader } from "./data-table-header";
import { DataTableHeaderCell } from "./data-table-header-cell";
import { DataTableRow } from "./data-table-row";
import { Avatar } from "../../avatar";
/**
 * Data Driven Table Component.
 *
 * @param {DataTablePropsInterface} props - Props injected to the component.
 * @return {React.ReactElement}
 */
export const DataTable = (props) => {
    const { actions, cellUIProps, className, columnSelectorHeader, columnSelectorWidth, columnSelectorTriggerIcon, columns: initialColumns, data, extensions, externalSearch, isLoading, loadingStateOptions, onColumnSelectionChange, onRowClick, placeholders: externalPlaceholders, rowUIProps, selectable, showColumnSelector, showHeader, showOperationsHeader, showSearch, showToggleDisallowedColumns, testId, transparent } = props, rest = __rest(props, ["actions", "cellUIProps", "className", "columnSelectorHeader", "columnSelectorWidth", "columnSelectorTriggerIcon", "columns", "data", "extensions", "externalSearch", "isLoading", "loadingStateOptions", "onColumnSelectionChange", "onRowClick", "placeholders", "rowUIProps", "selectable", "showColumnSelector", "showHeader", "showOperationsHeader", "showSearch", "showToggleDisallowedColumns", "testId", "transparent"]);
    const classes = classNames("data-table", {
        transparent
    }, className);
    const [columns, setColumns] = useState(initialColumns);
    const [dynamicTableProps, setDynamicTableProps] = useState(undefined);
    useEffect(() => {
        if (!initialColumns) {
            return;
        }
        // Changing the data on sort order change results in the triggering of this
        // hook which resets the column state. This will be problematic if the columns
        // are dynamically changed from outside.
        const moderatedColumns = [...initialColumns];
        const internalColumns = [...columns];
        for (const moderatedColumn of moderatedColumns) {
            for (const internalColumn of internalColumns) {
                if (moderatedColumn.id === internalColumn.id) {
                    moderatedColumn.sortOrder = internalColumn.sortOrder;
                    break;
                }
            }
        }
        setColumns(moderatedColumns);
        evaluateColumnProps(moderatedColumns);
    }, [initialColumns]);
    /**
     * Evaluate column props.
     *
     * @param {TableColumnInterface[]} columns - Columns.
     */
    const evaluateColumnProps = (columns) => {
        if (!isColumnsValid(columns)) {
            return;
        }
        // Check if any of the columns have sortable prop. If yes, set `sortable` prop in the parent
        // `Table` component to true.
        const isSortable = columns.some((column) => column.sortable);
        if (isSortable) {
            setDynamicTableProps(Object.assign(Object.assign({}, dynamicTableProps), { celled: true, sortable: true }));
        }
    };
    const isColumnsValid = (columns) => {
        return (columns && Array.isArray(columns) && columns.length > 0);
    };
    const isDataValid = (data) => {
        return data && Array.isArray(data) && data.length > 0;
    };
    const isActionsValid = (actions) => {
        return actions && Array.isArray(actions) && actions.length > 0;
    };
    const isExtensionsValid = (extensions, checkIfRenderable = false) => {
        return (extensions && Array.isArray(extensions) && extensions.length > 0)
            && (checkIfRenderable
                ? extensions.some((extension) => extension.component)
                : true);
    };
    const isTableRenderable = (data) => {
        return isDataValid(data);
    };
    const renderActions = (item, action, index) => {
        const { component: actionComponent, disabled: actionDisabled, hidden: actionHidden, icon: actionIcon, onClick: actionOnClick, popupText: actionPopupText, renderer: actionRenderer, subActions } = action, rest = __rest(action, ["component", "disabled", "hidden", "icon", "onClick", "popupText", "renderer", "subActions"]);
        if (actionHidden && actionHidden(item)) {
            return null;
        }
        const resolvedIcon = actionIcon(item);
        const resolvedPopupText = actionPopupText(item);
        if (actionRenderer === "dropdown") {
            return (React.createElement(Dropdown, { key: index, direction: "left", icon: null, trigger: (React.createElement(Popup, { disabled: actionDisabled, trigger: (React.createElement(Icon, Object.assign({ link: true, className: "list-icon", disabled: actionDisabled, size: "small", color: "grey", name: resolvedIcon, onClick: (e) => {
                            e.stopPropagation();
                            actionOnClick(e, item);
                        } }, rest))), position: "top center", content: resolvedPopupText, inverted: true })), options: subActions }));
        }
        if (actionRenderer === "semantic-icon") {
            return (React.createElement(Popup, { key: index, disabled: actionDisabled, trigger: (React.createElement(Icon, Object.assign({ link: true, className: "list-icon", disabled: actionDisabled, size: "small", color: "grey", name: resolvedIcon, onClick: (e) => {
                        e.stopPropagation();
                        actionOnClick(e, item);
                    } }, rest))), position: "top center", content: resolvedPopupText, inverted: true }));
        }
        if (actionComponent) {
            return (React.createElement(Popup, { key: index, disabled: actionDisabled, trigger: actionComponent, position: "top center", content: resolvedPopupText, inverted: true }));
        }
        return null;
    };
    const renderCell = (item, column) => {
        if (column.dataIndex === "action" && isActionsValid(actions)) {
            return actions.map((action, index) => {
                if (!action) {
                    return;
                }
                return renderActions(item, action, index);
            });
        }
        return get(item, column.dataIndex);
    };
    const renderHeaderCell = (column, index) => {
        if (!column) {
            return null;
        }
        const { key: columnKey, textAlign: columnTextAlign, title: columnTitle, hidden: columnHidden, getSortOrder: getColumnSortOrder, onClick: columnOnClick, sortOrder: columnSortOrder, sortable: columnSortable } = column, rest = __rest(column, ["key", "textAlign", "title", "hidden", "getSortOrder", "onClick", "sortOrder", "sortable"]);
        if (columnHidden) {
            return;
        }
        const handleHeaderCellClick = (e) => {
            columnOnClick && columnOnClick(e);
            if (!columnSortable) {
                return;
            }
            const modifiedColumns = [...columns];
            modifiedColumns.forEach((evalColumn) => {
                if (!isEqual(evalColumn, column)) {
                    return;
                }
                const newOrder = evalColumn.sortOrder === "ascending"
                    ? "descending"
                    : "ascending";
                getColumnSortOrder && getColumnSortOrder(newOrder, column);
                evalColumn.sortOrder = newOrder;
            });
            setColumns(modifiedColumns);
        };
        const resolveSortOrder = (order) => {
            if (order === "ascending") {
                return "ascending";
            }
            if (order === "descending") {
                return "descending";
            }
            return null;
        };
        return (React.createElement(DataTable.HeaderCell, Object.assign({ key: columnKey !== null && columnKey !== void 0 ? columnKey : index, textAlign: columnTextAlign, onClick: handleHeaderCellClick, sorted: resolveSortOrder(columnSortOrder) }, rest), columnTitle));
    };
    const showPlaceholders = () => {
        if (isLoading) {
            return showLoadingPlaceholders();
        }
        return (React.createElement(DataTable.Row, { className: "no-hover" },
            React.createElement(DataTable.Cell, null, externalPlaceholders)));
    };
    /**
     * Shows the loading state placeholder rows.
     *
     * @return {React.ReactElement[]}
     */
    const showLoadingPlaceholders = () => {
        const placeholders = [];
        for (let i = 0; i < loadingStateOptions.count; i++) {
            placeholders.push(React.createElement(DataTable.Row, { key: i },
                React.createElement(DataTable.Cell, null,
                    React.createElement(Header, { as: "h6", image: true },
                        loadingStateOptions.imageType && (React.createElement(Avatar, { image: (React.createElement(Placeholder, { style: { height: 35, width: 35 } },
                                React.createElement(Placeholder.Image, null))), isLoading: true, avatarType: loadingStateOptions.imageType === "circular" ? "user" : "app", size: "mini", floated: "left" })),
                        React.createElement(Header.Content, null,
                            React.createElement(Placeholder, { style: { width: "300px" } },
                                React.createElement(Placeholder.Header, null,
                                    React.createElement(Placeholder.Line, null),
                                    React.createElement(Placeholder.Line, null))))))));
        }
        return placeholders;
    };
    const handleColumnSelectorChange = (columns) => {
        setColumns(columns);
        onColumnSelectionChange(columns);
    };
    return (React.createElement(Table, Object.assign({ className: classes, selectable: !isLoading && selectable, "data-testid": testId }, dynamicTableProps, rest), isTableRenderable(data)
        ? (React.createElement(React.Fragment, null,
            isExtensionsValid(extensions, true) && (extensions.map((extension, index) => {
                const { component, isExternalRendererProvided, position } = extension;
                return (position === "top"
                    ? isExternalRendererProvided
                        ? (React.createElement(Fragment, { key: index }, component))
                        : (React.createElement(DataTable.Header, { fullWidth: true },
                            React.createElement(DataTable.Row, null,
                                React.createElement(DataTable.HeaderCell, { colSpan: isColumnsValid(columns) && columns.length }, component))))
                    : null);
            })),
            showOperationsHeader && (showSearch || showColumnSelector) && (React.createElement(DataTable.Header, { fullWidth: true },
                React.createElement(DataTable.Row, null,
                    React.createElement(DataTable.HeaderCell, { colSpan: isColumnsValid(columns) && columns.length },
                        React.createElement(Grid, null,
                            React.createElement(Grid.Row, null,
                                React.createElement(Grid.Column, { mobile: 16, tablet: 8, computer: 8 }, showSearch && (React.createElement("div", { className: "data-table-search" }, externalSearch))),
                                React.createElement(Responsive, { as: Grid.Column, minWidth: Responsive.onlyMobile.maxWidth, mobile: 16, tablet: 8, computer: 8, textAlign: "right" }, showColumnSelector && isColumnsValid(columns) && (React.createElement(DataTableColumnSelector, { columns: columns, columnSelectorHeader: columnSelectorHeader, columnSelectorWidth: columnSelectorWidth, floated: "right", onColumnSelectionChange: handleColumnSelectorChange, showToggleDisallowedColumns: showToggleDisallowedColumns, triggerIcon: columnSelectorTriggerIcon }))),
                                React.createElement(Responsive, { as: Grid.Column, maxWidth: Responsive.onlyMobile.maxWidth, mobile: 16, tablet: 8, computer: 8, textAlign: "left" }, showColumnSelector && isColumnsValid(columns) && (React.createElement(DataTableColumnSelector, { columns: columns, columnSelectorHeader: columnSelectorHeader, columnSelectorWidth: columnSelectorWidth, floated: "left", onColumnSelectionChange: handleColumnSelectorChange, showToggleDisallowedColumns: showToggleDisallowedColumns, triggerIcon: columnSelectorTriggerIcon }))))))))),
            isColumnsValid(columns) && showHeader && (React.createElement(DataTable.Header, null,
                React.createElement(DataTable.Row, null, columns.map((column, index) => renderHeaderCell(column, index))))),
            React.createElement(DataTable.Body, null, isColumnsValid(columns)
                ? data.map((item, index) => {
                    if (!item) {
                        return;
                    }
                    const { key: itemKey, rendererProps, textAlign: itemTextAlign, width: itemWidth } = item;
                    const { cellUIProps: cellUIPropOverrides, rowUIProps: rowUIPropOverrides } = rendererProps || {};
                    return (React.createElement(DataTable.Row, Object.assign({ key: itemKey !== null && itemKey !== void 0 ? itemKey : index, onClick: (e) => selectable && onRowClick(e, item) }, rowUIProps, rowUIPropOverrides), columns.map((column, index) => {
                        const { textAlign: columnTextAlign, width: columnWidth, hidden: columnHidden, render: columnRenderer } = column;
                        if (columnHidden) {
                            return;
                        }
                        return (React.createElement(DataTable.Cell, Object.assign({ key: index, textAlign: itemTextAlign || columnTextAlign, width: itemWidth !== null && itemWidth !== void 0 ? itemWidth : columnWidth }, cellUIProps, cellUIPropOverrides), columnRenderer
                            ? columnRenderer(item)
                            : renderCell(item, column)));
                    })));
                })
                : null),
            isExtensionsValid(extensions, true) && (extensions.map((extension, index) => {
                const { component, isExternalRendererProvided, position } = extension;
                return (position === "bottom"
                    ? isExternalRendererProvided
                        ? (React.createElement(Fragment, { key: index }, component))
                        : (React.createElement(DataTable.Footer, { fullWidth: true },
                            React.createElement(DataTable.Row, null,
                                React.createElement(DataTable.HeaderCell, { colSpan: isColumnsValid(columns) && columns.length }, component))))
                    : null);
            }))))
        : React.createElement(DataTable.Body, null, showPlaceholders())));
};
DataTable.defaultProps = {
    "data-testid": "data-table",
    selectable: true,
    showHeader: true,
    stackable: true
};
DataTable.Body = DataTableBody;
DataTable.Cell = DataTableCell;
DataTable.Footer = DataTableFooter;
DataTable.Header = DataTableHeader;
DataTable.HeaderCell = DataTableHeaderCell;
DataTable.Row = DataTableRow;
//# sourceMappingURL=data-table.js.map