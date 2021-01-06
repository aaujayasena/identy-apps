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
import { FeatureAccessConfigInterface } from "../models";
/**
 * Checks if the feature is enabled.
 *
 * @param {FeatureAccessConfigInterface} feature - Evaluating feature.
 * @param {string | string[]} key - Feature key/keys to check.
 *
 * @return {boolean} True is feature is enabled and false if not.
 */
export declare const isFeatureEnabled: (feature: FeatureAccessConfigInterface, key: string | string[]) => boolean;
/**
 * Checks if the required scopes are available to perform the desired CRUD operation.
 *
 * @param {FeatureAccessConfigInterface} feature - Evaluating feature.
 * @param {string[]} scopes - Set of scopes to check.
 * @param {string} allowedScopes - Set of allowed scopes.
 *
 * @return {boolean} True is scopes are enough and false if not.
 */
export declare const hasRequiredScopes: (feature: FeatureAccessConfigInterface, scopes: string[], allowedScopes: string) => boolean;
/**
 * Checks if the portal access is allowed.
 *
 * @remarks
 * Currently the check passes if at least one feature has the required read permissions.
 *
 * @param {FeatureAccessConfigInterface} featureConfig - Feature configuration.
 *
 * @return {boolean} True is access is granted, false if not.
 */
export declare const isPortalAccessGranted: <T = {}>(featureConfig: T, allowedScopes: string) => boolean;
