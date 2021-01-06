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
import React, { useEffect, useState } from "react";
/**
 * Generic component to render icons.
 *
 * @param {GenericIconProps} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const GenericIcon = (props) => {
    const { as, background, bordered, className, colored, defaultIcon, disabled, fill, floated, hoverable, hoverType, icon: Icon, inline, link, linkType, onClick, relaxed, rounded, shape, size, spaced, style, square, transparent, twoTone, verticalAlign, ["data-testid"]: testId } = props;
    const [renderedIcon, setRenderedIcon] = useState(null);
    const relaxLevel = (relaxed && relaxed === true) ? "" : relaxed;
    const classes = classNames({
        [typeof background === "boolean" ? "background-transparent" : `background-${background}`]: background,
        "bordered": bordered,
        "colored": colored,
        "default": defaultIcon,
        "disabled": disabled || Icon === null,
        [typeof fill === "boolean" ? "fill-default" : `fill-${fill}`]: fill,
        [`floated-${floated}`]: floated,
        hoverable,
        [`hover-${hoverType}`]: hoverType,
        "inline": inline,
        link,
        [`link-${linkType}`]: linkType,
        "relaxed": relaxed,
        "rounded": rounded,
        [(size === "default") ? "default-size" : size]: size,
        [shape]: shape,
        [`spaced-${spaced}`]: spaced,
        "square": square,
        "transparent": transparent,
        "two-tone": twoTone,
        [`${relaxLevel}`]: relaxLevel,
        [`vertical-aligned-${verticalAlign}`]: verticalAlign
    }, className);
    /**
     * Construct the content as soon as the Icon prop is available.
     */
    useEffect(() => {
        constructContent();
    }, [Icon]);
    /**
     * A default icon if the {@code icon:Icon} null
     * or empty. For usage {@see constructContent}
     */
    const defaultIconPlaceholder = () => {
        return React.createElement(React.Fragment, null, "");
    };
    /**
     * The icon click action handler. It first checks whether the icon
     * is disabled or not. And if disabled is {@code true} it will never
     * fire the provided {@code onClick} handler.
     *
     * @param event React.MouseEvent<HTMLDivElement>
     */
    const onIconClickHandler = (event) => {
        if (disabled) {
            return;
        }
        onClick(event);
    };
    /**
     * Constructs the icon. This function is a impure function which depends
     * on {@code Icon} value above. The {@code Icon} can be one of type from below list: -
     *
     * 1. {@link SVGElement}
     * 2. ReactComponent
     * 3. {@link React.FunctionComponent}
     * 4. {@link React.Component}
     * 5. {@link string} URL or BASE-64 encoded.
     */
    const constructContent = () => {
        // If there's no icon passed to this via the parent
        // then it will return a default icon.
        if (!Icon) {
            setRenderedIcon(defaultIconPlaceholder());
            return;
        }
        const setIcon = (icon) => {
            if (icon.ReactComponent) {
                setRenderedIcon(React.createElement(icon.ReactComponent, null));
                return;
            }
            else if (icon.default) {
                setRenderedIcon(renderDefaultIcon(icon.default));
                return;
            }
            setRenderedIcon(defaultIconPlaceholder());
        };
        try {
            if (Icon instanceof Promise) {
                Icon
                    .then((response) => {
                    if (!as) {
                        setIcon(response);
                        return;
                    }
                    if (as === "svg") {
                        setIcon(response);
                        return;
                    }
                    else if (as === "data-url" && response.default) {
                        setRenderedIcon(renderDefaultIcon(response.default));
                        return;
                    }
                    setRenderedIcon(defaultIconPlaceholder());
                })
                    .catch(() => {
                    setRenderedIcon(defaultIconPlaceholder());
                });
                return;
            }
            // Check if the icon is an SVG element
            if (Icon instanceof SVGElement) {
                setRenderedIcon(Icon);
                return;
            }
            // Check if the icon is a module and has `ReactComponent` property.
            // Important when used with SVG's imported with `@svgr/webpack`.
            if (Object.prototype.hasOwnProperty.call(Icon, "ReactComponent")
                && typeof Icon.ReactComponent === "function") {
                setRenderedIcon(React.createElement(Icon.ReactComponent, null));
                return;
            }
            // Check is icon is a component.
            if (typeof Icon === "function") {
                setRenderedIcon(React.createElement(Icon, null));
                return;
            }
            // Check is icon is a component.
            if (typeof Icon === "object") {
                setRenderedIcon(Icon);
                return;
            }
            // Check if icon passed in is a string. Can be a URL or a base64 encoded.
            if (typeof Icon === "string") {
                setRenderedIcon(renderDefaultIcon(Icon));
                return;
            }
        }
        catch (e) {
            return setRenderedIcon(defaultIconPlaceholder());
        }
    };
    /**
     * Renders the default icon element.
     *
     * @param {string} icon - Data URL.
     * @return {React.ReactElement}
     */
    const renderDefaultIcon = (icon) => (React.createElement("img", { src: icon, className: "icon", alt: "icon" }));
    return (React.createElement("div", { className: `theme-icon ${classes}`, style: style, onClick: onIconClickHandler, "data-testid": testId }, renderedIcon));
};
/**
 * Default proptypes for the Generic Icon component.
 */
GenericIcon.defaultProps = {
    as: "svg",
    background: false,
    bordered: false,
    className: "",
    "data-testid": "generic-icon",
    defaultIcon: false,
    disabled: false,
    floated: null,
    hoverType: "rounded",
    inline: false,
    relaxed: false,
    rounded: false,
    shape: "square",
    size: "auto",
    spaced: null,
    square: false,
    style: {},
    transparent: false,
    twoTone: false
};
//# sourceMappingURL=generic-icon.js.map