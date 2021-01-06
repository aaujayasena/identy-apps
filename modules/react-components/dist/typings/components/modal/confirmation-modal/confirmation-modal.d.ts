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
import { FunctionComponent, MouseEvent, ReactNode } from "react";
import { ModalProps } from "semantic-ui-react";
import { ConfirmationModalContent } from "./confirmation-modal-content";
import { ConfirmationModalDescription } from "./confirmation-modal-description";
import { ConfirmationModalHeader } from "./confirmation-modal-header";
import { ConfirmationModalMessage } from "./confirmation-modal-message";
/**
 * Confirmation modal component props.
 */
export interface ConfirmationModalPropsInterface extends ModalProps, TestableComponentInterface {
    /**
     * If the animated icons should be shown.
     */
    animated?: boolean;
    /**
     * Assertion text. If set, the primary action will only be enabled
     * after a matching input is entered or checkbox is being pressed.
     */
    assertion?: string;
    /**
     * Hint for the assertion.
     */
    assertionHint?: ReactNode;
    /**
     * Type of the assertion.
     */
    assertionType?: "input" | "checkbox";
    /**
     * Confirmation modal emphasis.
     */
    type: "positive" | "negative" | "warning" | "info";
    /**
     * Primary action button label.
     */
    primaryAction?: string;
    /**
     * Should primary action button appear in full length.
     */
    primaryActionFluid?: boolean;
    /**
     * Secondary action button label.
     */
    secondaryAction?: string;
    /**
     * Callback function for the primary action button.
     */
    onPrimaryActionClick?: (e: MouseEvent<HTMLElement>) => void;
    /**
     * Callback function for the secondary action button.
     */
    onSecondaryActionClick?: (e: MouseEvent<HTMLElement>) => void;
    /**
     * Text alignment.
     */
    textAlign?: "left" | "center" | "right" | "justified";
}
/**
 * Interface for the confirmation modal sub component.
 */
export interface ConfirmationModalSubComponentsInterface {
    Header: typeof ConfirmationModalHeader;
    Content: typeof ConfirmationModalContent;
    Description: typeof ConfirmationModalDescription;
    Message: typeof ConfirmationModalMessage;
}
/**
 * Confirmation modal component.
 *
 * @param {ConfirmationModalPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export declare const ConfirmationModal: FunctionComponent<ConfirmationModalPropsInterface> & ConfirmationModalSubComponentsInterface;
