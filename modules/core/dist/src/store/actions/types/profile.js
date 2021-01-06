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
 * Enum for common profile action types.
 *
 * @readonly
 * @enum {string}
 */
export var CommonProfileActionTypes;
(function (CommonProfileActionTypes) {
    /**
     * Action type to set the profile info.
     *
     * @type {string}
     */
    CommonProfileActionTypes["SET_PROFILE_INFO"] = "SET_PROFILE_INFO";
    /**
     * Action type to set the profile schem
     *
     * @type {string}
     */
    CommonProfileActionTypes["SET_PROFILE_SCHEMAS"] = "SET_PROFILE_SCHEMAS";
    /**
     * Action type to set the profile linked accounts.
     *
     * @type {string}
     */
    CommonProfileActionTypes["SET_PROFILE_LINKED_ACCOUNTS"] = "SET_PROFILE_LINKED_ACCOUNTS";
    /**
     * Action type to toggle if SCIM is enabled for a particular user store.
     *
     * @type {string}
     */
    CommonProfileActionTypes["TOGGLE_SCIM_ENABLED"] = "TOGGLE_SCIM_ENABLED";
})(CommonProfileActionTypes || (CommonProfileActionTypes = {}));
//# sourceMappingURL=profile.js.map