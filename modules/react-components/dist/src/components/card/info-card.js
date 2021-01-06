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
import { Card, Icon, Label, Popup } from "semantic-ui-react";
import { GenericIcon } from "../icon";
/**
 * Selection card component.
 *
 * @param {InfoCardPropsInterface} props - Props injected to the components.
 *
 * @return {React.ReactElement}
 */
export const InfoCard = (props) => {
    const { className, description, disabled, fluid, fluidImageSize, githubRepoCard, githubRepoMetaInfo, header, id, inline, image, imageSize, selected, subHeader, tags, textAlign, ["data-testid"]: testId } = props, rest = __rest(props, ["className", "description", "disabled", "fluid", "fluidImageSize", "githubRepoCard", "githubRepoMetaInfo", "header", "id", "inline", "image", "imageSize", "selected", "subHeader", "tags", "textAlign", "data-testid"]);
    const classes = classNames("info-card", {
        disabled,
        fluid,
        inline,
        selected,
        ["with-image"]: image
    }, className);
    return (React.createElement(Card, Object.assign({ id: id, className: classes, link: false, as: "div", "data-testid": testId }, rest),
        React.createElement(Card.Content, null,
            image && (React.createElement(GenericIcon, { "data-testid": `${testId}-image`, className: "card-image", size: fluid ? fluidImageSize : imageSize, icon: image, floated: "left", square: true, transparent: true })),
            React.createElement("div", { className: "card-header-section" },
                header && (React.createElement(Card.Header, { className: "card-header ellipsis", "data-testid": `${testId}-header` }, header)),
                subHeader && (React.createElement(Card.Header, { className: "card-subheader ellipsis", "data-testid": `${testId}-sub-header` }, subHeader)),
                description && fluid && (React.createElement(Card.Description, { className: "card-description", "data-testid": `${testId}-description` }, description)),
                githubRepoCard && githubRepoMetaInfo && fluid && (React.createElement(Card.Content, { className: "github-meta", "data-testid": `${testId}-github-repo-meta` },
                    githubRepoMetaInfo.languageLogo && (React.createElement(Popup, { trigger: React.createElement("div", { className: "language" },
                            React.createElement(GenericIcon, { icon: githubRepoMetaInfo.languageLogo, "data-testid": `${testId}-github-repo-language-logo`, size: "micro", transparent: true, inline: true, square: true, spaced: "right", floated: "left" })), content: githubRepoMetaInfo.language, inverted: true })),
                    React.createElement(Label.Group, { size: "mini", "data-testid": `${testId}-github-repo-stats` },
                        React.createElement(Label, { "data-testid": `${testId}-github-repo-stars` },
                            React.createElement(Icon, { name: "star" }),
                            " ",
                            githubRepoMetaInfo.stars),
                        React.createElement(Label, { "data-testid": `${testId}-github-repo-forks` },
                            React.createElement(Icon, { name: "fork" }),
                            " ",
                            githubRepoMetaInfo.forks),
                        React.createElement(Label, { "data-testid": `${testId}-github-repo-watchers` },
                            React.createElement(Icon, { name: "eye" }),
                            " ",
                            githubRepoMetaInfo.watchers)))))),
        description && !fluid && (React.createElement(Card.Content, { className: "card-description-container" },
            React.createElement(Card.Description, { className: "card-description", "data-testid": `${testId}-description` }, description))),
        tags && tags instanceof Array && tags.length > 0
            ? (React.createElement(Card.Content, { className: "card-tags", "data-testid": `${testId}-tags` },
                React.createElement(Label.Group, { size: "mini" }, tags.map((tag, index) => (React.createElement(Label, { key: index },
                    "#",
                    tag))))))
            : null,
        githubRepoCard && githubRepoMetaInfo && !fluid && (React.createElement(Card.Content, { className: "github-meta", "data-testid": `${testId}-github-repo-meta` },
            githubRepoMetaInfo.languageLogo && (React.createElement(Popup, { trigger: React.createElement("div", { className: "language" },
                    React.createElement(GenericIcon, { icon: githubRepoMetaInfo.languageLogo, "data-testid": `${testId}-github-repo-language-logo`, size: "micro", transparent: true, inline: true, square: true, spaced: "right", floated: "left" })), content: githubRepoMetaInfo.language, inverted: true })),
            React.createElement(Label.Group, { size: "mini", "data-testid": `${testId}-github-repo-stats` },
                React.createElement(Label, { "data-testid": `${testId}-github-repo-stars` },
                    React.createElement(Icon, { name: "star" }),
                    " ",
                    githubRepoMetaInfo.stars),
                React.createElement(Label, { "data-testid": `${testId}-github-repo-forks` },
                    React.createElement(Icon, { name: "fork" }),
                    " ",
                    githubRepoMetaInfo.forks),
                React.createElement(Label, { "data-testid": `${testId}-github-repo-watchers` },
                    React.createElement(Icon, { name: "eye" }),
                    " ",
                    githubRepoMetaInfo.watchers))))));
};
/**
 * Prop types for the info card component.
 */
InfoCard.defaultProps = {
    "data-testid": "info-card",
    fluidImageSize: "tiny",
    imageSize: "mini",
    inline: false,
    onClick: () => null,
    textAlign: "center"
};
//# sourceMappingURL=info-card.js.map