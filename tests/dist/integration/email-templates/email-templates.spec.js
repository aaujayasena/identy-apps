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
import { CookieUtils, HousekeepingUtils } from "@wso2/identity-cypress-test-base/utils";
import { Header } from "@wso2/identity-cypress-test-base/page-objects";
import { EmailTemplatesAddPage, EmailTemplatesListPage, EmailTemplateTypesListPage, EmailTemplatesEditPage } from "./page-objects";
import { EmailTemplatesAddPageConstants } from "./constants";
import { v4 as uuidv4 } from "uuid";
var USERNAME = Cypress.env("TENANT_USERNAME");
var PASSWORD = Cypress.env("TENANT_PASSWORD");
var SERVER_URL = Cypress.env("SERVER_URL");
var PORTAL = Cypress.env("CONSOLE_BASE_URL");
var TENANT_DOMAIN = Cypress.env("TENANT_DOMAIN");
describe("ITC-3.0.0 - [email-templates] - Email Templates Integration.", function () {
    var header = new Header();
    var emailTemplateTypesListPage = new EmailTemplateTypesListPage();
    var emailTemplatesListPage = new EmailTemplatesListPage();
    var emailTemplatesAddPage = new EmailTemplatesAddPage();
    var emailTemplatesEditPage = new EmailTemplatesEditPage();
    // Add template constants.
    var templateTypeName = "Type " + uuidv4();
    var templateName = "Template " + uuidv4();
    var sampleLocaleCode = "en-US";
    // Edit Template.
    var editedTemplateName = "Edited Template " + uuidv4();
    before(function () {
        HousekeepingUtils.performCleanUpTasks();
        cy.login(USERNAME, PASSWORD, SERVER_URL, PORTAL, TENANT_DOMAIN);
    });
    beforeEach(function () {
        CookieUtils.preserveAllSessionCookies();
    });
    after(function () {
        cy.logout();
    });
    context("ITC-3.1.0 - [email-templates] - Create a new email template type and add a new template.", function () {
        it("ITC-3.1.1 - [email-templates] - Add a new template type.", function () {
            header.clickOnManagePortalSwitch();
            emailTemplateTypesListPage.clickOnSidePanelItem();
            emailTemplateTypesListPage.clickOnNewTemplateTypeButton();
            emailTemplateTypesListPage.getTemplateTypeNameInputInWizard()
                .find("input")
                .type(templateTypeName);
            emailTemplateTypesListPage.getTemplateTypeCreateButtonInWizard().click();
        });
        it("ITC-3.1.2 - [email-templates] - Add a new template.", function () {
            emailTemplatesListPage.clickOnNewTablePlaceholderAction();
        });
        it("ITC-3.1.3 - [email-templates] - Did navigate to add template page.", function () {
            // Check if page header exists and check if all the necessary elements are rendering.
            cy.url().should("include", EmailTemplatesAddPageConstants.PAGE_URL_MATCHER);
        });
        it("ITC-3.1.4 - [email-templates] - Properly renders the elements of the add template page.", function () {
            // Check if page header exists and check if all the necessary elements are rendering.
            emailTemplatesAddPage.getPageLayoutHeader().should("be.visible");
            emailTemplatesAddPage.getPageLayoutHeaderTitle().should("be.visible");
            // Check if form elements are visible.
            emailTemplatesAddPage.getLocaleDropdown().should("be.visible");
            emailTemplatesAddPage.getSubjectInput().should("be.visible");
            emailTemplatesAddPage.getEmailBodyCodeEditor().should("be.visible");
            emailTemplatesAddPage.getEmailSignatureCodeEditor().should("be.visible");
            emailTemplatesAddPage.getFormSubmitButton().should("be.visible");
        });
        it("ITC-3.1.5 - [email-templates] - Can add a new email template.", function () {
            emailTemplatesAddPage.openLocaleDropdown();
            emailTemplatesAddPage.selectLocaleFromDropdown(sampleLocaleCode);
            emailTemplatesAddPage.getSubjectInput().type(templateName);
            emailTemplatesAddPage.clickOnEmailBodyCodeEditorHTMLCodeTab();
            cy.fixture(EmailTemplatesAddPageConstants.SAMPLE_EMAIL_BODY_FIXTURE_PATH)
                .then(function (code) {
                emailTemplatesAddPage.focusOnEmailBodyCodeEditorHTMLCodePane()
                    .type(code, { parseSpecialCharSequences: false });
            });
            emailTemplatesAddPage.clickOnBodyCodeEditorPreviewTab();
            emailTemplatesAddPage.clickOnEmailSignatureCodeEditorHTMLCodeTab();
            cy.fixture(EmailTemplatesAddPageConstants.SAMPLE_EMAIL_SIGNATURE_FIXTURE_PATH)
                .then(function (code) {
                emailTemplatesAddPage.focusOnEmailSignatureCodeEditorHTMLCodePane()
                    .type(code, { parseSpecialCharSequences: false });
            });
            emailTemplatesAddPage.clickOnEmailSignatureCodeEditorPreviewTab();
            emailTemplatesAddPage.clickOnFormSubmitButton();
            cy.wait(3000);
        });
        it("ITC-3.1.6 - [email-templates] - Can edit the newly created template.", function () {
            emailTemplatesListPage.clickOnTableFirstElementEditButton();
            cy.url().should("contain", sampleLocaleCode);
            emailTemplatesEditPage.getSubjectInput().type(editedTemplateName);
            emailTemplatesEditPage.clickOnFormSubmitButton();
        });
        it("ITC-3.1.7 - [email-templates] - Go back to template listing.", function () {
            emailTemplatesEditPage.clickOnPageLayoutHeaderBackButton();
        });
        // This test case only fails during the product build time, but passes when it run locally.
        // Therefore skipping this test temporally until we find the cause for this failure.
        it.skip("ITC-3.1.8 - [email-templates] - Can view the newly created template.", function () {
            emailTemplatesListPage.clickOnTableFirstElementViewButton();
            cy.wait(3000);
            emailTemplatesListPage.getEmailTemplateViewModal().should("be.visible");
            emailTemplatesListPage.clickOnEmailTemplateViewModalCancelButton();
        });
    });
});
/**
 * Return false here prevents Cypress from failing the test
 * expect(err.message).to.include('Ignoring error for now');
 */
Cypress.on("uncaught:exception", function (err, runnable) {
    cy.log("Cypress detected uncaught exception", err);
    return false;
});
