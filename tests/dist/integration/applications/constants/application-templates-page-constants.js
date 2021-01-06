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
 * Class containing Applications Templates Page constants.
 */
var ApplicationTemplatesPageConstants = /** @class */ (function () {
    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    function ApplicationTemplatesPageConstants() {
    }
    // URL Matcher
    ApplicationTemplatesPageConstants.PAGE_URL_MATCHER = "/applications/templates";
    // Page Layout.
    ApplicationTemplatesPageConstants.PAGE_LAYOUT_HEADER_DATA_ATTR = "application-templates-page-layout-page-header";
    ApplicationTemplatesPageConstants.PAGE_LAYOUT_HEADER_TITLE_DATA_ATTR = "application-templates-page-layout-page-" +
        "header-title";
    ApplicationTemplatesPageConstants.PAGE_LAYOUT_HEADER_SUB_TITLE_DATA_ATTR = "application-templates-page-layout-page-" +
        "header-sub-title";
    ApplicationTemplatesPageConstants.PAGE_LAYOUT_HEADER_BACK_BUTTON_DATA_ATTR = "application-templates-page-back-button";
    ApplicationTemplatesPageConstants.SEARCH_INPUT_DATA_ATTR = "application-templates-search";
    ApplicationTemplatesPageConstants.SORT_DROPDOWN_DATA_ATTR = "application-templates-sort";
    // Application template types.
    ApplicationTemplatesPageConstants.QUICK_START_TEMPLATE_GRID = "application-templates-quick-start-template-grid";
    ApplicationTemplatesPageConstants.VENDOR_TEMPLATE_GRID = "application-templates-custom-template-grid";
    ApplicationTemplatesPageConstants.WEB_APP_TEMPLATE_CARD_DATA_ATTR = "web-application";
    ApplicationTemplatesPageConstants.SPA_TEMPLATE_CARD_DATA_ATTR = "6a90e4b0-fbff-42d7-bfde-1efd98f07cd7";
    ApplicationTemplatesPageConstants.DESKTOP_APP_TEMPLATE_CARD_DATA_ATTR = "desktop";
    ApplicationTemplatesPageConstants.MOBILE_APP_TEMPLATE_CARD_DATA_ATTR = "mobile";
    ApplicationTemplatesPageConstants.BOX_APP_TEMPLATE_CARD_DATA_ATTR = "h9c5e23e-fc78-484b-9bec-015d242361b8";
    ApplicationTemplatesPageConstants.SLACK_APP_TEMPLATE_CARD_DATA_ATTR = "z345e11e-fc78-484b-9bec-015d2475u341r";
    ApplicationTemplatesPageConstants.WORKDAY_APP_TEMPLATE_CARD_DATA_ATTR = "r565e11e-fc78-484b-9bec-015d24753456";
    ApplicationTemplatesPageConstants.ZOOM_APP_TEMPLATE_CARD_DATA_ATTR = "t565e11e-fc78-484b-9bec-015d2472008";
    // Minimal Wizard
    ApplicationTemplatesPageConstants.MINIMAL_CREATION_WIZARD_DATA_ATTR = "minimal-application-create-wizard-modal";
    ApplicationTemplatesPageConstants.MINIMAL_CREATION_WIZARD_APP_NAME_INPUT_DATA_ATTR = "minimal-application-create-" +
        "wizard-application-name-input";
    ApplicationTemplatesPageConstants.MINIMAL_CREATION_WIZARD_OIDC_CARD_DATA_ATTR = "minimal-application-create-wizard-" +
        "b9c5e11e-fc78-484b-9bec-015d247561b8-card";
    ApplicationTemplatesPageConstants.MINIMAL_CREATION_WIZARD_SAML_CARD_DATA_ATTR = "minimal-application-create-wizard-" +
        "776a73da-fd8e-490b-84ff-93009f8ede85-card";
    ApplicationTemplatesPageConstants.MINIMAL_CREATION_WIZARD_REDIRECT_URL_INPUT_DATA_ATTR = "minimal-application-" +
        "create-wizard-oauth-protocol-settings-form-callback-url-input";
    ApplicationTemplatesPageConstants.MINIMAL_CREATION_WIZARD_REDIRECT_URL_ADD_BUTTON_DATA_ATTR = "minimal-application-" +
        "create-wizard-oauth-protocol-settings-form-callback-url-input-add-button";
    ApplicationTemplatesPageConstants.MINIMAL_CREATION_WIZARD_SUBMIT_BUTTON_DATA_ATTR = "minimal-application-" +
        "create-wizard-next-button";
    return ApplicationTemplatesPageConstants;
}());
export { ApplicationTemplatesPageConstants };
