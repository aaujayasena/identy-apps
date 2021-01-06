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
import React from "react";
import { Button, Grid, Icon, Segment } from "semantic-ui-react";
import { TransferListSearch } from "./transfer-list-search";
/**
 * Transfer list component.
 *
 * @param {TransferComponentPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const TransferComponent = (props) => {
    const { addItems, removeItems, children, searchPlaceholder, handleUnelectedListSearch, handleSelectedListSearch, ["data-testid"]: testId } = props;
    return (React.createElement(Grid, { className: "transfer-list" }, React.Children.count(children) > 0 && (React.createElement(Grid.Row, { columns: 3, className: "transfer-list-row" }, React.Children.map(children, (list, index) => {
        return (React.createElement(React.Fragment, null,
            list.props.listType === "unselected" && (React.createElement(Grid.Column, { width: 7 },
                React.createElement(Segment, { "data-testid": `${testId}-unselected-groups`, className: "transfer-segment" },
                    React.createElement(TransferListSearch, { "data-testid": testId + "-unselected-groups-search-input", handleListSearch: handleUnelectedListSearch, placeholder: searchPlaceholder }),
                    React.createElement(Segment, { className: "transfer-list-segment" }, list)))),
            index === 0 && (React.createElement(Grid.Column, { verticalAlign: "middle", width: 1, className: "transfer-list-button-column" },
                React.createElement(Grid.Row, null,
                    React.createElement(Button, { "data-testid": `${testId}-unselected-groups-add-button`, type: "button", basic: true, size: "mini", onClick: addItems },
                        React.createElement(Icon, { name: "chevron right" }))),
                React.createElement(Grid.Row, null,
                    React.createElement(Button, { "data-testid": testId + "-unselected-groups-remove-button", type: "button", basic: true, size: "mini", onClick: removeItems },
                        React.createElement(Icon, { name: "chevron left" }))))),
            list.props.listType === "selected" && (React.createElement(Grid.Column, { width: 7, className: "transfer-list-assigned-column" },
                React.createElement(Segment, { "data-testid": `${testId}-selected-groups`, className: "transfer-segment" },
                    React.createElement(TransferListSearch, { "data-testid": `${testId}-selected-groups-search-input`, handleListSearch: handleSelectedListSearch, placeholder: searchPlaceholder }),
                    React.createElement(Segment, { className: "transfer-list-segment" }, list))))));
    })))));
};
/**
 * Default props for the transfer component.
 */
TransferComponent.defaultProps = {
    "data-testid": "transfer-component"
};
//# sourceMappingURL=transfer.js.map