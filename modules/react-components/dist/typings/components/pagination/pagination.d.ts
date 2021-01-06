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
import React, { FunctionComponent } from "react";
import { DropdownProps, PaginationProps } from "semantic-ui-react";
/**
 * Prop types for the pagination component.
 */
export interface PaginationPropsInterface extends PaginationProps, TestableComponentInterface {
    /**
     * Additional CSS classes.
     */
    className?: string;
    /**
     * Current list count.
     */
    currentListSize?: number;
    /**
     * Disables the next button used in minimal pagination.
     */
    disableNextButton?: boolean;
    /**
     * Disables the previous button used in minimal pagination.
     */
    disablePreviousButton?: boolean;
    /**
     * Float direction.
     */
    float?: "left" | "right";
    /**
     * Label for items per page dropdown.
     */
    itemsPerPageDropdownLabel?: string;
    /**
     * Label for items per page lower limit.
     */
    itemsPerPageDropdownLowerLimit?: number;
    /**
     * Label for items per page dropdown multiple.
     */
    itemsPerPageDropdownMultiple?: number;
    /**
     * Label for items per page dropdown upper limit.
     */
    itemsPerPageDropdownUpperLimit?: number;
    /**
     * Minimal Mode toggle.
     */
    minimal?: boolean;
    /**
     * Overrides the default Next button text.
     */
    nextButtonText?: string;
    /**
     * Callback for items per page change.
     * @param {React.SyntheticEvent<HTMLElement>} event - Click event.
     * @param {DropdownProps} data - Data.
     */
    onItemsPerPageDropdownChange?: (event: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => void;
    /**
     * Overrides the default Previous button text.
     */
    previousButtonText?: string;
    /**
     * Items per page dropdown visibility.
     */
    showItemsPerPageDropdown?: boolean;
    /**
     * Show/ Hide list summary.
     */
    showListSummary?: boolean;
    /**
     * Whether to show page numbers on minimal mode.
     */
    showPagesOnMinimalMode?: boolean;
    /**
     * Total size of the list.
     */
    totalListSize?: number;
    /**
     * Called when the page change event occurs.
     *
     * @param {React.MouseEvent<HTMLAnchorElement, MouseEvent>} event MouseEvent.
     * @param {PaginationProps} data Pagination props data.
     */
    onPageChange?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data: PaginationProps) => void;
    /**
     * Toggles pagination reset.
     */
    resetPagination?: boolean;
}
/**
 * Pagination component.
 *
 * @param {PaginationPropsInterface} props - Props injected in to the component.
 *
 * @return {React.ReactElement}
 */
export declare const Pagination: FunctionComponent<PaginationPropsInterface>;
