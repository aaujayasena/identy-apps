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
 * Class containing Applications Edit Page objects.
 */
export declare class ApplicationEditPage {
    /**
     * Generates a Login Page objects instance.
     * @constructor
     */
    constructor();
    /**
     * Get the application edit page layout header element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeader(): Cypress.Chainable<Element>;
    /**
     * Get the application edit page layout header title element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeaderTitle(): Cypress.Chainable<Element>;
    /**
     * Get the application edit page layout header sub title element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeaderSubTitle(): Cypress.Chainable<Element>;
    /**
     * Get the application edit tabs.
     * @return {Cypress.Chainable<Element>}
     */
    getTabs(): Cypress.Chainable<Element>;
    /**
     * Get a specif tab.
     *
     * @param tab - Tab to be selected.
     * @return {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getTab(tab: "GENERAL" | "ACCESS" | "ATTRIBUTES" | "SIGN_ON" | "PROVISIONING" | "ADVANCED"): Cypress.Chainable<JQuery<HTMLElement>>;
    /**
     * Select a tab from the resource tabs.
     *
     * @param tab - Tab to be selected.
     */
    selectTab(tab: "GENERAL" | "ACCESS" | "ATTRIBUTES" | "SIGN_ON" | "PROVISIONING" | "ADVANCED"): void;
    /**
     * Get the application edit page back button.
     * @return {Cypress.Chainable<Element>}
     */
    getPageBackButton(): Cypress.Chainable<Element>;
    /**
     * Get the application name input.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    getAppNameInput(): Cypress.Chainable<JQuery<Element>>;
    /**
     * Get the application description input.
     * @return {Cypress.Chainable<Element>}
     */
    getAppDescriptionInput(): Cypress.Chainable<Element>;
    /**
     * Get the application image input.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    getAppImageInput(): Cypress.Chainable<JQuery<Element>>;
    /**
     * Get the application discoverable checkbox.
     * @return {Cypress.Chainable<Element>}
     */
    getAppDiscoverableCheckbox(): Cypress.Chainable<Element>;
    /**
     * Get the application access URL input.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    getAppAccessURLInput(): Cypress.Chainable<JQuery<Element>>;
    /**
     * Get the application JWKS cert endpoint input.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    getAppCertJWKSURLInput(): Cypress.Chainable<JQuery<Element>>;
    /**
     * Get the JWKS application certificate radio button.
     * @return {Cypress.Chainable<Element>}
     */
    getJWKSCertRadio(): Cypress.Chainable<Element>;
    /**
     * Get the custom application certificate radio button.
     * @return {Cypress.Chainable<Element>}
     */
    getCustomCertRadio(): Cypress.Chainable<Element>;
    /**
     * Get the application PEM certificate input.
     * @return {Cypress.Chainable<Element>}
     */
    getPEMCertInput(): Cypress.Chainable<Element>;
    /**
     * Get the application PEM certificate preview button.
     * @return {Cypress.Chainable<Element>}
     */
    getPEMCertPreviewButton(): Cypress.Chainable<Element>;
    /**
     * Get the application PEM certificate preview modal.
     * @return {Cypress.Chainable<Element>}
     */
    getPEMCertPreviewModal(): Cypress.Chainable<Element>;
    /**
     * Get the application PEM certificate preview modal dimmer.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    getPEMCertPreviewModalDimmer(): Cypress.Chainable<JQuery<Element>>;
    /**
     * Get the application delete action in the danger zone.
     * @return {Cypress.Chainable<Element>}
     */
    getDangerZoneDeleteButton(): Cypress.Chainable<Element>;
    /**
     * Get the application delete assertion.
     * @return {Cypress.Chainable<Element>}
     */
    getDeleteAssertion(): Cypress.Chainable<Element | any>;
    /**
     * Get the application delete assertion input.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    getDeleteAssertionInput(): Cypress.Chainable<JQuery<Element>>;
    /**
     * Get the application delete confirm button.
     * @return {Cypress.Chainable<Element>}
     */
    getDeleteConfirmButton(): Cypress.Chainable<Element | any>;
    /**
     * Get the application delete confirm modal close button.
     * @return {Cypress.Chainable<Element>}
     */
    getDeleteConfirmModalCloseButton(): Cypress.Chainable<Element | any>;
    /**
     * Get the application general settings form submit button.
     * @return {Cypress.Chainable<Element>}
     */
    getGeneralSettingsFormSubmitButton(): Cypress.Chainable<Element>;
    /**
     * Click on get the application general settings form submit button.
     */
    clickOnGeneralSettingsFormSubmitButton(): void;
    /**
     * Get the protocol accordion.
     * @return {Cypress.Chainable<Element>}
     */
    getProtocolAccordion(): Cypress.Chainable<Element>;
    /**
     * Get the add protocol button.
     * @return {Cypress.Chainable<Element>}
     */
    getProtocolAddButton(): Cypress.Chainable<Element>;
    /**
     * Get the add protocol wizard.
     * @return {Cypress.Chainable<Element>}
     */
    getProtocolAddWizard(): Cypress.Chainable<Element>;
    /**
     * Get the add protocol wizard cancel button.
     * @return {Cypress.Chainable<Element>}
     */
    getProtocolAddWizardCancelButton(): Cypress.Chainable<Element>;
    /**
     * Get the OIDC section on protocol accordion.
     * @return {Cypress.Chainable<Element>}
     */
    getProtocolAccordionOIDCItem(): Cypress.Chainable<Element>;
    /**
     * Get the chevron icon of OIDC section on protocol accordion.
     * @return {Cypress.Chainable<Element>}
     */
    getProtocolAccordionOIDCItemChevron(): Cypress.Chainable<Element>;
    /**
     * Get the attribute selection list.
     * @return {Cypress.Chainable<Element>}
     */
    getAttributeSelectionList(): Cypress.Chainable<Element>;
    /**
     * Get the subject attribute dropdown.
     * @return {Cypress.Chainable<Element>}
     */
    getSubjectAttributeDropdown(): Cypress.Chainable<Element>;
    /**
     * Get the include userstore checkbox.
     * @return {Cypress.Chainable<Element>}
     */
    getIncludeUserstoreCheckbox(): Cypress.Chainable<Element>;
    /**
     * Get the include tenant domain checkbox.
     * @return {Cypress.Chainable<Element>}
     */
    getIncludeTenantDomainCheckbox(): Cypress.Chainable<Element>;
    /**
     * Get the use mapped local subject checkbox.
     * @return {Cypress.Chainable<Element>}
     */
    getUseMappedLocalSubjectCheckbox(): Cypress.Chainable<Element>;
    /**
     * Get the role attribute dropdown
     * @return {Cypress.Chainable<Element>}
     */
    getRoleAttributeDropdown(): Cypress.Chainable<Element>;
}
