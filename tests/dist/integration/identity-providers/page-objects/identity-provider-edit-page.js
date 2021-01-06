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
import { IdentityProviderEditPageConstants } from "../constants";
import { CommonUtils } from "@wso2/identity-cypress-test-base/utils";
/**
 * Class containing Identity Provider Edit Page objects.
 */
var IdentityProviderEditPage = /** @class */ (function () {
    function IdentityProviderEditPage() {
    }
    /**
     * Get the IDP edit page layout header element.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProviderEditPage.prototype.getPageLayoutHeader = function () {
        return cy.dataTestId(IdentityProviderEditPageConstants.PAGE_LAYOUT_HEADER_DATA_ATTR);
    };
    ;
    /**
     * Get the IDP edit page layout header title element.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProviderEditPage.prototype.getPageLayoutHeaderTitle = function () {
        return cy.dataTestId(IdentityProviderEditPageConstants.PAGE_LAYOUT_HEADER_TITLE_DATA_ATTR);
    };
    ;
    /**
     * Get the IDP edit page layout header sub title element.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProviderEditPage.prototype.getPageLayoutHeaderSubTitle = function () {
        return cy.dataTestId(IdentityProviderEditPageConstants.PAGE_LAYOUT_HEADER_SUB_TITLE_DATA_ATTR);
    };
    ;
    /**
     * Get the IDP edit page layout header image element.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProviderEditPage.prototype.getPageLayoutImage = function () {
        return cy.dataTestId(IdentityProviderEditPageConstants.PAGE_LAYOUT_HEADER_IMAGE_WRAPPER_DATA_ATTR)
            .find("img");
    };
    ;
    /**
     * Get the IDP edit tabs.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProviderEditPage.prototype.getTabs = function () {
        return cy.dataTestId(IdentityProviderEditPageConstants.RESOURCE_TABS_DATA_ATTR);
    };
    ;
    /**
     * Get a specif tab.
     *
     * @param tab - Tab to be selected.
     * @return {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    IdentityProviderEditPage.prototype.getTab = function (tab) {
        return cy.get(IdentityProviderEditPageConstants.RESOURCE_TABS_MENU_DATA_ATTR)
            .within(function () {
            if (tab === "GENERAL") {
                return cy.get("a").eq(0);
            }
            else if (tab === "ATTRIBUTES") {
                return cy.get("a").eq(1);
            }
            else if (tab === "AUTHENTICATION") {
                return cy.get("a").eq(2);
            }
            else if (tab === "OUTBOUND_PROVISIONING") {
                return cy.get("a").eq(3);
            }
            else if (tab === "JIT_PROVISIONING") {
                return cy.get("a").eq(4);
            }
            else if (tab === "ADVANCED") {
                return cy.get("a").eq(5);
            }
            throw new Error("Invalid tab selection - " + tab);
        });
    };
    ;
    /**
     * Select a tab from the resource tabs.
     *
     * @param tab - Tab to be selected.
     */
    IdentityProviderEditPage.prototype.selectTab = function (tab) {
        this.getTab(tab).click();
    };
    ;
    /**
     * Get the IDP edit page back button.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProviderEditPage.prototype.getPageBackButton = function () {
        return cy.dataTestId(IdentityProviderEditPageConstants.PAGE_LAYOUT_HEADER_BACK_BUTTON_DATA_ATTR);
    };
    ;
    /**
     * Get the IDP name input.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    IdentityProviderEditPage.prototype.getIDPNameInput = function () {
        return cy.dataTestId(IdentityProviderEditPageConstants.IDP_NAME_INPUT_DATA_ATTR)
            .find("input");
    };
    ;
    /**
     * Get the IDP description input.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProviderEditPage.prototype.getIDPDescriptionInput = function () {
        return cy.dataTestId(IdentityProviderEditPageConstants.IDP_DESCRIPTION_INPUT_DATA_ATTR);
    };
    ;
    /**
     * Get the IDP image input.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    IdentityProviderEditPage.prototype.getIDPImageInput = function () {
        return cy.dataTestId(IdentityProviderEditPageConstants.IDP_IMAGE_INPUT_DATA_ATTR)
            .find("input");
    };
    ;
    /**
     * Get the IDP JWKS cert endpoint input.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    IdentityProviderEditPage.prototype.getIDPCertJWKSURLInput = function () {
        return cy.dataTestId(IdentityProviderEditPageConstants.IDP_CERT_JWKS_URL_INPUT_DATA_ATTR)
            .find("input");
    };
    ;
    /**
     * Get the JWKS IDP certificate radio button.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProviderEditPage.prototype.getJWKSCertRadio = function () {
        return cy.dataTestId(IdentityProviderEditPageConstants.IDP_CERT_RADIO_GROUP_DATA_ATTR)
            .within(function () {
            cy.get("input[value=\"JWKS\"]");
        });
    };
    ;
    /**
     * Get the custom IDP certificate radio button.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProviderEditPage.prototype.getCustomCertRadio = function () {
        return cy.dataTestId(IdentityProviderEditPageConstants.IDP_CERT_RADIO_GROUP_DATA_ATTR)
            .within(function () {
            cy.get("input[value=\"PEM\"]");
        });
    };
    ;
    /**
     * Get the IDP delete action in the danger zone.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProviderEditPage.prototype.getDangerZoneDeleteButton = function () {
        return cy.dataTestId(IdentityProviderEditPageConstants.DANGER_ZONE_DELETE_BUTTON_DATA_ATTR);
    };
    ;
    /**
     * Get the IDP delete assertion.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProviderEditPage.prototype.getDeleteAssertion = function () {
        return cy.dataTestId(IdentityProviderEditPageConstants.IDP_DELETE_ASSERTION_DATA_ATTR);
    };
    ;
    /**
     * Get the IDP delete assertion input.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    IdentityProviderEditPage.prototype.getDeleteAssertionInput = function () {
        return cy.dataTestId(IdentityProviderEditPageConstants.IDP_DELETE_ASSERTION_INPUT_DATA_ATTR)
            .find("input");
    };
    ;
    /**
     * Get the IDP delete confirm button.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProviderEditPage.prototype.getDeleteConfirmButton = function () {
        return cy.dataTestId(IdentityProviderEditPageConstants.IDP_DELETE_CONFIRM_BUTTON_DATA_ATTR);
    };
    ;
    /**
     * Get the IDP delete confirm modal close button.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProviderEditPage.prototype.getDeleteConfirmModalCloseButton = function () {
        return cy.dataTestId(IdentityProviderEditPageConstants.IDP_DELETE_CONFIRM_MODAL_CLOSE_BUTTON_DATA_ATTR);
    };
    ;
    /**
     * Get the IDP general settings form submit button.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProviderEditPage.prototype.getGeneralSettingsFormSubmitButton = function () {
        return cy.dataTestId(IdentityProviderEditPageConstants.GENERAL_SETTINGS_SUBMIT_BUTTON_DATA_ATTR);
    };
    ;
    /**
     * Click on get the IDP general settings form submit button.
     */
    IdentityProviderEditPage.prototype.clickOnGeneralSettingsFormSubmitButton = function () {
        this.getGeneralSettingsFormSubmitButton().click();
    };
    ;
    /**
     * Get the IDP certificate update button.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProviderEditPage.prototype.getCertificateUpdateButton = function () {
        return cy.dataTestId(IdentityProviderEditPageConstants.IDP_CERT_UPDATE_BUTTON_DATA_ATTR);
    };
    ;
    /**
     * Click on get the IDP certificate update button.
     */
    IdentityProviderEditPage.prototype.clickOnCertificateUpdateButton = function () {
        this.getCertificateUpdateButton().click();
    };
    ;
    /**
     * Get the claim attribute selection list.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProviderEditPage.prototype.getClaimAttributeSelectionList = function () {
        return cy.dataTestId(IdentityProviderEditPageConstants.CLAIM_ATTR_SELECT_LIST_DATA_ATTR);
    };
    ;
    /**
     * Get the claim attribute selection list edit button.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProviderEditPage.prototype.getClaimAttributeSelectionListEditButton = function () {
        return cy.dataTestId(IdentityProviderEditPageConstants.CLAIM_ATTR_SELECT_LIST_EDIT_BUTTON_DATA_ATTR);
    };
    ;
    /**
     * Get the claim attribute selection list empty placeholder.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProviderEditPage.prototype.getClaimAttributeSelectionListEmptyPlaceholder = function () {
        return cy.dataTestId(IdentityProviderEditPageConstants.CLAIM_ATTR_SELECT_LIST_EMPTY_PLACEHOLDER_DATA_ATTR);
    };
    ;
    /**
     * Get the claim attribute selection list empty placeholder action.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    IdentityProviderEditPage.prototype.getClaimAttributeSelectionListEmptyPlaceholderAction = function () {
        return cy.dataTestId(IdentityProviderEditPageConstants.CLAIM_ATTR_SELECT_LIST_EMPTY_PLACEHOLDER_ACTION_DATA_ATTR)
            .find("button");
    };
    ;
    /**
     * Clicks on claim attribute mapping update button.
     */
    IdentityProviderEditPage.prototype.clickOnUpdateClaimAttributeMapping = function () {
        var _this = this;
        cy.get("body")
            .then(function ($body) {
            if ($body.find(CommonUtils.resolveDataTestId(IdentityProviderEditPageConstants.CLAIM_ATTR_SELECT_LIST_EMPTY_PLACEHOLDER_ACTION_DATA_ATTR))) {
                _this.getClaimAttributeSelectionListEmptyPlaceholderAction().click();
            }
            else {
                _this.getClaimAttributeSelectionListEditButton().click();
            }
        });
    };
    ;
    /**
     * Get the claim attribute selection wizard.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProviderEditPage.prototype.getClaimAttributeSelectionWizard = function () {
        return cy.dataTestId(IdentityProviderEditPageConstants.CLAIM_ATTR_SELECT_WIZARD_DATA_ATTR);
    };
    ;
    /**
     * Get the claim attribute selection wizard unselected list.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProviderEditPage.prototype.getClaimAttributeSelectionWizardUnselectedList = function () {
        return cy.dataTestId(IdentityProviderEditPageConstants.CLAIM_ATTR_SELECT_WIZARD_UNSELECTED_LIST_DATA_ATTR);
    };
    ;
    /**
     * Get the claim attribute selection wizard list add button.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProviderEditPage.prototype.getClaimAttributeSelectionWizardListAddButton = function () {
        return cy.dataTestId(IdentityProviderEditPageConstants.CLAIM_ATTR_SELECT_WIZARD_LIST_ADD_BUTTON_DATA_ATTR);
    };
    ;
    /**
     * Get the claim attribute selection wizard list remove button.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProviderEditPage.prototype.getClaimAttributeSelectionWizardListRemoveButton = function () {
        return cy.dataTestId(IdentityProviderEditPageConstants.CLAIM_ATTR_SELECT_WIZARD_LIST_REMOVE_BUTTON_DATA_ATTR);
    };
    ;
    /**
     * Get the claim attribute selection wizard list save button.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProviderEditPage.prototype.getClaimAttributeSelectionWizardListSaveButton = function () {
        return cy.dataTestId(IdentityProviderEditPageConstants.CLAIM_ATTR_SELECT_WIZARD_LIST_SAVE_BUTTON_DATA_ATTR);
    };
    ;
    /**
     * Get the claim attribute selection wizard list cancel button.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProviderEditPage.prototype.getClaimAttributeSelectionWizardListCancelButton = function () {
        return cy.dataTestId(IdentityProviderEditPageConstants.CLAIM_ATTR_SELECT_WIZARD_LIST_SAVE_BUTTON_DATA_ATTR);
    };
    ;
    /**
     * Get the subject attribute dropdown.
     * @return {Cypress.Chainable<Element>}
     */
    IdentityProviderEditPage.prototype.getSubjectAttributeDropdown = function () {
        return cy.dataTestId(IdentityProviderEditPageConstants.SUBJECT_ATTRIBUTE_DROPDOWN_DATA_ATTR);
    };
    ;
    return IdentityProviderEditPage;
}());
export { IdentityProviderEditPage };
