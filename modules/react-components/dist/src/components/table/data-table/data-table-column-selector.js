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
import cloneDeep from "lodash/cloneDeep";
import React from "react";
import { Checkbox, Form, Popup } from "semantic-ui-react";
import { ReactComponent as ColumnIcon } from "../../../assets/images/column-icon.svg";
import { GenericIcon } from "../../icon";
import { Heading } from "../../typography";
/**
 * Data table column selector.
 *
 * @param {DataTableColumnSelector} props - Props injected to the component.
 * @return {React.ReactElement}
 */
export const DataTableColumnSelector = (props) => {
    const { columnSelectorHeader, columnSelectorWidth, columns, floated, onColumnSelectionChange, showToggleDisallowedColumns, triggerIcon, ["data-testid"]: testId } = props;
    /**
     * Checks if the column selector should be rendered or not.
     *
     * @param {TableColumnInterface[]} columns - Table columns.
     * @return {boolean}
     */
    const isColumnSelectorValid = (columns) => {
        return columns.some((column) => column.allowToggleVisibility)
            || showToggleDisallowedColumns;
    };
    /**
     * Handles column selector checkbox onchange event.
     *
     * @param {FormEvent<HTMLInputElement>} e - Event.
     * @param {string} uniqueId - Unique ID of the column.
     */
    const handleColumnVisibilityChange = (e, { uniqueId }) => {
        const clone = cloneDeep(columns);
        clone.forEach((column) => {
            if (column.id !== uniqueId) {
                return;
            }
            column.hidden = !column.hidden;
        });
        onColumnSelectionChange(clone);
    };
    return (isColumnSelectorValid(columns)
        ? (React.createElement("div", { className: "data-table-column-selector", "data-testid": testId },
            React.createElement(Popup, { flowing: true, basic: true, pinned: true, className: "data-table-column-selector-popup", style: {
                    width: `${columnSelectorWidth}px`
                }, content: React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "data-table-column-selector-popup-heading-container" },
                        React.createElement(Heading, { as: "h6" }, columnSelectorHeader)),
                    React.createElement("div", { className: "data-table-column-selector-popup-content" },
                        React.createElement(Form, null, columns.map((column, index) => {
                            if (!showToggleDisallowedColumns && !column.allowToggleVisibility) {
                                return;
                            }
                            return (React.createElement(Form.Field, { key: index, disabled: showToggleDisallowedColumns
                                    && !column.allowToggleVisibility },
                                React.createElement(Checkbox
                                // using id here gives weird behaviour with SUI.
                                , { 
                                    // using id here gives weird behaviour with SUI.
                                    uniqueId: column.id, checked: !column.hidden, disabled: showToggleDisallowedColumns
                                        && !column.allowToggleVisibility, label: column.title, onChange: handleColumnVisibilityChange })));
                        })))), position: "bottom right", on: "click", trigger: React.createElement(GenericIcon, { fill: true, link: true, hoverable: true, transparent: true, floated: floated, icon: triggerIcon, size: "micro" }) })))
        : null);
};
/**
 * Default props for the component.
 */
DataTableColumnSelector.defaultProps = {
    columnSelectorHeader: "Show/Hide Columns",
    columnSelectorWidth: 240,
    "data-testid": "data-table-column-selector",
    floated: "right",
    showToggleDisallowedColumns: false,
    triggerIcon: ColumnIcon
};
//# sourceMappingURL=data-table-column-selector.js.map