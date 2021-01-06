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
import { getGravatarImage } from "@wso2is/core/api";
import { resolveUserDisplayName, resolveUsername } from "@wso2is/core/helpers";
import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import { Container, Divider, Dropdown, Icon, Item, Menu, Placeholder, Responsive } from "semantic-ui-react";
import { UserAvatar } from "../avatar";
/**
 * Header component.
 *
 * @param {HeaderPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const Header = (props) => {
    const { announcement, brand, brandLink, basicProfileInfo, children, className, extensions, fixed, fluid, isProfileInfoLoading, linkedAccounts, profileInfo, userDropdownInfoAction, showSidePanelToggle, showUserDropdown, onLinkedAccountSwitch, onSidePanelToggleClick, userDropdownIcon, userDropdownLinks, ["data-testid"]: testId } = props;
    const classes = classNames("app-header", {
        ["fluid-header"]: fluid,
        ["has-announcement"]: announcement
    }, className);
    const trigger = (React.createElement("span", { className: "user-dropdown-trigger", "data-testid": `${testId}-user-dropdown-trigger` },
        React.createElement(Responsive, { minWidth: 767, className: "username", "data-testid": `${testId}-user-display-name` }, isProfileInfoLoading
            ? (React.createElement(Placeholder, { "data-testid": `${testId}-username-loading-placeholder` },
                React.createElement(Placeholder.Line, null)))
            : resolveUserDisplayName(profileInfo, basicProfileInfo)),
        React.createElement(UserAvatar, { isLoading: isProfileInfoLoading, authState: basicProfileInfo, profileInfo: profileInfo, size: "mini", "data-testid": `${testId}-user-avatar` })));
    /**
     * Stops the dropdown from closing on click.
     *
     * @param { React.SyntheticEvent<HTMLElement> } e - Click event.
     */
    const handleUserDropdownClick = (e) => {
        e.stopPropagation();
    };
    /**
     * Handles the account switch click event.
     *
     * @param { LinkedAccountInterface } account - Target account.
     */
    const handleLinkedAccountSwitch = (account) => {
        onLinkedAccountSwitch(account);
    };
    const resolveAuthenticatedUserEmail = () => {
        if (!profileInfo || !profileInfo.emails || !profileInfo.emails.length || profileInfo.emails.length < 1) {
            return null;
        }
        if (typeof profileInfo.emails[0] === "string") {
            return profileInfo.emails[0];
        }
        else if (typeof profileInfo.emails[0] === "object") {
            return profileInfo.emails[0].value;
        }
        return null;
    };
    return (React.createElement(Menu, { id: "app-header", className: classes, fixed: fixed, borderless: true, "data-testid": testId },
        announcement,
        React.createElement(Container, { fluid: fluid, "data-testid": `${testId}-container`, className: "app-header-container" },
            showSidePanelToggle
                ? (React.createElement(Responsive, { as: Menu.Item, maxWidth: 767 },
                    React.createElement(Icon, { name: "bars", size: "large", onClick: onSidePanelToggleClick, "data-testid": `${testId}-hamburger-icon`, link: true })))
                : null,
            brand && (React.createElement(Responsive, { className: "p-0", as: Menu.Item, minWidth: 767 },
                React.createElement(Menu.Item, { as: Link, to: brandLink, header: true, "data-testid": `${testId}-brand-container` }, brand))),
            extensions && (extensions instanceof Array
                && extensions.length > 0
                && extensions.some((extension) => extension.floated === "left")
                && (React.createElement(Menu.Menu, { position: "left", className: "header-extensions left", "data-testid": `${testId}-left-extensions` }, extensions.map((extension) => extension.floated === "left" && extension.component)))),
            (React.createElement(Menu.Menu, { position: "right", className: "header-extensions right", "data-testid": `${testId}-user-dropdown-container` },
                extensions && (extensions instanceof Array
                    && extensions.length > 0
                    && extensions.some((extension) => extension.floated === "right")
                    && extensions.map((extension) => extension.floated === "right" && extension.component)),
                showUserDropdown && (React.createElement(Dropdown, { item: true, trigger: trigger, floating: true, icon: userDropdownIcon, className: "user-dropdown", "data-testid": `${testId}-user-dropdown` },
                    React.createElement(Dropdown.Menu, { onClick: handleUserDropdownClick },
                        React.createElement(Item.Group, { className: "authenticated-user", unstackable: true },
                            React.createElement(Item, { className: "header", key: `logged-in-user-${profileInfo.userName}` },
                                React.createElement(UserAvatar, { authState: basicProfileInfo, profileInfo: profileInfo, isLoading: isProfileInfoLoading, "data-testid": `${testId}-user-dropdown-avatar`, size: "x60" }),
                                React.createElement(Item.Content, { verticalAlign: "middle" },
                                    React.createElement(Item.Description, null,
                                        React.createElement("div", { className: "name", "data-testid": `${testId}-user-dropdown-display-name` }, isProfileInfoLoading
                                            ? React.createElement(Placeholder, null,
                                                React.createElement(Placeholder.Line, null))
                                            : resolveUserDisplayName(profileInfo, basicProfileInfo)),
                                        (profileInfo.emails !== undefined
                                            && profileInfo.emails !== null) && (React.createElement("div", { className: "email", "data-testid": `${testId}-user-dropdown-email` }, isProfileInfoLoading
                                            ? (React.createElement(Placeholder, null,
                                                React.createElement(Placeholder.Line, null)))
                                            : resolveAuthenticatedUserEmail())),
                                        userDropdownInfoAction && (React.createElement(React.Fragment, null,
                                            React.createElement(Divider, { hidden: true }),
                                            userDropdownInfoAction)))))),
                        (linkedAccounts && linkedAccounts.length && linkedAccounts.length > 0)
                            ? (React.createElement(Item.Group, { className: "linked-accounts-list", unstackable: true, "data-testid": `${testId}-linked-accounts-container` }, linkedAccounts.map((association, index) => (React.createElement(Item, { className: "linked-account", key: `${association.userId}-${index}`, onClick: () => handleLinkedAccountSwitch(association) },
                                React.createElement(UserAvatar, { bordered: true, avatar: true, size: "little", image: getGravatarImage(association.email), name: association.username, "data-testid": `${testId}-la-avatar`, spaced: "right" }),
                                React.createElement(Item.Content, { verticalAlign: "middle" },
                                    React.createElement(Item.Description, null,
                                        React.createElement("div", { className: "name", "data-testid": `${testId}-la-name` }, resolveUsername(association.username, association.userStoreDomain)),
                                        React.createElement("div", { className: "email", "data-testid": `${testId}-la-email` }, association.tenantDomain))))))))
                            : null,
                        (userDropdownLinks
                            && userDropdownLinks.length
                            && userDropdownLinks.length > 0)
                            ? userDropdownLinks.map((link, index) => {
                                const { content, icon, name, onClick } = link;
                                return (React.createElement(Dropdown.Item, { key: index, className: "action-panel", onClick: onClick, "data-testid": `${testId}-dropdown-link-${name}` },
                                    icon && React.createElement(Icon, { className: "link-icon", name: icon }),
                                    name,
                                    content));
                            })
                            : null)))))),
        children));
};
/**
 * Default prop types for the header component.
 */
Header.defaultProps = {
    "data-testid": "app-header",
    fixed: "top",
    fluid: false,
    onLinkedAccountSwitch: () => null,
    onSidePanelToggleClick: () => null,
    showSidePanelToggle: true,
    showUserDropdown: true,
    userDropdownIcon: null
};
//# sourceMappingURL=header.js.map