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
import { Container, Divider } from "semantic-ui-react";
/**
 * Error layout.
 *
 * @param {React.PropsWithChildren<ErrorLayoutPropsInterface>} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const ErrorLayout = (props) => {
    const { children, className, fluid } = props;
    const classes = classNames("layout", "error-layout", {
        ["fluid-error-layout"]: fluid
    }, className);
    return (React.createElement(Container, { className: classes },
        React.createElement(Divider, { className: "x4", hidden: true }),
        children,
        React.createElement(Divider, { className: "x3", hidden: true })));
};
//# sourceMappingURL=error.js.map