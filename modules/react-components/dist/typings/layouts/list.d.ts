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
import React, { FunctionComponent, PropsWithChildren, ReactNode, SyntheticEvent } from "react";
import { DropdownItemProps, DropdownProps, PaginationProps } from "semantic-ui-react";
import { PaginationPropsInterface } from "../components";
/**
 * List layout component Prop types.
 */
export interface ListLayoutPropsInterface extends PaginationProps, TestableComponentInterface {
    /**
     * Advance search component.
     */
    advancedSearch?: ReactNode;
    /**
     * Position of the advanced search component.
     */
    advancedSearchPosition?: "left" | "right";
    /**
     * Extra CSS classes.
     */
    className?: string;
    /**
     * Left action panel component.
     */
    leftActionPanel?: ReactNode;
    /**
     * Limit for the list.
     */
    listItemLimit?: number;
    /**
     * Flag to enable pagination minimal mode.
     */
    minimalPagination?: boolean;
    /**
     * Callback to be fired on page number change.
     * @param {React.MouseEvent<HTMLAnchorElement, MouseEvent>} event - Event.
     * @param {PaginationProps} data - Pagination data.
     */
    onPageChange: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data: PaginationProps) => void;
    /**
     * Callback to be fired when the sort strategy is changed.
     * @param {React.SyntheticEvent<HTMLElement>} event - Event.
     * @param {DropdownProps} data - Metadata.
     */
    onSortStrategyChange?: (event: SyntheticEvent<HTMLElement>, data: DropdownProps) => void;
    /**
     * Callback to be fired when the sort order is changed.
     * @param {boolean} isAscending - Is the order ascending.
     */
    onSortOrderChange?: (isAscending: boolean) => void;
    /**
     * Extra props to override the default pagination props.
     */
    paginationOptions?: Omit<PaginationPropsInterface, "totalPages">;
    /**
     * Flag to reset the pagination.
     */
    resetPagination?: boolean;
    /**
     * Right action panel component.
     */
    rightActionPanel?: ReactNode;
    /**
     * Flag to toggle pagination visibility.
     */
    showPagination?: boolean;
    /**
     * Flag to toggle pagination page limit dropdown visibility.
     */
    showPaginationPageLimit?: boolean;
    /**
     * Flag to toggle top action panel visibility.
     */
    showTopActionPanel?: boolean;
    /**
     * Sort options.
     */
    sortOptions?: DropdownItemProps[];
    /**
     * Sort strategies.
     */
    sortStrategy?: DropdownItemProps;
    /**
     * Total size of the list.
     */
    totalListSize?: number;
    /**
     * Callback for items per page change.
     * @param {React.SyntheticEvent<HTMLElement>} event - Click event.
     * @param {DropdownProps} data - Data.
     */
    onItemsPerPageDropdownChange?: (event: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => void;
}
/**
 * List layout.
 *
 * @param {React.PropsWithChildren<ListLayoutPropsInterface>} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export declare const ListLayout: FunctionComponent<PropsWithChildren<ListLayoutPropsInterface>>;
