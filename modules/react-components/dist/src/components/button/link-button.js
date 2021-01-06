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
import { Loader, Button as SemanticButton } from "semantic-ui-react";
/**
 * Link button component.
 *
 * @param {LinkButtonPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const LinkButton = (props) => {
    const { children, className, compact, info, loading, loaderPosition, loaderSize, warning, ["data-testid"]: testId } = props, rest = __rest(props, ["children", "className", "compact", "info", "loading", "loaderPosition", "loaderSize", "warning", "data-testid"]);
    const classes = classNames("link-button", {
        compact,
        info,
        [`loader-${loaderPosition}`]: loading && loaderPosition,
        warning
    }, className);
    return (React.createElement(SemanticButton, Object.assign({ className: classes, loading: loading && !loaderPosition, "data-testid": testId }, rest),
        loading && loaderPosition === "left" && (React.createElement(Loader, { active: true, inline: true, size: loaderSize, "data-testid": `${testId}-loader` })),
        children,
        loading && loaderPosition === "right" && (React.createElement(Loader, { active: true, inline: true, size: loaderSize, "data-testid": `${testId}-loader` }))));
};
/**
 * Prop types for the link button component.
 */
LinkButton.defaultProps = {
    "data-testid": "link-button",
    loaderSize: "mini"
};
//# sourceMappingURL=link-button.js.map