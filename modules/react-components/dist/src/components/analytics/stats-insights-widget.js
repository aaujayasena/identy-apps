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
import _ from "lodash";
import React from "react";
import { Card, Divider } from "semantic-ui-react";
import { LinkButton } from "../button";
import { Heading } from "../typography";
/**
 * Statistics insights preview widget.
 *
 * @param {StatsInsightsWidgetPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const StatsInsightsWidget = (props) => {
    const { children, heading, headingAs, onPrimaryActionClick, primaryAction, showExtraContent, subHeading, subHeadingAs, ["data-testid"]: testId } = props;
    return (React.createElement("div", { className: "stats-insights-widget" },
        heading && (React.createElement(Heading, { className: "stats-insights-widget-heading inline ellipsis", as: headingAs, "data-testid": `${testId}-heading`, compact: true }, heading)),
        subHeading && (React.createElement(Heading, { className: "stats-insights-widget-sub-heading", "data-testid": `${testId}-sub-heading`, as: subHeadingAs, subHeading: true, ellipsis: true }, subHeading)),
        (heading || subHeading) && React.createElement(Divider, { hidden: true }),
        React.createElement(Card, { fluid: true, className: "stats-insights-widget-card basic-card", "data-testid": `${testId}-${_.kebabCase(heading)}-card` },
            React.createElement(Card.Content, { className: `main-content compact ${!showExtraContent ? "hide-extra" : ""} ` }, children),
            showExtraContent && (React.createElement(Card.Content, { extra: true, className: "selection", "data-testid": `${testId}-${_.kebabCase(heading)}-card-action`, onClick: onPrimaryActionClick },
                React.createElement(LinkButton, { compact: true, "data-testid": `${testId}-${_.kebabCase(heading)}-card-action-button` }, primaryAction))))));
};
/**
 * Default props for the component.
 */
StatsInsightsWidget.defaultProps = {
    "data-testid": "stats-insights-widget",
    headingAs: "h3",
    showExtraContent: true,
    subHeadingAs: "h5"
};
//# sourceMappingURL=stats-insights-widget.js.map