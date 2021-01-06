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
import { SidePanelDomConstants } from "@wso2/identity-cypress-test-base/dist/constants";
import { RemoteConfigurationPageConstants } from "../constants";
/**
 * Class containing Remote Configuration Page objects.
 */
var RemoteConfigurationPage = /** @class */ (function () {
    /**
     * Generates a Remote Configuration Page Instance.
     * @constructor
     */
    function RemoteConfigurationPage() {
    }
    /**
     * Click on the remote configuration side panel item.
     */
    RemoteConfigurationPage.prototype.clickOnSidePanelItem = function () {
        cy.dataTestId(SidePanelDomConstants.REMOTE_FETCH_PARENT_ITEM_DATA_ATTR).click();
    };
    ;
    /**
     * Get the remote configuration page layout header element.
     * @return {Cypress.Chainable<Element>}
     */
    RemoteConfigurationPage.prototype.getPageLayoutHeader = function () {
        return cy.dataTestId(RemoteConfigurationPageConstants.PAGE_LAYOUT_HEADER_DATA_ATTR);
    };
    ;
    /**
     * Get the remote configuration page layout header title element.
     * @return {Cypress.Chainable<Element>}
     */
    RemoteConfigurationPage.prototype.getPageLayoutHeaderTitle = function () {
        return cy.dataTestId(RemoteConfigurationPageConstants.PAGE_LAYOUT_HEADER_TITLE_DATA_ATTR);
    };
    ;
    /**
     * Get the remote configuration page git url element.
     * @return {Cypress.Chainable<Element>}
     */
    RemoteConfigurationPage.prototype.getSaveConfigGitURL = function () {
        return cy.dataTestId(RemoteConfigurationPageConstants.CONFIG_FORM_GIT_URL_DATA_ATTR);
    };
    ;
    /**
     * Get the remote configuration page git branch element.
     * @return {Cypress.Chainable<Element>}
     */
    RemoteConfigurationPage.prototype.getSaveConfigGitBranch = function () {
        return cy.dataTestId(RemoteConfigurationPageConstants.CONFIG_FORM_GIT_BRANCH_DATA_ATTR);
    };
    ;
    /**
     * Get the remote configuration page git directory element.
     * @return {Cypress.Chainable<Element>}
     */
    RemoteConfigurationPage.prototype.getSaveConfigGitDirecotry = function () {
        return cy.dataTestId(RemoteConfigurationPageConstants.CONFIG_FORM_GIT_DIRECTORY_DATA_ATTR);
    };
    ;
    /**
     * Get the remote configuration page git username element.
     * @return {Cypress.Chainable<Element>}
     */
    RemoteConfigurationPage.prototype.getSaveConfigGitUserName = function () {
        return cy.dataTestId(RemoteConfigurationPageConstants.CONFIG_FORM_GIT_USERNAME_DATA_ATTR);
    };
    ;
    /**
     * Get the remote configuration page git access token element.
     * @return {Cypress.Chainable<Element>}
     */
    RemoteConfigurationPage.prototype.getSaveConfigGitAccessToken = function () {
        return cy.dataTestId(RemoteConfigurationPageConstants.CONFIG_FORM_GIT_ACCESS_TOKEN_DATA_ATTR);
    };
    ;
    /**
     * Get the remote configuration page git connectivity polling element.
     * @return {Cypress.Chainable<Element>}
     */
    RemoteConfigurationPage.prototype.getSaveConfigGitConnectivityPolling = function () {
        return cy.dataTestId(RemoteConfigurationPageConstants.CONFIG_FORM_GIT_POLLING_DATA_ATTR);
    };
    ;
    /**
     * Get the remote configuration page git save config status element.
     * @return {Cypress.Chainable<Element>}
     */
    RemoteConfigurationPage.prototype.getSaveConfigStatus = function () {
        return cy.dataTestId(RemoteConfigurationPageConstants.CONFIG_FORM_GIT_STATUS_DATA_ATTR);
    };
    ;
    /**
     * Get the remote configuration page remove config modal element.
     * @return {Cypress.Chainable<Element>}
     */
    RemoteConfigurationPage.prototype.getConfigRemoveModal = function () {
        return cy.dataTestId(RemoteConfigurationPageConstants.REMOVE_CONFIG_MODAL_DATA_ATTR);
    };
    ;
    /**
     * Get the remote configuration page remove config modal assert input element.
     * @return {Cypress.Chainable<Element>}
     */
    RemoteConfigurationPage.prototype.getConfigRemoveModalAssertInput = function () {
        return cy.dataTestId(RemoteConfigurationPageConstants.REMOVE_CONFIG_MODAL_ASSERT_INPUT_DATA_ATTR);
    };
    ;
    /**
     * Get the remote configuration status element.
     * @return {Cypress.Chainable<Element>}
     */
    RemoteConfigurationPage.prototype.getApplicationRemoteFetchStatus = function () {
        return cy.dataTestId(RemoteConfigurationPageConstants.REMOTE_FETCH_APPLICATION_STATUS);
    };
    ;
    /**
     * Get the remote configuration success status element.
     * @return {Cypress.Chainable<Element>}
     */
    RemoteConfigurationPage.prototype.getApplicationRemoteFetchSuccess = function () {
        return cy.dataTestId(RemoteConfigurationPageConstants.REMOTE_FETCH_TRIGGER_SUCCESS);
    };
    ;
    /**
     * click the remote configuration trigger button.
     * @return {Cypress.Chainable<Element>}
     */
    RemoteConfigurationPage.prototype.clickRemoteFetchTrigger = function () {
        cy.dataTestId(RemoteConfigurationPageConstants.REMOTE_FETCH_TRIGGER_CONFIG).click();
    };
    ;
    /**
     * click the remote configuration page remove config confirm button.
     * @return {Cypress.Chainable<Element>}
     */
    RemoteConfigurationPage.prototype.clickRemoveConfigurationConfirm = function () {
        cy.dataTestId(RemoteConfigurationPageConstants.REMOVE_CONFIG_MODAL_CONFIRM_DATA_ATTR).click();
    };
    ;
    /**
     * click the remote configuration page save configuration button.
     * @return {Cypress.Chainable<Element>}
     */
    RemoteConfigurationPage.prototype.clickSaveConfiguration = function () {
        cy.dataTestId(RemoteConfigurationPageConstants.CONFIG_FORM_GIT_SAVE_CONFIG_DATA_ATTR).click();
    };
    ;
    /**
     * click the remote configuration page remove config button.
     * @return {Cypress.Chainable<Element>}
     */
    RemoteConfigurationPage.prototype.clickRemoveConfiguration = function () {
        cy.dataTestId(RemoteConfigurationPageConstants.REMOVE_CONFIG_DATA_ATTR).click();
    };
    ;
    /**
     * Click on the remote configuration add configuration button
     */
    RemoteConfigurationPage.prototype.clickAddConfigureRepository = function () {
        cy.dataTestId(RemoteConfigurationPageConstants.SAVE_CONFIG_DATA_ATTR).click();
    };
    return RemoteConfigurationPage;
}());
export { RemoteConfigurationPage };
