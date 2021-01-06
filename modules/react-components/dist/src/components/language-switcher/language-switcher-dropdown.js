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
import { Dropdown, Flag } from "semantic-ui-react";
/**
 * Language switcher dropdown component.
 *
 * @param {LanguageSwitcherDropdownProps} props - Props passed in to the language switcher dropdown component.
 *
 * @return {React.ReactElement}
 */
export const LanguageSwitcherDropdown = (props) => {
    const { direction, className, language, changeLanguage, upward, showCaret, supportedLanguages, ["data-testid"]: testId } = props;
    const LanguageSwitcherTrigger = () => {
        var _a;
        return (React.createElement("span", { className: "dropdown-trigger link", "data-testid": `${testId}-trigger` }, (_a = supportedLanguages[language]) === null || _a === void 0 ? void 0 : _a.name));
    };
    return (React.createElement(Dropdown, { item: true, className: className, upward: upward, trigger: LanguageSwitcherTrigger(), direction: direction, "data-testid": testId, floating: true },
        React.createElement(Dropdown.Menu, null, Object.values(supportedLanguages).map((lang, index) => (React.createElement(Dropdown.Item, { key: index, onClick: changeLanguage, value: lang === null || lang === void 0 ? void 0 : lang.code, "data-testid": `${testId}-language` },
            React.createElement(Flag, { name: lang === null || lang === void 0 ? void 0 : lang.flag }), lang === null || lang === void 0 ? void 0 :
            lang.name))))));
};
/**
 * Default proptypes for the language switcher dropdown component.
 */
LanguageSwitcherDropdown.defaultProps = {
    "data-testid": "language-switcher-dropdown",
    showCaret: false
};
//# sourceMappingURL=language-switcher-dropdown.js.map