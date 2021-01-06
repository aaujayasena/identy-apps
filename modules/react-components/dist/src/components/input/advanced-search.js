/*
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
import React, { useEffect, useRef, useState } from "react";
import { Button, Divider, Icon, Input, Popup } from "semantic-ui-react";
import { ReactComponent as CrossIcon } from "../../assets/images/cross-icon.svg";
import { GenericIcon } from "../icon";
import { Heading } from "../typography";
/**
 * Advanced search component.
 *
 * @param {React.PropsWithChildren<AdvancedSearchPropsInterface>} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const AdvancedSearch = (props) => {
    const { aligned, className, children, clearButtonPopupLabel, defaultSearchStrategy, dropdownPosition, dropdownTriggerPopupLabel, externalSearchQuery, fill, hintActionKeys, hintLabel, clearIcon, inputSize, onExternalSearchQueryClear, onSearchQuerySubmit, placeholder, resetSubmittedState, searchOptionsHeader, submitted, ["data-testid"]: testId, triggerClearQuery } = props;
    const searchInputRef = useRef();
    const [internalSearchQuery, setInternalSearchQuery] = useState("");
    const [showSearchFieldHint, setShowSearchFieldHint] = useState(false);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [internalQueryClearTriggerState, setInternalQueryClearTriggerState] = useState(false);
    /**
     * useEffect hook to handle `internalSearchQuery` change.
     */
    useEffect(() => {
        if (!internalSearchQuery) {
            setShowSearchFieldHint(false);
        }
        if (internalSearchQuery && !isDropdownVisible && (externalSearchQuery !== internalSearchQuery)) {
            setShowSearchFieldHint(true);
        }
    }, [internalSearchQuery]);
    /**
     * useEffect hook to handle `externalSearchQuery` changes.
     */
    useEffect(() => {
        setInternalSearchQuery(externalSearchQuery);
    }, [externalSearchQuery]);
    /**
     * useEffect hook to handle `submitted` prop changes.
     */
    useEffect(() => {
        if (submitted) {
            setIsDropdownVisible(false);
            resetSubmittedState();
        }
    }, [submitted]);
    useEffect(() => {
        if (triggerClearQuery === undefined || (internalQueryClearTriggerState === triggerClearQuery)) {
            return;
        }
        clearSearchQuery();
        setInternalQueryClearTriggerState(triggerClearQuery);
    }, [triggerClearQuery]);
    /**
     * Wrapper `div` style classes.
     */
    const wrapperClasses = classNames({
        ["search-hint-active"]: showSearchFieldHint,
        [`aligned-${aligned}`]: aligned,
        [`fill-${fill}`]: fill
    }, className);
    /**
     * Search field style classes.
     */
    const searchFieldClasses = classNames({
        active: internalSearchQuery
    }, className);
    /**
     * Search field hint style classes.
     */
    const searchFieldHintClasses = classNames({
        active: showSearchFieldHint
    }, className);
    /**
     * Handles the search input field `onChange` event.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} e - Input change event.
     */
    const handleSearchQueryChange = (e) => {
        const { value } = e.target;
        setInternalSearchQuery(value);
    };
    /**
     * Handles the show options dropdown `onClick` event.
     */
    const handleShowOptionsClick = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };
    /**
     * Handles the clear query button `onClick` event.
     */
    const clearSearchQuery = () => {
        setInternalSearchQuery("");
        onSearchQuerySubmit(false, null);
        onExternalSearchQueryClear();
    };
    /**
     * Handles search query submit by keyboard events.
     *
     * @param {KeyboardEvent} e - Keyboard event.
     */
    const handleSearchQuerySubmit = (e) => {
        const { key, shiftKey } = e;
        let query = "";
        // If only enter key is pressed perform the default filter strategy.
        if (!shiftKey && key === "Enter") {
            query = `${defaultSearchStrategy} ${internalSearchQuery}`;
            onSearchQuerySubmit(false, query);
            setShowSearchFieldHint(false);
        }
        // If both `Enter` key and `Shift` key are pressed, treat the input
        // as a query and perform the search.
        if (shiftKey && key === "Enter") {
            query = internalSearchQuery;
            onSearchQuerySubmit(true, query);
            setShowSearchFieldHint(false);
        }
    };
    /**
     * Handles the search field blur.
     */
    const handleSearchFieldBlur = () => {
        setShowSearchFieldHint(false);
    };
    /**
     * Handles the dropdown close event.
     */
    const handleSearchDropdownClose = () => {
        setIsDropdownVisible(false);
    };
    return (React.createElement("div", { className: `advanced-search-wrapper ${wrapperClasses}`, "data-testid": testId },
        React.createElement("div", { ref: searchInputRef },
            React.createElement(Input, { "data-testid": `${testId}-input`, action: (React.createElement(React.Fragment, null,
                    internalSearchQuery
                        ? (React.createElement(Popup, { disabled: !clearButtonPopupLabel, trigger: (React.createElement(Button, { "data-testid": `${testId}-clear-button`, basic: true, compact: true, className: "input-add-on", onClick: clearSearchQuery },
                                React.createElement(GenericIcon, { size: "nano", defaultIcon: true, transparent: true, icon: clearIcon ? clearIcon : CrossIcon }))), position: "top center", content: clearButtonPopupLabel, inverted: true }))
                        : null,
                    React.createElement(Popup, { disabled: !dropdownTriggerPopupLabel || isDropdownVisible, trigger: (React.createElement(Button, { "data-testid": `${testId}-options-button`, basic: true, compact: true, className: "input-add-on", onClick: handleShowOptionsClick },
                            React.createElement(Icon, { name: "caret down" }))), position: "top center", content: dropdownTriggerPopupLabel, inverted: true }))), className: `advanced-search with-add-on ${searchFieldClasses}`, size: inputSize, icon: "search", iconPosition: "left", placeholder: placeholder, value: internalSearchQuery, onBlur: handleSearchFieldBlur, onChange: handleSearchQueryChange, onKeyDown: handleSearchQuerySubmit })),
        React.createElement("div", { className: `search-query-hint ${searchFieldHintClasses}`, "data-testid": `${testId}-query-hint` },
            React.createElement("div", { className: "query" }, hintLabel),
            React.createElement("div", { className: "short-cut" },
                React.createElement(Icon, { name: "keyboard outline" }),
                " ",
                hintActionKeys)),
        React.createElement(Popup, { context: searchInputRef, content: (React.createElement("div", { className: "search-filters-dropdown" },
                React.createElement(Heading, { as: "h6", bold: "500", compact: true, "data-testid": `${testId}-header` }, searchOptionsHeader),
                React.createElement(Divider, { className: "compact" }),
                React.createElement("div", { className: "form-wrapper", "data-testid": `${testId}-form-wrapper` }, children))), on: "click", position: dropdownPosition, open: isDropdownVisible, onClose: handleSearchDropdownClose, closeOnPortalMouseLeave: false, "data-testid": `${testId}-dropdown`, hoverable: true, pinned: true, className: "advanced-search" })));
};
/**
 * Default proptypes for the Advanced search component.
 */
AdvancedSearch.defaultProps = {
    aligned: "left",
    className: null,
    clearButtonPopupLabel: null,
    "data-testid": "advanced-search",
    dropdownPosition: "bottom left",
    dropdownTriggerPopupLabel: null,
    externalSearchQuery: "",
    fill: "default",
    hintActionKeys: "Enter",
    hintLabel: "Search for",
    onExternalSearchQueryClear: null,
    placeholder: null,
    searchOptionsHeader: "Advanced Search",
    submitted: false
};
//# sourceMappingURL=advanced-search.js.map