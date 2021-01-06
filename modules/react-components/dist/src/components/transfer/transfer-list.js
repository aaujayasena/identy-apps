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
import { useTranslation } from "react-i18next";
import { Checkbox, Table } from "semantic-ui-react";
import { EmptyPlaceholder } from "../placeholder";
/**
 * Transfer list component.
 *
 * @param {TransferListPropsInterface} props - Props injected to the component.
 * @return {React.ReactElement}
 */
export const TransferList = (props) => {
    const { t } = useTranslation();
    const { children, listHeaders, isListEmpty, handleHeaderCheckboxChange, isHeaderCheckboxChecked, emptyPlaceholderContent, ["data-testid"]: testId } = props;
    return (React.createElement(React.Fragment, null, !isListEmpty ? (React.createElement(Table, null,
        listHeaders instanceof Array && (React.createElement(Table.Header, null,
            React.createElement(Table.Row, null,
                React.createElement(Table.HeaderCell, null,
                    React.createElement(Checkbox, { "data-testid": testId, checked: isHeaderCheckboxChecked, onChange: handleHeaderCheckboxChange })), listHeaders === null || listHeaders === void 0 ? void 0 :
                listHeaders.map((header, index) => {
                    return (React.createElement(Table.HeaderCell, { key: index },
                        React.createElement("strong", null, header)));
                })))),
        React.createElement(Table.Body, null, children))) : (
    /**
     * TODO : React Components should not depend on the product
     * locale bundles.
     * Issue to track. {@link https://github.com/wso2/product-is/issues/10693}
     */
    React.createElement("div", { className: "empty-placeholder-center" },
        React.createElement(EmptyPlaceholder, { subtitle: [
                emptyPlaceholderContent
                    ? emptyPlaceholderContent
                    : t("console:manage.features.transferList.list.emptyPlaceholders.default")
            ], "data-testid": `${testId}-placeholder` })))));
};
/**
 * Default props for the transfer list component.
 */
TransferList.defaultProps = {
    "data-testid": "transfer-list"
};
//# sourceMappingURL=transfer-list.js.map