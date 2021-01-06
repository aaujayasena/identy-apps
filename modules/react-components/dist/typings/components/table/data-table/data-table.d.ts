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
import React, { ReactElement, ReactNode, SyntheticEvent } from "react";
import { DropdownItemProps, SemanticICONS, SemanticWIDTHS, TableCellProps, TableProps, TableRowProps } from "semantic-ui-react";
import { DataTableBody } from "./data-table-body";
import { DataTableCell, DataTableCellPropsInterface } from "./data-table-cell";
import { DataTableFooter } from "./data-table-footer";
import { DataTableHeader } from "./data-table-header";
import { DataTableHeaderCell } from "./data-table-header-cell";
import { DataTableRow } from "./data-table-row";
import { GenericIconProps } from "../../icon";
/**
 * Interface for the Data Table sub components.
 */
export interface DataTableSubComponentsInterface {
    Body: typeof DataTableBody;
    Cell: typeof DataTableCell;
    Footer: typeof DataTableFooter;
    Header: typeof DataTableHeader;
    HeaderCell: typeof DataTableHeaderCell;
    Row: typeof DataTableRow;
}
/**
 * Interface for the data table component.
 */
export interface DataTablePropsInterface<T = {}> extends Omit<TableProps, "columns" | "sortable">, TestableComponentInterface {
    /**
     * Set of actions.
     */
    actions?: TableActionsInterface<T>[];
    /**
     * UI Props for the cell.
     */
    cellUIProps?: TableCellProps;
    /**
     * Heading for the column selector dropdown.
     */
    columnSelectorHeader?: string;
    /**
     * Width of the column selector.
     */
    columnSelectorWidth?: number;
    /**
     * Custom icon for the column selector trigger.
     */
    columnSelectorTriggerIcon?: GenericIconProps["icon"];
    /**
     * Table data source.
     */
    columns: TableColumnInterface[];
    /**
     * Column count to divide its content evenly.
     */
    columnCount?: SemanticWIDTHS;
    /**
     * Table data source.
     */
    data: TableDataInterface<T>[];
    /**
     * Table extensions.
     */
    extensions?: TableExtensionInterface[];
    /**
     * Externally provided Search component.
     */
    externalSearch?: ReactNode;
    /**
     * Table id.
     */
    id?: string;
    /**
     * Is the data loading.
     */
    isLoading?: boolean;
    /**
     * Optional meta for the loading state.
     */
    loadingStateOptions?: TableLoadingStateOptionsInterface;
    /**
     * Callback to inform the new set of visible columns.
     * @param {TableColumnInterface[]} columns - New columns.
     */
    onColumnSelectionChange?: (columns: TableColumnInterface[]) => void;
    /**
     * Callback row selection.
     */
    onRowClick: (e: SyntheticEvent, item: TableDataInterface) => void;
    /**
     * Placeholders for the table.
     */
    placeholders?: ReactNode;
    /**
     * UI Props for the Row.
     */
    rowUIProps?: TableRowProps;
    /**
     * Show/Hide column selector.
     */
    showColumnSelector?: boolean;
    /**
     * Show/Hide header cells.
     */
    showHeader?: boolean;
    /**
     * Show/Hide the table's operations panel header that has the search, column selector etc.
     */
    showOperationsHeader?: boolean;
    /**
     * Show/Hide table search.
     */
    showSearch?: boolean;
    /**
     * Should the toggle disallowed columns be shown as disabled.
     */
    showToggleDisallowedColumns?: boolean;
    /**
     * Should the table appear on a transparent background.
     */
    transparent?: boolean;
}
/**
 * Table Data Strict Interface.
 */
export interface StrictDataPropsInterface {
    /**
     * key prop for React.
     */
    key?: string | number;
    /**
     * Props for the UI component.
     */
    rendererProps?: DataRendererPropsInterface;
}
/**
 * Interface for the Data renderer props.
 */
export interface DataRendererPropsInterface {
    /**
     * UI Props for the cell.
     */
    cellUIProps: TableCellProps;
    /**
     * UI Props for the Row.
     */
    rowUIProps: TableRowProps;
}
/**
 * Table Data Interface.
 */
