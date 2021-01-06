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
 * Class containing Applications List Page constants.
 */
var ApplicationsListPageConstants = /** @class */ (function () {
    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    function ApplicationsListPageConstants() {
    }
    // URL Matcher
    ApplicationsListPageConstants.PAGE_URL_MATCHER = "/applications";
    // Table
    ApplicationsListPageConstants.TABLE_DATA_ATTR = "applications-list";
    ApplicationsListPageConstants.TABLE_BODY_DATA_ATTR = "data-table-body";
    ApplicationsListPageConstants.TABLE_ROW_DATA_ATTR = "data-table-row";
    ApplicationsListPageConstants.TABLE_ROW_HEADING_DATA_ATTR = "applications-list-item-heading";
    ApplicationsListPageConstants.TABLE_ROW_EDIT_BUTTON_DATA_ATTR = "applications-list-item-edit-button";
    ApplicationsListPageConstants.TABLE_ROW_DELETE_BUTTON_DATA_ATTR = "applications-list-item-delete-button";
    ApplicationsListPageConstants.TABLE_ROW_IMAGE_DATA_ATTR = "applications-list-item-image";
    ApplicationsListPageConstants.NEW_LIST_PLACEHOLDER = "applications-list-empty-placeholder";
    ApplicationsListPageConstants.NEW_LIST_PLACEHOLDER_ACTION_CONTAINER = "applications-list-empty-placeholder-" +
        "action-container";
    // Page Layout.
    ApplicationsListPageConstants.PAGE_LAYOUT_HEADER_DATA_ATTR = "applications-page-layout-page-header";
    ApplicationsListPageConstants.PAGE_LAYOUT_HEADER_TITLE_DATA_ATTR = "applications-page-layout-page-header-title";
    ApplicationsListPageConstants.PAGE_LAYOUT_HEADER_SUB_TITLE_DATA_ATTR = "applications-page-layout-page-header-" +
        "sub-title";
    ApplicationsListPageConstants.PAGE_LAYOUT_HEADER_ACTION = "applications-list-layout-add-button";
    return ApplicationsListPageConstants;
}());
export { ApplicationsListPageConstants };
