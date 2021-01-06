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
 * Class containing Identity Providers List Page objects.
 */
export declare class IdentityProvidersListPage {
    /**
     * Generates a Login Page objects instance.
     * @constructor
     */
    constructor();
    /**
     * Click on the applications side panel item.
     */
    clickOnSidePanelItem(): void;
    /**
     * Get the idp table element.
     * @return {Cypress.Chainable<Element>}
     */
    getTable(): Cypress.Chainable<Element>;
    /**
     * Get the idp table body element.
     * @return {Cypress.Chainable<Element>}
     */
    getTableBody(): Cypress.Chainable<Element>;
    /**
     * Get the idp table first element.
     * @return {Cypress.Chainable<Element>}
     */
    getTableFirstElement(): Cypress.Chainable<Element>;
    /**
     * Click on the idp table first element's edit button.
     */
    clickOnTableFirstElementEditButton(): void;
    /**
     * Click on the idp table first element's view button.
     */
    clickOnTableFirstElementViewButton(): void;
    /**
     * Get the the idp table item heading.
     * @return {Cypress.Chainable<Element>}
     */
    getTableItemHeading(): Cypress.Chainable<Element>;
    /**
     * Get the the idp table item edit button.
     * @return {Cypress.Chainable<Element>}
     */
    getTableItemEditButton(): Cypress.Chainable<Element>;
    /**
     * Get the the idp table item delete button.
     * @return {Cypress.Chainable<Element>}
     */
    getTableItemViewButton(): Cypress.Chainable<Element>;
    /**
     * Get the idp page layout header element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeader(): Cypress.Chainable<Element>;
    /**
     * Get the idp page layout header title element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeaderTitle(): Cypress.Chainable<Element>;
    /**
     * Get the idp page layout header sub title element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeaderSubTitle(): Cypress.Chainable<Element>;
    /**
     * Get the idp page layout header action element.
     *
     * @param {object} options - Extra options for cy.get.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeaderAction(options?: object): Cypress.Chainable<Element>;
    /**
     * Get the idp list new placeholder element.
     * @return {Cypress.Chainable<Element>}
     */
    getNewTablePlaceholder(): Cypress.Chainable<Element>;
    /**
     * Get the idp list new placeholder action element.
     *
     * @param {object} options - Extra options for cy.get.
     * @return {Cypress.Chainable<Element>}
     */
    getNewTablePlaceholderAction(options?: object): Cypress.Chainable<JQuery<HTMLButtonElement>>;
    /**
     * Click on the new idp button.
     */
    clickOnNewIDPButton(): void;
}
