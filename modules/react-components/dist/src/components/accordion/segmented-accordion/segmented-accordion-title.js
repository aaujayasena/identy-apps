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
import { Accordion, Checkbox, Grid, Icon, Popup, Segment } from "semantic-ui-react";
import { GenericIcon } from "../../icon";
import { EmphasizedSegment } from "../../section";
/**
 * Segmented accordion title component.
 *
 * @param {SegmentedAccordionTitlePropsInterface} props - Props injected to the component.
 *
 * @return {ReactElement}
 */
export const SegmentedAccordionTitle = (props) => {
    const { active, actions, attached, children, className, clearing, content, hideChevron, id, useEmphasizedSegments, ["data-testid"]: testId } = props, rest = __rest(props, ["active", "actions", "attached", "children", "className", "clearing", "content", "hideChevron", "id", "useEmphasizedSegments", "data-testid"]);
    const classes = classNames("segmented-accordion-title", {
        clearing
    }, className);
    /**
     * Interferes the click events to stop default propagation.
     *
     * @param callback - onClick or onChange callback.
     * @param {React.SyntheticEvent} e - Event.
     * @param args - Other arguments.
     */
    const handleActionOnClick = (callback, e, ...args) => {
        e.stopPropagation();
        callback(e, ...args);
    };
    /**
     * Resolve the action.
     *
     * @param {SegmentedAccordionTitleActionInterface} action - Passed in action.
     * @param {number} index - Array Index.
     *
     * @return {React.ReactElement} Resolved action.
     */
    const resolveAction = (action, index) => {
        const { icon, label, onChange, onClick, popoverText, type, disabled } = action, actionsRest = __rest(action, ["icon", "label", "onChange", "onClick", "popoverText", "type", "disabled"]);
        switch (type) {
            case "toggle": {
                return (React.createElement(Checkbox, Object.assign({ toggle: true, label: label, disabled: disabled, onChange: (e, data) => handleActionOnClick(onChange, e, data, id), "data-testid": `${testId}-${action.type}-action-${index}` }, actionsRest)));
            }
            case "checkbox": {
                return (React.createElement(Checkbox, Object.assign({ label: label, disabled: disabled, onChange: (e, data) => handleActionOnClick(onChange, e, data, id), "data-testid": `${testId}-${action.type}-action-${index}` }, actionsRest)));
            }
            case "icon": {
                if (typeof icon === "string") {
                    return (React.createElement(Popup, { disabled: disabled || !popoverText, trigger: (React.createElement("div", null,
                            React.createElement(GenericIcon, { size: "default", defaultIcon: true, link: true, inline: true, disabled: disabled, transparent: true, verticalAlign: "middle", icon: React.createElement(Icon, { name: icon, color: "grey", className: classNames({ "disabled": disabled }, "") }), onClick: (e) => handleActionOnClick(onClick, e, id), "data-testid": `${testId}-${action.type}-action-${index}` }))), position: "top center", content: popoverText, inverted: true }));
                }
                return (React.createElement(Popup, { disabled: disabled || !popoverText, trigger: (React.createElement("div", null,
                        React.createElement(GenericIcon, Object.assign({ size: "default", defaultIcon: true, link: true, inline: true, disabled: disabled, transparent: true, verticalAlign: "middle", onClick: (e) => handleActionOnClick(onClick, e, id), "data-testid": `${testId}-${action.type}-action-${index}` }, icon)))), position: "top center", content: popoverText, inverted: true }));
            }
            default: {
                return null;
            }
        }
    };
    return (React.createElement(Accordion.Title, Object.assign({ as: useEmphasizedSegments ? EmphasizedSegment : Segment, attached: attached && (active ? "top" : false), active: active, className: classes, "data-testid": testId }, rest),
        React.createElement(Grid, null,
            React.createElement(Grid.Row, null,
                React.createElement(Grid.Column, { computer: 8, tablet: 8, mobile: 16, verticalAlign: "middle" }, content || children),
                React.createElement(Grid.Column, { computer: 8, tablet: 8, mobile: 16, verticalAlign: "middle" },
                    React.createElement("div", { className: "flex floated right" },
                        (actions && actions instanceof Array && actions.length > 0)
                            ? actions.map((action, index) => (React.createElement("div", { key: index, className: "mr-3 m-auto", onClick: (e) => e.stopPropagation(), "data-testid": `${testId}-${action.type}-action-container-${index}` }, resolveAction(action, index))))
                            : null,
                        !hideChevron && (React.createElement(GenericIcon, { size: "default", defaultIcon: true, link: true, inline: true, transparent: true, verticalAlign: "middle", floated: "right", "data-testid": `${testId}-chevron`, icon: React.createElement(Icon, { name: "angle right", className: "chevron" }) }))))))));
};
/**
 * Default props for the segmented accordion title component.
 */
SegmentedAccordionTitle.defaultProps = {
    attached: true,
    clearing: false,
    "data-testid": "segmented-accordion-title",
    disabled: false,
    hideChevron: false,
    useEmphasizedSegments: true
};
//# sourceMappingURL=segmented-accordion-title.js.map