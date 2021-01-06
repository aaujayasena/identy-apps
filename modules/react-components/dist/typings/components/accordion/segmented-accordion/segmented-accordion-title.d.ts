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
import { FormEvent, FunctionComponent, MouseEvent } from "react";
import { AccordionTitleProps, SemanticICONS } from "semantic-ui-react";
import { GenericIconProps } from "../../icon";
/**
 * Proptypes for the segmented accordion title component.
 */
export interface SegmentedAccordionTitlePropsInterface extends AccordionTitleProps, TestableComponentInterface {
    /**
     * Unique identifier for the element to be used in action callbacks.
     */
    id?: string;
    /**
     * Set of actions for the panel.
     */
    actions?: SegmentedAccordionTitleActionInterface[];
    /**
     * Clearing
     */
    clearing?: boolean;
    /**
     * Hides the chevron icon.
     */
    hideChevron?: boolean;
    /**
     * Flag to determine if emphasized segments should be used.
     */
    useEmphasizedSegments?: boolean;
}
/**
 * Segmented accordion title action interface.
 */
export interface SegmentedAccordionTitleActionInterface extends StrictSegmentedAccordionTitleActionInterface {
    [key: string]: any;
}
/**
 * Strict Segmented accordion title action interface.
 */
export interface StrictSegmentedAccordionTitleActionInterface {
    /**
     * Type of the action to render the component.
     */
    type: "checkbox" | "toggle" | "icon";
    /**
     * On change callback.
     *
     * @param {React.FormEvent<HTMLInputElement> | React.MouseEvent<HTMLDivElement>} e - Change event.
     * @param data - Other arguments.
     */
    onChange?: (e: FormEvent<HTMLInputElement>, ...data: any[]) => void;
    /**
     * On click callback for the action.
     *
     * @param {React.FormEvent<HTMLInputElement> | React.MouseEvent<HTMLDivElement>} e - Click event.
     * @param data - Other arguments.
     */
    onClick?: (e: MouseEvent<HTMLDivElement>, ...data: any[]) => void;
    /**
     * Icon for the action. Only applicable for `type="icon"`.
     */
    icon?: SemanticICONS | GenericIconProps;
    /**
     * Label for the action.
     */
    label?: string;
    /**
     * Text for the popover.
     */
    popoverText?: string;
    /**
     * Inactive status of this action element.
     * Default value is always false {@link SegmentedAccordionTitle.defaultProps}
     */
    disabled?: boolean;
}
/**
 * Segmented accordion title component.
 *
 * @param {SegmentedAccordionTitlePropsInterface} props - Props injected to the component.
 *
 * @return {ReactElement}
 */
export declare const SegmentedAccordionTitle: FunctionComponent<SegmentedAccordionTitlePropsInterface>;
