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
 * Enum for common request loaders action types.
 *
 * @readonly
 * @enum {string}
 */
export var CommonRequestLoadersActionTypes;
(function (CommonRequestLoadersActionTypes) {
    /**
     * Action type to set if the profile info request is loading.
     *
     * @type {string}
     */
    CommonRequestLoadersActionTypes["SET_PROFILE_INFO_REQUEST_LOADING_STATUS"] = "SET_PROFILE_INFO_REQUEST_LOADING_STATUS";
    /**
     * Action type to set if the profile schema request is loading.
     *
     * @type {string}
     */
    CommonRequestLoadersActionTypes["SET_PROFILE_SCHEMA_REQUEST_LOADING_STATUS"] = "SET_PROFILE_SCHEMA_REQUEST_LOADING_STATUS";
    /**
     * Action type to set if the token request is loading.
     *
     * @type {string}
     */
    CommonRequestLoadersActionTypes["SET_TOKEN_REQUEST_LOADING_STATUS"] = "SET_TOKEN_REQUEST_LOADING_STATUS";
    /**
     * Action type to set if the sign out request is loading.
     *
     * @type {string}
     */
    CommonRequestLoadersActionTypes["SET_SIGN_OUT_REQUEST_LOADING_STATUS"] = "SET_SIGN_OUT_REQUEST_LOADING_STATUS";
    /**
     * Action type to set if the token revoke request is loading.
     *
     * @type {string}
     */
    CommonRequestLoadersActionTypes["SET_TOKEN_REVOKE_REQUEST_LOADING_STATUS"] = "SET_TOKEN_REVOKE_REQUEST_LOADING_STATUS";
})(CommonRequestLoadersActionTypes || (CommonRequestLoadersActionTypes = {}));
//# sourceMappingURL=loaders.js.map