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
import { GravatarFallbackTypes, MultiValueAttributeInterface, ProfileSchemaInterface } from "../models";
/**
 * Utility class for profile related operations.
 */
export declare class ProfileUtils {
    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    private constructor();
    /**
     * Builds the Gravatar URL.
     *
     * @param {string} emailAddress - Gravatar qualified email address.
     * @param {number} size - Size of the image from 1 up to 2048.
     * @param {string} defaultImage - Custom default fallback image URL.
     * @param {GravatarFallbackTypes} fallback - Built in fallback strategy.
     * @param {boolean} forceDefault - Forcefully use the fallback image.
     * @see {@link https://en.gravatar.com/site/implement/images/}
     * @return {string} Gravatar Image URL.
     */
    static buildGravatarURL(emailAddress: string, size?: number, defaultImage?: string, fallback?: GravatarFallbackTypes, forceDefault?: boolean): string;
    /**
     * This function extracts the sub attributes from the schemas and appends them to the main schema iterable.
     * The returned iterable will have all the schema attributes in a flat structure so that
     * you can just iterate through them to display them.
     *
     * @param {ProfileSchemaInterface[]} schemas - Array of Profile schemas
     * @param {string} parentSchemaName - Name of the parent attribute.
     * @return {ProfileSchemaInterface[]}
     */
    static flattenSchemas(schemas: ProfileSchemaInterface[], parentSchemaName?: string): ProfileSchemaInterface[];
    /**
     * This function checks if the passed schema  is of type `MultiValue`.
     *
     * @param {ProfileSchemaInterface[]} schemas - Array of schemas
     * @param {string} schemaName - Name of the parent schema.
     *
     * @return {boolean} attribute is MultiValue
     */
    static isMultiValuedSchemaAttribute: (schemas: ProfileSchemaInterface[], schemaName?: string) => boolean;
    /**
     * Type Guard to check if the passed in attribute is of type `String Array`.
     *
     * @param attribute - Profile attribute.
     * @return {attribute is string[]}
     */
    static isStringArray: (attribute: string[] | MultiValueAttributeInterface[]) => attribute is string[];
}
