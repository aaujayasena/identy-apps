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
import { Divider, Grid, Label, Popup } from "semantic-ui-react";
/**
 * Content loader component.
 *
 * @param {ContentLoaderPropsInterface} props - Props injected to the global loader component.
 *
 * @return {React.ReactElement}
 */
export const LabelWithPopup = (props) => {
    const { className, popupHeader, popupSubHeader, popupContent, popupFooterRightActions, popupFooterLeftContent, popupOptions, labelColor } = props, rest = __rest(props, ["className", "popupHeader", "popupSubHeader", "popupContent", "popupFooterRightActions", "popupFooterLeftContent", "popupOptions", "labelColor"]);
    const classes = classNames("label-with-popup", className);
    return (React.createElement(Popup, Object.assign({ wide: true, size: "small", className: classes, position: "right center", trigger: React.createElement(Label, Object.assign({ circular: true, size: "mini", className: "micro spaced-right status-label-with-popup", color: labelColor }, rest)), on: "hover" }, popupOptions),
        React.createElement(Popup.Content, null,
            React.createElement(Grid, null,
                (popupHeader || popupSubHeader) && (React.createElement(Grid.Row, null,
                    React.createElement(Grid.Column, null,
                        popupHeader && (React.createElement(Popup.Header, null,
                            React.createElement("strong", null, popupHeader))),
                        popupSubHeader))),
                popupContent && (React.createElement(Grid.Row, null,
                    React.createElement(Grid.Column, null, popupContent))),
                (popupFooterLeftContent || popupFooterRightActions) && (React.createElement(React.Fragment, null,
                    React.createElement(Divider, null),
                    React.createElement(Grid.Row, null,
                        popupFooterLeftContent && (React.createElement(Grid.Column, { verticalAlign: "middle", floated: "left", width: 10 }, popupFooterLeftContent)),
                        popupFooterRightActions && (React.createElement(Grid.Column, { verticalAlign: "middle", floated: "right", width: 6 }, popupFooterRightActions)))))))));
};
/**
 * Default proptypes for component.
 */
LabelWithPopup.defaultProps = {
    "data-testid": "label-with-popup"
};
//# sourceMappingURL=label-with-popup.js.map