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
import { FunctionComponent, PropsWithChildren } from "react";
/**
 * Session Management Provider props interface.
 */
export interface SessionManagementProviderPropsInterface extends TestableComponentInterface {
    /**
     * Session timeout abort callback.
     * @param {URL} url - Current URL.
     */
    onSessionTimeoutAbort: (url: URL) => void;
    /**
     * Session logout callback.
     */
    onSessionLogout: () => void;
    /**
     * Modal options.
     */
    modalOptions?: SessionManagementModalOptionsInterface;
}
/**
 * Session Management modal options interface.
 */
export interface SessionManagementModalOptionsInterface {
    /**
     * Modal Heading localization key.
     */
    headingI18nKey: string;
    /**
     * Modal Description.
     */
    description: string;
    /**
     * Primary button text.
     */
    primaryButtonText: string;
    /**
     * Secondary button text.
     */
    secondaryButtonText: string;
}
/**
 * Session timeout event state interface.
 */
export interface SessionTimeoutEventStateInterface {
    /**
     * URL.
     */
    url: string;
    /**
     * Idle timeout duration.
     */
    idleTimeout: number;
    /**
     * Idle timeout warning time.
     */
    idleWarningTimeout: number;
}
/**
 * Session management provider component.
 *
 * @param {React.PropsWithChildren<SessionManagementProviderPropsInterface>} props - Props injected to the component.
 * @return {React.ReactElement}
 */
export declare const SessionManagementProvider: FunctionComponent<PropsWithChildren<SessionManagementProviderPropsInterface>>;
