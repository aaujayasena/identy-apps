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
import { DocumentationProviders, DocumentationStructureFileTypes } from "../models";
/**
 * Gets the document structure for `Developer Portal`, defined in the `mkdocs.yml`.
 * If the provider is "GITHUB", the function will use the necessary headers and params,
 * required by the GITHUB content API.
 * @see {@link https://github.com/wso2/docs-is/blob/master/en/mkdocs.yml}
 *
 * @param {string} url - URL to retrieve the structure from.
 * @param {DocumentationStructureFileTypes} fileType - Type of the structure file.
 * @param {DocumentationProviders} provider - Doc content provider.
 * @param {string} branch - If the provider is `GITHUB`, the branch to be used for fetching.
 *
 * @return {Promise<T>} A promise containing the response.
 */
export declare const getPortalDocumentationStructure: <T = {}>(url: string, fileType: DocumentationStructureFileTypes, provider: DocumentationProviders, branch: string) => Promise<T>;
/**
 * Gets the raw documentation content.
 * If the provider is "GITHUB", the function will use the necessary headers and params,
 * required by the GITHUB content API.
 *
 * @param {string} baseURL - Base URL to retrieve the content from.
 * @param {string} relativePath - Relative path to the actual content.
 * @param {DocumentationProviders} provider - Doc content provider.
 * @param {string} branch - If the provider is `GITHUB`, the branch to be used for fetching.
 *
 * @return {Promise<T>} A promise containing the response.
 */
export declare const getRawDocumentation: <T = {}>(baseURL: string, relativePath: string, provider: DocumentationProviders, branch: string) => Promise<T>;
