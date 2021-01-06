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
 * Class containing Email Template Types constants.
 */
var EmailTemplateTypesListPageConstants = /** @class */ (function () {
    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    function EmailTemplateTypesListPageConstants() {
    }
    // Table
    EmailTemplateTypesListPageConstants.TABLE_DATA_ATTR = "email-template-types-list";
    EmailTemplateTypesListPageConstants.TABLE_BODY_DATA_ATTR = "data-table-body";
    EmailTemplateTypesListPageConstants.TABLE_ROW_DATA_ATTR = "data-table-row";
    EmailTemplateTypesListPageConstants.TABLE_ROW_HEADING_DATA_ATTR = "email-template-types-list-item-heading";
    EmailTemplateTypesListPageConstants.TABLE_ROW_EDIT_BUTTON_DATA_ATTR = "email-template-types-list-item-edit-button";
    EmailTemplateTypesListPageConstants.TABLE_ROW_DELETE_BUTTON_DATA_ATTR = "email-template-types-list-item-delete-button";
    EmailTemplateTypesListPageConstants.TABLE_ROW_IMAGE_DATA_ATTR = "email-template-types-list-item-image";
    // Page Layout.
    EmailTemplateTypesListPageConstants.PAGE_LAYOUT_HEADER_DATA_ATTR = "email-template-types-page-layout-page-header";
    EmailTemplateTypesListPageConstants.PAGE_LAYOUT_HEADER_TITLE_DATA_ATTR = "email-template-types-page-layout-page-" +
        "header-title";
    EmailTemplateTypesListPageConstants.PAGE_LAYOUT_HEADER_SUB_TITLE_DATA_ATTR = "email-template-types-page-layout-" +
        "page-header-sub-title";
    EmailTemplateTypesListPageConstants.PAGE_LAYOUT_HEADER_ACTION = "email-template-types-list-layout-add-button";
    // Wizard.
    EmailTemplateTypesListPageConstants.ADD_WIZARD_DATA_ATTR = "email-template-types-add-wizard";
    EmailTemplateTypesListPageConstants.CREATE_TEMPLATE_TYPE_BUTTON_DATA_ATTR = "email-template-types-add-wizard-create" +
        "-button";
    EmailTemplateTypesListPageConstants.TEMPLATE_TYPE_NAME_INPUT_DATA_ATTR = "email-template-types-add-wizard-form-type" +
        "-input";
    return EmailTemplateTypesListPageConstants;
}());
export { EmailTemplateTypesListPageConstants };
