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
 * Class containing Identity Provider Edit Page objects.
 */
export declare class IdentityProviderEditPage {
    /**
     * Get the IDP edit page layout header element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeader(): Cypress.Chainable<Element>;
    /**
     * Get the IDP edit page layout header title element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeaderTitle(): Cypress.Chainable<Element>;
    /**
     * Get the IDP edit page layout header sub title element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeaderSubTitle(): Cypress.Chainable<Element>;
    /**
     * Get the IDP edit page layout header image element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutImage(): Cypress.Chainable<JQuery<Element>>;
    /**
     * Get the IDP edit tabs.
     * @return {Cypress.Chainable<Element>}
     */
    getTabs(): Cypress.Chainable<Element>;
    /**
     * Get a specif tab.
     *
     * @param tab - Tab to be selected.
     * @return {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getTab(tab: "GENERAL" | "ATTRIBUTES" | "AUTHENTICATION" | "OUTBOUND_PROVISIONING" | "JIT_PROVISIONING" | "ADVANCED"): Cypress.Chainable<JQuery<HTMLElement>>;
    /**
     * Select a tab from the resource tabs.
     *
     * @param tab - Tab to be selected.
     */
    selectTab(tab: "GENERAL" | "ATTRIBUTES" | "AUTHENTICATION" | "OUTBOUND_PROVISIONING" | "JIT_PROVISIONING" | "ADVANCED"): void;
    /**
     * Get the IDP edit page back button.
     * @return {Cypress.Chainable<Element>}
     */
    getPageBackButton(): Cypress.Chainable<Element>;
    /**
     * Get the IDP name input.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    getIDPNameInput(): Cypress.Chainable<JQuery<Element>>;
    /**
     * Get the IDP description input.
     * @return {Cypress.Chainable<Element>}
     */
    getIDPDescriptionInput(): Cypress.Chainable<Element>;
    /**
     * Get the IDP image input.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    getIDPImageInput(): Cypress.Chainable<JQuery<Element>>;
    /**
     * Get the IDP JWKS cert endpoint input.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    getIDPCertJWKSURLInput(): Cypress.Chainable<JQuery<Element>>;
    /**
     * Get the JWKS IDP certificate radio button.
     * @return {Cypress.Chainable<Element>}
     */
    getJWKSCertRadio(): Cypress.Chainable<Element>;
    /**
     * Get the custom IDP certificate radio button.
     * @return {Cypress.Chainable<Element>}
     */
    getCustomCertRadio(): Cypress.Chainable<Element>;
    /**
     * Get the IDP delete action in the danger zone.
     * @return {Cypress.Chainable<Element>}
     */
    getDangerZoneDeleteButton(): Cypress.Chainable<Element>;
    /**
     * Get the IDP delete assertion.
     * @return {Cypress.Chainable<Element>}
     */
    getDeleteAssertion(): Cypress.Chainable<Element | any>;
    /**
     * Get the IDP delete assertion input.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    getDeleteAssertionInput(): Cypress.Chainable<JQuery<Element>>;
    /**
     * Get the IDP delete confirm button.
     * @return {Cypress.Chainable<Element>}
     */
    getDeleteConfirmButton(): Cypress.Chainable<Element | any>;
    /**
     * Get the IDP delete confirm modal close button.
     * @return {Cypress.Chainable<Element>}
     */
    getDeleteConfirmModalCloseButton(): Cypress.Chainable<Element | any>;
    /**
     * Get the IDP general settings form submit button.
     * @return {Cypress.Chainable<Element>}
     */
    getGeneralSettingsFormSubmitButton(): Cypress.Chainable<Element>;
    /**
     * Click on get the IDP general settings form submit button.
     */
    clickOnGeneralSettingsFormSubmitButton(): void;
    /**
     * Get the IDP certificate update button.
     * @return {Cypress.Chainable<Element>}
     */
    getCertificateUpdateButton(): Cypress.Chainable<Element>;
    /**
     * Click on get the IDP certificate update button.
     */
    clickOnCertificateUpdateButton(): void;
    /**
     * Get the claim attribute selection list.
     * @return {Cypress.Chainable<Element>}
     */
    getClaimAttributeSelectionList(): Cypress.Chainable<Element>;
    /**
     * Get the claim attribute selection list edit button.
     * @return {Cypress.Chainable<Element>}
     */
    getClaimAttributeSelectionListEditButton(): Cypress.Chainable<Element>;
    /**
     * Get the claim attribute selection list empty placeholder.
     * @return {Cypress.Chainable<Element>}
     */
    getClaimAttributeSelectionListEmptyPlaceholder(): Cypress.Chainable<Element>;
    /**
     * Get the claim attribute selection list empty placeholder action.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    getClaimAttributeSelectionListEmptyPlaceholderAction(): Cypress.Chainable<JQuery<Element>>;
    /**
     * Clicks on claim attribute mapping update button.
     */
    clickOnUpdateClaimAttributeMapping(): void;
    /**
     * Get the claim attribute selection wizard.
     * @return {Cypress.Chainable<Element>}
     */
    getClaimAttributeSelectionWizard(): Cypress.Chainable<Element>;
    /**
     * Get the claim attribute selection wizard unselected list.
     * @return {Cypress.Chainable<Element>}
     */
    getClaimAttributeSelectionWizardUnselectedList(): Cypress.Chainable<Element>;
    /**
     * Get the claim attribute selection wizard list add button.
     * @return {Cypress.Chainable<Element>}
     */
    getClaimAttributeSelectionWizardListAddButton(): Cypress.Chainable<Element>;
    /**
     * Get the claim attribute selection wizard list remove button.
     * @return {Cypress.Chainable<Element>}
     */
    getClaimAttributeSelectionWizardListRemoveButton(): Cypress.Chainable<Element>;
    /**
     * Get the claim attribute selection wizard list save button.
     * @return {Cypress.Chainable<Element>}
     */
    getClaimAttributeSelectionWizardListSaveButton(): Cypress.Chainable<Element>;
    /**
     * Get the claim attribute selection wizard list cancel button.
     * @return {Cypress.Chainable<Element>}
     */
    getClaimAttributeSelectionWizardListCancelButton(): Cypress.Chainable<Element>;
    /**
     * Get the subject attribute dropdown.
     * @return {Cypress.Chainable<Element>}
     */
    getSubjectAttributeDropdown(): Cypress.Chainable<Element>;
}
