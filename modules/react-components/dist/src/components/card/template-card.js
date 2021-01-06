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
import { Card, Divider, Icon, Label, Popup } from "semantic-ui-react";
import { GenericIcon } from "../icon";
/**
 * Template card component that can be used to represent application and IDP templates.
 *
 * @param {TemplateCardPropsInterface} props - Props injected to the components.
 *
 * @return {React.ReactElement}
 */
export const TemplateCard = (props) => {
    const { className, description, disabled, name, id, inline, image, imageOptions, imageSize, onClick, selected, showTags, showTagIcon, tags, tagsAs, tagsSectionTitle, textAlign, ["data-testid"]: testId } = props;
    const classes = classNames("template-card", {
        disabled,
        inline,
        selected,
        ["with-image"]: image
    }, className);
    /**
     * Renders the tag based on render type.
     *
     * @param {TemplateCardTagInterface | string} tag - Tag to be rendered.
     * @param {"icon" | "label" | "default"} as - Render type.
     * @param {number} index - Tag index in array.
     * @return {React.ReactElement}
     */
    const renderTag = (tag, as, index) => {
        if (typeof tag === "string") {
            return React.createElement("span", { className: "tag default", key: index },
                tag,
                (tags.length === 1 || index === tags.length - 1) ? "" : ",");
        }
        if (as === "icon") {
            return (React.createElement(Popup, { basic: true, key: index, trigger: (React.createElement("span", { className: "icon-wrapper", "data-testid": `${testId}-logo-wrapper` },
                    React.createElement(GenericIcon, { icon: tag.logo, size: "micro", spaced: "right", fill: false, "data-testid": `${testId}-logo`, inline: true, transparent: true }))), size: "mini", position: "top center", content: tag.displayName, inverted: true }));
        }
        if (as === "label") {
            return (React.createElement(Label, { key: index, size: "mini", "data-testid": `${testId}-logo-label` }, tag.displayName));
        }
        return React.createElement("span", { className: "tag default", key: index },
            tag.displayName,
            (tags.length === 1 || index === tags.length - 1) ? "" : ", ");
    };
    return (React.createElement(Card, { id: id, className: classes, onClick: onClick, link: false, as: "div", "data-testid": testId },
        image && (React.createElement(Card.Content, { className: "card-image-container" },
            React.createElement(GenericIcon, Object.assign({ square: true, transparent: true, className: "card-image", size: imageSize, icon: image, "data-testid": `${testId}-image` }, imageOptions)))),
        React.createElement(Card.Content, { className: "card-text-container", style: { textAlign } },
            React.createElement(Card.Header, { "data-testid": `${testId}-header` }, name),
            React.createElement(Card.Description, { "data-testid": `${testId}-description` }, description),
            (showTags && tags && tags instanceof Array && tags.length > 0)
                ? (React.createElement("div", { className: "tags-container", "data-testid": `${testId}-tags-container` },
                    tagsSectionTitle && (React.createElement("div", { className: "title", "data-testid": `${testId}-tags-title` }, tagsSectionTitle)),
                    React.createElement("div", { className: "tags", "data-testid": `${testId}-tags` },
                        showTagIcon && React.createElement(Icon, { name: "tag", className: "tag-icon", size: "tiny", color: "grey" }),
                        tags
                            .map((tag, index) => renderTag(tag, tagsAs, index)))))
                : React.createElement(Divider, { hidden: true }))));
};
/**
 * Default props for the template card.
 */
TemplateCard.defaultProps = {
    "data-testid": "template-card",
    imageSize: "tiny",
    inline: true,
    tagsAs: "label",
    textAlign: "center"
};
//# sourceMappingURL=template-card.js.map