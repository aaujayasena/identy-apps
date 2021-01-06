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
 * Class containing Attribute Dialects Edit Page objects.
 */
export declare class AttributeDialectsEditPage {
    /**
     * Get the Attribute Dialects edit page layout header element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeader(): Cypress.Chainable<Element>;
    /**
     * Get the Attribute Dialects edit page layout header title element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeaderTitle(): Cypress.Chainable<Element>;
    /**
     * Get the Attribute Dialects edit page layout header sub title element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeaderSubTitle(): Cypress.Chainable<Element>;
    /**
     * Get the Attribute Dialects edit page layout header image element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutImage(): Cypress.Chainable<JQuery<Element>>;
    /**
     * Get the Attribute Dialects edit page back button.
     * @return {Cypress.Chainable<Element>}
     */
    getPageBackButton(): Cypress.Chainable<Element>;
    /**
     * Get the Attribute Dialects delete action in the danger zone.
     * @return {Cypress.Chainable<Element>}
     */
    getDangerZoneDeleteButton(): Cypress.Chainable<Element>;
    /**
     * Get the Attribute Dialects delete assertion.
     * @return {Cypress.Chainable<Element>}
     */
    getDeleteAssertion(): Cypress.Chainable<Element | any>;
    /**
     * Get the Attribute Dialects delete assertion input.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    getDeleteAssertionInput(): Cypress.Chainable<JQuery<Element>>;
    /**
     * Get the Attribute Dialects delete confirm button.
     * @return {Cypress.Chainable<Element>}
     */
    getDeleteConfirmButton(): Cypress.Chainable<Element | any>;
    /**
     * Get the Attribute Dialects delete confirm modal close button.
     * @return {Cypress.Chainable<Element>}
     */
    getDeleteConfirmModalCloseButton(): Cypress.Chainable<Element | any>;
}
