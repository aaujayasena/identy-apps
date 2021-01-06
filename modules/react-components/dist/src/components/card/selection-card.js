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
import { Card } from "semantic-ui-react";
import { GenericIcon } from "../icon";
import { Tooltip } from "../typography";
/**
 * Selection card component.
 *
 * @param {SelectionCardPropsInterface} props - Props injected to the components.
 *
 * @return {React.ReactElement}
 */
export const SelectionCard = (props) => {
    const { className, contentTopBorder, description, disabled, header, id, inline, image, imageOptions, imageSize, multilineDescription, onClick, selected, selectionType, showText, showTooltips, size, spaced, textAlign, ["data-testid"]: testId } = props, rest = __rest(props, ["className", "contentTopBorder", "description", "disabled", "header", "id", "inline", "image", "imageOptions", "imageSize", "multilineDescription", "onClick", "selected", "selectionType", "showText", "showTooltips", "size", "spaced", "textAlign", "data-testid"]);
    const classes = classNames("selection-card", {
        disabled,
        "filled-selection": selectionType === "filled",
        inline,
        "no-content-top-border": !contentTopBorder,
        selected,
        [size]: size,
        [`spaced-${spaced}`]: spaced,
        "underlined-selection": selectionType === "underlined",
        ["with-image"]: image
    }, className);
    return (React.createElement(Card, Object.assign({ id: id, className: classes, onClick: onClick, link: false, as: "div", "data-testid": testId }, rest),
        image && (React.createElement(Card.Content, { className: "card-image-container" },
            React.createElement(GenericIcon, Object.assign({ className: "card-image", size: imageSize, icon: image, "data-testid": `${testId}-image`, square: true, transparent: true }, imageOptions)))),
        showText && (React.createElement(Card.Content, { className: "card-text-container", style: { textAlign } },
            header && (React.createElement(Tooltip, { disabled: !showTooltips, content: header, trigger: (React.createElement(Card.Header, { "data-testid": `${testId}-header` }, header)) })),
            description && (React.createElement(Tooltip, { disabled: !showTooltips, content: description, trigger: (React.createElement(Card.Description, { className: multilineDescription ? "multiline" : "", "data-testid": `${testId}-description` }, description)) }))))));
};
/**
 * Default props for the selection card component.
 */
SelectionCard.defaultProps = {
    contentTopBorder: true,
    "data-testid": "selection-card",
    imageSize: "tiny",
    inline: false,
    onClick: () => null,
    selectionType: "underlined",
    showText: true,
    showTooltips: false,
    size: "default",
    textAlign: "center"
};
//# sourceMappingURL=selection-card.js.map