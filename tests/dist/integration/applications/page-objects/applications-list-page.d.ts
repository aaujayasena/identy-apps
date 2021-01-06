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
 * Class containing Applications List Page objects.
 */
export declare class ApplicationsListPage {
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
     * Get the applications table element.
     * @return {Cypress.Chainable<Element>}
     */
    getTable(): Cypress.Chainable<Element>;
    /**
     * Get the applications table body element.
     * @return {Cypress.Chainable<Element>}
     */
    getTableBody(): Cypress.Chainable<Element>;
    /**
     * Get the applications table first element.
     * @return {Cypress.Chainable<Element>}
     */
    getTableFirstElement(): Cypress.Chainable<Element>;
    /**
     * Click on the applications table first element's edit button.
     */
    clickOnTableFirstElementEditButton(): void;
    /**
     * Click on the applications table first element's view button.
     */
    clickOnTableFirstElementViewButton(): void;
    /**
     * Get the the applications table item heading.
     * @return {Cypress.Chainable<Element>}
     */
    getTableItemHeading(): Cypress.Chainable<Element>;
    /**
     * Get the the applications table item edit button.
     * @return {Cypress.Chainable<Element>}
     */
    getTableItemEditButton(): Cypress.Chainable<Element>;
    /**
     * Get the the applications table item delete button.
     * @return {Cypress.Chainable<Element>}
     */
    getTableItemViewButton(): Cypress.Chainable<Element>;
    /**
     * Get the applications page layout header element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeader(): Cypress.Chainable<Element>;
    /**
     * Get the applications page layout header title element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeaderTitle(): Cypress.Chainable<Element>;
    /**
     * Get the applications page layout header sub title element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeaderSubTitle(): Cypress.Chainable<Element>;
    /**
     * Get the applications page layout header action element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeaderAction(): Cypress.Chainable<Element>;
    /**
     * Get the applications list new placeholder element.
     * @return {Cypress.Chainable<Element>}
     */
    getNewTablePlaceholder(): Cypress.Chainable<Element>;
    /**
     * Get the applications list new placeholder action element.
     * @return {Cypress.Chainable<Element>}
     */
    getNewTablePlaceholderAction(): Cypress.Chainable<JQuery<HTMLButtonElement>>;
    /**
     * Click on the new application button.
     */
    clickOnNewApplicationButton(): void;
}
