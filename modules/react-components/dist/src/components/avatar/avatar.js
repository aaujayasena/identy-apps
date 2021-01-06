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
import { ImageUtils } from "@wso2is/core/utils";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Image, Placeholder } from "semantic-ui-react";
import { ReactComponent as CameraIcon } from "../../assets/images/icons/camera-icon.svg";
import { GenericIcon } from "../icon";
const AVATAR_MODULE_CSS_CLASS = "ui-avatar";
/**
 * Avatar component.
 *
 * @param {AvatarPropsInterface} props - Props passed in to the Avatar component.
 *
 * @return {React.ReactElement}
 */
export const Avatar = (props) => {
    const { avatar, avatarInitialsLimit, children, className, defaultIcon, editable, editIcon, editIconSize, image, initialsColor, inline, isLoading, label, name, onEditIconClick, onClick, onMouseOver, onMouseOut, overflow, relaxed, rounded, shape, size, spaced, transparent, width, withBackgroundImage, ["data-testid"]: testId } = props, rest = __rest(props, ["avatar", "avatarInitialsLimit", "children", "className", "defaultIcon", "editable", "editIcon", "editIconSize", "image", "initialsColor", "inline", "isLoading", "label", "name", "onEditIconClick", "onClick", "onMouseOver", "onMouseOut", "overflow", "relaxed", "rounded", "shape", "size", "spaced", "transparent", "width", "withBackgroundImage", "data-testid"]);
    const [isImageValidUrl, setIsImageValidUrl] = useState(false);
    const relaxLevel = (relaxed && relaxed === true) ? "" : relaxed;
    const wrapperClasses = classNames(`${AVATAR_MODULE_CSS_CLASS}-wrapper`, {
        inline
    }, className);
    const containerClasses = classNames(`${AVATAR_MODULE_CSS_CLASS}-container`, {
        [shape]: shape
    });
    const imgElementClasses = classNames(AVATAR_MODULE_CSS_CLASS, {
        "hoverable": onClick,
        [`initials-color-${initialsColor}`]: initialsColor,
        relaxed,
        rounded,
        [`${size}`]: size,
        [`spaced-${spaced}`]: spaced,
        [shape]: shape,
        transparent,
        [`${relaxLevel}`]: relaxLevel,
        "with-background-image": withBackgroundImage,
        [`overflow-${overflow}`]: overflow
    });
    const innerImageClasses = classNames("inner-image", {
        [`width-${width}`]: width
    });
    /**
     * Check if `image` is a valid image URL.
     */
    useEffect(() => {
        if (image) {
            if (React.isValidElement(image)) {
                setIsImageValidUrl(false);
            }
            else {
                ImageUtils.isValidImageURL(image, (isValid) => {
                    setIsImageValidUrl(isValid);
                });
            }
        }
    }, [image]);
    // If loading, show the placeholder.
    if (isLoading) {
        return (React.createElement(Image, { className: imgElementClasses, circular: shape === "circular", "data-testid": `${testId}-loading` },
            React.createElement(Placeholder, { "data-testid": `${testId}-loading-placeholder` },
                React.createElement(Placeholder.Image, { square: true }))));
    }
    /**
     * Generates the initials for the avatar. If the name
     * contains two or more words, two letter initial will
     * be generated using the first two words of the name.
     * i.e For the name "Brion Silva", "BS" will be generated.
     * If the name only has one word, then only a single initial
     * will be generated. i.e For "Brion", "B" will be generated.
     *
     * @return {string}
     */
    const generateInitials = () => {
        const nameParts = name.split(" ");
        if (avatarInitialsLimit === 2 && nameParts.length >= 2) {
            return (nameParts[0].charAt(0) + nameParts[1].charAt(0)).toUpperCase();
        }
        return name.charAt(0).toUpperCase();
    };
    /**
     * Renders a floating edit icon.
     * @return {ReactElement}
     */
    const renderEditBubble = () => (editable && (React.createElement("div", { className: "edit-icon-container" },
        React.createElement(GenericIcon, { link: true, inline: true, hoverable: true, shape: "circular", fill: "default", icon: editIcon !== null && editIcon !== void 0 ? editIcon : CameraIcon, size: editIconSize, onClick: onEditIconClick !== null && onEditIconClick !== void 0 ? onEditIconClick : onClick }))));
    /**
     * Renders a floating custom label.
     * @return {React.ReactElement}
     */
    const renderCustomLabel = () => (label && (React.createElement("div", { className: "custom-label" },
        React.createElement(Image, { avatar: true, circular: true, size: "mini", src: label }))));
    if (React.isValidElement(image)) {
        return (React.createElement("div", { className: wrapperClasses },
            React.createElement("div", { className: containerClasses },
                React.createElement(Image, Object.assign({ className: imgElementClasses, circular: shape === "circular", onClick: onClick, onMouseOver: onMouseOver, onMouseOut: onMouseOut, "data-testid": testId }, rest),
                    React.createElement("div", { className: "inner-content", "data-testid": `${testId}-inner-content` }, image)),
                renderEditBubble())));
    }
    if (image && isImageValidUrl) {
        return (React.createElement("div", { className: wrapperClasses },
            React.createElement("div", { className: containerClasses },
                renderCustomLabel(),
                React.createElement(Image, Object.assign({ className: imgElementClasses, circular: shape === "circular", onClick: onClick, onMouseOver: onMouseOver, onMouseOut: onMouseOut, "data-testid": testId }, rest),
                    React.createElement("div", { className: "inner-content", "data-testid": `${testId}-inner-content` },
                        children,
                        React.createElement("img", { className: innerImageClasses, alt: "avatar", src: image }))),
                renderEditBubble())));
    }
    if (avatar && name) {
        return (React.createElement("div", { className: wrapperClasses },
            React.createElement("div", { className: containerClasses },
                React.createElement(Image, Object.assign({ centered: true, className: imgElementClasses, verticalAlign: "middle", circular: shape === "circular", onClick: onClick, onMouseOver: onMouseOver, onMouseOut: onMouseOut, "data-testid": testId }, rest),
                    children,
                    React.createElement("span", { className: "initials", "data-testid": `${testId}-initials` }, generateInitials())),
                renderEditBubble())));
    }
    return (React.createElement("div", { className: wrapperClasses },
        React.createElement("div", { className: containerClasses },
            React.createElement(Image, Object.assign({ centered: true, className: imgElementClasses, verticalAlign: "middle", circular: shape === "circular", onClick: onClick, onMouseOver: onMouseOver, onMouseOut: onMouseOut, "data-testid": testId }, rest),
                React.createElement("div", { className: "content-wrapper", "data-testid": `${testId}-image-content-wrapper` },
                    children,
                    React.createElement("img", { className: innerImageClasses, alt: "avatar", src: defaultIcon, "data-testid": `${testId}-image` }))),
            renderEditBubble())));
};
/**
 * Default prop types for the Avatar component.
 */
Avatar.defaultProps = {
    avatar: false,
    avatarInitialsLimit: 1,
    bordered: true,
    className: "",
    "data-testid": "avatar",
    editIconSize: "micro",
    initialsColor: "white",
    inline: true,
    isLoading: false,
    label: null,
    onClick: null,
    onMouseOut: null,
    onMouseOver: null,
    relaxed: false,
    shape: "circular",
    size: "mini",
    spaced: null,
    style: {},
    transparent: false
};
//# sourceMappingURL=avatar.js.map