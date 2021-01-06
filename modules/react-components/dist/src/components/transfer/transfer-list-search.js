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
import { Grid, Icon, Input } from "semantic-ui-react";
/**
 * Transfer list component.
 *
 * @param {TransferListSearchPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const TransferListSearch = (props) => {
    const { handleListSearch, placeholder, ["data-testid"]: testId } = props;
    return (React.createElement(Grid.Column, { mobile: 16, tablet: 16, computer: 8 },
        React.createElement(Input, { "data-testid": testId, icon: React.createElement(Icon, { name: "search" }), fluid: true, onChange: handleListSearch, placeholder: placeholder })));
};
/**
 * Default props for the transfer list search component.
 */
TransferListSearch.defaultProps = {
    "data-testid": "transfer-list-search"
};
//# sourceMappingURL=transfer-list-search.js.map