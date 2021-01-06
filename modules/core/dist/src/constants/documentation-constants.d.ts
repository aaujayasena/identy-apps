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
 * Class containing documentation constants which can be used across several applications.
 */
export declare class DocumentationConstants {
    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    private constructor();
    /**
     * Documentation structure file name.
     * @constant
     * @type {string}
     */
    static readonly STRUCTURE_FILE_NAME: string;
    /**
     * Base URL of the Github API.
     * @constant
     * @type {string}
     */
    static readonly GITHUB_API_BASE_URL: string;
    /**
     * Fetches the documentation from the specified branch
     * @constant
     * @type {string}
     */
    static readonly DEFAULT_BRANCH: string;
    /**
     * Documentation repo owner.
     * @constant
     * @type {string}
     */
    static readonly DEFAULT_REPO_OWNER: string;
    /**
     * Documentation repo.
     * @constant
     * @type {string}
     */
    static readonly DEFAULT_REPO: string;
    /**
     * Base path used by `markdown_include`plugin.
     * @constant
     * @type {string}
     */
    static readonly DEFAULT_CONTENT_BASE_PATH: string;
    /**
     * Documentation default locale.
     * @constant
     * @type {string}
     */
    static readonly DEFAULT_LOCALE: string;
    /**
     * Github contents API endpoint.
     * @constant
     * @type {string}
     */
    static readonly GITHUB_CONTENTS_API_ENDPOINT: string;
    /**
     * Default content base URL.
     * @constant
     * @type {string}
     */
    static readonly DEFAULT_CONTENT_BASE_URL: string;
    /**
     * Default structure file URL.
     * @constant
     * @type {string}
     */
    static readonly DEFAULT_STRUCTURE_FILE_URL: string;
    /**
     * Default image prefix URL.
     * @constant
     * @type {string}
     */
    static readonly DEFAULT_IMAGE_PREFIX_URL: string;
    static readonly STRUCTURE_FETCH_ERROR: string;
    static readonly RAW_CONTENT_FETCH_ERROR: string;
}
