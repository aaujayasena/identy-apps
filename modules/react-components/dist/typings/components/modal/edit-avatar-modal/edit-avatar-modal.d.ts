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
/**
 * Edit Avatar Modal props interface.
 */
export interface EditAvatarModalPropsInterface extends ModalProps, TestableComponentInterface {
    /**
     * Set of Emails to look for Gravatar.
     */
    emails?: string[];
    /**
     * Modal Heading.
     */
    heading?: ReactNode;
    /**
     * Name to use for system generated avatar.
     */
    name: string;
    /**
     * Cancel button text.
     */
    cancelButtonText?: string;
    /**
     * Submit button text.
     */
    submitButtonText?: string;
    /**
     * Callback function for the submit button.
     * @param {<HTMLButtonElement>} e - Event.
     * @param {string} url - Submitted URL.
     */
    onSubmit?: (e: MouseEvent<HTMLButtonElement>, url: string) => void;
    /**
     * Callback function for the cancel button.
     * @param {<HTMLButtonElement>} e - Event.
     */
    onCancel?: (e: MouseEvent<HTMLButtonElement>) => void;
    /**
     * i18n translations for modal content.
     */
    translations?: EditAvatarModalContentI18nInterface;
    /**
     * Existing profile image url.
     */
    imageUrl?: string;
}
/**
 * Different Avatar types.
 */
export declare enum AvatarTypes {
    SYSTEM_GENERATED = "SYSTEM_GENERATED",
    GRAVATAR = "GRAVATAR",
    URL = "URL"
}
/**
 * Interface for the i18n string of the component.
 */
export interface EditAvatarModalContentI18nInterface {
    gravatar: {
        heading: ReactNode;
        errors: {
            noAssociation: {
                header: ReactNode;
                content: ReactNode;
            };
        };
    };
    hostedAvatar: {
        heading: ReactNode;
        input: {
            errors: {
                http: {
                    header: ReactNode;
                    content: ReactNode;
                };
                invalid: {
                    content: string;
                    pointing: string;
                };
            };
            placeholder: string;
            hint: string;
            warnings: {
                dataURL: {
                    header: ReactNode;
                    content: ReactNode;
                };
            };
        };
    };
    systemGenAvatars: {
        heading: ReactNode;
        types: {
            initials: ReactNode;
        };
    };
}
/**
 * Edit Avatar modal.
 *
 * @param {EditAvatarModalPropsInterface} props - Props injected to the component.
 * @return {React.ReactElement}
 */
export declare const EditAvatarModal: FunctionComponent<EditAvatarModalPropsInterface>;
