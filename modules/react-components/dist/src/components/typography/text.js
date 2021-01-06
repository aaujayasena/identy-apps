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
/**
 * Text component.
 *
 * @param {TextPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const Text = (props) => {
    const { className, compact, display, inline, muted, size, styles, ["data-testid"]: testId, truncate, weight, width } = props, rest = __rest(props, ["className", "compact", "display", "inline", "muted", "size", "styles", "data-testid", "truncate", "weight", "width"]);
    const classes = classNames("text-typography", {
        compact,
        "ellipsis": truncate,
        inline,
        muted
    }, className);
    const resolveInlineStyles = (overrides) => {
        let modified = {};
        if (weight) {
            modified = Object.assign(Object.assign({}, modified), { fontWeight: weight });
        }
        if (display) {
            modified = Object.assign(Object.assign({}, modified), { display });
        }
        if (width) {
            modified = Object.assign(Object.assign({}, modified), { width: width.toString() });
        }
        if (size) {
            modified = Object.assign(Object.assign({}, modified), { fontSize: typeof size === "number" ? `${size}px` : size });
        }
        return Object.assign(Object.assign({}, modified), overrides);
    };
    return (React.createElement("div", Object.assign({ style: resolveInlineStyles(styles), className: classes, "data-testid": testId }, rest)));
};
/**
 * Default props for the text component.
 */
Text.defaultProps = {
    compact: true,
    "data-testid": "text"
};
//# sourceMappingURL=text.js.map