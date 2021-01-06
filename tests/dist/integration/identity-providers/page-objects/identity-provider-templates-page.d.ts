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
 * Class containing Identity Providers Templates Page objects.
 */
export declare class IdentityProviderTemplatesPage {
    /**
     * Generates a Login Page objects instance.
     * @constructor
     */
    constructor();
    /**
     * Get the IDP templates page layout header element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeader(): Cypress.Chainable<Element>;
    /**
     * Get the IDP templates page layout header title element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeaderTitle(): Cypress.Chainable<Element>;
    /**
     * Get the IDP templates page layout header sub title element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeaderSubTitle(): Cypress.Chainable<Element>;
    /**
     * Get the IDP templates page back button.
     * @return {Cypress.Chainable<Element>}
     */
    getPageBackButton(): Cypress.Chainable<Element>;
    /**
     * Get the quick-start IDP templates grid.
     * @return {Cypress.Chainable<Element>}
     */
    getQuickstartGrid(): Cypress.Chainable<Element>;
    /**
     * Get the manual setup IDP templates grid.
     * @return {Cypress.Chainable<Element>}
     */
    getManualSetupGrid(): Cypress.Chainable<Element>;
    /**
     * Get quick-start IDP template.
     * @return {Cypress.Chainable<Element>}
     */
    getQuickStartTemplate(type: "GOOGLE" | "FACEBOOK" | "OIDC"): Cypress.Chainable<Element>;
    /**
     * Get manual setup IDP template.
     * @return {Cypress.Chainable<Element>}
     */
    getManualSetupTemplate(type: "EXPERT"): Cypress.Chainable<Element>;
    /**
     * Get the creation wizard.
     * @return {Cypress.Chainable<Element>}
     */
    getCreationWizard(): Cypress.Chainable<Element>;
    /**
     * Get the creation wizard IDP name input.
     * @return {Cypress.Chainable<Element>}
     */
    getCreationWizardIDPNameInput(): Cypress.Chainable<JQuery<Element>>;
    /**
     * Get the creation wizard IDP description input.
     * @return {Cypress.Chainable<Element>}
     */
    getCreationWizardIDPDescriptionInput(): Cypress.Chainable<Element>;
    /**
     * Get the creation wizard IDP image input.
     * @return {Cypress.Chainable<Element>}
     */
    getCreationWizardIDPImageInput(): Cypress.Chainable<Element>;
    /**
     * Get the creation wizard form next button.
     * @return {Cypress.Chainable<Element>}
     */
    getCreationWizardNextButton(): Cypress.Chainable<Element>;
    /**
     * Click on the creation wizard form next button.
     * @return {Cypress.Chainable<Element>}
     */
    clickOnCreationWizardNextButton(): void;
    /**
     * Get the creation wizard form finish button.
     * @return {Cypress.Chainable<Element>}
     */
    getCreationWizardFinishButton(): Cypress.Chainable<Element>;
    /**
     * Click on the creation wizard form finish button.
     * @return {Cypress.Chainable<Element>}
     */
    clickOnCreationWizardFinishButton(): void;
}
