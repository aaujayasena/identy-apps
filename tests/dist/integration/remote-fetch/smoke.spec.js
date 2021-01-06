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
import { CookieUtils, HousekeepingUtils } from "@wso2/identity-cypress-test-base/utils";
var USERNAME = Cypress.env("TENANT_USERNAME");
var PASSWORD = Cypress.env("TENANT_PASSWORD");
var SERVER_URL = Cypress.env("SERVER_URL");
var PORTAL = Cypress.env("CONSOLE_BASE_URL");
var TENANT_DOMAIN = Cypress.env("TENANT_DOMAIN");
describe("ITC-4.0.0 - [remote-configuration] - Remote configuration Smoke Test.", function () {
    before(function () {
        HousekeepingUtils.performCleanUpTasks();
        cy.login(USERNAME, PASSWORD, SERVER_URL, PORTAL, TENANT_DOMAIN);
    });
    beforeEach(function () {
        CookieUtils.preserveAllSessionCookies();
    });
    after(function () {
        cy.logout();
    });
    // This test case only fails during the product build time, but passes when it run locally.
    // Therefore disabling this test temporally until we find the cause for this failure.
    // context.skip("ITC-4.1.0 - [remote-configuration] - Navigate to remote configuration view.", () => {
    //
    //     it("ITC-4.1.1 - [remote-configuration] - Can navigate to remote configuration view.", () => {
    //
    //         cy.navigateToRemoteFetchPage(true, false);
    //     });
    //
    // });
});
