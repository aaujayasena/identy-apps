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
 * Class containing IDP Templates Page constants.
 */
var IdentityProviderTemplatesPageConstants = /** @class */ (function () {
    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    function IdentityProviderTemplatesPageConstants() {
    }
    // URL Matcher
    IdentityProviderTemplatesPageConstants.PAGE_URL_MATCHER = "/identity-providers/templates";
    // Page Layout.
    IdentityProviderTemplatesPageConstants.PAGE_LAYOUT_HEADER_DATA_ATTR = "idp-templates-page-layout-page-header";
    IdentityProviderTemplatesPageConstants.PAGE_LAYOUT_HEADER_TITLE_DATA_ATTR = "idp-templates-page-layout-page-" +
        "header-title";
    IdentityProviderTemplatesPageConstants.PAGE_LAYOUT_HEADER_SUB_TITLE_DATA_ATTR = "idp-templates-page-layout-page-" +
        "header-sub-title";
    IdentityProviderTemplatesPageConstants.PAGE_LAYOUT_HEADER_BACK_BUTTON_DATA_ATTR = "idp-templates-page-back-button";
    // Application template types.
    IdentityProviderTemplatesPageConstants.QUICK_START_TEMPLATE_GRID = "idp-templates-quick-start-template-grid";
    IdentityProviderTemplatesPageConstants.MANUAL_SETUP_TEMPLATE_GRID = "idp-templates-manual-setup-template-grid";
    IdentityProviderTemplatesPageConstants.GOOGLE_IDP_TEMPLATE_CARD_DATA_ATTR = "8ea23303-49c0-4253-b81f-82c0fe6fb4a0";
    IdentityProviderTemplatesPageConstants.FACEBOOK_IDP_TEMPLATE_CARD_DATA_ATTR = "d7c8549f-32af-4f53-9013-f66f1a6c67bf";
    IdentityProviderTemplatesPageConstants.OIDC_IDP_TEMPLATE_CARD_DATA_ATTR = "63501347-128b-45a8-8a0b-fc80e411a688";
    IdentityProviderTemplatesPageConstants.EXPERT_IDP_TEMPLATE_CARD_DATA_ATTR = "expert-mode";
    // Creation Wizard
    IdentityProviderTemplatesPageConstants.CREATION_WIZARD_DATA_ATTR = "idp-edit-idp-create-wizard-modal";
    IdentityProviderTemplatesPageConstants.CREATION_WIZARD_IDP_NAME_INPUT_DATA_ATTR = "idp-edit-idp-create-wizard-general-" +
        "settings-idp-name";
    IdentityProviderTemplatesPageConstants.CREATION_WIZARD_IDP_DESCRIPTION_DATA_ATTR = "idp-edit-idp-create-wizard-general-" +
        "settings-idp-description";
    IdentityProviderTemplatesPageConstants.CREATION_WIZARD_IDP_IMAGE_DATA_ATTR = "idp-edit-idp-create-wizard-general-" +
        "settings-idp-image";
    IdentityProviderTemplatesPageConstants.CREATION_WIZARD_NEXT_BUTTON_DATA_ATTR = "idp-edit-idp-create-wizard-modal-next" +
        "-button";
    IdentityProviderTemplatesPageConstants.CREATION_WIZARD_FINISH_BUTTON_DATA_ATTR = "idp-edit-idp-create-wizard-modal-" +
        "finish-button";
    IdentityProviderTemplatesPageConstants.CREATION_WIZARD_CANCEL_BUTTON_DATA_ATTR = "idp-edit-idp-create-wizard-modal-" +
        "cancel-button";
    return IdentityProviderTemplatesPageConstants;
}());
export { IdentityProviderTemplatesPageConstants };
