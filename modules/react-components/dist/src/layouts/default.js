/**
 * Copyright (c) 2019, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
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
import { Container, Responsive } from "semantic-ui-react";
import { BaseLayout } from "./base";
/**
 * Default layout.
 *
 * @param {React.PropsWithChildren<DefaultLayoutPropsInterface>} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const DefaultLayout = (props) => {
    const { alert, children, className, desktopContentTopSpacing, footer, footerHeight, fluid, header, headerHeight, onLayoutOnUpdate, topLoadingBar } = props;
    const classes = classNames("layout", "default-layout", {
        ["fluid-default-layout"]: fluid
    }, className);
    const mainLayoutStyles = {
        paddingBottom: `${footerHeight}px`,
        paddingTop: `${headerHeight}px`
    };
    const mainContentStyle = {
        minHeight: `calc(100vh - ${headerHeight + footerHeight}px`,
        paddingTop: `${desktopContentTopSpacing}px`
    };
    return (React.createElement(BaseLayout, { alert: alert, topLoadingBar: topLoadingBar },
        React.createElement(Responsive, { as: Container, fluid: fluid, className: classes, fireOnMount: true, onUpdate: onLayoutOnUpdate },
            header,
            React.createElement("div", { style: mainLayoutStyles, className: "layout-content-wrapper" },
                React.createElement("div", { style: mainContentStyle, className: "layout-content" }, children)),
            footer)));
};
/**
 * Default props for the default layout.
 */
DefaultLayout.defaultProps = {
    fluid: true
};
//# sourceMappingURL=default.js.map