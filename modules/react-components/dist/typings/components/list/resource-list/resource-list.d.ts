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
import { FunctionComponent } from "react";
import { ListProps } from "semantic-ui-react";
import { ResourceListHeader } from "./resource-list-header";
import { ResourceListHeaderCell } from "./resource-list-header-cell";
import { ResourceListItem } from "./resource-list-item";
/**
 * Interface for the resource tab sub component.
 */
export interface ResourceListSubComponentsInterface {
    Header: typeof ResourceListHeader;
    HeaderCell: typeof ResourceListHeaderCell;
    Item: typeof ResourceListItem;
}
/**
 * Proptypes for the resource list component.
 */
export interface ResourceListPropsInterface extends ListProps, TestableComponentInterface {
    /**
     * Should the list appear on a filled background (usually with foreground color).
     */
    fill?: boolean;
    /**
     * Is the list in loading state.
     */
    isLoading?: boolean;
    /**
     * Optional meta for the loading state.
     */
    loadingStateOptions?: ListLoadingStateOptionsInterface;
    /**
     * Should the list appear on a transparent background.
     */
    transparent?: boolean;
}
/**
 * Interface for loading state options.
 */
interface ListLoadingStateOptionsInterface {
    /**
     * Number of loading rows.
     */
    count: number;
    /**
     * Loading state image type.
     */
    imageType: "circular" | "square";
}
/**
 * Resource list component.
 *
 * @param {ResourceListPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export declare const ResourceList: FunctionComponent<ResourceListPropsInterface> & ResourceListSubComponentsInterface;
export {};