export interface TableDataInterface<T = {}> extends StrictDataPropsInterface, DynamicTableDataInterface, DataTableCellPropsInterface {
}
/**
 * Table Data Dynamic Interface.
 */
export interface DynamicTableDataInterface {
    [key: string]: any;
}
/**
 * Table Column Strict Interface.
 */
export interface StrictColumnPropsInterface {
    /**
     * Allow/Deny toggling the visibility of the column using the column selector.
     */
    allowToggleVisibility?: boolean;
    /**
     * key prop for React.
     */
    key?: string | number;
    /**
     * Unique ID for the column.
     */
    id: string;
    /**
     * Get the new sort order.
     * @param {DataTableSortOrder} sortOrder - New sort order.
     */
    getSortOrder?: (sortOrder: DataTableSortOrder, column: TableColumnInterface) => void;
    /**
     * Should the column be hidden.
     */
    hidden?: boolean;
    /**
     * Is the column sortable.
     */
    sortable?: boolean;
    /**
     * Sort order.
     */
    sortOrder?: DataTableSortOrder;
    /**
     * Column title.
     */
    title: ReactNode;
    /**
     * Index to find relevant data.
     */
    dataIndex: string | "action";
    /**
     * Give column render control to outside.
     */
    render?: (item: TableDataInterface) => ReactNode;
}
/**
 * Data table sort order types.
 */
export declare type DataTableSortOrder = "" | "ascending" | "descending";
/**
 * Table Column Interface.
 */
export interface TableColumnInterface extends StrictColumnPropsInterface, DynamicTableColumnInterface {
}
/**
 * Table Column Dynamic Interface.
 */
export interface DynamicTableColumnInterface {
    [key: string]: any;
}
/**
 * Table Actions Interface.
 */
export interface TableActionsInterface<T = {}> extends TestableComponentInterface {
    /**
     * Component render node.
     */
    component?: ReactNode;
    /**
     * Is the action disabled.
     */
    disabled?: boolean;
    /**
     * Should action be hidden.
     */
    hidden?: (item: TableDataInterface<T>) => boolean;
    /**
     * Icon for the action.
     */
    icon?: (item?: TableDataInterface<T>) => SemanticICONS;
    /**
     * Action onclick callback.
     */
    onClick?: (e: SyntheticEvent, item: TableDataInterface<T>) => void;
    /**
     * Action popup text.
     */
    popupText?: (item?: TableDataInterface<T>) => string;
    /**
     * Sub actions for dropdown type.
     */
    subActions?: DropdownItemProps[];
    /**
     * Type of action.
     */
    renderer?: "semantic-icon" | "dropdown";
}
/**
 * Interface for loading state options.
 */
export interface TableLoadingStateOptionsInterface {
    /**
     * Number of loading rows.
     */
    count: number;
    /**
     * Loading state image type.
     */
    imageType?: "circular" | "square";
}
export interface TableExtensionInterface {
    /**
     * Position to place the extension.
     */
    position: "top" | "bottom";
    /**
     * Component to be rendered.
     */
    component: ReactNode;
    /**
     * Does the external component provide renderer.
     */
    isExternalRendererProvided?: boolean;
}
/**
 * Data Driven Table Component.
 *
 * @param {DataTablePropsInterface} props - Props injected to the component.
 * @return {React.ReactElement}
 */
export declare const DataTable: {
    <T extends object = {}>(props: DataTablePropsInterface<T>): ReactElement;
    defaultProps: {
        "data-testid": string;
        selectable: boolean;
        showHeader: boolean;
        stackable: boolean;
    };
    Body: React.FunctionComponent<React.PropsWithChildren<import("./data-table-body").DataTableBodyPropsInterface>>;
    Cell: React.FunctionComponent<React.PropsWithChildren<DataTableCellPropsInterface>>;
    Footer: React.FunctionComponent<React.PropsWithChildren<import("./data-table-footer").DataTableFooterPropsInterface>>;
    Header: React.FunctionComponent<React.PropsWithChildren<import("./data-table-header").DataTableHeaderPropsInterface>>;
    HeaderCell: React.FunctionComponent<React.PropsWithChildren<import("./data-table-header-cell").DataTableHeaderCellPropsInterface>>;
    Row: React.FunctionComponent<React.PropsWithChildren<import("./data-table-row").DataTableRowPropsInterface>>;
};
