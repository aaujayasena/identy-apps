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
import { ApplicationEditPageConstants } from "../constants";
/**
 * Class containing Applications Edit Page objects.
 */
var ApplicationEditPage = /** @class */ (function () {
    /**
     * Generates a Login Page objects instance.
     * @constructor
     */
    function ApplicationEditPage() {
    }
    /**
     * Get the application edit page layout header element.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationEditPage.prototype.getPageLayoutHeader = function () {
        return cy.dataTestId(ApplicationEditPageConstants.PAGE_LAYOUT_HEADER_DATA_ATTR);
    };
    ;
    /**
     * Get the application edit page layout header title element.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationEditPage.prototype.getPageLayoutHeaderTitle = function () {
        return cy.dataTestId(ApplicationEditPageConstants.PAGE_LAYOUT_HEADER_TITLE_DATA_ATTR);
    };
    ;
    /**
     * Get the application edit page layout header sub title element.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationEditPage.prototype.getPageLayoutHeaderSubTitle = function () {
        return cy.dataTestId(ApplicationEditPageConstants.PAGE_LAYOUT_HEADER_SUB_TITLE_DATA_ATTR);
    };
    ;
    /**
     * Get the application edit tabs.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationEditPage.prototype.getTabs = function () {
        return cy.dataTestId(ApplicationEditPageConstants.RESOURCE_TABS_DATA_ATTR);
    };
    ;
    /**
     * Get a specif tab.
     *
     * @param tab - Tab to be selected.
     * @return {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    ApplicationEditPage.prototype.getTab = function (tab) {
        return cy.get(ApplicationEditPageConstants.RESOURCE_TABS_MENU_DATA_ATTR)
            .within(function () {
            if (tab === "GENERAL") {
                return cy.get("a").eq(0);
            }
            else if (tab === "ACCESS") {
                return cy.get("a").eq(1);
            }
            else if (tab === "ATTRIBUTES") {
                return cy.get("a").eq(2);
            }
            else if (tab === "SIGN_ON") {
                return cy.get("a").eq(3);
            }
            else if (tab === "PROVISIONING") {
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
    ApplicationEditPage.prototype.selectTab = function (tab) {
        this.getTab(tab).click({ force: true, multiple: true });
    };
    ;
    /**
     * Get the application edit page back button.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationEditPage.prototype.getPageBackButton = function () {
        return cy.dataTestId(ApplicationEditPageConstants.PAGE_LAYOUT_HEADER_BACK_BUTTON_DATA_ATTR);
    };
    ;
    /**
     * Get the application name input.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    ApplicationEditPage.prototype.getAppNameInput = function () {
        return cy.dataTestId(ApplicationEditPageConstants.APP_NAME_INPUT_DATA_ATTR)
            .find("input");
    };
    ;
    /**
     * Get the application description input.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationEditPage.prototype.getAppDescriptionInput = function () {
        return cy.dataTestId(ApplicationEditPageConstants.APP_DESCRIPTION_INPUT_DATA_ATTR);
    };
    ;
    /**
     * Get the application image input.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    ApplicationEditPage.prototype.getAppImageInput = function () {
        return cy.dataTestId(ApplicationEditPageConstants.APP_IMAGE_INPUT_DATA_ATTR)
            .find("input");
    };
    ;
    /**
     * Get the application discoverable checkbox.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationEditPage.prototype.getAppDiscoverableCheckbox = function () {
        return cy.dataTestId(ApplicationEditPageConstants.APP_DISCOVERABLE_CHECKBOX_DATA_ATTR);
    };
    ;
    /**
     * Get the application access URL input.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    ApplicationEditPage.prototype.getAppAccessURLInput = function () {
        return cy.dataTestId(ApplicationEditPageConstants.APP_ACCESS_URL_INPUT_DATA_ATTR)
            .find("input");
    };
    ;
    /**
     * Get the application JWKS cert endpoint input.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    ApplicationEditPage.prototype.getAppCertJWKSURLInput = function () {
        return cy.dataTestId(ApplicationEditPageConstants.APP_CERT_JWKS_URL_INPUT_DATA_ATTR)
            .find("input");
    };
    ;
    /**
     * Get the JWKS application certificate radio button.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationEditPage.prototype.getJWKSCertRadio = function () {
        return cy.dataTestId(ApplicationEditPageConstants.APP_CERT_RADIO_GROUP_DATA_ATTR)
            .within(function () {
            cy.get("input[value=\"JWKS\"]");
        });
    };
    ;
    /**
     * Get the custom application certificate radio button.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationEditPage.prototype.getCustomCertRadio = function () {
        return cy.dataTestId(ApplicationEditPageConstants.APP_CERT_RADIO_GROUP_DATA_ATTR)
            .within(function () {
            cy.get("input[value=\"PEM\"]");
        });
    };
    ;
    /**
     * Get the application PEM certificate input.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationEditPage.prototype.getPEMCertInput = function () {
        return cy.dataTestId(ApplicationEditPageConstants.APP_PEM_CERT_INPUT_DATA_ATTR);
    };
    ;
    /**
     * Get the application PEM certificate preview button.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationEditPage.prototype.getPEMCertPreviewButton = function () {
        return cy.dataTestId(ApplicationEditPageConstants.APP_PEM_CERT_PREVIEW_BUTTON_DATA_ATTR);
    };
    ;
    /**
     * Get the application PEM certificate preview modal.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationEditPage.prototype.getPEMCertPreviewModal = function () {
        return cy.dataTestId(ApplicationEditPageConstants.APP_PEM_CERT_PREVIEW_MODAL_DATA_ATTR);
    };
    ;
    /**
     * Get the application PEM certificate preview modal dimmer.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    ApplicationEditPage.prototype.getPEMCertPreviewModalDimmer = function () {
        return cy.get(ApplicationEditPageConstants.APP_PEM_CERT_PREVIEW_MODAL_DIMMER_DATA_ATTR);
    };
    ;
    /**
     * Get the application delete action in the danger zone.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationEditPage.prototype.getDangerZoneDeleteButton = function () {
        return cy.dataTestId(ApplicationEditPageConstants.DANGER_ZONE_DELETE_BUTTON_DATA_ATTR);
    };
    ;
    /**
     * Get the application delete assertion.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationEditPage.prototype.getDeleteAssertion = function () {
        return cy.dataTestId(ApplicationEditPageConstants.APP_DELETE_ASSERTION_DATA_ATTR);
    };
    ;
    /**
     * Get the application delete assertion input.
     * @return {Cypress.Chainable<JQuery<Element>>}
     */
    ApplicationEditPage.prototype.getDeleteAssertionInput = function () {
        return cy.dataTestId(ApplicationEditPageConstants.APP_DELETE_ASSERTION_INPUT_DATA_ATTR)
            .find("input");
    };
    ;
    /**
     * Get the application delete confirm button.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationEditPage.prototype.getDeleteConfirmButton = function () {
        return cy.dataTestId(ApplicationEditPageConstants.APP_DELETE_CONFIRM_BUTTON_DATA_ATTR);
    };
    ;
    /**
     * Get the application delete confirm modal close button.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationEditPage.prototype.getDeleteConfirmModalCloseButton = function () {
        return cy.dataTestId(ApplicationEditPageConstants.APP_DELETE_CONFIRM_MODAL_CLOSE_BUTTON_DATA_ATTR);
    };
    ;
    /**
     * Get the application general settings form submit button.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationEditPage.prototype.getGeneralSettingsFormSubmitButton = function () {
        return cy.dataTestId(ApplicationEditPageConstants.GENERAL_SETTINGS_SUBMIT_BUTTON_DATA_ATTR);
    };
    ;
    /**
     * Click on get the application general settings form submit button.
     */
    ApplicationEditPage.prototype.clickOnGeneralSettingsFormSubmitButton = function () {
        this.getGeneralSettingsFormSubmitButton().click();
    };
    ;
    /**
     * Get the protocol accordion.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationEditPage.prototype.getProtocolAccordion = function () {
        return cy.dataTestId(ApplicationEditPageConstants.PROTOCOL_ACCORDION_DATA_ATTR);
    };
    ;
    /**
     * Get the add protocol button.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationEditPage.prototype.getProtocolAddButton = function () {
        return cy.dataTestId(ApplicationEditPageConstants.ADD_PROTOCOL_BUTTON_DATA_ATTR);
    };
    ;
    /**
     * Get the add protocol wizard.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationEditPage.prototype.getProtocolAddWizard = function () {
        return cy.dataTestId(ApplicationEditPageConstants.ADD_PROTOCOL_WIZARD_DATA_ATTR);
    };
    ;
    /**
     * Get the add protocol wizard cancel button.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationEditPage.prototype.getProtocolAddWizardCancelButton = function () {
        return cy.dataTestId(ApplicationEditPageConstants.ADD_PROTOCOL_WIZARD_CANCEL_BUTTON_DATA_ATTR);
    };
    ;
    /**
     * Get the OIDC section on protocol accordion.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationEditPage.prototype.getProtocolAccordionOIDCItem = function () {
        return cy.dataTestId(ApplicationEditPageConstants.OIDC_PROTOCOL_ACCORDION_ITEM_DATA_ATTR);
    };
    ;
    /**
     * Get the chevron icon of OIDC section on protocol accordion.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationEditPage.prototype.getProtocolAccordionOIDCItemChevron = function () {
        return cy.dataTestId(ApplicationEditPageConstants.OIDC_PROTOCOL_ACCORDION_ITEM_CHEVRON_DATA_ATTR);
    };
    ;
    /**
     * Get the attribute selection list.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationEditPage.prototype.getAttributeSelectionList = function () {
        return cy.dataTestId(ApplicationEditPageConstants.ATTRIBUTE_SELECTION_LIST_DATA_ATTR);
    };
    ;
    /**
     * Get the subject attribute dropdown.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationEditPage.prototype.getSubjectAttributeDropdown = function () {
        return cy.dataTestId(ApplicationEditPageConstants.SUBJECT_ATTRIBUTE_DROPDOWN_DATA_ATTR);
    };
    ;
    /**
     * Get the include userstore checkbox.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationEditPage.prototype.getIncludeUserstoreCheckbox = function () {
        return cy.dataTestId(ApplicationEditPageConstants.INCLUDE_USERSTORE_CHECKBOX_DATA_ATTR);
    };
    ;
    /**
     * Get the include tenant domain checkbox.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationEditPage.prototype.getIncludeTenantDomainCheckbox = function () {
        return cy.dataTestId(ApplicationEditPageConstants.INCLUDE_TENANT_DOMAIN_CHECKBOX_DATA_ATTR);
    };
    ;
    /**
     * Get the use mapped local subject checkbox.
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationEditPage.prototype.getUseMappedLocalSubjectCheckbox = function () {
        return cy.dataTestId(ApplicationEditPageConstants.USED_MAPPED_LOCAL_SUBJECT_CHECKBOX_DATA_ATTR);
    };
    ;
    /**
     * Get the role attribute dropdown
     * @return {Cypress.Chainable<Element>}
     */
    ApplicationEditPage.prototype.getRoleAttributeDropdown = function () {
        return cy.dataTestId(ApplicationEditPageConstants.ROLE_ATTRIBUTE_DROPDOWN_DATA_ATTR);
    };
    ;
    return ApplicationEditPage;
}());
export { ApplicationEditPage };
