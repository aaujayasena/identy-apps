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
import React from "react";
import { Checkbox, Icon, Label, Popup, Table } from "semantic-ui-react";
/**
 * Transfer list item component.
 *
 * @param {TransferListItemPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const TransferListItem = (props) => {
    const { listItem, listItemId, listItemIndex, listItemTypeLabel, isItemChecked, handleItemChange, handleItemClick, showSecondaryActions, handleOpenPermissionModal, showListSubItem, listSubItem, ["data-testid"]: testId } = props;
    return (React.createElement(Table.Row, { key: listItemIndex },
        React.createElement(Table.Cell, { id: listItemId, collapsing: true },
            React.createElement(Checkbox, { "data-testid": `${testId}-${(listItem === null || listItem === void 0 ? void 0 : listItem.split(" ").length) > 0
                    ? listItem === null || listItem === void 0 ? void 0 : listItem.replace(" ", "-") : listItem}-checkbox`, checked: isItemChecked, onChange: handleItemChange, onClick: handleItemClick })),
        listItemTypeLabel && (React.createElement(Table.Cell, { collapsing: true, key: listItemIndex },
            React.createElement(Label, { color: listItemTypeLabel.labelColor, content: listItemTypeLabel.labelText, size: "mini", className: listItemTypeLabel.name }))),
        showListSubItem ?
            (React.createElement(Table.Cell, { id: listItemId },
                React.createElement("div", null, listItem),
                React.createElement("div", { className: "transfer-list-sub-content" }, listSubItem))) :
            (React.createElement(Table.Cell, { id: listItemId },
                " ",
                listItem,
                " ")),
        showSecondaryActions && (React.createElement(Table.Cell, { collapsing: true },
            React.createElement(Popup, { inverted: true, basic: true, content: "View permissions", trigger: React.createElement(Icon, { "data-testid": `${testId}-${(listItem === null || listItem === void 0 ? void 0 : listItem.split(" ").length) > 0
                        ? listItem === null || listItem === void 0 ? void 0 : listItem.replace(" ", "-") : listItem}-icon`, color: "grey", name: "key", onClick: handleOpenPermissionModal }) })))));
};
/**
 * Default props for the transfer list item component.
 */
TransferListItem.defaultProps = {
    "data-testid": "transfer-list-item",
    showListSubItem: false
};
//# sourceMappingURL=transfer-list-item.js.map