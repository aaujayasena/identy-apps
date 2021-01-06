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
 * Class containing Email Templates Edit Page objects.
 */
export declare class EmailTemplatesEditPage {
    /**
     * Generates a Login Page objects instance.
     * @constructor
     */
    constructor();
    /**
     * Get the page layout header element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeader(): Cypress.Chainable<Element>;
    /**
     * Get the page layout header title element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeaderTitle(): Cypress.Chainable<Element>;
    /**
     * Get the page layout header back button.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeaderBackButton(): Cypress.Chainable<Element>;
    /**
     * Click on the page layout header back button.
     */
    clickOnPageLayoutHeaderBackButton(): void;
    /**
     * Get Subject input element.
     * @return {Cypress.Chainable<Element>}
     */
    getSubjectInput(): Cypress.Chainable<Element>;
    /**
     * Get Add template form submit button element.
     * @return {Cypress.Chainable<Element>}
     */
    getFormSubmitButton(): Cypress.Chainable<Element>;
    /**
     * Click on add template form submit button.
     */
    clickOnFormSubmitButton(): void;
}
