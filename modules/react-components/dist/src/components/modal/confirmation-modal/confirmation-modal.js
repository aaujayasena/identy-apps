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
import React, { useEffect, useState } from "react";
import { Button, Checkbox, Icon, Input, Modal } from "semantic-ui-react";
import { ConfirmationModalContent } from "./confirmation-modal-content";
import { ConfirmationModalDescription } from "./confirmation-modal-description";
import { ConfirmationModalHeader } from "./confirmation-modal-header";
import { ConfirmationModalMessage } from "./confirmation-modal-message";
import { LinkButton } from "../../button";
/**
 * Confirmation modal component.
 *
 * @param {ConfirmationModalPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const ConfirmationModal = (props) => {
    const { animated, assertion, assertionHint, assertionType, children, className, type, primaryAction, primaryActionFluid, secondaryAction, onPrimaryActionClick, onSecondaryActionClick, textAlign, ["data-testid"]: testId } = props, rest = __rest(props, ["animated", "assertion", "assertionHint", "assertionType", "children", "className", "type", "primaryAction", "primaryActionFluid", "secondaryAction", "onPrimaryActionClick", "onSecondaryActionClick", "textAlign", "data-testid"]);
    const [assertionInput, setAssertionInput] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    /**
     * Called when the assertion input changes.
     */
    useEffect(() => {
        setConfirmed(assertionInput === assertion);
    }, [assertionInput]);
    const classes = classNames("confirmation-modal", {
        [textAlign === "justified" ? "justified" : `${textAlign} aligned`]: textAlign
    }, className);
    /**
     * Handler for the secondary button click event.
     */
    const handleSecondaryActionClick = (e) => {
        setAssertionInput("");
        onSecondaryActionClick(e);
    };
    /**
     * Handler for the primary button click event.
     */
    const handlePrimaryActionClick = (e) => {
        setAssertionInput("");
        onPrimaryActionClick(e);
    };
    /**
     * Resolves the animated icon.
     *
     * @param {string} type - Type of the modal.
     *
     * @return {React.ReactElement}
     */
    const resolveIcon = (type) => {
        if (type === "positive") {
            return (React.createElement("div", { className: "svg-box", "data-testid": `${testId}-${type}-animated-icon` },
                React.createElement("svg", { className: "circular positive-stroke" },
                    React.createElement("circle", { className: "path", cx: "75", cy: "75", r: "50", fill: "none", strokeWidth: "5", strokeMiterlimit: "10" })),
                React.createElement("svg", { className: "positive-icon positive-stroke" },
                    React.createElement("g", { transform: "matrix(0.79961,8.65821e-32,8.39584e-32,0.79961,-489.57,-205.679)" },
                        React.createElement("path", { className: "positive-icon__check", fill: "none", d: "M616.306,283.025L634.087,300.805L673.361,261.53" })))));
        }
        else if (type === "negative") {
            return (React.createElement("div", { className: "svg-box", "data-testid": `${testId}-${type}-animated-icon` },
                React.createElement("svg", { className: "circular negative-stroke" },
                    React.createElement("circle", { className: "path", cx: "75", cy: "75", r: "50", fill: "none", strokeWidth: "5", strokeMiterlimit: "10" })),
                React.createElement("svg", { className: "negative-icon negative-stroke" },
                    React.createElement("g", { transform: "matrix(0.79961,8.65821e-32,8.39584e-32,0.79961,-502.652,-204.518)" },
                        React.createElement("path", { className: "first-line", d: "M634.087,300.805L673.361,261.53", fill: "none" })),
                    React.createElement("g", { transform: "matrix(-1.28587e-16,-0.79961,0.79961,-1.28587e-16,-204.752,543.031)" },
                        React.createElement("path", { className: "second-line", d: "M634.087,300.805L673.361,261.53" })))));
        }
        else if (type === "warning") {
            return (React.createElement("div", { className: "svg-box", "data-testid": `${testId}-${type}-animated-icon` },
                React.createElement("svg", { className: "circular warning-stroke" },
                    React.createElement("circle", { className: "path", cx: "75", cy: "75", r: "50", fill: "none", strokeWidth: "5", strokeMiterlimit: "10" })),
                React.createElement("svg", { className: "warning-icon warning-stroke" },
                    React.createElement("g", { transform: "matrix(1,0,0,1,-615.516,-257.346)" },
                        React.createElement("g", { transform: "matrix(0.56541,-0.56541,0.56541,0.56541,93.7153,495.69)" },
                            React.createElement("path", { className: "line", d: "M634.087,300.805L673.361,261.53", fill: "none" })),
                        React.createElement("g", { transform: "matrix(2.27612,-2.46519e-32,0,2.27612,-792.339,-404.147)" },
                            React.createElement("circle", { className: "dot", cx: "621.52", cy: "316.126", r: "1.318" }))))));
        }
        else {
            return (React.createElement(Icon, { className: "modal-icon", name: "info circle", size: "huge", color: "blue", "data-testid": `${testId}-info-animated-icon` }));
        }
    };
    /**
     * Resolves the assertion input.
     *
     * @param {"input" | "checkbox"} type - Type of the assertion.
     *
     * @return {React.ReactElement}
     */
    const resolveAssertionInput = (type) => {
        if (type === "input") {
            return (React.createElement(React.Fragment, null,
                assertionHint && typeof assertionHint === "string" ? React.createElement("p", null, assertionHint) : assertionHint,
                React.createElement(Input, { "data-testid": `${testId}-assertion-input`, onChange: (e) => { var _a; return setAssertionInput((_a = e.target) === null || _a === void 0 ? void 0 : _a.value); }, value: assertionInput, fluid: true })));
        }
        else if (type === "checkbox") {
            if (typeof assertionHint !== "string") {
                throw new Error("Unsupported hint format. Checkboxes can only have hints of type string.");
            }
            return (React.createElement(Checkbox, { label: assertionHint, checked: confirmed, onChange: () => setConfirmed(!confirmed), "data-testid": `${testId}-assertion-checkbox` }));
        }
        throw new Error("Unsupported assertion input type. Only `string` and `checkbox` is supported.");
    };
    return (React.createElement(Modal, Object.assign({ "data-testid": testId }, rest, { className: classes }),
        animated && (React.createElement("div", { className: "animated-icon" }, resolveIcon(type))),
        children,
        assertionType && (React.createElement(Modal.Content, { className: "no-margin-top" }, resolveAssertionInput(assertionType))),
        (primaryAction || secondaryAction) && (React.createElement(Modal.Actions, null,
            (secondaryAction && onSecondaryActionClick) && (React.createElement(LinkButton, { "data-testid": testId + "-cancel-button", positive: type === "positive", neagtive: type === "negative", warning: type === "warning", info: type === "info", onClick: handleSecondaryActionClick }, secondaryAction)),
            (primaryAction && onPrimaryActionClick) && (React.createElement(Button, { "data-testid": testId + "-confirm-button", className: `${type} ${primaryActionFluid ? "fluid" : ""}`, disabled: !(!assertionType || confirmed), onClick: handlePrimaryActionClick, fluid: primaryActionFluid }, primaryAction))))));
};
/**
 * Default proptypes for the confirmation modal component.
 */
ConfirmationModal.defaultProps = {
    "data-testid": "confirmation-modal",
    dimmer: "blurring",
    size: "tiny",
    textAlign: "left"
};
ConfirmationModal.Header = ConfirmationModalHeader;
ConfirmationModal.Content = ConfirmationModalContent;
ConfirmationModal.Description = ConfirmationModalDescription;
ConfirmationModal.Message = ConfirmationModalMessage;
//# sourceMappingURL=confirmation-modal.js.map