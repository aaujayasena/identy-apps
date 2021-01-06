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
import { ApplicationsListPageConstants } from "../constants";
import { SidePanelDomConstants } from "@wso2/identity-cypress-test-base/constants";
/**
 * Class containing Applications List Page objects.
 */
var ApplicationsListPage = /** @class */ (function () {
    /**
     * Generates a Login Page objects instance.
     * @constructor
     */
    function ApplicationsListPage() {
    }
    /**
     * Click on the applications side panel item.
     */
    ApplicationsListPage.prototype.clickOnSidePanelItem = function () {
        cy.dataTestId(SidePanelDomConstants.APPLICATIONS_PARENT_ITEM_DATA_ATTR).click();
    };
    ;
    /**
     * Get the applications table element.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationsListPage.prototype.getTable = function () {
        return cy.dataTestId(ApplicationsListPageConstants.TABLE_DATA_ATTR);
    };
    ;
    /**
     * Get the applications table body element.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationsListPage.prototype.getTableBody = function () {
        return cy.dataTestId(ApplicationsListPageConstants.TABLE_BODY_DATA_ATTR);
    };
    ;
    /**
     * Get the applications table first element.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationsListPage.prototype.getTableFirstElement = function () {
        return this.getTable()
            .within(function () {
            cy.dataTestId("data-table-row")
                .eq(0);
        });
    };
    ;
    /**
     * Click on the applications table first element's edit button.
     */
    ApplicationsListPage.prototype.clickOnTableFirstElementEditButton = function () {
        var _this = this;
        this.getTableFirstElement()
            .within(function () {
            _this.getTableItemEditButton().trigger("mouseover").click();
        });
    };
    ;
    /**
     * Click on the applications table first element's view button.
     */
    ApplicationsListPage.prototype.clickOnTableFirstElementViewButton = function () {
        var _this = this;
        this.getTableFirstElement()
            .within(function () {
            _this.getTableItemViewButton().trigger("mouseover").click();
        });
    };
    ;
    /**
     * Get the the applications table item heading.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationsListPage.prototype.getTableItemHeading = function () {
        return cy.dataTestId(ApplicationsListPageConstants.TABLE_ROW_HEADING_DATA_ATTR);
    };
    ;
    /**
     * Get the the applications table item edit button.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationsListPage.prototype.getTableItemEditButton = function () {
        return cy.dataTestId(ApplicationsListPageConstants.TABLE_ROW_EDIT_BUTTON_DATA_ATTR);
    };
    ;
    /**
     * Get the the applications table item delete button.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationsListPage.prototype.getTableItemViewButton = function () {
        return cy.dataTestId(ApplicationsListPageConstants.TABLE_ROW_DELETE_BUTTON_DATA_ATTR);
    };
    ;
    /**
     * Get the applications page layout header element.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationsListPage.prototype.getPageLayoutHeader = function () {
        return cy.dataTestId(ApplicationsListPageConstants.PAGE_LAYOUT_HEADER_DATA_ATTR);
    };
    ;
    /**
     * Get the applications page layout header title element.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationsListPage.prototype.getPageLayoutHeaderTitle = function () {
        return cy.dataTestId(ApplicationsListPageConstants.PAGE_LAYOUT_HEADER_TITLE_DATA_ATTR);
    };
    ;
    /**
     * Get the applications page layout header sub title element.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationsListPage.prototype.getPageLayoutHeaderSubTitle = function () {
        return cy.dataTestId(ApplicationsListPageConstants.PAGE_LAYOUT_HEADER_SUB_TITLE_DATA_ATTR);
    };
    ;
    /**
     * Get the applications page layout header action element.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationsListPage.prototype.getPageLayoutHeaderAction = function () {
        return cy.dataTestId(ApplicationsListPageConstants.PAGE_LAYOUT_HEADER_ACTION);
    };
    ;
    /**
     * Get the applications list new placeholder element.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationsListPage.prototype.getNewTablePlaceholder = function () {
        return cy.dataTestId(ApplicationsListPageConstants.NEW_LIST_PLACEHOLDER);
    };
    ;
    /**
     * Get the applications list new placeholder action element.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationsListPage.prototype.getNewTablePlaceholderAction = function () {
        return cy.dataTestId(ApplicationsListPageConstants.NEW_LIST_PLACEHOLDER_ACTION_CONTAINER)
            .find("button");
    };
    ;
    /**
     * Click on the new application button.
     */
    ApplicationsListPage.prototype.clickOnNewApplicationButton = function () {
        this.getPageLayoutHeaderAction().click();
    };
    ;
    return ApplicationsListPage;
}());
export { ApplicationsListPage };
