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
/// <reference types="cypress" />
import { EmailTemplatesAddPageConstants } from "../constants";
/**
 * Class containing Email Templates Add Page objects.
 */
var EmailTemplatesAddPage = /** @class */ (function () {
    /**
     * Generates a Login Page objects instance.
     * @constructor
     */
    function EmailTemplatesAddPage() {
    }
    /**
     * Get the page layout header element.
     * @return {Cypress.Chainable<Element>}
     */
    EmailTemplatesAddPage.prototype.getPageLayoutHeader = function () {
        return cy.dataTestId(EmailTemplatesAddPageConstants.PAGE_LAYOUT_HEADER_DATA_ATTR);
    };
    ;
    /**
     * Get the page layout header title element.
     * @return {Cypress.Chainable<Element>}
     */
    EmailTemplatesAddPage.prototype.getPageLayoutHeaderTitle = function () {
        return cy.dataTestId(EmailTemplatesAddPageConstants.PAGE_LAYOUT_HEADER_TITLE_DATA_ATTR);
    };
    ;
    /**
     * Get the locale dropdown element.
     * @return {Cypress.Chainable<Element>}
     */
    EmailTemplatesAddPage.prototype.getLocaleDropdown = function () {
        return cy.dataTestId(EmailTemplatesAddPageConstants.LOCALE_DROPDOWN_DATA_ATTR);
    };
    ;
    /**
     * Click on the locale dropdown.
     */
    EmailTemplatesAddPage.prototype.openLocaleDropdown = function () {
        this.getLocaleDropdown().click();
    };
    ;
    /**
     * Get the locale dropdown options.
     * @return {Cypress.Chainable<Element>}
     */
    EmailTemplatesAddPage.prototype.getLocaleDropdownOptions = function () {
        return this.getLocaleDropdown()
            .within(function () {
            cy.get(EmailTemplatesAddPageConstants.LOCALE_DROPDOWN_OPTIONS_CONTAINER_DATA_ATTR);
        });
    };
    ;
    /**
     * Get the locale dropdown options.
     *
     * @param {string} code - Locale code.
     */
    EmailTemplatesAddPage.prototype.selectLocaleFromDropdown = function (code) {
        this.getLocaleDropdownOptions()
            .within(function () {
            cy.dataTestId(code).click();
        });
    };
    ;
    /**
     * Get Subject input element.
     * @return {Cypress.Chainable<Element>}
     */
    EmailTemplatesAddPage.prototype.getSubjectInput = function () {
        return cy.dataTestId(EmailTemplatesAddPageConstants.SUBJECT_INPUT_DATA_ATTR);
    };
    ;
    /**
     * Get Email body code editor element.
     * @return {Cypress.Chainable<Element>}
     */
    EmailTemplatesAddPage.prototype.getEmailBodyCodeEditor = function () {
        return cy.dataTestId(EmailTemplatesAddPageConstants.EMAIL_BODY_CODE_EDITOR_DATA_ATTR);
    };
    ;
    /**
     * Get Email body code editor HTML code tab pane.
     * @return {Cypress.Chainable<Element>}
     */
    EmailTemplatesAddPage.prototype.getEmailBodyCodeEditorHTMLCodeTabPane = function () {
        return cy.dataTestId(EmailTemplatesAddPageConstants.EMAIL_BODY_CODE_EDITOR_HTML_CODE_TAB_PANE_DATA_ATTR);
    };
    ;
    /**
     * Get Email body code editor preview tab pane.
     * @return {Cypress.Chainable<Element>}
     */
    EmailTemplatesAddPage.prototype.getEmailBodyCodeEditorPreviewTabPane = function () {
        return cy.dataTestId(EmailTemplatesAddPageConstants.EMAIL_BODY_CODE_EDITOR_PREVIEW_TAB_PANE_DATA_ATTR);
    };
    ;
    /**
     * Focus on Email body code editor HTML code pane.
     * @return {Cypress.Chainable<Element>}
     */
    EmailTemplatesAddPage.prototype.focusOnEmailBodyCodeEditorHTMLCodePane = function () {
        return this.getEmailBodyCodeEditorHTMLCodeTabPane()
            .click();
    };
    ;
    /**
     * Get Email body code editor tabs element.
     * @return {Cypress.Chainable<Element>}
     */
    EmailTemplatesAddPage.prototype.getEmailBodyCodeEditorTabs = function () {
        return this.getEmailBodyCodeEditor()
            .within(function () {
            cy.dataTestId(EmailTemplatesAddPageConstants.EMAIL_BODY_CODE_EDITOR_TABS_DATA_ATTR);
        });
    };
    ;
    /**
     * Click on email body editor preview tab.
     * @remarks Assumes that the preview tab is the first. Since there is no way of adding a data id to tab menu item.
     */
    EmailTemplatesAddPage.prototype.clickOnBodyCodeEditorPreviewTab = function () {
        this.getEmailBodyCodeEditorTabs()
            .within(function () {
            cy.get(EmailTemplatesAddPageConstants.EMAIL_BODY_CODE_EDITOR_TAB_MENU_DATA_ATTR)
                .find(EmailTemplatesAddPageConstants.EMAIL_BODY_CODE_EDITOR_TAB_MENU_ITEM_DATA_ATTR)
                .eq(0)
                .click();
        });
    };
    ;
    /**
     * Click on email body editor HTML code tab.
     * @remarks Assumes that the code tab is the second. Since there is no way of adding a data id to tab menu item.
     */
    EmailTemplatesAddPage.prototype.clickOnEmailBodyCodeEditorHTMLCodeTab = function () {
        this.getEmailBodyCodeEditorTabs()
            .within(function () {
            cy.get(EmailTemplatesAddPageConstants.EMAIL_BODY_CODE_EDITOR_TAB_MENU_DATA_ATTR)
                .find(EmailTemplatesAddPageConstants.EMAIL_BODY_CODE_EDITOR_TAB_MENU_ITEM_DATA_ATTR)
                .eq(1)
                .click();
        });
    };
    ;
    /**
     * Get Mail signature code editor element.
     * @return {Cypress.Chainable<Element>}
     */
    EmailTemplatesAddPage.prototype.getEmailSignatureCodeEditor = function () {
        return cy.dataTestId(EmailTemplatesAddPageConstants.EMAIL_SIGNATURE_CODE_EDITOR_DATA_ATTR);
    };
    ;
    /**
     * Get Email signature code editor tabs element.
     * @return {Cypress.Chainable<Element>}
     */
    EmailTemplatesAddPage.prototype.getEmailSignatureCodeEditorTabs = function () {
        return this.getEmailSignatureCodeEditor()
            .within(function () {
            cy.dataTestId(EmailTemplatesAddPageConstants.EMAIL_SIGNATURE_CODE_EDITOR_TABS_DATA_ATTR);
        });
    };
    ;
    /**
     * Get Email signature code editor HTML code tab pane.
     * @return {Cypress.Chainable<Element>}
     */
    EmailTemplatesAddPage.prototype.getEmailSignatureCodeEditorHTMLCodeTabPane = function () {
        return cy.dataTestId(EmailTemplatesAddPageConstants.EMAIL_SIGNATURE_CODE_EDITOR_HTML_CODE_TAB_PANE_DATA_ATTR);
    };
    ;
    /**
     * Get Email signature code editor preview tab pane.
     * @return {Cypress.Chainable<Element>}
     */
    EmailTemplatesAddPage.prototype.getEmailSignatureCodeEditorPreviewTabPane = function () {
        return cy.dataTestId(EmailTemplatesAddPageConstants.EMAIL_SIGNATURE_CODE_EDITOR_PREVIEW_TAB_PANE_DATA_ATTR);
    };
    ;
    /**
     * Click on email signature editor preview tab.
     * @remarks Assumes that the preview tab is the first. Since there is no way of adding a data id to tab menu item.
     */
    EmailTemplatesAddPage.prototype.clickOnEmailSignatureCodeEditorPreviewTab = function () {
        this.getEmailSignatureCodeEditorTabs()
            .within(function () {
            cy.get(EmailTemplatesAddPageConstants.EMAIL_SIGNATURE_CODE_EDITOR_TAB_MENU_DATA_ATTR)
                .find(EmailTemplatesAddPageConstants.EMAIL_SIGNATURE_CODE_EDITOR_TAB_MENU_ITEM_DATA_ATTR)
                .eq(0)
                .click();
        });
    };
    ;
    /**
     * Click on email signature editor HTML code tab.
     * @remarks Assumes that the code tab is the second. Since there is no way of adding a data id to tab menu item.
     */
    EmailTemplatesAddPage.prototype.clickOnEmailSignatureCodeEditorHTMLCodeTab = function () {
        this.getEmailSignatureCodeEditorTabs()
            .within(function () {
            cy.get(EmailTemplatesAddPageConstants.EMAIL_SIGNATURE_CODE_EDITOR_TAB_MENU_DATA_ATTR)
                .find(EmailTemplatesAddPageConstants.EMAIL_SIGNATURE_CODE_EDITOR_TAB_MENU_ITEM_DATA_ATTR)
                .eq(1)
                .click();
        });
    };
    ;
    /**
     * Focus on Email signature code editor HTML code pane.
     * @return {Cypress.Chainable<Element>}
     */
    EmailTemplatesAddPage.prototype.focusOnEmailSignatureCodeEditorHTMLCodePane = function () {
        return this.getEmailSignatureCodeEditorHTMLCodeTabPane()
            .click();
    };
    ;
    /**
     * Get Add template form submit button element.
     * @return {Cypress.Chainable<Element>}
     */
    EmailTemplatesAddPage.prototype.getFormSubmitButton = function () {
        return cy.dataTestId(EmailTemplatesAddPageConstants.FORM_SUBMIT_BUTTON);
    };
    ;
    /**
     * Click on add template form submit button.
     */
    EmailTemplatesAddPage.prototype.clickOnFormSubmitButton = function () {
        this.getFormSubmitButton().click();
    };
    ;
    return EmailTemplatesAddPage;
}());
export { EmailTemplatesAddPage };
