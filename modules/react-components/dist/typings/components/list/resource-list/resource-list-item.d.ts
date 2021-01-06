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
import { FunctionComponent, ReactNode } from "react";
import { DropdownItemProps, ListItemProps, SemanticFLOATS, SemanticICONS, SemanticWIDTHS } from "semantic-ui-react";
/**
 * Proptypes for the resource list item component.
 */
export interface ResourceListItemPropsInterface extends ListItemProps, TestableComponentInterface {
    /**
     * List items actions.
     */
    actions?: ResourceListActionInterface[];
    /**
     * Action panel float direction.
     */
    actionsFloated?: SemanticFLOATS;
    /**
     * Width of the action panel column.
     */
    actionsColumnWidth?: SemanticWIDTHS;
    /**
     * Avatar to be displayed on the list item.
     * Can be either {@link UserAvatar} or {@link AppAvatar}
     */
    avatar?: ReactNode;
    /**
     * Additional CSS classes.
     */
    className?: string;
    /**
     * List item header.
     */
    itemHeader: string | ReactNode;
    /**
     * List item description
     */
    itemDescription?: string | ReactNode;
    /**
     * Width of the description area.
     */
    descriptionColumnWidth?: SemanticWIDTHS;
    /**
     * Meta info about the list item.
     */
    metaContent?: ReactNode | ReactNode[];
    /**
     * Width of the meta info area.
     */
    metaColumnWidth?: SemanticWIDTHS;
}
/**
 * Resource list action interface.
 */
export interface ResourceListActionInterface extends TestableComponentInterface {
    disabled?: boolean;
    hidden?: boolean;
    icon: SemanticICONS;
    onClick?: () => void;
    popupText?: string;
    subActions?: DropdownItemProps[];
    type: "button" | "dropdown";
}
/**
 * Resource list item component.
 *
 * @param {ResourceListItemPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export declare const ResourceListItem: FunctionComponent<ResourceListItemPropsInterface>;
