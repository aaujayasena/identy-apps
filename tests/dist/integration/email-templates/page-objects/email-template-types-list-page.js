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
import { EmailTemplateTypesListPageConstants } from "../constants";
import { SidePanelDomConstants } from "@wso2/identity-cypress-test-base/constants";
/**
 * Class containing Email Templates Type Page objects.
 */
var EmailTemplateTypesListPage = /** @class */ (function () {
    /**
     * Generates a Login Page objects instance.
     * @constructor
     */
    function EmailTemplateTypesListPage() {
    }
    /**
     * Click on the email templates side panel item.
     */
    EmailTemplateTypesListPage.prototype.clickOnSidePanelItem = function () {
        cy.dataTestId(SidePanelDomConstants.EMAIL_TEMPLATES_PARENT_ITEM_DATA_ATTR).click();
    };
    ;
    /**
     * Get the email template type table.
     * @return {Cypress.Chainable<Element>}
     */
    EmailTemplateTypesListPage.prototype.getTable = function () {
        return cy.dataTestId(EmailTemplateTypesListPageConstants.TABLE_DATA_ATTR);
    };
    ;
    /**
     * Get the email template types table body.
     * @return {Cypress.Chainable<Element>}
     */
    EmailTemplateTypesListPage.prototype.getTableBody = function () {
        return cy.dataTestId(EmailTemplateTypesListPageConstants.TABLE_BODY_DATA_ATTR);
    };
    ;
    /**
     * Get the email template types page layout header element.
     * @return {Cypress.Chainable<Element>}
     */
    EmailTemplateTypesListPage.prototype.getPageLayoutHeader = function () {
        return cy.dataTestId(EmailTemplateTypesListPageConstants.PAGE_LAYOUT_HEADER_DATA_ATTR);
    };
    ;
    /**
     * Get the email template types page layout header title element.
     * @return {Cypress.Chainable<Element>}
     */
    EmailTemplateTypesListPage.prototype.getPageLayoutHeaderTitle = function () {
        return cy.dataTestId(EmailTemplateTypesListPageConstants.PAGE_LAYOUT_HEADER_TITLE_DATA_ATTR);
    };
    ;
    /**
     * Get the email template types page layout header sub title element.
     * @return {Cypress.Chainable<Element>}
     */
    EmailTemplateTypesListPage.prototype.getPageLayoutHeaderSubTitle = function () {
        return cy.dataTestId(EmailTemplateTypesListPageConstants.PAGE_LAYOUT_HEADER_SUB_TITLE_DATA_ATTR);
    };
    ;
    /**
     * Get the email template types page layout header action element.
     * @return {Cypress.Chainable<Element>}
     */
    EmailTemplateTypesListPage.prototype.getPageLayoutHeaderAction = function () {
        return cy.dataTestId(EmailTemplateTypesListPageConstants.PAGE_LAYOUT_HEADER_ACTION);
    };
    ;
    /**
     * Click on the New template type button.
     */
    EmailTemplateTypesListPage.prototype.clickOnNewTemplateTypeButton = function () {
        this.getPageLayoutHeaderAction().click();
    };
    ;
    /**
     * Get the add new templates type wizard element.
     * @return {Cypress.Chainable<Element>}
     */
    EmailTemplateTypesListPage.prototype.getAddTemplateTypeWizard = function () {
        return cy.dataTestId(EmailTemplateTypesListPageConstants.ADD_WIZARD_DATA_ATTR);
    };
    ;
    /**
     * Get the new templates type name input in the wizard.
     * @return {Cypress.Chainable<Element>}
     */
    EmailTemplateTypesListPage.prototype.getTemplateTypeNameInputInWizard = function () {
        return cy.dataTestId(EmailTemplateTypesListPageConstants.TEMPLATE_TYPE_NAME_INPUT_DATA_ATTR);
    };
    ;
    /**
     * Get the data attribute of the new template type wizard's create button.
     * @return {Cypress.Chainable<Element>}
     */
    EmailTemplateTypesListPage.prototype.getTemplateTypeCreateButtonInWizard = function () {
        return cy.dataTestId(EmailTemplateTypesListPageConstants.CREATE_TEMPLATE_TYPE_BUTTON_DATA_ATTR);
    };
    ;
    return EmailTemplateTypesListPage;
}());
export { EmailTemplateTypesListPage };
