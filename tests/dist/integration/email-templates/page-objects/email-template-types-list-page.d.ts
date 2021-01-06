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
 * Class containing Email Templates Type Page objects.
 */
export declare class EmailTemplateTypesListPage {
    /**
     * Generates a Login Page objects instance.
     * @constructor
     */
    constructor();
    /**
     * Click on the email templates side panel item.
     */
    clickOnSidePanelItem(): void;
    /**
     * Get the email template type table.
     * @return {Cypress.Chainable<Element>}
     */
    getTable(): Cypress.Chainable<Element>;
    /**
     * Get the email template types table body.
     * @return {Cypress.Chainable<Element>}
     */
    getTableBody(): Cypress.Chainable<Element>;
    /**
     * Get the email template types page layout header element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeader(): Cypress.Chainable<Element>;
    /**
     * Get the email template types page layout header title element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeaderTitle(): Cypress.Chainable<Element>;
    /**
     * Get the email template types page layout header sub title element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeaderSubTitle(): Cypress.Chainable<Element>;
    /**
     * Get the email template types page layout header action element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeaderAction(): Cypress.Chainable<Element>;
    /**
     * Click on the New template type button.
     */
    clickOnNewTemplateTypeButton(): void;
    /**
     * Get the add new templates type wizard element.
     * @return {Cypress.Chainable<Element>}
     */
    getAddTemplateTypeWizard(): Cypress.Chainable<Element>;
    /**
     * Get the new templates type name input in the wizard.
     * @return {Cypress.Chainable<Element>}
     */
    getTemplateTypeNameInputInWizard(): Cypress.Chainable<Element>;
    /**
     * Get the data attribute of the new template type wizard's create button.
     * @return {Cypress.Chainable<Element>}
     */
    getTemplateTypeCreateButtonInWizard(): Cypress.Chainable<Element>;
}
