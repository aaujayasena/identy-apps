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
import classNames from "classnames";
import React from "react";
import { Avatar } from "./avatar";
import OrangeAppIconBackground from "../../assets/images/app-icon-background.png";
import CodeIcon from "../../assets/images/code-icon.svg";
/**
 * App Avatar component.
 *
 * @param {AvatarPropsInterface} props - Props injected in to the app avatar component.
 *
 * @return {React.ReactElement}
 */
export const AppAvatar = (props) => {
    const { image, children, className, name, onCard, ["data-testid"]: testId } = props, rest = __rest(props, ["image", "children", "className", "name", "onCard", "data-testid"]);
    const appAvatarClassNames = classNames(className);
    if (image) {
        return (React.createElement(Avatar, Object.assign({ avatar: true, image: image, bordered: false, initialsColor: onCard ? "primary" : "white", withBackgroundImage: !onCard, "data-testid": testId }, rest), children));
    }
    return (React.createElement(Avatar, Object.assign({ avatar: true, bordered: true, className: appAvatarClassNames, style: onCard ? {} : { backgroundImage: `url(${OrangeAppIconBackground})` }, name: name, initialsColor: onCard ? "primary" : "white", withBackgroundImage: !onCard, "data-testid": testId }, rest), children));
};
/**
 * Default proptypes for the App avatar component.
 */
AppAvatar.defaultProps = {
    "data-testid": "app-avatar",
    defaultIcon: CodeIcon,
    image: null,
    name: null,
    onCard: false,
    overflow: "hidden",
    rounded: true,
    shape: "square",
    width: "full"
};
//# sourceMappingURL=app-avatar.js.map