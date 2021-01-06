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
import { CryptoUtils } from "./crypto-utils";
import { UIConstants } from "../constants";
/**
 * Utility class for profile related operations.
 */
export class ProfileUtils {
    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() { }
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
    static buildGravatarURL(emailAddress, size, defaultImage, fallback = "404", forceDefault) {
        const URL = UIConstants.GRAVATAR_URL + "/avatar/" + CryptoUtils.MD5Hash(emailAddress);
        const params = [];
        if (size) {
            params.push("s=" + size);
        }
        if (defaultImage) {
            params.push("d=" + encodeURIComponent(defaultImage));
        }
        else if (fallback !== "default") {
            params.push("d=" + fallback);
        }
        if (forceDefault) {
            params.push("f=y");
        }
        return URL + "?" + params.join("&");
    }
    /**
     * This function extracts the sub attributes from the schemas and appends them to the main schema iterable.
     * The returned iterable will have all the schema attributes in a flat structure so that
     * you can just iterate through them to display them.
     *
     * @param {ProfileSchemaInterface[]} schemas - Array of Profile schemas
     * @param {string} parentSchemaName - Name of the parent attribute.
     * @return {ProfileSchemaInterface[]}
     */
    static flattenSchemas(schemas, parentSchemaName) {
        const tempSchemas = [];
        schemas.forEach((schema) => {
            if (schema.subAttributes && schema.subAttributes.length > 0) {
                // Add the email schema.
                if (schema.multiValued && schema.name !== "roles" && schema.name !== "phoneNumbers") {
                    tempSchemas.push(schema);
                }
                /**
                 * If the schema has sub attributes, then this function will be recursively called.
                 * The returned attributes are pushed into the `tempSchemas` array.
                 */
                tempSchemas.push(...ProfileUtils.flattenSchemas(schema.subAttributes, schema.name));
            }
            else {
                const tempSchema = Object.assign({}, schema);
                if (parentSchemaName) {
                    tempSchema.name = parentSchemaName + "." + schema.name;
                }
                tempSchemas.push(tempSchema);
            }
        });
        return tempSchemas;
    }
}
/**
 * This function checks if the passed schema  is of type `MultiValue`.
 *
 * @param {ProfileSchemaInterface[]} schemas - Array of schemas
 * @param {string} schemaName - Name of the parent schema.
 *
 * @return {boolean} attribute is MultiValue
 */
ProfileUtils.isMultiValuedSchemaAttribute = (schemas, schemaName) => {
    const parentSchema = schemas === null || schemas === void 0 ? void 0 : schemas.find((schema) => (schema === null || schema === void 0 ? void 0 : schema.name) === schemaName);
    return parentSchema === null || parentSchema === void 0 ? void 0 : parentSchema.multiValued;
};
/**
 * Type Guard to check if the passed in attribute is of type `String Array`.
 *
 * @param attribute - Profile attribute.
 * @return {attribute is string[]}
 */
ProfileUtils.isStringArray = (attribute) => {
    return (attribute === null || attribute === void 0 ? void 0 : attribute.length) !== undefined;
};
//# sourceMappingURL=profile-utils.js.map