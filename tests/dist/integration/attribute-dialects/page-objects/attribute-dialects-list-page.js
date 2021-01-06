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
import { SidePanelDomConstants } from "@wso2/identity-cypress-test-base/constants";
import { CommonUtils } from "@wso2/identity-cypress-test-base/utils";
import { AttributeDialectsListPageConstants } from "../constants";
/**
 * Class containing Claims List Page objects.
 */
var AttributeDialectsListPage = /** @class */ (function () {
    /**
     * Generates a Login Page objects instance.
     * @constructor
     */
    function AttributeDialectsListPage() {
    }
    /**
     * Click on the Claims side panel item.
     */
    AttributeDialectsListPage.prototype.clickOnSidePanelItem = function () {
        cy.dataTestId(SidePanelDomConstants.ATTRIBUTE_DIALECTS_PARENT_ITEM_DATA_ATTR).click();
    };
    /**
     * Get the Claims table element.
     * @return {Cypress.Chainable<Element>}
     */
    AttributeDialectsListPage.prototype.getTable = function () {
        return cy.dataTestId(AttributeDialectsListPageConstants.TABLE_DATA_ATTR);
    };
    /**
     * Get the Claims table body element.
     * @return {Cypress.Chainable<Element>}
     */
    AttributeDialectsListPage.prototype.getTableBody = function () {
        return cy.dataTestId(AttributeDialectsListPageConstants.TABLE_BODY_DATA_ATTR);
    };
    /**
     * Get the Claims table first element.
     * @return {Cypress.Chainable<Element>}
     */
    AttributeDialectsListPage.prototype.getTableFirstElement = function () {
        return this.getTable()
            .within(function () {
            cy.dataTestId("data-table-row")
                .eq(0);
        });
    };
    /**
     * Click on the Claims table first element's edit button.
     */
    AttributeDialectsListPage.prototype.clickOnTableFirstElementEditButton = function () {
        var _this = this;
        this.getTableFirstElement()
            .within(function () {
            _this.getTableItemEditButton().trigger("mouseover").click();
        });
    };
    /**
     * Click on the Claims table first element's view button.
     */
    AttributeDialectsListPage.prototype.clickOnTableFirstElementViewButton = function () {
        var _this = this;
        this.getTableFirstElement()
            .within(function () {
            _this.getTableItemViewButton().trigger("mouseover").click();
        });
    };
    /**
     * Get the the Claims table item heading.
     * @return {Cypress.Chainable<Element>}
     */
    AttributeDialectsListPage.prototype.getTableItemHeading = function () {
        return cy.dataTestId(AttributeDialectsListPageConstants.TABLE_ROW_SUB_HEADING_DATA_ATTR);
    };
    /**
     * Get the the Claims table item edit button.
     * @return {Cypress.Chainable<Element>}
     */
    AttributeDialectsListPage.prototype.getTableItemEditButton = function () {
        return cy.dataTestId(AttributeDialectsListPageConstants.TABLE_ROW_EDIT_BUTTON_DATA_ATTR);
    };
    /**
     * Get the the Claims table item delete button.
     * @return {Cypress.Chainable<Element>}
     */
    AttributeDialectsListPage.prototype.getTableItemViewButton = function () {
        return cy.dataTestId(AttributeDialectsListPageConstants.TABLE_ROW_DELETE_BUTTON_DATA_ATTR);
    };
    /**
     * Get the Claims page layout header element.
     * @return {Cypress.Chainable<Element>}
     */
    AttributeDialectsListPage.prototype.getPageLayoutHeader = function () {
        return cy.dataTestId(AttributeDialectsListPageConstants.PAGE_LAYOUT_HEADER_DATA_ATTR);
    };
    /**
     * Get the Claims page layout header title element.
     * @return {Cypress.Chainable<Element>}
     */
    AttributeDialectsListPage.prototype.getPageLayoutHeaderTitle = function () {
        return cy.dataTestId(AttributeDialectsListPageConstants.PAGE_LAYOUT_HEADER_TITLE_DATA_ATTR);
    };
    /**
     * Get the Claims page layout header sub title element.
     * @return {Cypress.Chainable<Element>}
     */
    AttributeDialectsListPage.prototype.getPageLayoutHeaderSubTitle = function () {
        return cy.dataTestId(AttributeDialectsListPageConstants.PAGE_LAYOUT_HEADER_SUB_TITLE_DATA_ATTR);
    };
    /**
     * Get the Claims page layout header action element.
     *
     * @param {object} options - Extra options for cy.get.
     * @return {Cypress.Chainable<Element>}
     */
    AttributeDialectsListPage.prototype.getPageLayoutHeaderAction = function (options) {
        return cy.dataTestId(AttributeDialectsListPageConstants.PAGE_LAYOUT_HEADER_ACTION);
    };
    /**
     * Get the Claims list new placeholder element.
     * @return {Cypress.Chainable<Element>}
     */
    AttributeDialectsListPage.prototype.getNewTablePlaceholder = function () {
        return cy.dataTestId(AttributeDialectsListPageConstants.NEW_LIST_PLACEHOLDER);
    };
    /**
     * Get the Claims list new placeholder action element.
     *
     * @param {object} options - Extra options for cy.get.
     * @return {Cypress.Chainable<Element>}
     */
    AttributeDialectsListPage.prototype.getNewTablePlaceholderAction = function (options) {
        return cy.dataTestId(AttributeDialectsListPageConstants.NEW_LIST_PLACEHOLDER_ACTION_CONTAINER)
            .find("button");
    };
    /**
     * Click on the new Attribute Dialect button.
     */
    AttributeDialectsListPage.prototype.clickOnNewAttributeDialectButton = function () {
        var _this = this;
        cy.get("body")
            .then(function ($body) {
            if ($body.find(CommonUtils.resolveDataTestId(AttributeDialectsListPageConstants.PAGE_LAYOUT_HEADER_ACTION)).length > 0) {
                _this.getPageLayoutHeaderAction().click();
            }
            else {
                _this.getNewTablePlaceholderAction().click();
            }
        });
    };
    /**
     * Get the Local Dialect container.
     *
     * @return {Cypress.Chainable<Element>}
     */
    AttributeDialectsListPage.prototype.getLocalDialectContainer = function () {
        return cy.dataTestId(AttributeDialectsListPageConstants.LOCAL_DIALECT_CONTAINER_DATA_ATTR);
    };
    /**
     * Get the Attribute Dialect add wizard.
     *
     * @return {Cypress.Chainable<Element>}
     */
    AttributeDialectsListPage.prototype.getAddDialectWizard = function () {
        return cy.dataTestId(AttributeDialectsListPageConstants.ADD_DIALECT_WIZARD_DATA_ATTR);
    };
    /**
     * Get the Attribute Dialect add wizard cancel button.
     *
     * @return {Cypress.Chainable<Element>}
     */
    AttributeDialectsListPage.prototype.getAddDialectWizardCancelButton = function () {
        return cy.dataTestId(AttributeDialectsListPageConstants.ADD_DIALECT_WIZARD_CANCEL_BUTTON_DATA_ATTR);
    };
    /**
     * Get the add wizard dialect URI input.
     *
     * @return {Cypress.Chainable<JQuery<HTMLInputElement>>}
     */
    AttributeDialectsListPage.prototype.getAddDialectWizardDialectURIInput = function () {
        return cy.dataTestId(AttributeDialectsListPageConstants.ADD_DIALECT_WIZARD_DIALECT_URI_INPUT_DATA_ATTR)
            .find("input");
    };
    /**
     * Get the add wizard attribute URI input.
     *
     * @return {Cypress.Chainable<JQuery<HTMLInputElement>>}
     */
    AttributeDialectsListPage.prototype.getAddDialectWizardAttributeURIInput = function () {
        return cy.dataTestId(AttributeDialectsListPageConstants.ADD_DIALECT_WIZARD_ATTRIBUTE_URI_INPUT_DATA_ATTR)
            .find("input");
    };
    /**
     * Get the add wizard local attributes dropdown.
     *
     * @return {Cypress.Chainable<Element>}
     */
    AttributeDialectsListPage.prototype.getAddDialectWizardLocalAttributesDropdown = function () {
        return cy.dataTestId(AttributeDialectsListPageConstants.ADD_DIALECT_WIZARD_LOCAL_ATTR_DROPDOWN_DATA_ATTR);
    };
    /**
     * Click on the add wizard local attributes dropdown.
     */
    AttributeDialectsListPage.prototype.openAddDialectWizardLocalAttributesDropdown = function () {
        this.getAddDialectWizardLocalAttributesDropdown().click();
    };
    /**
     * Get the add wizard local attributes dropdown options.
     * @return {Cypress.Chainable<Element>}
     */
    AttributeDialectsListPage.prototype.getAddDialectWizardLocalAttributesDropdownOptions = function () {
        return this.getAddDialectWizardLocalAttributesDropdown()
            .within(function () {
            cy.get(AttributeDialectsListPageConstants.ADD_DIALECT_WIZARD_LOCAL_ATTR_DROPDOWN_OPTIONS_DATA_ATTR);
        });
    };
    /**
     * Get the add wizard add external dialect button.
     * @return {Cypress.Chainable<Element>}
     */
    AttributeDialectsListPage.prototype.getAddDialectWizardAddExternalAttributeButton = function () {
        return cy.dataTestId(AttributeDialectsListPageConstants.ADD_DIALECT_WIZARD_ADD_EXTERNAL_ATTR_BUTTON_DATA_ATTR);
    };
    /**
     * Get the Attribute Dialect add wizard next button.
     *
     * @return {Cypress.Chainable<Element>}
     */
    AttributeDialectsListPage.prototype.getAddDialectWizardNextButton = function () {
        return cy.dataTestId(AttributeDialectsListPageConstants.ADD_DIALECT_WIZARD_NEXT_BUTTON_DATA_ATTR);
    };
    /**
     * Get the Attribute Dialect add wizard finish button.
     *
     * @return {Cypress.Chainable<Element>}
     */
    AttributeDialectsListPage.prototype.getAddDialectWizardFinishButton = function () {
        return cy.dataTestId(AttributeDialectsListPageConstants.ADD_DIALECT_WIZARD_FINISH_BUTTON_DATA_ATTR);
    };
    return AttributeDialectsListPage;
}());
export { AttributeDialectsListPage };
