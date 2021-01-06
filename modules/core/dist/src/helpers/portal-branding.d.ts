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
/**
 * Checks if the Logo file path provided in the config file should be resolved or not.
 * If the provided path is a hosted resource or a data URL, It is not required
 * to resolve the path relative to the bundle.
 *
 * @param {string} path - Given app logo path in config.
 *
 * @return Should the path be resolved or not.
 */
export declare const shouldResolveAppLogoFilePath: (path: string) => boolean;
/**
 * Resolves the app logo file path.
 *
 * @example
 * // returns "https://localhost:9443/sample-portal/assets/images/logo.jpg"
 * resolveAppLogoFilePath("/assets/images/logo.jpg", "https://localhost:9443/sample-portal/");
 * // returns "http://builtwithreact.io/img/logo.svg"
 * resolveAppLogoFilePath("http://builtwithreact.io/img/logo.svg", "https://localhost:9443/sample-portal/");
 *
 * @param {string} path - Given app logo path in config.
 *
 * @return Should the path be resolved or not.
 */
export declare const resolveAppLogoFilePath: (path: string, prefix: string) => string;
