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
import { LabelProps, SemanticCOLORS, TableRowProps } from "semantic-ui-react";
/**
 * Proptypes for the transfer list item label.
 */
export interface ItemTypeLabelPropsInterface extends LabelProps {
    labelText: string;
    labelColor: SemanticCOLORS;
    name?: string;
}
/**
 * Proptypes for the transfer list item component.
 */
interface TransferListItemPropsInterface extends TableRowProps, TestableComponentInterface {
    listItem: string;
    listItemId: string;
    listItemIndex: number | string;
    listItemTypeLabel?: ItemTypeLabelPropsInterface;
    isItemChecked: boolean;
    handleItemCheck?: () => void;
    handleItemChange: () => void;
    showSecondaryActions: boolean;
    handleOpenPermissionModal?: () => void;
    showListSubItem?: boolean;
    listSubItem?: string;
}
/**
 * Transfer list item component.
 *
 * @param {TransferListItemPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export declare const TransferListItem: FunctionComponent<TransferListItemPropsInterface>;
export {};
