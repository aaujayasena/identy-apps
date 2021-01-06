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
 *
 */
/**
 * Utility class for authenticate operations.
 */
export declare class AuthenticateUtils {
    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    private constructor();
    /**
     * Checks if the logged in user has login scope.
     *
     * @return {boolean} True or false.
     */
    static hasLoginPermission(allowedScopes: string): boolean;
    /**
     * Checks if the logged in user has a specific scope.
     *
     * @return {boolean} True or false.
     */
    static hasScope(scope: string, allowedScopes: string): boolean;
    /**
     * Get the authentication callback URL from the session storage.
     *
     * @param {string} app - The name of the app.
     * @return {string} Authentication Callback from session.
     */
    static getAuthenticationCallbackUrl(app: string): string;
    /**
     * Update the authentication callback URL in the session storage.
     * This is used to improve UX in automatic sign-out scenarios due to session timeouts etc.
     *
     * @param {string} app - The name of the app.
     * @param {string} location - history path.
     */
    static updateAuthenticationCallbackUrl(app: string, location: string): void;
    /**
     * @param {string} app - The name of the app.
     * Removes the authentication callback URL from the session storage.
     */
    static removeAuthenticationCallbackUrl(app: string): void;
}
