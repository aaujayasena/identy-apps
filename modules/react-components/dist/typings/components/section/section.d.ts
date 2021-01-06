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
import React, { FunctionComponent, MouseEvent, PropsWithChildren } from "react";
import { SemanticICONS } from "semantic-ui-react";
import { GenericIconSizes } from "../icon";
/**
 * Proptypes for the section component.
 */
export interface SectionProps extends TestableComponentInterface {
    /**
     * Additional CSS classes.
     */
    className?: string;
    /**
     * Show content padding.
     */
    contentPadding?: boolean;
    /**
     * Section description.
     */
    description?: string;
    /**
     * Section header.
     */
    header: string;
    /**
     * Section icon.
     */
    icon?: any;
    /**
     * Mini version of the section icon.
     */
    iconMini?: any;
    /**
     * Icon floated direction.
     */
    iconFloated?: "left" | "right";
    /**
     * Icon style.
     */
    iconStyle?: "twoTone" | "default" | "colored";
    /**
     * Icon size.
     */
    iconSize?: GenericIconSizes;
    /**
     * Primary action onclick callback.
     * @param {React.MouseEvent<HTMLElement>} e - Click event.
     */
    onPrimaryActionClick?: (e: MouseEvent<HTMLElement>) => void;
    /**
     * Secondary action onclick callback.
     * @param {React.MouseEvent<HTMLElement>} e - Click event.
     */
    onSecondaryActionClick?: (e: MouseEvent<HTMLElement>) => void;
    /**
     * Placeholder text.
     */
    placeholder?: string;
    /**
     * Primary action node.
     */
    primaryAction?: any;
    /**
     * Enable/ Disable primary action.
     */
    primaryActionDisabled?: boolean;
    /**
     * Primary action icon.
     */
    primaryActionIcon?: SemanticICONS;
    /**
     * Secondary action node.
     */
    secondaryAction?: any;
    /**
     * Enable/ Disable secondary action.
     */
    secondaryActionDisabled?: boolean;
    /**
     * Secondary action icon.
     */
    secondaryActionIcon?: SemanticICONS;
    /**
     * Show/ Hide action bar.
     */
    showActionBar?: boolean;
    /**
     * Show/ Hide top action bar.
     */
    topActionBar?: React.ReactNode;
    /**
     * Accordion.
     */
    accordion?: any;
}
/**
 * Section component.
 *
 * @param {PropsWithChildren<SectionProps>} props - Props injected to the section component.
 *
 * @return {React.ReactElement}
 */
export declare const Section: FunctionComponent<PropsWithChildren<SectionProps>>;
