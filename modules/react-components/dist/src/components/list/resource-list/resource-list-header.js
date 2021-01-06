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
import { Grid, List } from "semantic-ui-react";
/**
 * Resource list header component.
 *
 * @param {ResourceListHeaderPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const ResourceListHeader = (props) => {
    const { children, className, ["data-testid"]: testId } = props;
    const classes = classNames("resource-list-header", className);
    return (React.createElement(List.Item, { className: classes, "data-testid": testId }, React.Children.count(children) > 0 && (React.createElement(Grid, null,
        React.createElement(Grid.Row, { columns: React.Children.count(children) }, React.Children.map(children, (heading, index) => (React.createElement(React.Fragment, null,
            heading.props.offset && (React.createElement(Grid.Column, { width: heading.props.offset })),
            React.createElement(Grid.Column, { key: index, width: heading.props.width },
                React.createElement(List.Header, { "data-testid": `${testId}-heading` }, heading))))))))));
};
/**
 * Default props for resource list header component.
 */
ResourceListHeader.defaultProps = {
    "data-testid": "resource-list-header"
};
//# sourceMappingURL=resource-list-header.js.map