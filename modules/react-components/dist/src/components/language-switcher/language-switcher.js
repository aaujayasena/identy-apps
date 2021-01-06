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
import { LanguageSwitcherDropdown } from "./language-switcher-dropdown";
/**
 * Language switcher component.
 *
 * @param {React.PropsWithChildren<any>} props - Props passed in to the language switcher component.
 *
 * @return {React.ReactElement}
 */
export const LanguageSwitcher = (props) => {
    const { className, currentLanguage, direction, onLanguageChange, showDropdownCaret, supportedLanguages, upward, ["data-testid"]: testId } = props;
    /**
     * Handles the language change.
     *
     * @param {React.SyntheticEvent} event - Click event.
     * @param data - data object returned from the dropdown item.
     */
    const handleLanguageChange = (event, data) => {
        onLanguageChange(data.value);
    };
    return (React.createElement(LanguageSwitcherDropdown, { className: className, direction: direction, upward: upward, language: currentLanguage, changeLanguage: handleLanguageChange, showCaret: showDropdownCaret, supportedLanguages: supportedLanguages, "data-testid": testId }));
};
/**
 * Default proptypes for the language switcher component.
 */
LanguageSwitcher.defaultProps = {
    "data-testid": "language-switcher",
    direction: "left",
    showDropdownCaret: false,
    upward: true
};
//# sourceMappingURL=language-switcher.js.map