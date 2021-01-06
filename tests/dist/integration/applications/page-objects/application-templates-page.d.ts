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
 * Class containing Applications Templates Page objects.
 */
export declare class ApplicationTemplatesPage {
    /**
     * Generates a Login Page objects instance.
     * @constructor
     */
    constructor();
    /**
     * Get the application templates page layout header element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeader(): Cypress.Chainable<Element>;
    /**
     * Get the application templates page layout header title element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeaderTitle(): Cypress.Chainable<Element>;
    /**
     * Get the application templates page layout header sub title element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeaderSubTitle(): Cypress.Chainable<Element>;
    /**
     * Get the application templates page back button.
     * @return {Cypress.Chainable<Element>}
     */
    getPageBackButton(): Cypress.Chainable<Element>;
    /**
     * Get the application templates search input.
     * @return {Cypress.Chainable<Element>}
     */
    getSearchInput(): Cypress.Chainable<Element>;
    /**
     * Get the application templates sort dropdown.
     * @return {Cypress.Chainable<Element>}
     */
    getSortDropdown(): Cypress.Chainable<Element>;
    /**
     * Get the quick-start application templates grid.
     * @return {Cypress.Chainable<Element>}
     */
    getQuickstartGrid(): Cypress.Chainable<Element>;
    /**
     * Get the vendor application templates grid.
     * @return {Cypress.Chainable<Element>}
     */
    getVendorGrid(): Cypress.Chainable<Element>;
    /**
     * Get quick-start application template.
     * @return {Cypress.Chainable<Element>}
     */
    getQuickStartTemplate(type: "WEB_APP" | "SPA" | "DESKTOP_APP" | "MOBILE_APP"): Cypress.Chainable<Element>;
    /**
     * Get vendor application template.
     * @return {Cypress.Chainable<Element>}
     */
    getVendorTemplate(type: "BOX" | "SLACK" | "WORKDAY" | "ZOOM"): Cypress.Chainable<Element>;
    /**
     * Get the minimal creation wizard.
     * @return {Cypress.Chainable<Element>}
     */
    getMinimalCreationWizard(): Cypress.Chainable<Element>;
    /**
     * Get the minimal creation wizard application name input.
     * @return {Cypress.Chainable<Element>}
     */
    getMinimalCreationWizardAppNameInput(): Cypress.Chainable<JQuery<Element>>;
    /**
     * Get the minimal creation wizard OIDC card.
     * @return {Cypress.Chainable<Element>}
     */
    getMinimalCreationWizardOIDCCard(): Cypress.Chainable<Element>;
    /**
     * Get the minimal creation wizard SAML card.
     * @return {Cypress.Chainable<Element>}
     */
    getMinimalCreationWizardSAMLCard(): Cypress.Chainable<Element>;
    /**
     * Get the minimal creation wizard Redirect URL Input.
     * @return {Cypress.Chainable<Element>}
     */
    getMinimalCreationWizardRedirectURLInput(): Cypress.Chainable<JQuery<Element>>;
    /**
     * Get the minimal creation wizard redirect URL add button.
     * @return {Cypress.Chainable<Element>}
     */
    getMinimalCreationWizardRedirectURLAddButton(): Cypress.Chainable<Element>;
    /**
     * Get the minimal creation wizard form submit button.
     * @return {Cypress.Chainable<Element>}
     */
    getMinimalCreationWizardSubmitButton(): Cypress.Chainable<Element>;
    /**
     * Click on the minimal creation wizard form submit button.
     * @return {Cypress.Chainable<Element>}
     */
    clickOnMinimalCreationWizardSubmitButton(): void;
}
