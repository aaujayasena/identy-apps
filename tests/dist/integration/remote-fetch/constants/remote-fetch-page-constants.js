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
 * Class file containing remote configuration constants.
 */
var RemoteConfigurationPageConstants = /** @class */ (function () {
    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    function RemoteConfigurationPageConstants() {
    }
    RemoteConfigurationPageConstants.SAVE_CONFIG_DATA_ATTR = "remote-fetch-add-configuration";
    RemoteConfigurationPageConstants.CONFIG_FORM_DATA_ATTR = "remote-fetch-config-form";
    RemoteConfigurationPageConstants.REMOVE_CONFIG_DATA_ATTR = "remote-fetch-remove-configuration";
    RemoteConfigurationPageConstants.REMOVE_CONFIG_MODAL_DATA_ATTR = "remote-fetch-confirmation-modal";
    RemoteConfigurationPageConstants.REMOVE_CONFIG_MODAL_ASSERT_INPUT_DATA_ATTR = "remote-fetch-confirmation-modal-"
        + "assertion-input";
    RemoteConfigurationPageConstants.REMOVE_CONFIG_MODAL_CONFIRM_DATA_ATTR = "remote-fetch-confirmation-modal-confirm-"
        + "button";
    // Form Elements
    RemoteConfigurationPageConstants.CONFIG_FORM_GIT_URL_DATA_ATTR = "remote-fetch-form-git-url";
    RemoteConfigurationPageConstants.CONFIG_FORM_GIT_BRANCH_DATA_ATTR = "remote-fetch-form-git-branch";
    RemoteConfigurationPageConstants.CONFIG_FORM_GIT_DIRECTORY_DATA_ATTR = "remote-fetch-form-git-directory";
    RemoteConfigurationPageConstants.CONFIG_FORM_GIT_POLLING_DATA_ATTR = "remote-fetch-form-connection-polling";
    RemoteConfigurationPageConstants.CONFIG_FORM_GIT_USERNAME_DATA_ATTR = "remote-fetch-form-git-username";
    RemoteConfigurationPageConstants.CONFIG_FORM_GIT_ACCESS_TOKEN_DATA_ATTR = "remote-fetch-form-git-accesstoken";
    RemoteConfigurationPageConstants.CONFIG_FORM_GIT_SAVE_CONFIG_DATA_ATTR = "remote-fetch-save-configuration";
    RemoteConfigurationPageConstants.CONFIG_FORM_GIT_STATUS_DATA_ATTR = "remote-fetch-config-state";
    // Remote fetch application status layout
    RemoteConfigurationPageConstants.REMOTE_FETCH_APPLICATION_STATUS = "remote-fetch-status";
    RemoteConfigurationPageConstants.REMOTE_FETCH_TRIGGER_CONFIG = "remote-fetch-trigger-config";
    RemoteConfigurationPageConstants.REMOTE_FETCH_TRIGGER_SUCCESS = "remote-fetch-success";
    RemoteConfigurationPageConstants.REMOTE_FETCH_TRIGGER_FAILED = "remote-fetch-failed";
    // Page Layout.
    RemoteConfigurationPageConstants.PAGE_LAYOUT_HEADER_DATA_ATTR = "remote-fetch-page-layout-page-header";
    RemoteConfigurationPageConstants.PAGE_LAYOUT_HEADER_TITLE_DATA_ATTR = "remote-fetch-page-layout-page-header-title";
    return RemoteConfigurationPageConstants;
}());
export { RemoteConfigurationPageConstants };
