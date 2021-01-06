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
 * Class containing Email Templates Add Page constants.
 */
var EmailTemplatesAddPageConstants = /** @class */ (function () {
    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    function EmailTemplatesAddPageConstants() {
    }
    // Page Layout.
    EmailTemplatesAddPageConstants.PAGE_LAYOUT_HEADER_DATA_ATTR = "email-template-add-page-layout-page-header";
    EmailTemplatesAddPageConstants.PAGE_LAYOUT_HEADER_TITLE_DATA_ATTR = "email-template-add-page-layout-page-" +
        "header-title";
    // URL Matcher
    EmailTemplatesAddPageConstants.PAGE_URL_MATCHER = "/add-template";
    // Form elements.
    EmailTemplatesAddPageConstants.LOCALE_DROPDOWN_DATA_ATTR = "email-template-form-locale-select";
    EmailTemplatesAddPageConstants.LOCALE_DROPDOWN_OPTIONS_CONTAINER_DATA_ATTR = "div[role=\"listbox\"]";
    EmailTemplatesAddPageConstants.SUBJECT_INPUT_DATA_ATTR = "email-template-form-subject-input";
    EmailTemplatesAddPageConstants.EMAIL_BODY_CODE_EDITOR_DATA_ATTR = "email-template-form-email-template-body-editor";
    EmailTemplatesAddPageConstants.EMAIL_BODY_CODE_EDITOR_HTML_CODE_TAB_PANE_DATA_ATTR = "html-code-tab-pane";
    EmailTemplatesAddPageConstants.EMAIL_BODY_CODE_EDITOR_PREVIEW_TAB_PANE_DATA_ATTR = "preview-tab-pane";
    EmailTemplatesAddPageConstants.EMAIL_BODY_CODE_EDITOR_TABS_DATA_ATTR = "email-template-form-email-template-body-" +
        "editor-tabs";
    EmailTemplatesAddPageConstants.EMAIL_BODY_CODE_EDITOR_TAB_MENU_DATA_ATTR = "div[class=\"ui pointing secondary " +
        "menu\"]";
    EmailTemplatesAddPageConstants.EMAIL_BODY_CODE_EDITOR_TAB_MENU_ITEM_DATA_ATTR = ".item";
    EmailTemplatesAddPageConstants.EMAIL_SIGNATURE_CODE_EDITOR_TABS_DATA_ATTR = "email-template-form-email-template-" +
        "footer-editor-tabs";
    EmailTemplatesAddPageConstants.EMAIL_SIGNATURE_CODE_EDITOR_HTML_CODE_TAB_PANE_DATA_ATTR = "html-code-tab-pane";
    EmailTemplatesAddPageConstants.EMAIL_SIGNATURE_CODE_EDITOR_PREVIEW_TAB_PANE_DATA_ATTR = "preview-tab-pane";
    EmailTemplatesAddPageConstants.EMAIL_SIGNATURE_CODE_EDITOR_TAB_MENU_DATA_ATTR = "div[class=\"ui pointing " +
        "secondary menu\"]";
    EmailTemplatesAddPageConstants.EMAIL_SIGNATURE_CODE_EDITOR_TAB_MENU_ITEM_DATA_ATTR = ".item";
    EmailTemplatesAddPageConstants.EMAIL_SIGNATURE_CODE_EDITOR_DATA_ATTR = "email-template-form-email-template-" +
        "footer-editor";
    EmailTemplatesAddPageConstants.FORM_SUBMIT_BUTTON = "email-template-form-submit-button";
    // Fixture file paths.
    EmailTemplatesAddPageConstants.SAMPLE_EMAIL_BODY_FIXTURE_PATH = "email-templates/sample-email-body.html";
    EmailTemplatesAddPageConstants.SAMPLE_EMAIL_SIGNATURE_FIXTURE_PATH = "email-templates/sample-email-signature.html";
    return EmailTemplatesAddPageConstants;
}());
export { EmailTemplatesAddPageConstants };
