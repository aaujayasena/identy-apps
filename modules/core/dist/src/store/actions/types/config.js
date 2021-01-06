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
 * Enum for common config action types.
 *
 * @readonly
 * @enum {string}
 */
export var CommonConfigActionTypes;
(function (CommonConfigActionTypes) {
    /**
     * Action type to set the deployment configs.
     *
     * @type {string}
     */
    CommonConfigActionTypes["SET_DEPLOYMENT_CONFIGS"] = "SET_DEPLOYMENT_CONFIGS";
    /**
     * Action type to set the feature configs for an application.
     *
     * @type {string}
     */
    CommonConfigActionTypes["SET_FEATURE_CONFIGS"] = "SET_FEATURE_CONFIGS";
    /**
     * Action type to set the i18n related configs.
     *
     * @type {string}
     */
    CommonConfigActionTypes["SET_I18N_CONFIGS"] = "SET_I18N_CONFIGS";
    /**
     * Action type to set the service resource endpoints.
     *
     * @type {string}
     */
    CommonConfigActionTypes["SET_SERVICE_RESOURCE_ENDPOINTS"] = "SET_SERVICE_RESOURCE_ENDPOINTS";
    /**
     * Action type to set the UI related configs.
     *
     * @type {string}
     */
    CommonConfigActionTypes["SET_UI_CONFIGS"] = "SET_UI_CONFIGS";
})(CommonConfigActionTypes || (CommonConfigActionTypes = {}));
//# sourceMappingURL=config.js.map