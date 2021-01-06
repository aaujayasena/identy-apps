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
import React from "react";
import { Header } from "semantic-ui-react";
import { GenericIcon } from "../icon";
/**
 * Placeholder component.
 *
 * @param {PlaceholderProps} props - Props injected in to the placeholder component.
 *
 * @return {React.ReactElement}
 */
export const EmptyPlaceholder = (props) => {
    const { action, image, imageSize, subtitle, title, ["data-testid"]: testId } = props;
    return (React.createElement("div", { className: "empty-placeholder", "data-testid": testId },
        image
            ? (React.createElement("div", { className: "image-container" },
                React.createElement(GenericIcon, { fill: "default", icon: image, size: imageSize, "data-testid": `${testId}-icon`, transparent: true })))
            : null,
        title && React.createElement(Header, { as: "h4", className: "title", "data-testid": `${testId}-header` }, title),
        (subtitle && subtitle.length && subtitle.length > 0)
            ? typeof subtitle !== "string" && subtitle.map((line, index) => (React.createElement("div", { key: index, className: "subtitle", "data-testid": `${testId}-sub-header-line-${index}` }, line)))
            : React.createElement("div", { className: "subtitle", "data-testid": `${testId}-sub-header` }, subtitle),
        action
            ? (React.createElement("div", { className: "action-container", "data-testid": `${testId}-action-container` }, action))
            : null));
};
/**
 * Default proptypes for the empty placeholder component.
 */
EmptyPlaceholder.defaultProps = {
    action: null,
    "data-testid": "empty-placeholder",
    image: null,
    imageSize: "auto"
};
//# sourceMappingURL=empty-placeholder.js.map