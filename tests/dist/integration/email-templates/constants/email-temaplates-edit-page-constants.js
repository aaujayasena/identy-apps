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
 * Class containing Email Templates Edit Page constants.
 */
var EmailTemplatesEditPageConstants = /** @class */ (function () {
    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    function EmailTemplatesEditPageConstants() {
    }
    // Page Layout.
    EmailTemplatesEditPageConstants.PAGE_LAYOUT_HEADER_DATA_ATTR = "email-template-edit-page-layout-page-header";
    EmailTemplatesEditPageConstants.PAGE_LAYOUT_HEADER_TITLE_DATA_ATTR = "email-template-edit-page-layout-page-" +
        "header-title";
    EmailTemplatesEditPageConstants.PAGE_LAYOUT_HEADER_BACK_BUTTON_DATA_ATTR = "div[class=\"back-button\"]";
    // Form elements.
    EmailTemplatesEditPageConstants.SUBJECT_INPUT_DATA_ATTR = "email-template-form-subject-input";
    EmailTemplatesEditPageConstants.FORM_SUBMIT_BUTTON = "email-template-form-submit-button";
    return EmailTemplatesEditPageConstants;
}());
export { EmailTemplatesEditPageConstants };
