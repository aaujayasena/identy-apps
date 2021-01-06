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
import { getGravatarImage } from "@wso2is/core/api";
import { ImageUtils, ProfileUtils, URLUtils } from "@wso2is/core/utils";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Card, Checkbox, Dropdown, Form, Grid, Input, Message, Modal } from "semantic-ui-react";
import { UserAvatar } from "../../avatar";
import { LinkButton, PrimaryButton } from "../../button";
import { SelectionCard } from "../../card";
import { ContentLoader } from "../../loader";
import { Hint } from "../../typography";
const GRAVATAR_IMAGE_MIN_SIZE = 80;
const SystemGeneratedAvatars = new Map([
    ["Initials", "system_gen_i_1"]
]);
/**
 * Different Avatar types.
 */
export var AvatarTypes;
(function (AvatarTypes) {
    AvatarTypes["SYSTEM_GENERATED"] = "SYSTEM_GENERATED";
    AvatarTypes["GRAVATAR"] = "GRAVATAR";
    AvatarTypes["URL"] = "URL";
})(AvatarTypes || (AvatarTypes = {}));
/**
 * Edit Avatar modal.
 *
 * @param {EditAvatarModalPropsInterface} props - Props injected to the component.
 * @return {React.ReactElement}
 */
export const EditAvatarModal = (props) => {
    const { cancelButtonText, className, emails, heading, imageUrl, name, onCancel, onSubmit, submitButtonText, ["data-testid"]: testId, translations } = props, rest = __rest(props, ["cancelButtonText", "className", "emails", "heading", "imageUrl", "name", "onCancel", "onSubmit", "submitButtonText", "data-testid", "translations"]);
    const [selectedGravatarEmail, setSelectedGravatarEmail] = useState(undefined);
    const [selectedGravatarSize, setSelectedGravatarSize] = useState(undefined);
    const [isInitialGravatarRequestLoading, setIsInitialGravatarRequestLoading] = useState(false);
    const [isGravatarQualified, setIsGravatarQualified] = useState(undefined);
    const [gravatarURLs, setGravatarURLs] = useState(undefined);
    const [selectedAvatarType, setSelectedAvatarType] = useState(undefined);
    const [hostedURL, setHostedURL] = useState(undefined);
    const [hostedURLError, setHostedURLError] = useState(undefined);
    const [outputURL, setOutputURL] = useState(undefined);
    const [isHostedURLValid, setIsHostedURLValid] = useState(undefined);
    const [isHostedURLValidationRequestLoading, setIsHostedURLValidationRequestLoading] = useState(false);
    const classes = classNames("edit-avatar-modal", className);
    /**
     * Triggered on component mount.
     */
    useEffect(() => {
        setSelectedGravatarSize(GRAVATAR_IMAGE_MIN_SIZE);
    }, []);
    /**
     * Init selected gravatar email once `emails` prop is valid.
     */
    useEffect(() => {
        if (!emails || !Array.isArray(emails) || emails.length < 1) {
            return;
        }
        setSelectedGravatarEmail(emails[0]);
    }, [emails]);
    /**
     * Triggered when selected gravatar email changes.
     */
    useEffect(() => {
        if (!selectedGravatarEmail) {
            return;
        }
        setIsInitialGravatarRequestLoading(true);
        getGravatarImage(selectedGravatarEmail)
            .then(() => {
            setIsGravatarQualified(true);
        })
            .catch(() => {
            setIsGravatarQualified(false);
        })
            .finally(() => {
            setIsInitialGravatarRequestLoading(false);
        });
    }, [selectedGravatarEmail]);
    /**
     * Triggered when selected gravatar email or `isGravatarQualified` flag chages.
     */
    useEffect(() => {
        if (!selectedGravatarEmail || isGravatarQualified === undefined) {
            return;
        }
        const getURL = (fallback, forceDefault = true) => ProfileUtils.buildGravatarURL(selectedGravatarEmail, selectedGravatarSize, null, fallback, forceDefault);
        const urls = new Map();
        if (isGravatarQualified) {
            urls.set("Gravatar", getURL("default", false));
        }
        urls.set("Retro", getURL("retro"))
            .set("Default", getURL("default"))
            .set("Person", getURL("mp"))
            .set("Identicon", getURL("identicon"))
            .set("Monster", getURL("monsterid"))
            .set("Wavatar", getURL("wavatar"))
            .set("Robot", getURL("robohash"));
        setGravatarURLs(urls);
    }, [selectedGravatarEmail, isGravatarQualified]);
    useEffect(() => {
        if (imageUrl) {
            setHostedURL(imageUrl);
            setSelectedAvatarType(AvatarTypes.URL);
        }
        else {
            setSelectedAvatarType(AvatarTypes.SYSTEM_GENERATED);
        }
    }, [imageUrl]);
    /**
     * Handles selected gravatar email change.
     *
     * @param {React.SyntheticEvent<HTMLElement>} e - Event.
     * @param {DropdownProps} data - Dropdown data.
     */
    const handleGravatarEmailDropdownChange = (e, data) => {
        var _a;
        const { value } = data;
        setSelectedGravatarEmail(value);
        // Once the email selection is changed, switch the selected type to `Gravatar`.
        setSelectedAvatarType(AvatarTypes.GRAVATAR);
        // Set the default option.
        if (gravatarURLs) {
            setOutputURL((_a = gravatarURLs.get("Gravatar")) !== null && _a !== void 0 ? _a : gravatarURLs.get("Retro"));
        }
    };
    /**
     * Render the different gravatar options.
     *
     * @return {ReactElement[]}
     */
    const renderGravatarOptions = () => {
        if (!gravatarURLs) {
            return;
        }
        const elemArray = [];
        for (const [key, value] of gravatarURLs) {
            elemArray.push(React.createElement(SelectionCard, { id: value, size: "x100", header: key, image: React.createElement(UserAvatar, { size: "little", image: value }), selected: outputURL === value, onClick: handleGravatarOptionChange }));
        }
        return elemArray;
    };
    /**
     * Handle selected avatar type change.
     *
     * @param {React.FormEvent<HTMLInputElement>} e - Event.
     * @param {CheckboxProps} data - Checkbox data.
     */
    const handleSelectedAvatarTypeChange = (e, data) => {
        const { value } = data;
        setSelectedAvatarType(value);
        resolveOutputURLsOnAvatarTypeChange(value);
        resolveHostedURLFieldErrors(value, isHostedURLValid);
    };
    /**
     * Resolves the default option when the avatar type changes.
     *
     * @param {AvatarTypes} avatarType - Avatar Type.
     */
    const resolveOutputURLsOnAvatarTypeChange = (avatarType) => {
        var _a;
        if (avatarType === AvatarTypes.SYSTEM_GENERATED) {
            setOutputURL(SystemGeneratedAvatars.get("Initials"));
            return;
        }
        if (avatarType === AvatarTypes.GRAVATAR && gravatarURLs) {
            setOutputURL((_a = gravatarURLs.get("Gravatar")) !== null && _a !== void 0 ? _a : gravatarURLs.get("Retro"));
            return;
        }
        setOutputURL(hostedURL);
    };
    /**
     * Handles gravatar option change,
     *
     * @param {React.MouseEvent<HTMLAnchorElement>} e - Event.
     * @param {CardProps} data - Card data.
     */
    const handleGravatarOptionChange = (e, data) => {
        const { id } = data;
        setOutputURL(id);
        setSelectedAvatarType(AvatarTypes.GRAVATAR);
    };
    /**
     * Handles system generated avatar option change.
     *
     * @param {React.MouseEvent<HTMLAnchorElement>} e - Event.
     * @param {CardProps} data - Card data.
     */
    const handleSystemGeneratedAvatarChange = (e, data) => {
        const { id } = data;
        setOutputURL(id);
        setSelectedAvatarType(AvatarTypes.SYSTEM_GENERATED);
    };
    /**
     * Handle Hosted URL field on change event.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} e - Event.
     * @param {string} value - Input value.
     */
    const handleHostedURLFieldOnChange = (e, { value }) => {
        setHostedURL(value);
        setOutputURL(value);
        validateHostedURL(value);
    };
    /**
     * Validates the Hosted Image URL.
     *
     * @param {string} url - Image URL.
     */
    const validateHostedURL = (url) => {
        const isImageValid = (isValid) => {
            setIsHostedURLValid(isValid);
            resolveHostedURLFieldErrors(selectedAvatarType, isValid);
            setIsHostedURLValidationRequestLoading(false);
        };
        setIsHostedURLValidationRequestLoading(true);
        ImageUtils.isValidImageURL(url, isImageValid);
    };
    /**
     * Handles focus event of hosted URL input field.
     */
    const handleHostedURLFieldOnFocus = () => {
        setSelectedAvatarType(AvatarTypes.URL);
    };
    /**
     * Handles modal submit.
     *
     * @param {React.MouseEvent<HTMLButtonElement>} e - Event.
     */
    const handleModalSubmit = (e) => {
        onSubmit(e, outputURL === SystemGeneratedAvatars.get("Initials") ? "" : outputURL);
    };
    /**
     * Resolves the errors of the hosted image URL field.
     *
     * @param {AvatarTypes} avatarType - Selected avatar type.
     * @param {boolean} isValid - Is avatar valid.
     */
    const resolveHostedURLFieldErrors = (avatarType, isValid) => {
        if (isValid === true) {
            setHostedURLError(null);
            return;
        }
        if (avatarType !== AvatarTypes.URL) {
            setHostedURLError(null);
            return;
        }
        if (avatarType === AvatarTypes.URL && isValid === false) {
            setHostedURLError({
                content: translations.hostedAvatar.input.errors.invalid.content,
                pointing: "above"
            });
            return;
        }
    };
    /**
     * Resolves gravatar options validation message.
     * @return {React.ReactElement}
     */
    const resolveGravatarOptionsMessage = () => {
        if (isInitialGravatarRequestLoading || isGravatarQualified) {
            return null;
        }
        return (React.createElement(Message, { warning: true, visible: true, size: "tiny", header: translations.gravatar.errors.noAssociation.header, content: translations.gravatar.errors.noAssociation.content }));
    };
    /**
     * Resolves hosted URL validation message.
     * @return {React.ReactElement}
     */
    const resolveHostedURLMessage = () => {
        if (isHostedURLValidationRequestLoading || hostedURLError || !hostedURL) {
            return null;
        }
        if (URLUtils.isHttpUrl(hostedURL)) {
            return (React.createElement(Message, { warning: true, visible: true, size: "tiny", header: translations.hostedAvatar.input.errors.http.header, content: translations.hostedAvatar.input.errors.http.content }));
        }
        if (URLUtils.isDataUrl(hostedURL)) {
            return (React.createElement(Message, { warning: true, visible: true, size: "tiny", header: translations.hostedAvatar.input.warnings.dataURL.header, content: translations.hostedAvatar.input.warnings.dataURL.content }));
        }
        return null;
    };
    return (React.createElement(Modal, Object.assign({ "data-testid": testId, className: classes, closeOnDimmerClick: false }, rest),
        React.createElement(Modal.Header, null, heading),
        React.createElement(Modal.Content, null,
            React.createElement(Form, null,
                React.createElement(Grid, null,
                    name && (React.createElement(Grid.Row, null,
                        React.createElement(Grid.Column, { width: 16 },
                            React.createElement("div", { className: "avatar-from-system" },
                                React.createElement("div", { className: "mb-3" },
                                    React.createElement(Form.Field, null,
                                        React.createElement(Checkbox, { radio: true, value: AvatarTypes.SYSTEM_GENERATED, label: translations.systemGenAvatars.heading, checked: selectedAvatarType === AvatarTypes.SYSTEM_GENERATED, onChange: handleSelectedAvatarTypeChange }))),
                                React.createElement(Card.Group, { className: "avatar-from-system-card-group" },
                                    React.createElement(SelectionCard, { id: SystemGeneratedAvatars.get("Initials"), size: "x100", header: translations.systemGenAvatars.types.initials, image: React.createElement(UserAvatar, { size: "little", name: name }), selected: outputURL === SystemGeneratedAvatars.get("Initials"), onClick: handleSystemGeneratedAvatarChange })))))),
                    selectedGravatarEmail && (React.createElement(Grid.Row, null,
                        React.createElement(Grid.Column, { width: 16 },
                            React.createElement("div", { className: "avatar-from-gravatar" },
                                React.createElement("div", { className: "mb-3" },
                                    React.createElement(Form.Field, null,
                                        React.createElement(Checkbox, { radio: true, value: AvatarTypes.GRAVATAR, label: React.createElement("label", null,
                                                React.createElement(React.Fragment, null,
                                                    React.createElement("span", null, translations.gravatar.heading),
                                                    React.createElement(Dropdown, { text: selectedGravatarEmail, options: emails
                                                            .map((email, index) => {
                                                            return {
                                                                key: index,
                                                                text: email,
                                                                value: email
                                                            };
                                                        }), onChange: handleGravatarEmailDropdownChange }))), checked: selectedAvatarType === AvatarTypes.GRAVATAR, onChange: handleSelectedAvatarTypeChange }))),
                                !isInitialGravatarRequestLoading
                                    ? (React.createElement(React.Fragment, null,
                                        resolveGravatarOptionsMessage(),
                                        React.createElement(Card.Group, { className: "avatar-from-gravatar-card-group" }, renderGravatarOptions())))
                                    : (React.createElement("div", { className: "avatar-types-loader-container" },
                                        React.createElement(ContentLoader, null))))))),
                    React.createElement(Grid.Row, { className: "pb-0" },
                        React.createElement(Grid.Column, { width: 16 },
                            React.createElement("div", { className: "avatar-from-url-label" },
                                React.createElement(Form.Field, null,
                                    React.createElement(Checkbox, { radio: true, value: AvatarTypes.URL, label: translations.hostedAvatar.heading, checked: selectedAvatarType === AvatarTypes.URL, onChange: handleSelectedAvatarTypeChange })),
                                resolveHostedURLMessage()))),
                    React.createElement(Grid.Row, null,
                        React.createElement(Grid.Column, { computer: 10, tablet: 10, mobile: 16 },
                            React.createElement("div", { className: "avatar-from-url-field" },
                                React.createElement(Form.Field, { fluid: true, className: "hosted-url-input", control: Input, placeholder: translations.hostedAvatar.input.placeholder, onFocus: handleHostedURLFieldOnFocus, onChange: handleHostedURLFieldOnChange, error: hostedURLError, loading: isHostedURLValidationRequestLoading, value: hostedURL }),
                                hostedURL && isHostedURLValid && (React.createElement(UserAvatar, { spaced: "left", size: "mini", isLoading: isHostedURLValidationRequestLoading, image: hostedURL }))),
                            React.createElement(Hint, null, translations.hostedAvatar.input.hint)))))),
        React.createElement(Modal.Actions, null,
            React.createElement(LinkButton, { onClick: onCancel }, cancelButtonText),
            React.createElement(PrimaryButton, { disabled: isInitialGravatarRequestLoading
                    || isHostedURLValidationRequestLoading
                    || !outputURL
                    || (selectedAvatarType === AvatarTypes.URL && !isHostedURLValid)
                    || (selectedAvatarType === AvatarTypes.URL && hostedURL === imageUrl), onClick: handleModalSubmit }, submitButtonText))));
};
/**
 * Default props for the component.
 */
