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
import { UIConstants } from "@wso2is/core/constants";
import { resolveUserDisplayName } from "@wso2is/core/helpers";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Popup } from "semantic-ui-react";
import { Avatar } from "./avatar";
import GravatarLogo from "../../assets/images/gravatar-logo.png";
import DummyUser from "../../assets/images/user.png";
/**
 * User Avatar component.
 *
 * @param {UserAvatarPropsInterface} props - Props injected in to the user avatar component.
 *
 * @return {React.ReactElement}
 */
export const UserAvatar = (props) => {
    const { authState, children, className, gravatarInfoPopoverText, name, image, profileInfo, showGravatarLabel, ["data-testid"]: testId } = props, rest = __rest(props, ["authState", "children", "className", "gravatarInfoPopoverText", "name", "image", "profileInfo", "showGravatarLabel", "data-testid"]);
    const classes = classNames(className);
    const [userImage, setUserImage] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    // Check if the image is a promise, and resolve.
    useEffect(() => {
        if (image instanceof Promise) {
            image
                .then((response) => {
                setUserImage(response);
            })
                .catch(() => {
                setUserImage(null);
            });
        }
    }, [image]);
    /**
     * Checks if the image is from `Gravatar`.
     *
     * @return {boolean}
     */
    const isGravatarURL = () => {
        return (userImage && userImage.includes(UIConstants.GRAVATAR_URL))
            || (profileInfo && profileInfo.userImage
                && profileInfo.userImage.includes(UIConstants.GRAVATAR_URL))
            || (profileInfo && profileInfo.profileUrl
                && profileInfo.profileUrl.includes(UIConstants.GRAVATAR_URL));
    };
    /**
     * Resolves the top label image.
     *
     * @return {string}
     */
    const resolveTopLabel = () => {
        if (isGravatarURL()) {
            return GravatarLogo;
        }
        return null;
    };
    /**
     * Resolves the user image for the avatar.
     * @return {any}
     */
    const resolveAvatarImage = () => {
        // If an image is directly passed, give prominence.
        if (image && !(image instanceof Promise)) {
            return image;
        }
        if (profileInfo) {
            if (profileInfo.profileUrl) {
                return profileInfo.profileUrl;
            }
            else if (profileInfo.userImage) {
                return profileInfo.userImage;
            }
        }
        return userImage;
    };
    /**
     * Handles the mouse over event.
     */
    const handleOnMouseOver = () => {
        setShowPopup(true);
    };
    /**
     * Handles the mouse out event.
     */
    const handleOnMouseOut = () => {
        setShowPopup(false);
    };
    return (React.createElement(Popup, { content: gravatarInfoPopoverText, position: "top center", size: "mini", disabled: !(showGravatarLabel && isGravatarURL()), inverted: true, hoverable: true, open: showPopup, trigger: (React.createElement(Avatar, Object.assign({ avatar: true, shape: "circular", bordered: false, className: classes, image: resolveAvatarImage(), label: showGravatarLabel ? resolveTopLabel() : null, name: profileInfo ? resolveUserDisplayName(profileInfo, authState) : name || "", onMouseOver: handleOnMouseOver, onMouseOut: handleOnMouseOut, "data-testid": testId }, rest), children)), "data-testid": `${testId}-gravatar-disclaimer-popup` }));
};
/**
 * Default prop types for the User avatar component.
 */
UserAvatar.defaultProps = {
    authState: null,
    "data-testid": "user-avatar",
    defaultIcon: DummyUser,
    gravatarInfoPopoverText: null,
    name: null,
    profileInfo: null,
    showGravatarLabel: false
};
//# sourceMappingURL=user-avatar.js.map