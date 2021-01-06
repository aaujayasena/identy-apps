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
 *
 */
import { TestableComponentInterface } from "@wso2is/core/models";
import { FunctionComponent } from "react";
import { TableColumnInterface } from "./data-table";
import { GenericIconProps } from "../../icon";
export interface DataTableColumnSelector extends TestableComponentInterface {
    /**
     * Heading for the column selector dropdown.
     */
    columnSelectorHeader?: string;
    /**
     * Width of the column selector.
     */
    columnSelectorWidth?: number;
    /**
     * Table columns.
     */
    columns: TableColumnInterface[];
    /**
     * Trigger icon float.
     */
    floated?: GenericIconProps["floated"];
    /**
     * Callback to inform the new set of visible columns.
     * @param {TableColumnInterface[]} columns - New columns.
     */
    onColumnSelectionChange: (columns: TableColumnInterface[]) => void;
    /**
     * Should the toggle disallowed columns be shown as disabled.
     */
    showToggleDisallowedColumns?: boolean;
    /**
     * Column selector trigger icon.
     */
    triggerIcon?: GenericIconProps["icon"];
}
/**
 * Data table column selector.
 *
 * @param {DataTableColumnSelector} props - Props injected to the component.
 * @return {React.ReactElement}
 */
export declare const DataTableColumnSelector: FunctionComponent<DataTableColumnSelector>;
