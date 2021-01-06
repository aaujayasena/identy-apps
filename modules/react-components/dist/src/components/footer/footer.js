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
import React from "react";
import { Link } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import { LanguageSwitcher } from "../language-switcher";
/**
 * Footer component.
 *
 * @param {FooterPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const Footer = (props) => {
    const { className, copyright, currentLanguage, fixed, fluid, links, onLanguageChange, showLanguageSwitcher, showLanguageSwitcherDropdownCaret, supportedLanguages, ["data-testid"]: testId } = props;
    const classes = classNames("app-footer", {
        ["fluid-footer"]: fluid
    }, className);
    return (React.createElement(Menu, { stackable: true, id: "app-footer", className: classes, fixed: fixed, fluid: fluid, borderless: true, "data-testid": testId },
        React.createElement(Container, { fluid: fluid, "data-testid": `${testId}-container`, className: "app-footer-container" },
            React.createElement(Menu.Item, { className: "copyright", "data-testid": `${testId}-copyright` }, copyright),
            React.createElement(Menu.Menu, { position: "right", "data-testid": `${testId}-menu` },
                // Only show language switcher if it is set to show and if the required props are passed in.
                (showLanguageSwitcher && currentLanguage && onLanguageChange && supportedLanguages)
                    ? (React.createElement(LanguageSwitcher, { className: "footer-dropdown", currentLanguage: currentLanguage, onLanguageChange: onLanguageChange, showDropdownCaret: showLanguageSwitcherDropdownCaret, supportedLanguages: supportedLanguages, "data-testid": `${testId}-language-switcher` }))
                    : null,
                (links && links.length && links.length > 0)
                    ? links.map((link, index) => (React.createElement(Menu.Item, { className: "footer-link", as: Link, key: index, to: link.to, "data-testid": `${testId}-link-${link.name}` }, link.name)))
                    : null))));
};
/**
 * Default proptypes for the footer component.
 */
Footer.defaultProps = {
    "data-testid": "app-footer",
    fixed: "bottom",
    fluid: false,
    showLanguageSwitcher: false,
    showLanguageSwitcherDropdownCaret: false
};
//# sourceMappingURL=footer.js.map