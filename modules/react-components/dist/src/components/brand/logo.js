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
import { GenericIcon } from "../icon";
/**
 * Logo component.
 *
 * @param {LogoPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const Logo = (props) => {
    const { className, image, size, style, ["data-testid"]: testId } = props;
    const classes = classNames(className, "product-logo");
    return (React.createElement(GenericIcon, { icon: image, className: classNames(classes, "product-logo"), size: size, style: style, "data-testid": testId, transparent: true, inline: true }));
};
/**
 * Default props for the logo component.
 */
Logo.defaultProps = {
    "data-testid": "logo",
    size: "auto"
};
//# sourceMappingURL=logo.js.map