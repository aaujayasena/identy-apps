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
import { Divider, Grid, Header, Icon, Placeholder } from "semantic-ui-react";
import { GenericIcon } from "../icon";
/**
 * Page header component.
 *
 * @param {PageHeaderPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const PageHeader = (props) => {
    const { action, actionColumnWidth, backButton, bottomMargin, className, description, headingColumnWidth, image, isLoading, showBottomDivider, title, titleAs, titleTextAlign, ["data-testid"]: testId } = props;
    const wrapperClasses = classNames("page-header-wrapper", {
        ["with-image"]: image
    }, className);
    const innerClasses = classNames("page-header-inner", {
        ["with-image"]: image
    });
    const backButtonClasses = classNames("back-button", {
        ["display-flex"]: action,
        "fluid": isLoading
    });
    const headingContent = (React.createElement("div", { className: innerClasses },
        image && (React.createElement(GenericIcon, { icon: isLoading ?
                (React.createElement("div", { className: "fluid" },
                    React.createElement(Placeholder, { style: { height: 100, width: 100 } },
                        React.createElement(Placeholder.Image, { square: true }))))
                : image, size: "tiny", transparent: true, spaced: "right", "data-testid": `${testId}-image` })),
        isLoading
            ? (React.createElement(Header, { className: "page-header ellipsis", as: titleAs, textAlign: titleTextAlign, "data-testid": `${testId}-text-wrapper-loading` },
                React.createElement("div", { style: { width: "250px" } },
                    React.createElement(Placeholder, { fluid: true },
                        React.createElement(Placeholder.Header, null,
                            React.createElement(Placeholder.Line, null),
                            description && React.createElement(Placeholder.Line, null))))))
            : (React.createElement(Header, { className: "page-header ellipsis", as: titleAs, textAlign: titleTextAlign, "data-testid": `${testId}-text-wrapper` },
                React.createElement("span", { "data-testid": `${testId}-title` }, title && title),
                description && (React.createElement(Header.Subheader, { className: "sub-header ellipsis", "data-testid": `${testId}-sub-title` }, description))))));
    return ((title || description)
        ? (React.createElement("div", { className: wrapperClasses, "data-testid": testId },
            backButton && backButton.text && (isLoading
                ? (React.createElement("div", { className: backButtonClasses },
                    React.createElement(Placeholder, null,
                        React.createElement(Placeholder.Line, { length: "short" }))))
                : (React.createElement("div", { "data-testid": backButton["data-testid"], className: backButtonClasses, onClick: backButton.onClick },
                    React.createElement(Icon, { name: "arrow left" }),
                    backButton.text))),
            action
                ? (React.createElement(Grid, null,
                    React.createElement(Grid.Row, null,
                        React.createElement(Grid.Column, { computer: headingColumnWidth }, headingContent),
                        React.createElement(Grid.Column, { computer: actionColumnWidth }, action && React.createElement("div", { className: "floated right action" }, action)))))
                : headingContent,
            bottomMargin && React.createElement(Divider, { hidden: true }),
            showBottomDivider && React.createElement(Divider, null)))
        : null);
};
/**
 * Default proptypes for the page header component.
 */
PageHeader.defaultProps = {
    actionColumnWidth: 6,
    bottomMargin: true,
    "data-testid": "page-header",
    headingColumnWidth: 10,
    showBottomDivider: false,
    titleAs: "h1"
};
//# sourceMappingURL=page-header.js.map