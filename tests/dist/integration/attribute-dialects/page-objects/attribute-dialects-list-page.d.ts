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
 */
/// <reference types="cypress" />
/// <reference types="../../types" />
/**
 * Class containing Claims List Page objects.
 */
export declare class AttributeDialectsListPage {
    /**
     * Generates a Login Page objects instance.
     * @constructor
     */
    constructor();
    /**
     * Click on the Claims side panel item.
     */
    clickOnSidePanelItem(): void;
    /**
     * Get the Claims table element.
     * @return {Cypress.Chainable<Element>}
     */
    getTable(): Cypress.Chainable<Element>;
    /**
     * Get the Claims table body element.
     * @return {Cypress.Chainable<Element>}
     */
    getTableBody(): Cypress.Chainable<Element>;
    /**
     * Get the Claims table first element.
     * @return {Cypress.Chainable<Element>}
     */
    getTableFirstElement(): Cypress.Chainable<Element>;
    /**
     * Click on the Claims table first element's edit button.
     */
    clickOnTableFirstElementEditButton(): void;
    /**
     * Click on the Claims table first element's view button.
     */
    clickOnTableFirstElementViewButton(): void;
    /**
     * Get the the Claims table item heading.
     * @return {Cypress.Chainable<Element>}
     */
    getTableItemHeading(): Cypress.Chainable<Element>;
    /**
     * Get the the Claims table item edit button.
     * @return {Cypress.Chainable<Element>}
     */
    getTableItemEditButton(): Cypress.Chainable<Element>;
    /**
     * Get the the Claims table item delete button.
     * @return {Cypress.Chainable<Element>}
     */
    getTableItemViewButton(): Cypress.Chainable<Element>;
    /**
     * Get the Claims page layout header element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeader(): Cypress.Chainable<Element>;
    /**
     * Get the Claims page layout header title element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeaderTitle(): Cypress.Chainable<Element>;
    /**
     * Get the Claims page layout header sub title element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeaderSubTitle(): Cypress.Chainable<Element>;
    /**
     * Get the Claims page layout header action element.
     *
     * @param {object} options - Extra options for cy.get.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeaderAction(options?: object): Cypress.Chainable<Element>;
    /**
     * Get the Claims list new placeholder element.
     * @return {Cypress.Chainable<Element>}
     */
    getNewTablePlaceholder(): Cypress.Chainable<Element>;
    /**
     * Get the Claims list new placeholder action element.
     *
     * @param {object} options - Extra options for cy.get.
     * @return {Cypress.Chainable<Element>}
     */
    getNewTablePlaceholderAction(options?: object): Cypress.Chainable<JQuery<HTMLButtonElement>>;
    /**
     * Click on the new Attribute Dialect button.
     */
    clickOnNewAttributeDialectButton(): void;
    /**
     * Get the Local Dialect container.
     *
     * @return {Cypress.Chainable<Element>}
     */
    getLocalDialectContainer(): Cypress.Chainable<Element>;
    /**
     * Get the Attribute Dialect add wizard.
     *
     * @return {Cypress.Chainable<Element>}
     */
    getAddDialectWizard(): Cypress.Chainable<Element>;
    /**
     * Get the Attribute Dialect add wizard cancel button.
     *
     * @return {Cypress.Chainable<Element>}
     */
    getAddDialectWizardCancelButton(): Cypress.Chainable<Element>;
    /**
     * Get the add wizard dialect URI input.
     *
     * @return {Cypress.Chainable<JQuery<HTMLInputElement>>}
     */
    getAddDialectWizardDialectURIInput(): Cypress.Chainable<JQuery<HTMLInputElement>>;
    /**
     * Get the add wizard attribute URI input.
     *
     * @return {Cypress.Chainable<JQuery<HTMLInputElement>>}
     */
    getAddDialectWizardAttributeURIInput(): Cypress.Chainable<JQuery<HTMLInputElement>>;
    /**
     * Get the add wizard local attributes dropdown.
     *
     * @return {Cypress.Chainable<Element>}
     */
    getAddDialectWizardLocalAttributesDropdown(): Cypress.Chainable<Element>;
    /**
     * Click on the add wizard local attributes dropdown.
     */
    openAddDialectWizardLocalAttributesDropdown(): void;
    /**
     * Get the add wizard local attributes dropdown options.
     * @return {Cypress.Chainable<Element>}
     */
    getAddDialectWizardLocalAttributesDropdownOptions(): Cypress.Chainable<Element>;
    /**
     * Get the add wizard add external dialect button.
     * @return {Cypress.Chainable<Element>}
     */
    getAddDialectWizardAddExternalAttributeButton(): Cypress.Chainable<Element>;
    /**
     * Get the Attribute Dialect add wizard next button.
     *
     * @return {Cypress.Chainable<Element>}
     */
    getAddDialectWizardNextButton(): Cypress.Chainable<Element>;
    /**
     * Get the Attribute Dialect add wizard finish button.
     *
     * @return {Cypress.Chainable<Element>}
     */
    getAddDialectWizardFinishButton(): Cypress.Chainable<Element>;
}
