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
import { Dropdown, Grid, Icon, List, Popup } from "semantic-ui-react";
/**
 * Resource list item component.
 *
 * @param {ResourceListItemPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const ResourceListItem = (props) => {
    const { actions, actionsColumnWidth, actionsFloated, avatar, className, descriptionColumnWidth, itemDescription, itemHeader, metaContent, metaColumnWidth, ["data-testid"]: testId } = props, rest = __rest(props, ["actions", "actionsColumnWidth", "actionsFloated", "avatar", "className", "descriptionColumnWidth", "itemDescription", "itemHeader", "metaContent", "metaColumnWidth", "data-testid"]);
    const classes = classNames("resource-list-item", className);
    return (React.createElement(List.Item, Object.assign({ className: classes, "data-testid": testId }, rest),
        React.createElement(Grid, null,
            React.createElement(Grid.Row, { columns: metaContent instanceof Array
                    ? (metaContent.length + 2)
                    : (itemHeader || itemDescription)
                        ? 3
                        : 2 },
                (itemDescription || itemHeader)
                    ? (React.createElement(Grid.Column, { width: descriptionColumnWidth, className: "resource-item-column" },
                        avatar,
                        React.createElement(List.Content, null,
                            React.createElement(List.Header, { className: "list-item-name", "data-testid": `${testId}-heading` }, itemHeader),
                            itemDescription && (React.createElement(List.Description, { className: "list-item-description", "data-testid": `${testId}-description` }, itemDescription)))))
                    : null,
                metaContent instanceof Array
                    ? (metaContent === null || metaContent === void 0 ? void 0 : metaContent.map((content, index) => {
                        return (React.createElement(Grid.Column, { key: index, width: metaColumnWidth, verticalAlign: "middle" },
                            React.createElement(List.Content, { "data-testid": `${testId}-meta-content-${index}` }, content)));
                    }))
                    : (React.createElement(Grid.Column, { width: metaColumnWidth, verticalAlign: "middle" },
                        React.createElement(List.Content, { "data-testid": `${testId}-meta-content` }, metaContent))),
                React.createElement(Grid.Column, { width: actionsColumnWidth },
                    React.createElement(List.Content, { floated: actionsFloated, className: "list-item-action-panel", "data-testid": `${testId}-actions` }, (actions && actions.length && actions.length > 0)
                        ? actions.map((action, index) => (!action.hidden && (React.createElement("div", { className: "list-item-action", key: index }, action.type === "dropdown"
                            ? (React.createElement(Dropdown, { direction: "left", icon: null, trigger: (React.createElement(Popup, { disabled: action.disabled, trigger: (React.createElement(Icon, { "data-testid": action["data-testid"], link: true, className: "list-icon", disabled: action.disabled, size: "small", color: "grey", name: action.icon, onClick: action.onClick })), position: "top center", content: action.popupText, inverted: true })), options: action.subActions, "data-testid": `${testId}-action-${action.type}-${index}` })) :
                            (React.createElement(Popup, { disabled: action.disabled, trigger: (React.createElement(Icon, { "data-testid": action["data-testid"], link: true, className: "list-icon", disabled: action.disabled, size: "small", color: "grey", name: action.icon, onClick: action.onClick })), position: "top center", content: action.popupText, inverted: true }))))))
                        : null))))));
};
/**
 * Default proptypes for the resource list item component.
 */
ResourceListItem.defaultProps = {
    actionsColumnWidth: 5,
    actionsFloated: "left",
    "data-testid": "resource-list-item",
    descriptionColumnWidth: 7,
    metaColumnWidth: 4
};
//# sourceMappingURL=resource-list-item.js.map