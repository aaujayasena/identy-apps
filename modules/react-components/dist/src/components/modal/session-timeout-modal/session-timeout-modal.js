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
import React from "react";
import { Heading } from "../../typography";
import { ConfirmationModal } from "../confirmation-modal";
/**
 * Session Timeout modal.
 *
 * @param {SessionTimeoutModalPropsInterface} props - Props injected to the component.
 * @return {React.ReactElement}
 */
export const SessionTimeoutModal = (props) => {
    const { description, heading, onSecondaryActionClick, onPrimaryActionClick, primaryButtonText, secondaryButtonText, ["data-testid"]: testId } = props, rest = __rest(props, ["description", "heading", "onSecondaryActionClick", "onPrimaryActionClick", "primaryButtonText", "secondaryButtonText", "data-testid"]);
    return (React.createElement(ConfirmationModal, Object.assign({ animated: true, type: "warning", textAlign: "center", primaryAction: primaryButtonText, secondaryAction: secondaryButtonText, onSecondaryActionClick: onSecondaryActionClick, onPrimaryActionClick: onPrimaryActionClick, "data-testid": testId }, rest),
        React.createElement(ConfirmationModal.Content, null,
            React.createElement(Heading, { as: "h3" }, heading),
            React.createElement("p", null, description))));
};
/**
 * Default props for the component.
 */
SessionTimeoutModal.defaultProps = {
    "data-testid": "session-timeout-modal",
    description: "You will be logged out of the current session due to inactivity." +
        "\nPlease choose Stay logged in if you would like to continue the session.",
    heading: "You will be logged out!",
    primaryButtonText: "Stay logged in",
    secondaryButtonText: "Logout"
};
//# sourceMappingURL=session-timeout-modal.js.map