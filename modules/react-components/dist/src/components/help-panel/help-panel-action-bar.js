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
import React from "react";
/**
 * Help side panel action bar.
 *
 * @param {PropsWithChildren<HelpPanelActionBarInterface>} props
 *
 * @return {React.ReactElement}
 */
export const HelpPanelActionBar = (props) => {
    const { children, clearing, className, floated, ["data-testid"]: testId } = props;
    const classes = classNames("help-panel-action-bar", {
        clearing,
        [`floated-${floated}`]: floated
    }, className);
    return (React.createElement("div", { className: classes, "data-testid": testId },
        React.createElement("div", { className: "actions-group", "data-testid": `${testId}-action-group` }, React.Children.map((children), (action, index) => (React.createElement("div", { key: index, className: "action", "data-testid": `${testId}-action-${index}` }, action))))));
};
/**
 * Default props for the help panel action bar.
 */
HelpPanelActionBar.defaultProps = {
    clearing: true,
    "data-testid": "help-panel-action-bar",
    floated: "right"
};
//# sourceMappingURL=help-panel-action-bar.js.map