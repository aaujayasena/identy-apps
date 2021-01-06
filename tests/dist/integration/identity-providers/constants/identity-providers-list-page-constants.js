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
 * Class containing Identity Providers List Page constants.
 */
var IdentityProvidersListPageConstants = /** @class */ (function () {
    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    function IdentityProvidersListPageConstants() {
    }
    // URL Matcher
    IdentityProvidersListPageConstants.PAGE_URL_MATCHER = "/identity-providers";
    // Table
    IdentityProvidersListPageConstants.TABLE_DATA_ATTR = "idp-list";
    IdentityProvidersListPageConstants.TABLE_BODY_DATA_ATTR = "data-table-body";
    IdentityProvidersListPageConstants.TABLE_ROW_DATA_ATTR = "data-table-row";
    IdentityProvidersListPageConstants.TABLE_ROW_HEADING_DATA_ATTR = "idp-list-item-heading";
    IdentityProvidersListPageConstants.TABLE_ROW_EDIT_BUTTON_DATA_ATTR = "idp-list-item-edit-button";
    IdentityProvidersListPageConstants.TABLE_ROW_DELETE_BUTTON_DATA_ATTR = "idp-list-item-delete-button";
    IdentityProvidersListPageConstants.TABLE_ROW_IMAGE_DATA_ATTR = "idp-list-item-image";
    IdentityProvidersListPageConstants.NEW_LIST_PLACEHOLDER = "idp-list-empty-placeholder";
    IdentityProvidersListPageConstants.NEW_LIST_PLACEHOLDER_ACTION_CONTAINER = "idp-list-empty-placeholder-" +
        "action-container";
    // Page Layout.
    IdentityProvidersListPageConstants.PAGE_LAYOUT_HEADER_DATA_ATTR = "idp-page-layout-page-header";
    IdentityProvidersListPageConstants.PAGE_LAYOUT_HEADER_TITLE_DATA_ATTR = "idp-page-layout-page-header-title";
    IdentityProvidersListPageConstants.PAGE_LAYOUT_HEADER_SUB_TITLE_DATA_ATTR = "idp-page-layout-page-header-sub-title";
    IdentityProvidersListPageConstants.PAGE_LAYOUT_HEADER_ACTION = "idp-add-button";
    return IdentityProvidersListPageConstants;
}());
export { IdentityProvidersListPageConstants };
