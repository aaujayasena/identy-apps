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
import { Card, Statistic } from "semantic-ui-react";
import { GenericIcon } from "../icon";
/**
 * Stat count card component that can be used to represent statistics.
 *
 * @param {StatCountCardPropsInterface} props - Props injected to the components.
 *
 * @return {React.ReactElement}
 */
export const StatCountCard = (props) => {
    const { className, disabled, fluid, inline, icon, iconOptions, iconSize, label, onClick, statOptions, textAlign, value, ["data-testid"]: testId } = props;
    const { textAlign: statsTextAlign, textTransform: statsTextTransform } = statOptions, statOptionsRest = __rest(statOptions, ["textAlign", "textTransform"]);
    const cardClasses = classNames("stat-count-card", {
        disabled,
        inline,
        ["with-icon"]: icon
    }, className);
    const statsClasses = classNames("stat-count-card-stats", {
        [`text-${statOptions.textAlign}`]: statsTextAlign,
        ["text-left"]: !statsTextAlign,
        [`text-${statOptions.textTransform}`]: statsTextTransform,
        ["text-unset"]: !statsTextTransform
    });
    return (React.createElement(Card, { className: cardClasses, onClick: onClick, link: false, fluid: fluid, as: "div", "data-testid": testId },
        React.createElement(Card.Content, { className: "stat-count-card-text-container", style: { textAlign } },
            icon && (React.createElement("div", { className: "stat-count-card-icon-container" },
                React.createElement(GenericIcon, Object.assign({ className: "stat-count-card-icon", size: iconSize, icon: icon, "data-testid": `${testId}-icon`, floated: "left", shape: "rounded", relaxed: "very" }, iconOptions)))),
            React.createElement(Statistic, Object.assign({}, statOptionsRest),
                React.createElement(Statistic.Label, { className: statsClasses }, label),
                React.createElement(Statistic.Value, { className: statsClasses }, value)))));
};
/**
 * Default props for the stat count card.
 */
StatCountCard.defaultProps = {
    "data-testid": "stat-count-card",
    fluid: false,
    iconSize: "mini",
    inline: true,
    textAlign: "left"
};
//# sourceMappingURL=stat-count-card.js.map