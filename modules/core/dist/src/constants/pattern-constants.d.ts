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
 * Class containing regex patterns.
 */
export declare class PatternConstants {
    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    private constructor();
    /**
     * HTTP URL pattern regex.
     * @constant
     * @type {RegExp}
     * @default
     */
    static readonly HTTP_URL_REGEX_PATTERN: RegExp;
    /**
     * HTTPS URL pattern regex.
     * @constant
     * @type {RegExp}
     * @default
     */
    static readonly HTTPS_URL_REGEX_PATTERN: RegExp;
    /**
     * HTTPS/HTTP URL pattern regex.
     * @constant
     * @type {RegExp}
     * @default
     */
    static readonly HTTPS_OR_HTTP_REGEX_PATTERN: RegExp;
    /**
     * Data URL pattern regex.
     * @constant
     * @type {RegExp}
     * @default
     */
    static readonly DATA_URL_REGEX_PATTERN: RegExp;
    /**
     * Mobile deep link pattern regex.
     * @constant
     * @type {RegExp}
     * @default
     */
    static readonly MOBILE_DEEP_LINK_URL_REGEX_PATTERN: RegExp;
}
