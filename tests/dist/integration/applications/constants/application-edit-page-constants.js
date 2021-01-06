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
 * Class containing Applications Edit Page constants.
 */
var ApplicationEditPageConstants = /** @class */ (function () {
    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    function ApplicationEditPageConstants() {
    }
    // URL Matcher
    ApplicationEditPageConstants.PAGE_URL_MATCHER = "?state=new";
    // Sample PEM file path.
    ApplicationEditPageConstants.SAMPLE_VALID_PEM_FILE_PATH = "applications/sample-valid-cert.txt";
    ApplicationEditPageConstants.SAMPLE_INVALID_PEM_FILE_PATH = "applications/sample-invalid-cert.txt";
    // Page Layout.
    ApplicationEditPageConstants.PAGE_LAYOUT_HEADER_DATA_ATTR = "application-edit-page-layout-page-header";
    ApplicationEditPageConstants.PAGE_LAYOUT_HEADER_TITLE_DATA_ATTR = "application-edit-page-layout-page-header-" +
        "title";
    ApplicationEditPageConstants.PAGE_LAYOUT_HEADER_SUB_TITLE_DATA_ATTR = "application-edit-page-layout-page-" +
        "header-sub-title";
    ApplicationEditPageConstants.PAGE_LAYOUT_HEADER_BACK_BUTTON_DATA_ATTR = "application-edit-page-back-button";
    // Tabs
    ApplicationEditPageConstants.RESOURCE_TABS_DATA_ATTR = "application-edit-resource-tabs";
    ApplicationEditPageConstants.RESOURCE_TABS_MENU_DATA_ATTR = "div[class=\"ui pointing secondary menu\"";
    // Access Configuration
    ApplicationEditPageConstants.PROTOCOL_ACCORDION_DATA_ATTR = "application-edit-access-settings-protocol-accordion";
    ApplicationEditPageConstants.ADD_PROTOCOL_BUTTON_DATA_ATTR = "application-edit-access-settings-new-protocol-" +
        "button";
    ApplicationEditPageConstants.ADD_PROTOCOL_WIZARD_DATA_ATTR = "application-edit-access-settings-protocol-add-" +
        "wizard-modal";
    ApplicationEditPageConstants.ADD_PROTOCOL_WIZARD_CANCEL_BUTTON_DATA_ATTR = "application-edit-access-settings-" +
        "protocol-add-wizard-cancel-button";
    ApplicationEditPageConstants.OIDC_PROTOCOL_ACCORDION_ITEM_DATA_ATTR = "application-edit-access-settings-" +
        "protocol-accordion-oidc-title";
    ApplicationEditPageConstants.OIDC_PROTOCOL_ACCORDION_ITEM_CHEVRON_DATA_ATTR = "application-edit-access-" +
        "settings-protocol-accordion-oidc-title-chevron";
    //Attribute selection
    ApplicationEditPageConstants.ATTRIBUTE_SELECTION_LIST_DATA_ATTR = "application-edit-attribute-settings-" +
        "attribute-selection";
    ApplicationEditPageConstants.SUBJECT_ATTRIBUTE_DROPDOWN_DATA_ATTR = "application-edit-attribute-settings-" +
        "advanced-attribute-settings-form-subject-attribute-dropdown";
    ApplicationEditPageConstants.INCLUDE_USERSTORE_CHECKBOX_DATA_ATTR = "application-edit-attribute-settings-" +
        "advanced-attribute-settings-form-subject-iInclude-user-domain-checkbox";
    ApplicationEditPageConstants.INCLUDE_TENANT_DOMAIN_CHECKBOX_DATA_ATTR = "application-edit-attribute-settings-" +
        "advanced-attribute-settings-form-subject-include-tenant-domain-checkbox";
    ApplicationEditPageConstants.USED_MAPPED_LOCAL_SUBJECT_CHECKBOX_DATA_ATTR = "application-edit-attribute-" +
        "settings-advanced-attribute-settings-form-subject-use-mapped-local-subject-checkbox";
    ApplicationEditPageConstants.ROLE_ATTRIBUTE_DROPDOWN_DATA_ATTR = "application-edit-attribute-settings-" +
        "advanced-attribute-settings-form-role-attribute-dropdown";
    // General Settings Form
    ApplicationEditPageConstants.APP_NAME_INPUT_DATA_ATTR = "application-edit-general-settings-" +
        "form-application-name-input";
    ApplicationEditPageConstants.APP_DESCRIPTION_INPUT_DATA_ATTR = "application-edit-general-settings-form-" +
        "application-description-textarea";
    ApplicationEditPageConstants.APP_IMAGE_INPUT_DATA_ATTR = "application-edit-general-settings-form-" +
        "application-image-url-input";
    ApplicationEditPageConstants.APP_DISCOVERABLE_CHECKBOX_DATA_ATTR = "application-edit-general-settings-form-" +
        "application-discoverable-checkbox";
    ApplicationEditPageConstants.APP_ACCESS_URL_INPUT_DATA_ATTR = "application-edit-general-settings-form-" +
        "application-access-url-input";
    ApplicationEditPageConstants.APP_CERT_JWKS_URL_INPUT_DATA_ATTR = "application-edit-general-settings-form-jwks-" +
        "input";
    ApplicationEditPageConstants.APP_CERT_RADIO_GROUP_DATA_ATTR = "application-edit-general-settings-form-" +
        "certificate-type-radio-group";
    ApplicationEditPageConstants.GENERAL_SETTINGS_SUBMIT_BUTTON_DATA_ATTR = "application-edit-general-settings-" +
        "form-submit-button";
    ApplicationEditPageConstants.APP_PEM_CERT_INPUT_DATA_ATTR = "application-edit-general-settings-form-" +
        "certificate-textarea";
    ApplicationEditPageConstants.APP_PEM_CERT_PREVIEW_BUTTON_DATA_ATTR = "application-edit-general-settings-form-" +
        "certificate-info-button";
    ApplicationEditPageConstants.APP_PEM_CERT_PREVIEW_MODAL_DATA_ATTR = "application-edit-general-settings-form-" +
        "view-certificate-modal";
    ApplicationEditPageConstants.APP_PEM_CERT_PREVIEW_MODAL_DIMMER_DATA_ATTR = "div[class=\"ui page modals dimmer " +
        "transition visible active\"]";
    ApplicationEditPageConstants.DANGER_ZONE_DELETE_BUTTON_DATA_ATTR = "application-edit-general-settings-danger-" +
        "zone-delete-button";
    ApplicationEditPageConstants.APP_DELETE_ASSERTION_DATA_ATTR = "application-name-assertion";
    ApplicationEditPageConstants.APP_DELETE_ASSERTION_INPUT_DATA_ATTR = "application-edit-general-settings-" +
        "application-delete-confirmation-modal-assertion-input";
    ApplicationEditPageConstants.APP_DELETE_CONFIRM_BUTTON_DATA_ATTR = "application-edit-general-settings-" +
        "application-delete-confirmation-modal-confirm-button";
    ApplicationEditPageConstants.APP_DELETE_CONFIRM_MODAL_CLOSE_BUTTON_DATA_ATTR = "application-edit-general-" +
        "settings-application-delete-confirmation-modal-cancel-button";
    return ApplicationEditPageConstants;
}());
export { ApplicationEditPageConstants };
