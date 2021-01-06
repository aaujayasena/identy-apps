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
 * Utility class for local storage operations.
 */
export class LocalStorageUtils {
    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() { }
    /**
     * Set a value in local storage.
     *
     * @param {string} key - Key to set the value under.
     * @param {string} value - Value to be set.
     */
    static setValueInLocalStorage(key, value) {
        localStorage.setItem(key, value);
    }
    /**
     * Get a value from local storage.
     *
     * @param {string} key - Key to retrieve the value.
     * @returns {string} Value or null.
     */
    static getValueFromLocalStorage(key) {
        return localStorage.getItem(key);
    }
}
//# sourceMappingURL=storage-utils.js.map