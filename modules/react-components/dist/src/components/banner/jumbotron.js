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
import { Responsive, Segment } from "semantic-ui-react";
import { GenericIcon } from "../icon";
import { Heading } from "../typography";
/**
 * Component to showcase key marketing messages.
 *
 * @param {JumbotronPropsInterface} props - Props injected to the components.
 *
 * @return {React.ReactElement}
 */
export const Jumbotron = (props) => {
    const { children, className, contentInline, background, borderRadius, bordered, heading, headingAs, icon, iconOptions, iconSize, matchedPadding, style, subHeading, subHeadingAs, topContent, ["data-testid"]: testId } = props, rest = __rest(props, ["children", "className", "contentInline", "background", "borderRadius", "bordered", "heading", "headingAs", "icon", "iconOptions", "iconSize", "matchedPadding", "style", "subHeading", "subHeadingAs", "topContent", "data-testid"]);
    const classes = classNames("jumbotron", {
        [`background-${background}`]: background,
        [typeof bordered === "boolean" ? "bordered-default" : `bordered-${bordered}`]: bordered,
        [typeof borderRadius === "string" ? `border-radius-${borderRadius}` : ""]: borderRadius,
        ["matched-padding"]: matchedPadding
    }, className);
    const contentWrapperClasses = classNames("jumbotron-content-wrapper", {
        ["inline"]: contentInline
    });
    /**
     * Resolves the custom styles.
     *
     * @return {object} Styles object.
     */
    const getStyle = () => {
        let modifiedStyle = style;
        if (typeof borderRadius === "number") {
            modifiedStyle = Object.assign(Object.assign({}, modifiedStyle), { borderRadius: `${borderRadius}px` });
        }
        return modifiedStyle;
    };
    /**
     * Resolves additional properties.
     *
     * @return {object} Additional props.
     */
    const resolveAdditionalProps = () => {
        let additionalProps = {};
        if (background && !(background === "white" || background === "default")) {
            additionalProps = Object.assign(Object.assign({}, additionalProps), { inverted: true });
        }
        return additionalProps;
    };
    return (React.createElement(Segment, Object.assign({ className: classes, style: getStyle() }, resolveAdditionalProps(), rest),
        topContent,
        (heading || subHeading || children) && (React.createElement("div", { className: contentWrapperClasses },
            heading && (typeof heading === "string"
                ? (React.createElement(Heading, { className: "jumbotron-heading inline ellipsis", as: headingAs, "data-testid": `${testId}-heading`, compact: true }, heading))
                : heading),
            subHeading && (typeof subHeading === "string"
                ? (React.createElement(Heading, { className: "jumbotron-sub-heading", "data-testid": `${testId}-sub-heading`, as: subHeadingAs, subHeading: true, ellipsis: true }, subHeading))
                : subHeading),
            children)),
        icon && (React.createElement(Responsive, Object.assign({ as: GenericIcon, icon: icon, size: iconSize, floated: "right", transparent: true, minWidth: Responsive.onlyComputer.minWidth }, iconOptions)))));
};
/**
 * Default props for the stat count card.
 */
Jumbotron.defaultProps = {
    background: "default",
    basic: true,
    borderRadius: "default",
    bordered: "bottom",
    clearing: true,
    contentInline: false,
    "data-testid": "jumbotron",
    headingAs: "h1",
    iconSize: "auto",
    matchedPadding: true,
    subHeadingAs: "h5",
    textAlign: "left"
};
//# sourceMappingURL=jumbotron.js.map