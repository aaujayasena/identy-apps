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
import _ from "lodash";
import React from "react";
import { Card, Divider } from "semantic-ui-react";
import { SelectionCard } from "../card";
import { Heading } from "../typography";
/**
 * Statistics quick links widget.
 *
 * @param {StatsQuickLinksWidgetPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const StatsQuickLinksWidget = (props) => {
    const { heading, headingAs, subHeading, subHeadingAs, links, ["data-testid"]: testId } = props;
    return (React.createElement("div", { className: "stats-quick-links-widget" },
        heading && (React.createElement(Heading, { className: "stats-quick-links-widget-heading inline ellipsis", as: headingAs, "data-testid": `${testId}-heading`, compact: true }, heading)),
        subHeading && (React.createElement(Heading, { className: "stats-quick-links-widget-sub-heading", "data-testid": `${testId}-sub-heading`, as: subHeadingAs, subHeading: true, ellipsis: true }, subHeading)),
        (heading || subHeading) && React.createElement(Divider, { hidden: true }),
        (links && links instanceof Array && links.length > 0)
            ? (React.createElement(Card.Group, { itemsPerRow: 3, stackable: true, doubling: true, className: "stats-quick-links-widget-cards" }, links.map((link, index) => {
                const { image, header, description } = link, linksRest = __rest(link, ["image", "header", "description"]);
                return (React.createElement(SelectionCard, Object.assign({ key: index, image: image, imageOptions: {
                        fill: "default"
                    }, size: "auto", header: header, imageSize: "mini", contentTopBorder: false, description: description, "data-testid": `${testId}-${_.kebabCase(header)}-card`, multilineDescription: true, showTooltips: true }, linksRest)));
            })))
            : null));
};
/**
 * Default props for the component.
 */
StatsQuickLinksWidget.defaultProps = {
    "data-testid": "stats-quick-links-widget",
    headingAs: "h3",
    subHeadingAs: "h5"
};
//# sourceMappingURL=stats-quick-links-widget.js.map