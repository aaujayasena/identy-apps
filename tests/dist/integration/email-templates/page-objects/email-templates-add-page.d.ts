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
/// <reference types="../../types" />
/**
 * Class containing Email Templates Add Page objects.
 */
export declare class EmailTemplatesAddPage {
    /**
     * Generates a Login Page objects instance.
     * @constructor
     */
    constructor();
    /**
     * Get the page layout header element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeader(): Cypress.Chainable<Element>;
    /**
     * Get the page layout header title element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeaderTitle(): Cypress.Chainable<Element>;
    /**
     * Get the locale dropdown element.
     * @return {Cypress.Chainable<Element>}
     */
    getLocaleDropdown(): Cypress.Chainable<Element>;
    /**
     * Click on the locale dropdown.
     */
    openLocaleDropdown(): void;
    /**
     * Get the locale dropdown options.
     * @return {Cypress.Chainable<Element>}
     */
    getLocaleDropdownOptions(): Cypress.Chainable<Element>;
    /**
     * Get the locale dropdown options.
     *
     * @param {string} code - Locale code.
     */
    selectLocaleFromDropdown(code: string): void;
    /**
     * Get Subject input element.
     * @return {Cypress.Chainable<Element>}
     */
    getSubjectInput(): Cypress.Chainable<Element>;
    /**
     * Get Email body code editor element.
     * @return {Cypress.Chainable<Element>}
     */
    getEmailBodyCodeEditor(): Cypress.Chainable<Element>;
    /**
     * Get Email body code editor HTML code tab pane.
     * @return {Cypress.Chainable<Element>}
     */
    getEmailBodyCodeEditorHTMLCodeTabPane(): Cypress.Chainable<Element>;
    /**
     * Get Email body code editor preview tab pane.
     * @return {Cypress.Chainable<Element>}
     */
    getEmailBodyCodeEditorPreviewTabPane(): Cypress.Chainable<Element>;
    /**
     * Focus on Email body code editor HTML code pane.
     * @return {Cypress.Chainable<Element>}
     */
    focusOnEmailBodyCodeEditorHTMLCodePane(): Cypress.Chainable<Element>;
    /**
     * Get Email body code editor tabs element.
     * @return {Cypress.Chainable<Element>}
     */
    getEmailBodyCodeEditorTabs(): Cypress.Chainable<Element>;
    /**
     * Click on email body editor preview tab.
     * @remarks Assumes that the preview tab is the first. Since there is no way of adding a data id to tab menu item.
     */
    clickOnBodyCodeEditorPreviewTab(): void;
    /**
     * Click on email body editor HTML code tab.
     * @remarks Assumes that the code tab is the second. Since there is no way of adding a data id to tab menu item.
     */
    clickOnEmailBodyCodeEditorHTMLCodeTab(): void;
    /**
     * Get Mail signature code editor element.
     * @return {Cypress.Chainable<Element>}
     */
    getEmailSignatureCodeEditor(): Cypress.Chainable<Element>;
    /**
     * Get Email signature code editor tabs element.
     * @return {Cypress.Chainable<Element>}
     */
    getEmailSignatureCodeEditorTabs(): Cypress.Chainable<Element>;
    /**
     * Get Email signature code editor HTML code tab pane.
     * @return {Cypress.Chainable<Element>}
     */
    getEmailSignatureCodeEditorHTMLCodeTabPane(): Cypress.Chainable<Element>;
    /**
     * Get Email signature code editor preview tab pane.
     * @return {Cypress.Chainable<Element>}
     */
    getEmailSignatureCodeEditorPreviewTabPane(): Cypress.Chainable<Element>;
    /**
     * Click on email signature editor preview tab.
     * @remarks Assumes that the preview tab is the first. Since there is no way of adding a data id to tab menu item.
     */
    clickOnEmailSignatureCodeEditorPreviewTab(): void;
    /**
     * Click on email signature editor HTML code tab.
     * @remarks Assumes that the code tab is the second. Since there is no way of adding a data id to tab menu item.
     */
    clickOnEmailSignatureCodeEditorHTMLCodeTab(): void;
    /**
     * Focus on Email signature code editor HTML code pane.
     * @return {Cypress.Chainable<Element>}
     */
    focusOnEmailSignatureCodeEditorHTMLCodePane(): Cypress.Chainable<Element>;
    /**
     * Get Add template form submit button element.
     * @return {Cypress.Chainable<Element>}
     */
    getFormSubmitButton(): Cypress.Chainable<Element>;
    /**
     * Click on add template form submit button.
     */
    clickOnFormSubmitButton(): void;
}