EditAvatarModal.defaultProps = {
    cancelButtonText: "Cancel",
    "data-testid": "edit-avatar-modal",
    dimmer: "blurring",
    heading: "Update profile picture",
    submitButtonText: "Save",
    translations: {
        gravatar: {
            errors: {
                noAssociation: {
                    content: "It seems like the selected email is not registered on Gravatar. Sign up for a " +
                        "Gravatar account by visiting Gravatar official website or use one of the following.",
                    header: "No matching Gravatar image found!"
                }
            },
            heading: "Gravatar based on "
        },
        hostedAvatar: {
            heading: "Hosted Image",
            input: {
                errors: {
                    http: {
                        content: "The selected URL points to an insecure image served over HTTP. " +
                            "Please proceed with caution.",
                        header: "Insecure Content!"
                    },
                    invalid: {
                        content: "Please enter a valid image URL",
                        pointing: "above"
                    }
                },
                hint: "Enter a valid image URL which is hosted on a third party location.",
                placeholder: "Enter URL for the image.",
                warnings: {
                    dataURL: {
                        content: "Using Data URLs with large character count might result in database issues. " +
                            "Proceed with caution.",
                        header: "Double check the entered Data URL!"
                    }
                }
            }
        },
        systemGenAvatars: {
            heading: "System generated avatar",
            types: {
                initials: "Initials"
            }
        }
    }
};
//# sourceMappingURL=edit-avatar-modal.js.map