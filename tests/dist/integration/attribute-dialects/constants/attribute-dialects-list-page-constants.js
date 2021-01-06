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
 * Class containing Attribute Dialects List Page constants.
 */
var AttributeDialectsListPageConstants = /** @class */ (function () {
    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    function AttributeDialectsListPageConstants() {
    }
    // URL Matcher
    AttributeDialectsListPageConstants.PAGE_URL_MATCHER = "/claim-dialects";
    // Table
    AttributeDialectsListPageConstants.TABLE_DATA_ATTR = "attribute-dialects-list";
    AttributeDialectsListPageConstants.TABLE_BODY_DATA_ATTR = "data-table-body";
    AttributeDialectsListPageConstants.TABLE_ROW_DATA_ATTR = "data-table-row";
    AttributeDialectsListPageConstants.TABLE_ROW_SUB_HEADING_DATA_ATTR = "attribute-dialects-list-item-sub-heading";
    AttributeDialectsListPageConstants.TABLE_ROW_EDIT_BUTTON_DATA_ATTR = "attribute-dialects-list-item-edit-button";
    AttributeDialectsListPageConstants.TABLE_ROW_DELETE_BUTTON_DATA_ATTR = "attribute-dialects-list-item-delete-button";
    AttributeDialectsListPageConstants.TABLE_ROW_IMAGE_DATA_ATTR = "attribute-dialects-list-item-image";
    AttributeDialectsListPageConstants.NEW_LIST_PLACEHOLDER = "attribute-dialects-list-empty-placeholder";
    AttributeDialectsListPageConstants.NEW_LIST_PLACEHOLDER_ACTION_CONTAINER = "attribute-dialects-list-empty-" +
        "placeholder-action-container";
    // Page Layout.
    AttributeDialectsListPageConstants.PAGE_LAYOUT_HEADER_DATA_ATTR = "attribute-dialects-page-layout-page-header";
    AttributeDialectsListPageConstants.PAGE_LAYOUT_HEADER_TITLE_DATA_ATTR = "attribute-dialects-page-layout-page-header-" +
        "title";
    AttributeDialectsListPageConstants.PAGE_LAYOUT_HEADER_SUB_TITLE_DATA_ATTR = "attribute-dialects-page-layout-page-" +
        "header-sub-title";
    AttributeDialectsListPageConstants.PAGE_LAYOUT_HEADER_ACTION = "attribute-dialects-list-layout-add-button";
    AttributeDialectsListPageConstants.LOCAL_DIALECT_CONTAINER_DATA_ATTR = "attribute-dialects-local-dialect-container";
    // Add dialect wizard
    AttributeDialectsListPageConstants.ADD_DIALECT_WIZARD_DATA_ATTR = "attribute-dialects-add-dialect-wizard";
    AttributeDialectsListPageConstants.ADD_DIALECT_WIZARD_DIALECT_URI_INPUT_DATA_ATTR = "attribute-dialects-add-dialect-" +
        "wizard-dialect-details-form-dialect-uri-input";
    AttributeDialectsListPageConstants.ADD_DIALECT_WIZARD_ATTRIBUTE_URI_INPUT_DATA_ATTR = "attribute-dialects-add-dialect-" +
        "wizard-external-claims-add-external-claims-form-claim-uri-input";
    AttributeDialectsListPageConstants.ADD_DIALECT_WIZARD_LOCAL_ATTR_DROPDOWN_DATA_ATTR = "attribute-dialects-" +
        "add-dialect-wizard-external-claims-add-external-claims-form-local-claim-dropdown";
    AttributeDialectsListPageConstants.ADD_DIALECT_WIZARD_LOCAL_ATTR_DROPDOWN_OPTIONS_DATA_ATTR = "div" +
        "[role=\"listbox\"]";
    AttributeDialectsListPageConstants.ADD_DIALECT_WIZARD_ADD_EXTERNAL_ATTR_BUTTON_DATA_ATTR = "attribute-dialects-" +
        "add-dialect-wizard-external-claims-add-external-claims-form-submit-button";
    AttributeDialectsListPageConstants.ADD_DIALECT_WIZARD_CANCEL_BUTTON_DATA_ATTR = "attribute-dialects-add-dialect-wizard-" +
        "cancel-button";
    AttributeDialectsListPageConstants.ADD_DIALECT_WIZARD_NEXT_BUTTON_DATA_ATTR = "attribute-dialects-add-dialect-" +
        "wizard-next-button";
    AttributeDialectsListPageConstants.ADD_DIALECT_WIZARD_PREVIOUS_BUTTON_DATA_ATTR = "attribute-dialects-add-dialect-" +
        "wizard-previous-button";
    AttributeDialectsListPageConstants.ADD_DIALECT_WIZARD_FINISH_BUTTON_DATA_ATTR = "attribute-dialects-add-dialect-wizard-" +
        "finish-button";
    return AttributeDialectsListPageConstants;
}());
export { AttributeDialectsListPageConstants };
