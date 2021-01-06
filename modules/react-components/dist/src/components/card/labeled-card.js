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
import { Card, Label, Popup } from "semantic-ui-react";
import { GenericIcon } from "../icon";
/**
 * Labeled card component.
 *
 * @param {LabeledCardPropsInterface} props - Props injected to the components.
 *
 * @return {React.ReactElement}
 */
export const LabeledCard = (props) => {
    const { background, basic, bottomMargin, className, disabled, fluid, id, inline, image, imageOptions, imageSize, label, labelEllipsis, onClick, onCloseClick, padding, raiseOnHover, selected, size, ["data-testid"]: testId } = props;
    const wrapperClasses = classNames("labeled-card-wrapper", {
        basic,
        fluid,
        ["hover-raised-none"]: !raiseOnHover,
        inline,
        [`padding-${padding}`]: padding,
        [size]: size,
        ["with-bottom-margin"]: bottomMargin
    }, className);
    const cardClasses = classNames("labeled-card", {
        [`background-${background}`]: background,
        disabled,
        selected,
        ["with-image"]: image
    });
    const cardLabelClasses = classNames("card-label", {
        "ellipsis": labelEllipsis
    });
    return (React.createElement("div", { className: wrapperClasses, "data-testid": `${testId}-wrapper` },
        React.createElement(Card, { id: id, as: "div", className: cardClasses, onClick: onClick, link: false, "data-testid": testId },
            onCloseClick && (React.createElement(Label, { className: "close-button", color: "red", size: "mini", onClick: onCloseClick, "data-testid": `${testId}-close-button`, floating: true, circular: true }, "x")),
            React.createElement(Card.Content, { className: "card-image-container" },
                React.createElement(GenericIcon, Object.assign({ className: "card-image", size: imageSize, icon: image, "data-testid": `${testId}-image`, square: true, transparent: true }, imageOptions)))),
        React.createElement(Popup, { disabled: !labelEllipsis, trigger: React.createElement("div", { className: cardLabelClasses }, label), position: "bottom center", content: label, "data-testid": `${testId}-label`, inverted: true })));
};
/**
 * Default props for the labeled card component.
 */
LabeledCard.defaultProps = {
    background: "default",
    basic: false,
    bottomMargin: true,
    "data-testid": "labeled-card",
    imageSize: "mini",
    inline: true,
    onClick: () => null,
    padding: "default",
    raiseOnHover: true
};
//# sourceMappingURL=labeled-card.js.map