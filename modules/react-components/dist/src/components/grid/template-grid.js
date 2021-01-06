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
import { ImageUtils, URLUtils } from "@wso2is/core/utils";
import get from "lodash/get";
import take from "lodash/take";
import React, { useEffect, useState } from "react";
import { Card, Grid } from "semantic-ui-react";
import { UserAvatar } from "../avatar";
import { LinkButton } from "../button";
import { SelectionCard, TemplateCard } from "../card";
import { Heading } from "../typography";
/**
 * Initial display limit.
 * TODO: Generate limit dynamically with screen dimensions.
 * @type {number}
 */
const DEFAULT_PAGINATION_LIMIT = 5;
/**
 * Template grid component.
 *
 * @param {TemplateGridPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const TemplateGrid = (props) => {
    const { emptyPlaceholder, heading, onTemplateSelect, paginate, paginationLimit, paginationOptions, showTags, showTagIcon, subHeading, tagsKey, tagsSectionTitle, templates, selectedTemplate, templateIcons, tagsAs, useSelectionCard, onSecondaryTemplateSelect, secondaryTemplates, templateIconOptions, templateIconSize, useNameInitialAsImage, ["data-testid"]: testId } = props;
    const [templateList, setTemplateList] = useState([]);
    const [secondaryTemplateList, setSecondaryTemplateList] = useState([]);
    const [isShowMoreClicked, setIsShowMoreClicked] = useState(false);
    useEffect(() => {
        if (paginate && !isShowMoreClicked) {
            setTemplateList(take(templates, paginationLimit));
            return;
        }
        setTemplateList(templates);
    }, [templates]);
    useEffect(() => {
        if (secondaryTemplates) {
            if (paginate && !isShowMoreClicked) {
                let balanceLimit = (paginationLimit - templates.length);
                balanceLimit = (balanceLimit < 0) ? 0 : balanceLimit;
                setSecondaryTemplateList(take(secondaryTemplates, balanceLimit));
                return;
            }
            setSecondaryTemplateList(secondaryTemplates);
        }
    }, [secondaryTemplates, templates]);
    /**
     * Checks if the template image URL is a valid image URL and if not checks if it's
     * available in the passed in icon set.
     *
     * @param image Input image.
     *
     * @return Predefined image if available. If not, return input parameter.
     */
    const resolveTemplateImage = (image) => {
        var _a;
        if (image) {
            if (typeof image !== "string") {
                return image;
            }
            if ((URLUtils.isHttpsUrl(image) || URLUtils.isHttpUrl(image)) && ImageUtils.isValidImageExtension(image)) {
                return image;
            }
            if (URLUtils.isDataUrl(image)) {
                return image;
            }
            if (!templateIcons) {
                return image;
            }
        }
        const match = Object.keys(templateIcons).find(key => key.toString() === image);
        return match ? templateIcons[match] : (_a = templateIcons["default"]) !== null && _a !== void 0 ? _a : image;
    };
    /**
     * Handles the view more button action.
     */
    const viewMoreTemplates = () => {
        setIsShowMoreClicked(true);
        setTemplateList(templates);
        if (secondaryTemplates) {
            setSecondaryTemplateList(secondaryTemplates);
        }
    };
    /**
     * Handles the view less button action.
     */
    const viewLessTemplates = () => {
        setIsShowMoreClicked(false);
        setTemplateList(take(templates, paginationLimit));
        if (secondaryTemplates) {
            let balanceLimit = (paginationLimit - templates.length);
            balanceLimit = (balanceLimit < 0) ? 0 : balanceLimit;
            setSecondaryTemplateList(take(secondaryTemplates, balanceLimit));
        }
    };
    const resolveCardListing = ((templateList, onClick, useNameImage) => {
        if (templateList.length > 0) {
            return templateList.map((template, index) => (React.createElement(SelectionCard, { key: index, inline: true, id: template.id, header: template.name, image: useNameImage
                    ?
                        React.createElement(UserAvatar, { name: template.name, size: "tiny" })
                    : resolveTemplateImage(template.image), imageOptions: templateIconOptions, onClick: onClick, selected: (selectedTemplate === null || selectedTemplate === void 0 ? void 0 : selectedTemplate.id) === template.id, "data-testid": `${testId}-selection-card` })));
        }
        return null;
    });
    /**
     * Calculate pagination limit exceeded or not
     */
    const paginationLimitExceed = (() => {
        let exceeded = false;
        let length = 0;
        if (secondaryTemplates && secondaryTemplates instanceof Array) {
            length += secondaryTemplates.length;
        }
        if (templates && templates instanceof Array) {
            length += templates.length;
        }
        if (length > paginationLimit) {
            exceeded = true;
        }
        return exceeded;
    });
    return (React.createElement(Grid, { "data-testid": testId },
        (heading || subHeading)
            ? (React.createElement(Grid.Row, { columns: 2 },
                React.createElement(Grid.Column, null,
                    heading && (React.createElement(Heading, { as: "h4", compact: true, "data-testid": `${testId}-heading` }, heading)),
                    subHeading && (React.createElement(Heading, { subHeading: true, ellipsis: true, as: "h6", "data-testid": `${testId}-sub-heading` }, subHeading))),
                paginate && (React.createElement(Grid.Column, { textAlign: "right" }, (paginationLimitExceed())
                    ? (isShowMoreClicked ? (React.createElement(LinkButton, { onClick: viewLessTemplates, "data-testid": `${testId}-show-less-button` }, paginationOptions.showLessButtonLabel)) : (React.createElement(LinkButton, { onClick: viewMoreTemplates, "data-testid": `${testId}-show-more-button` }, paginationOptions.showMoreButtonLabel)))
                    : null))))
            : null,
        React.createElement(Grid.Row, null,
            React.createElement(Grid.Column, null, useSelectionCard
                ?
                    (((templateList && templateList instanceof Array && templateList.length > 0) ||
                        (secondaryTemplateList && secondaryTemplateList instanceof Array
                            && secondaryTemplateList.length > 0))
                        ?
                            React.createElement(React.Fragment, null,
                                resolveCardListing(templateList, onTemplateSelect, false),
                                resolveCardListing(secondaryTemplateList, onSecondaryTemplateSelect, useNameInitialAsImage))
                        : emptyPlaceholder && emptyPlaceholder)
                : ((templateList && templateList instanceof Array && templateList.length > 0)
                    ? React.createElement(Card.Group, null, templateList.map((template, index) => (React.createElement(TemplateCard, { key: index, description: template.description, image: resolveTemplateImage(template.image), imageOptions: templateIconOptions, tagsSectionTitle: tagsSectionTitle, tags: get(template, tagsKey), tagsAs: tagsAs, showTags: showTags, showTagIcon: showTagIcon, name: template.name, id: template.id, onClick: onTemplateSelect, imageSize: templateIconSize, "data-testid": template.id }))))
                    : emptyPlaceholder && emptyPlaceholder)))));
};
/**
 * Default props for template grid component.
 */
TemplateGrid.defaultProps = {
    "data-testid": "template-grid",
    iconSize: "tiny",
    paginate: true,
    paginationLimit: DEFAULT_PAGINATION_LIMIT,
    paginationOptions: {
        showLessButtonLabel: "Show less",
        showMoreButtonLabel: "Show more"
    },
    useSelectionCard: false
};
//# sourceMappingURL=template-grid.js.map