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
import { Divider, Grid, GridColumn, Responsive } from "semantic-ui-react";
import { StatCountCard } from "../card";
import { Heading } from "../typography";
/**
 * Statistics overview widget.
 *
 * @param {StatsOverviewWidgetPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const StatsOverviewWidget = (props) => {
    const { heading, headingAs, maxRowCount, subHeading, subHeadingAs, stats, ["data-testid"]: testId } = props;
    const resolveStatCountCard = (stat) => {
        const { icon, label, value, iconOptions, statOptions } = stat, statRest = __rest(stat, ["icon", "label", "value", "iconOptions", "statOptions"]);
        return (React.createElement(StatCountCard, Object.assign({ fluid: true, icon: icon, label: label, value: value, textAlign: "right", statOptions: Object.assign({ size: "small", textAlign: "right" }, statOptions), iconOptions: Object.assign({ background: "default", fill: "default", shape: "circular" }, iconOptions) }, statRest, { "data-testid": `${testId}-${_.kebabCase(label)}-card` })));
    };
    return (React.createElement(React.Fragment, null,
        heading && (React.createElement(Heading, { className: "stats-overview-widget-heading inline ellipsis", as: headingAs, "data-testid": `${testId}-heading`, compact: true }, heading)),
        subHeading && (React.createElement(Heading, { className: "stats-overview-widget-sub-heading", "data-testid": `${testId}-sub-heading`, as: subHeadingAs, subHeading: true, ellipsis: true }, subHeading)),
        (heading || subHeading) && React.createElement(Divider, { hidden: true }),
        (stats && stats instanceof Array && stats.length > 0)
            ? (React.createElement(Grid, null,
                React.createElement(Grid.Row, { columns: ((stats.length > maxRowCount) ? maxRowCount : stats.length), className: ((stats.length > maxRowCount) ? "column-count-exceeded" : "") }, stats.map((stat, index) => (React.createElement(React.Fragment, null,
                    React.createElement(Responsive, { key: index, as: GridColumn, width: 16, className: "with-bottom-gutters", maxWidth: Responsive.onlyTablet.maxWidth }, resolveStatCountCard(stat)),
                    React.createElement(Responsive, { key: index, as: GridColumn, minWidth: Responsive.onlyTablet.maxWidth }, resolveStatCountCard(stat))))))))
            : null));
};
/**
 * Default props for the component.
 */
StatsOverviewWidget.defaultProps = {
    "data-testid": "stats-overview-widget",
    headingAs: "h3",
    maxRowCount: 4,
    subHeadingAs: "h5"
};
//# sourceMappingURL=stats-overview-widget.js.map