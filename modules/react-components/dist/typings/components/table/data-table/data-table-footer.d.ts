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
import { TestableComponentInterface } from "@wso2is/core/models";
import { FunctionComponent, PropsWithChildren } from "react";
import { TableFooterProps } from "semantic-ui-react";
/**
 * Proptypes for the Data Table Footer component.
 */
export interface DataTableFooterPropsInterface extends TableFooterProps, TestableComponentInterface {
}
/**
 * Data Table Footer component.
 *
 * @param {DataTableFooterPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export declare const DataTableFooter: FunctionComponent<PropsWithChildren<DataTableFooterPropsInterface>>;
