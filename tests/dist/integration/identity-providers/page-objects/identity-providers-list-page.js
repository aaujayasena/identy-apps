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
import { SidePanelDomConstants } from "@wso2/identity-cypress-test-base/constants";
import { CommonUtils } from "@wso2/identity-cypress-test-base/utils";
import { IdentityProvidersListPageConstants } from "../constants";
/**
 * Class containing Identity Providers List Page objects.
 */
var IdentityProvidersListPage = /** @class */ (function () {
    /**
     * Generates a Login Page objects instance.
     * @constructor
     */
    function IdentityProvidersListPage() {
    }
    /**
     * Click on the applications side panel item.
     */
    IdentityProvidersListPage.prototype.clickOnSidePanelItem = function () {
        cy.dataTestId(SidePanelDomConstants.IDP_PARENT_ITEM_DATA_ATTR).click();
    };
    ;
    /**
     * Get the idp table element.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProvidersListPage.prototype.getTable = function () {
        return cy.dataTestId(IdentityProvidersListPageConstants.TABLE_DATA_ATTR);
    };
    ;
    /**
     * Get the idp table body element.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProvidersListPage.prototype.getTableBody = function () {
        return cy.dataTestId(IdentityProvidersListPageConstants.TABLE_BODY_DATA_ATTR);
    };
    ;
    /**
     * Get the idp table first element.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProvidersListPage.prototype.getTableFirstElement = function () {
        return this.getTable()
            .within(function () {
            cy.dataTestId("data-table-row")
                .eq(0);
        });
    };
    ;
    /**
     * Click on the idp table first element's edit button.
     */
    IdentityProvidersListPage.prototype.clickOnTableFirstElementEditButton = function () {
        var _this = this;
        this.getTableFirstElement()
            .within(function () {
            _this.getTableItemEditButton().trigger("mouseover").click();
        });
    };
    ;
    /**
     * Click on the idp table first element's view button.
     */
    IdentityProvidersListPage.prototype.clickOnTableFirstElementViewButton = function () {
        var _this = this;
        this.getTableFirstElement()
            .within(function () {
            _this.getTableItemViewButton().trigger("mouseover").click();
        });
    };
    ;
    /**
     * Get the the idp table item heading.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProvidersListPage.prototype.getTableItemHeading = function () {
        return cy.dataTestId(IdentityProvidersListPageConstants.TABLE_ROW_HEADING_DATA_ATTR);
    };
    ;
    /**
     * Get the the idp table item edit button.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProvidersListPage.prototype.getTableItemEditButton = function () {
        return cy.dataTestId(IdentityProvidersListPageConstants.TABLE_ROW_EDIT_BUTTON_DATA_ATTR);
    };
    ;
    /**
     * Get the the idp table item delete button.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProvidersListPage.prototype.getTableItemViewButton = function () {
        return cy.dataTestId(IdentityProvidersListPageConstants.TABLE_ROW_DELETE_BUTTON_DATA_ATTR);
    };
    ;
    /**
     * Get the idp page layout header element.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProvidersListPage.prototype.getPageLayoutHeader = function () {
        return cy.dataTestId(IdentityProvidersListPageConstants.PAGE_LAYOUT_HEADER_DATA_ATTR);
    };
    ;
    /**
     * Get the idp page layout header title element.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProvidersListPage.prototype.getPageLayoutHeaderTitle = function () {
        return cy.dataTestId(IdentityProvidersListPageConstants.PAGE_LAYOUT_HEADER_TITLE_DATA_ATTR);
    };
    ;
    /**
     * Get the idp page layout header sub title element.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProvidersListPage.prototype.getPageLayoutHeaderSubTitle = function () {
        return cy.dataTestId(IdentityProvidersListPageConstants.PAGE_LAYOUT_HEADER_SUB_TITLE_DATA_ATTR);
    };
    ;
    /**
     * Get the idp page layout header action element.
     *
     * @param {object} options - Extra options for cy.get.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProvidersListPage.prototype.getPageLayoutHeaderAction = function (options) {
        return cy.dataTestId(IdentityProvidersListPageConstants.PAGE_LAYOUT_HEADER_ACTION);
    };
    ;
    /**
     * Get the idp list new placeholder element.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProvidersListPage.prototype.getNewTablePlaceholder = function () {
        return cy.dataTestId(IdentityProvidersListPageConstants.NEW_LIST_PLACEHOLDER);
    };
    ;
    /**
     * Get the idp list new placeholder action element.
     *
     * @param {object} options - Extra options for cy.get.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProvidersListPage.prototype.getNewTablePlaceholderAction = function (options) {
        return cy.dataTestId(IdentityProvidersListPageConstants.NEW_LIST_PLACEHOLDER_ACTION_CONTAINER)
            .find("button");
    };
    ;
    /**
     * Click on the new idp button.
     */
    IdentityProvidersListPage.prototype.clickOnNewIDPButton = function () {
        var _this = this;
        cy.get("body")
            .then(function ($body) {
            if ($body.find(CommonUtils.resolveDataTestId(IdentityProvidersListPageConstants.PAGE_LAYOUT_HEADER_ACTION)).length > 0) {
                _this.getPageLayoutHeaderAction().click();
            }
            else {
                _this.getNewTablePlaceholderAction().click();
            }
        });
    };
    ;
    return IdentityProvidersListPage;
}());
export { IdentityProvidersListPage };
