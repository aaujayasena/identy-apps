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
import React, { useCallback, useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Button, Grid, Icon, Input, Label, Popup } from "semantic-ui-react";
import { LabelWithPopup } from "../label";
import { Hint } from "../typography";
/**
 * URL Input component.
 *
 * @param {URLInputPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const URLInput = (props) => {
    const { addURLTooltip, allowEmptyValues, customLabel, duplicateURLErrorMessage, isAllowEnabled, allowedOrigins, handleAddAllowedOrigin, labelEnabled, showError, setShowError, urlState, setURLState, validation, validationErrorMsg, placeholder, labelName, value, hint, required, disabled, hideComponent, showPredictions, computerWidth, readOnly, getSubmit, tenantDomain, ["data-testid"]: testId } = props;
    const { t } = useTranslation();
    const [changeUrl, setChangeUrl] = useState("");
    const [predictValue, setPredictValue] = useState([]);
    const [validURL, setValidURL] = useState(true);
    const [duplicateURL, setDuplicateURL] = useState(false);
    const [keepFocus, setKeepFocus] = useState(false);
    const [hideEntireComponent, setHideEntireComponent] = useState(false);
    const [successShowMore, setSuccessShowMore] = useState(false);
    const [warningShowMore, setWarningShowMore] = useState(false);
    const [allowOrigin, setAllowOrigin] = useState(false);
    /**
     * Add URL to the URL list.
     *
     * @returns {string} URLs.
     */
    const addUrl = useCallback(() => {
        const url = changeUrl;
        const urlValid = validation(url);
        setValidURL(urlValid);
        if (urlValid && (urlState === "" || urlState === undefined)) {
            setURLState(url);
            setChangeUrl("");
            return url;
        }
        else {
            const availableURls = !urlState
                ? []
                : urlState === null || urlState === void 0 ? void 0 : urlState.split(",");
            const duplicate = availableURls === null || availableURls === void 0 ? void 0 : availableURls.includes(url);
            urlValid && setDuplicateURL(duplicate);
            if (urlValid && !duplicate) {
                setURLState((url + "," + urlState));
                setChangeUrl("");
                return url + "," + urlState;
            }
        }
        return;
    }, [changeUrl, setURLState, urlState, validation]);
    /**
     * This submits the URL and calls the callback function passing the URL as an argument.
     *
     * @param {(url: string) => void} callback A callback function that accepts the url as an optional argument.
     */
    const externalSubmit = (callback) => {
        if (getChangeUrl()) {
            const url = addUrl();
            if (url) {
                callback(url);
            }
        }
        else {
            callback();
        }
    };
    /**
     * Initial prediction for the URL.
     * @param changeValue input by the user.
     */
    const getPredictions = (changeValue) => {
        return [
            "https://",
            "http://"
        ].filter((item) => item.toLowerCase().indexOf(changeValue.toLowerCase()) !== -1);
    };
    /**
     * Enter button option.
     * @param e keypress event.
     */
    const keyPressed = (e) => {
        const key = e.which || e.charCode || e.keyCode;
        if (key === 13) {
            e.preventDefault();
            addUrl();
        }
    };
    /**
     * Handle change event of the input.
     *
     * @param event change event.
     */
    const handleChange = (event) => {
        const changeValue = event.target.value;
        let predictions = [];
        if (changeValue.length > 0) {
            predictions = getPredictions(changeValue);
        }
        if (!validURL) {
            setValidURL(true);
        }
        setKeepFocus(true);
        setPredictValue(predictions);
        setChangeUrl(changeValue);
    };
    /**
     * Handle blur event.
     */
    const handleOnBlur = () => {
        // TODO introduce a different method to handle this
        // if (!isEmpty(changeUrl)) {
        //     addUrl();
        // }
        setKeepFocus(false);
    };
    /**
     * When the predicted element is clicked select the predict.
     * @param predict filter prediction.
     */
    const onPredictClick = (predict) => {
        setChangeUrl(predict);
        setPredictValue([]);
    };
    const addFormButton = (e) => {
        e.preventDefault();
        addUrl();
    };
    /**
     * Remove the URL from the listed URLS.
     * @param removeURL URL to be removed.
     */
    const removeValue = (removeURL) => {
        let urlsAfterRemoved = urlState;
        if (urlState.split(",").length > 1) {
            const urls = urlsAfterRemoved.split(",");
            const removeIndex = urls.findIndex((url) => url === removeURL);
            urls.splice(removeIndex, 1);
            urlsAfterRemoved = urls.join(",");
        }
        else {
            urlsAfterRemoved = "";
        }
        setURLState(urlsAfterRemoved);
    };
    /**
     * Returns the changeUrl value.
     *
     * @returns {string} Change URL.
     */
    const getChangeUrl = useCallback(() => {
        return changeUrl;
    }, [changeUrl]);
    /**
     * Calls the prop method by passing the `addUrl` and `getChangeUrl` methods as arguments.
     */
    useEffect(() => {
        if (getSubmit) {
            getSubmit(externalSubmit);
        }
    }, [getSubmit, addUrl, getChangeUrl]);
    useEffect(() => {
        setURLState(value);
    }, [value]);
    useEffect(() => {
        if (showError) {
            setValidURL(false);
            setShowError(false);
        }
    }, [showError]);
    useEffect(() => {
        if (hideComponent) {
            setHideEntireComponent(hideComponent);
        }
    }, [hideComponent]);
    const handleAllowOrigin = (url) => {
        handleAddAllowedOrigin(url);
        setAllowOrigin(true);
    };
    const computerSize = (computerWidth) ? computerWidth : 8;
    const resolveCORSStatusLabel = (url) => {
        const splitURL = url.split("/");
        const origin = splitURL[0] + "//" + splitURL[2];
        /**
         * TODO : React Components should not depend on the product
         * locale bundles.
         * Issue to track. {@link https://github.com/wso2/product-is/issues/10693}
         */
        if ((allowedOrigins === null || allowedOrigins === void 0 ? void 0 : allowedOrigins.includes(origin)) || allowOrigin) {
            return (React.createElement(LabelWithPopup, { className: "cors-details-popup", popupHeader: t("console:develop.features.URLInput.withLabel.positive.header"), popupSubHeader: React.createElement(React.Fragment, null,
                    React.createElement(Icon, { name: "building outline" }),
                    tenantDomain), popupContent: React.createElement(React.Fragment, null,
                    t("console:develop.features.URLInput.withLabel.positive.content"),
                    React.createElement("a", { onClick: () => setSuccessShowMore(!successShowMore) }, successShowMore
                        ? React.createElement(React.Fragment, null,
                            " ",
                            t("common:showLess"))
                        : React.createElement(React.Fragment, null,
                            " ",
                            t("common:showMore"))),
                    React.createElement("br", null),
                    successShowMore && (React.createElement(React.Fragment, null,
                        React.createElement("br", null),
                        t("console:develop.features.URLInput.withLabel.positive.detailedContent.0"),
                        React.createElement("br", null),
                        React.createElement(Trans, { i18nKey: "console:develop.features.URLInput.withLabel.positive.detailedContent.1", tOptions: { tenantName: tenantDomain } },
                            "Therefore enabling CORS for this origin will allow you to access Identity Server APIs from the applications registered in the",
                            React.createElement("strong", null, tenantDomain),
                            " tenant domain.")))), popupFooterLeftContent: React.createElement(React.Fragment, null,
                    React.createElement(Icon, { name: "check", color: "green" }),
                    origin), popupOptions: {
                    basic: true,
                    on: "click"
                }, labelColor: "green" }));
        }
        else {
            return (React.createElement(LabelWithPopup, { className: "cors-details-popup", popupHeader: t("console:develop.features.URLInput.withLabel.negative.header"), popupSubHeader: React.createElement(React.Fragment, null,
                    React.createElement(Icon, { name: "building outline" }),
                    tenantDomain), popupContent: React.createElement(React.Fragment, null,
                    t("console:develop.features.URLInput.withLabel.negative.content"),
                    React.createElement("a", { onClick: () => setWarningShowMore(!warningShowMore) }, warningShowMore
                        ? React.createElement(React.Fragment, null,
                            " ",
                            t("common:showLess"))
                        : React.createElement(React.Fragment, null,
                            " ",
                            t("common:showMore"))),
                    React.createElement("br", null),
                    warningShowMore && (React.createElement(React.Fragment, null,
                        React.createElement("br", null),
                        t("console:develop.features.URLInput.withLabel.negative.detailedContent.0"),
                        React.createElement("br", null),
                        React.createElement(Trans, { i18nKey: "console:develop.features.URLInput.withLabel.negative.detailedContent.1", tOptions: { tenantName: tenantDomain } },
                            "Therefore enabling CORS for this origin will allow you to access Identity Server APIs from the applications registered in the",
                            React.createElement("strong", null, tenantDomain),
                            " tenant domain.")))), popupFooterRightActions: isAllowEnabled && (React.createElement(Button, { onClick: () => handleAllowOrigin(origin), basic: true, color: "orange", floated: "right" }, t("console:develop.features.URLInput.withLabel.negative.leftAction"))), popupFooterLeftContent: React.createElement(React.Fragment, null,
                    React.createElement(Icon, { name: "times", color: "red" }),
                    origin), popupOptions: {
                    basic: true,
                    on: "click"
                }, labelColor: "red" }));
        }
    };
    /**
     * Resolves the error label.
     *
     * @return {React.ReactElement | React.ReactNode}
     */
    const resolveValidationLabel = () => {
        if (!validURL) {
            return (React.createElement(Label, { basic: true, color: "red", pointing: true }, validationErrorMsg));
        }
        if (duplicateURL) {
            return (React.createElement(Label, { basic: true, color: "red", pointing: true }, duplicateURLErrorMessage));
        }
        return customLabel;
    };
    return (!hideEntireComponent &&
        React.createElement(React.Fragment, null,
            React.createElement(Grid.Row, { columns: 1, className: "urlComponentLabelRow" },
                React.createElement(Grid.Column, { mobile: 16, tablet: 16, computer: computerSize }, required ? (React.createElement("div", { className: "required field" },
                    React.createElement("label", null, labelName))) : (React.createElement("label", null, labelName)))),
            React.createElement(Grid.Row, { className: "urlComponentInputRow" },
                React.createElement(Grid.Column, { mobile: 14, tablet: 14, computer: computerSize },
                    React.createElement(Input, { fluid: true, error: !(validURL && !duplicateURL), focus: keepFocus, value: changeUrl, onKeyDown: keyPressed, onChange: handleChange, onBlur: handleOnBlur, placeholder: placeholder, action: true, readOnly: readOnly, "data-testid": testId },
                        React.createElement("input", { disabled: disabled ? disabled : false }),
                        React.createElement(Popup, { disabled: readOnly, trigger: (React.createElement(Button, { onClick: (e) => addFormButton(e), icon: "add", type: "button", disabled: readOnly || disabled || (!allowEmptyValues && !changeUrl), "data-testid": `${testId}-add-button` })), position: "top center", content: addURLTooltip, inverted: true })),
                    resolveValidationLabel())),
            showPredictions && (React.createElement(Grid.Row, { className: "urlComponentInputRow" },
                React.createElement(Grid.Column, { mobile: 14, tablet: 14, computer: computerSize }, (predictValue.length > 0) && predictValue.map((predict) => {
                    return (React.createElement(Label, { key: predict, basic: true, color: "grey", onClick: () => onPredictClick(predict) }, predict));
                })))),
            urlState && urlState.split(",").map((url) => {
                if (url !== "") {
                    return (React.createElement(Grid.Row, { key: url, className: "urlComponentTagRow" },
                        React.createElement(Grid.Column, { mobile: 16, tablet: 16, computer: computerSize },
                            React.createElement(Label, { "data-testid": `${testId}-${url}` },
                                labelEnabled && (resolveCORSStatusLabel(url)),
                                url,
                                !readOnly && (React.createElement(Icon, { name: "delete", onClick: () => removeValue(url), "data-testid": `${testId}-${url}-delete-button` }))))));
                }
            }),
            hint && (React.createElement(Grid.Row, { className: "urlComponentTagRow" },
                React.createElement(Grid.Column, { mobile: 16, tablet: 16, computer: computerSize },
                    React.createElement(Hint, null, hint))))));
};
/**
 * Default props for the URL input component.
 */
URLInput.defaultProps = {
    addURLTooltip: "Add a URL",
    allowEmptyValues: false,
    "data-testid": "url-input",
    duplicateURLErrorMessage: "This URL is already added. Please select a different one.",
    isAllowEnabled: true,
    labelEnabled: false,
    showPredictions: true
};
//# sourceMappingURL=url-input.js.map