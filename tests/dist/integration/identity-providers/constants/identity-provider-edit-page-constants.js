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
 * Class containing Identity Provider Edit Page constants.
 */
var IdentityProviderEditPageConstants = /** @class */ (function () {
    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    function IdentityProviderEditPageConstants() {
    }
    // URL Matcher
    IdentityProviderEditPageConstants.PAGE_URL_MATCHER = "?state=new";
    // Page Layout.
    IdentityProviderEditPageConstants.PAGE_LAYOUT_HEADER_DATA_ATTR = "idp-edit-page-page-layout-page-header";
    IdentityProviderEditPageConstants.PAGE_LAYOUT_HEADER_TITLE_DATA_ATTR = "idp-edit-page-page-layout-page-header-title";
    IdentityProviderEditPageConstants.PAGE_LAYOUT_HEADER_SUB_TITLE_DATA_ATTR = "idp-edit-page-page-layout-page-header-" +
        "sub-title";
    IdentityProviderEditPageConstants.PAGE_LAYOUT_HEADER_BACK_BUTTON_DATA_ATTR = "idp-edit-page-page-back-button";
    IdentityProviderEditPageConstants.PAGE_LAYOUT_HEADER_IMAGE_WRAPPER_DATA_ATTR = "idp-edit-page-page-layout-page-" +
        "header-image";
    // Tabs
    IdentityProviderEditPageConstants.RESOURCE_TABS_DATA_ATTR = "idp-edit-page-resource-tabs";
    IdentityProviderEditPageConstants.RESOURCE_TABS_MENU_DATA_ATTR = "div[class=\"ui pointing secondary menu\"";
    // General Settings Form
    IdentityProviderEditPageConstants.IDP_NAME_INPUT_DATA_ATTR = "idp-edit-page-general-settings-form-idp-name";
    IdentityProviderEditPageConstants.IDP_DESCRIPTION_INPUT_DATA_ATTR = "idp-edit-page-general-settings-form-idp-description";
    IdentityProviderEditPageConstants.IDP_IMAGE_INPUT_DATA_ATTR = "idp-edit-page-general-settings-form-idp-image";
    IdentityProviderEditPageConstants.GENERAL_SETTINGS_SUBMIT_BUTTON_DATA_ATTR = "idp-edit-page-general-settings-form-" +
        "update-button";
    // Certificates section
    IdentityProviderEditPageConstants.IDP_CERT_RADIO_GROUP_DATA_ATTR = "idp-edit-advance-settings-certificate-type-" +
        "radio-group";
    IdentityProviderEditPageConstants.IDP_CERT_JWKS_URL_INPUT_DATA_ATTR = "add-idp-jwks-endpoint-form-certificate-jwks";
    IdentityProviderEditPageConstants.IDP_CERT_UPDATE_BUTTON_DATA_ATTR = "add-idp-jwks-endpoint-form-save-button";
    // Danger Zone
    IdentityProviderEditPageConstants.DANGER_ZONE_DELETE_BUTTON_DATA_ATTR = "idp-edit-page-general-settings-" +
        "delete-idp-danger-zone-delete-button";
    IdentityProviderEditPageConstants.IDP_DELETE_ASSERTION_DATA_ATTR = "idp-name-assertion";
    IdentityProviderEditPageConstants.IDP_DELETE_ASSERTION_INPUT_DATA_ATTR = "idp-edit-page-general-settings-delete-idp" +
        "-confirmation-assertion-input";
    IdentityProviderEditPageConstants.IDP_DELETE_CONFIRM_BUTTON_DATA_ATTR = "idp-edit-page-general-settings-delete-" +
        "idp-confirmation-confirm-button";
    IdentityProviderEditPageConstants.IDP_DELETE_CONFIRM_MODAL_CLOSE_BUTTON_DATA_ATTR = "idp-edit-page-general-settings" +
        "-delete-idp-confirmation-cancel-button";
    //Attribute selection
    IdentityProviderEditPageConstants.CLAIM_ATTR_SELECT_WIZARD_DATA_ATTR = "idp-edit-page-attribute-settings-" +
        "claim-attribute-selection-wizard-modal-header";
    IdentityProviderEditPageConstants.CLAIM_ATTR_SELECT_WIZARD_UNSELECTED_LIST_DATA_ATTR = "idp-edit-page-" +
        "attribute-settings-claim-attribute-selection-wizard-modal-content-unselected-groups";
    IdentityProviderEditPageConstants.CLAIM_ATTR_SELECT_WIZARD_SELECTED_LIST_DATA_ATTR = "idp-edit-page-attribute-" +
        "settings-claim-attribute-selection-wizard-modal-content-selected-groups";
    IdentityProviderEditPageConstants.CLAIM_ATTR_SELECT_WIZARD_LIST_ADD_BUTTON_DATA_ATTR = "idp-edit-page-" +
        "attribute-settings-claim-attribute-selection-wizard-modal-content-unselected-groups-add-button";
    IdentityProviderEditPageConstants.CLAIM_ATTR_SELECT_WIZARD_LIST_REMOVE_BUTTON_DATA_ATTR = "idp-edit-page-" +
        "attribute-settings-claim-attribute-selection-wizard-modal-content-unselected-groups-remove-button";
    IdentityProviderEditPageConstants.CLAIM_ATTR_SELECT_WIZARD_LIST_SAVE_BUTTON_DATA_ATTR = "idp-edit-page-" +
        "attribute-settings-claim-attribute-selection-wizard-modal-save-button";
    IdentityProviderEditPageConstants.CLAIM_ATTR_SELECT_WIZARD_LIST_CANCEL_BUTTON_DATA_ATTR = "idp-edit-page-" +
        "attribute-settings-claim-attribute-selection-wizard-modal-cancel-button";
    IdentityProviderEditPageConstants.CLAIM_ATTR_SELECT_LIST_DATA_ATTR = "idp-edit-page-attribute-settings-claim-" +
        "attribute-selection";
    IdentityProviderEditPageConstants.CLAIM_ATTR_SELECT_LIST_EMPTY_PLACEHOLDER_DATA_ATTR = "idp-edit-page-" +
        "attribute-settings-claim-attribute-selection-empty-placeholder";
    IdentityProviderEditPageConstants.CLAIM_ATTR_SELECT_LIST_EMPTY_PLACEHOLDER_ACTION_DATA_ATTR = "idp-edit-page-" +
        "attribute-settings-claim-attribute-selection-empty-placeholder-action-container";
    IdentityProviderEditPageConstants.CLAIM_ATTR_SELECT_LIST_EDIT_BUTTON_DATA_ATTR = "idp-edit-page-" +
        "attribute-settings-claim-attribute-selection-edit-button";
    IdentityProviderEditPageConstants.SUBJECT_ATTRIBUTE_DROPDOWN_DATA_ATTR = "application-edit-attribute-settings-" +
        "advanced-attribute-settings-form-subject-attribute-dropdown";
    return IdentityProviderEditPageConstants;
}());
export { IdentityProviderEditPageConstants };
