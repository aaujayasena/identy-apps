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
import classNames from "classnames";
import React, { Fragment } from "react";
import { Card, Grid, Header, Icon, List, Menu, Message, Responsive } from "semantic-ui-react";
import { GenericIcon } from "../icon";
/**
 * Section component.
 *
 * @param {PropsWithChildren<SectionProps>} props - Props injected to the section component.
 *
 * @return {React.ReactElement}
 */
export const Section = (props) => {
    const { children, className, contentPadding, description, header, icon, iconMini, iconFloated, iconStyle, iconSize, onPrimaryActionClick, onSecondaryActionClick, placeholder, primaryAction, primaryActionDisabled, primaryActionIcon, secondaryAction, secondaryActionDisabled, secondaryActionIcon, showActionBar, topActionBar, accordion, ["data-testid"]: testId } = props;
    const classes = classNames({
        "with-top-action-bar": topActionBar
    }, className);
    /**
     * Construct the action element.
     *
     * @param action - action which is passed in.
     * @param {SemanticICONS} actionIcon - Icon for the action.
     * @param {boolean} actionDisabled - Flag to determine if the action should be disabled.
     * @param actionOnClick - On Click handler of the action.
     * @param {"primary" | "secondary"} actionType - Type of the action.
     * @return Constructed element.
     */
    const constructAction = (action, actionIcon, actionDisabled, actionOnClick, actionType) => {
        // if passed in action is a react component
        if (typeof action === "function" || typeof action === "object") {
            return (React.createElement(List.Content, { className: actionDisabled ? "disabled" : "", floated: actionType === "secondary" ? "right" : "left", "data-testid": `${testId}-${actionType}-action` }, action));
        }
        // if passed in action is of type `string`.
        if (typeof action === "string") {
            return (React.createElement(List.Content, { className: actionDisabled ? "disabled" : "", floated: actionType === "secondary" ? "right" : "left", "data-testid": `${testId}-${actionType}-action` },
                React.createElement(List.Header, { className: "action-button-text", onClick: actionOnClick },
                    actionIcon
                        ? (React.createElement(React.Fragment, null,
                            React.createElement(Icon, { name: actionIcon }),
                            " "))
                        : null,
                    action)));
        }
        return null;
    };
    return (React.createElement(Card, { className: `settings-card ${classes}`, fluid: true, padded: "very", "data-testid": testId },
        React.createElement(Card.Content, null,
            React.createElement(Grid, null,
                React.createElement(Grid.Row, { className: "header-section", columns: 2 },
                    React.createElement(Grid.Column, { width: (icon || iconMini) ? 10 : 16, className: "no-padding" },
                        React.createElement(Header, { as: "h2", "data-testid": `${testId}-header` }, header),
                        React.createElement(Card.Meta, { "data-testid": `${testId}-description` }, description)),
                    icon || iconMini ? (React.createElement(Grid.Column, { width: 6, className: "no-padding" },
                        React.createElement(Responsive, Object.assign({ as: Fragment }, Responsive.onlyComputer), icon ? (React.createElement(GenericIcon, { icon: icon, transparent: true, size: iconSize, floated: iconFloated, defaultIcon: iconStyle === "default", twoTone: iconStyle === "twoTone", colored: iconStyle === "colored", "data-testid": `${testId}-icon` }))
                            : null),
                        React.createElement(Responsive, { as: Fragment, maxWidth: Responsive.onlyTablet.maxWidth }, iconMini ? (React.createElement(GenericIcon, { icon: iconMini, transparent: true, size: iconSize, floated: iconFloated, defaultIcon: iconStyle === "default", twoTone: iconStyle === "twoTone", colored: iconStyle === "colored", "data-testid": `${testId}-icon-mini` }))
                            : null)))
                        : null),
                React.createElement(Grid.Row, { className: `main-content ${contentPadding ? "" : "no-padding"}`, columns: 1 },
                    React.createElement(Grid.Column, { className: "no-padding", width: 16 },
                        topActionBar
                            ? (React.createElement(Menu, { className: "top-action-panel no-margin-bottom", "data-testid": `${testId}-top-action-panel` },
                                React.createElement(Menu.Menu, { position: "right" }, topActionBar)))
                            : null,
                        children)))),
        (primaryAction || secondaryAction || placeholder) && showActionBar ? (React.createElement(Card.Content, { className: "extra-content", extra: true },
            React.createElement(List, { selection: !secondaryAction, verticalAlign: "middle" },
                React.createElement(List.Item, { className: "action-button", disabled: !!placeholder, 
                    // if both `primaryAction` & `secondaryAction` are passed in,
                    // disable list item `onClick`.
                    onClick: !(primaryAction && secondaryAction)
                        ? onSecondaryActionClick || onPrimaryActionClick
                        : null }, placeholder
                    ? (React.createElement(List.Header, { className: "action-button-text" },
                        React.createElement(Message, { info: true },
                            React.createElement(Icon, { name: "info circle" }),
                            placeholder)))
                    : (React.createElement(React.Fragment, null,
                        primaryAction
                            ? constructAction(primaryAction, primaryActionIcon, primaryActionDisabled, (primaryAction && secondaryAction)
                                ? onPrimaryActionClick
                                : null, "primary")
                            : null,
                        secondaryAction
                            ? constructAction(secondaryAction, secondaryActionIcon, secondaryActionDisabled, (primaryAction && secondaryAction)
                                ? onSecondaryActionClick
                                : null, "secondary")
                            : null))))))
            : (accordion)));
};
/**
 * Default proptypes for the section component.
 */
Section.defaultProps = {
    className: "",
    contentPadding: false,
    "data-testid": "section",
    description: "",
    header: "",
    iconFloated: "right",
    iconStyle: "colored",
    primaryAction: "",
    primaryActionDisabled: false,
    showActionBar: true,
    topActionBar: null
};
//# sourceMappingURL=section.js.map