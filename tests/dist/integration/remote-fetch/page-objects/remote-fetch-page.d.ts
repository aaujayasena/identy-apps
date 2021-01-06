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
 * Class containing Remote Configuration Page objects.
 */
export declare class RemoteConfigurationPage {
    /**
     * Generates a Remote Configuration Page Instance.
     * @constructor
     */
    constructor();
    /**
     * Click on the remote configuration side panel item.
     */
    clickOnSidePanelItem(): void;
    /**
     * Get the remote configuration page layout header element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeader(): Cypress.Chainable<Element>;
    /**
     * Get the remote configuration page layout header title element.
     * @return {Cypress.Chainable<Element>}
     */
    getPageLayoutHeaderTitle(): Cypress.Chainable<Element>;
    /**
     * Get the remote configuration page git url element.
     * @return {Cypress.Chainable<Element>}
     */
    getSaveConfigGitURL(): Cypress.Chainable<Element>;
    /**
     * Get the remote configuration page git branch element.
     * @return {Cypress.Chainable<Element>}
     */
    getSaveConfigGitBranch(): Cypress.Chainable<Element>;
    /**
     * Get the remote configuration page git directory element.
     * @return {Cypress.Chainable<Element>}
     */
    getSaveConfigGitDirecotry(): Cypress.Chainable<Element>;
    /**
     * Get the remote configuration page git username element.
     * @return {Cypress.Chainable<Element>}
     */
    getSaveConfigGitUserName(): Cypress.Chainable<Element>;
    /**
     * Get the remote configuration page git access token element.
     * @return {Cypress.Chainable<Element>}
     */
    getSaveConfigGitAccessToken(): Cypress.Chainable<Element>;
    /**
     * Get the remote configuration page git connectivity polling element.
     * @return {Cypress.Chainable<Element>}
     */
    getSaveConfigGitConnectivityPolling(): Cypress.Chainable<Element>;
    /**
     * Get the remote configuration page git save config status element.
     * @return {Cypress.Chainable<Element>}
     */
    getSaveConfigStatus(): Cypress.Chainable<Element>;
    /**
     * Get the remote configuration page remove config modal element.
     * @return {Cypress.Chainable<Element>}
     */
    getConfigRemoveModal(): Cypress.Chainable<Element>;
    /**
     * Get the remote configuration page remove config modal assert input element.
     * @return {Cypress.Chainable<Element>}
     */
    getConfigRemoveModalAssertInput(): Cypress.Chainable<Element>;
    /**
     * Get the remote configuration status element.
     * @return {Cypress.Chainable<Element>}
     */
    getApplicationRemoteFetchStatus(): Cypress.Chainable<Element>;
    /**
     * Get the remote configuration success status element.
     * @return {Cypress.Chainable<Element>}
     */
    getApplicationRemoteFetchSuccess(): Cypress.Chainable<Element>;
    /**
     * click the remote configuration trigger button.
     * @return {Cypress.Chainable<Element>}
     */
    clickRemoteFetchTrigger(): void;
    /**
     * click the remote configuration page remove config confirm button.
     * @return {Cypress.Chainable<Element>}
     */
    clickRemoveConfigurationConfirm(): void;
    /**
     * click the remote configuration page save configuration button.
     * @return {Cypress.Chainable<Element>}
     */
    clickSaveConfiguration(): void;
    /**
     * click the remote configuration page remove config button.
     * @return {Cypress.Chainable<Element>}
     */
    clickRemoveConfiguration(): void;
    /**
     * Click on the remote configuration add configuration button
     */
    clickAddConfigureRepository(): void;
}
