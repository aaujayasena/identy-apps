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
import { isFeatureEnabled } from "../../helpers";
import { configMock } from "../__mocks__";
describe("Feature enable checker helper function", () => {
    test("Should return true for a feature when disabled features attribute is not defined", () => {
        expect(isFeatureEnabled(configMock.features.applications, "application.edit")).toBe(true);
    });
    test("Should return true for a feature when there disabled features array is empty", () => {
        expect(isFeatureEnabled(configMock.features.identityProviders, "identityProviders.edit")).toBe(true);
    });
    test("Should return true for a feature when disabled features doesn't include the feature.", () => {
        expect(isFeatureEnabled(configMock.features.users, "users.edit")).toBe(true);
    });
    test("Should return false for a feature declared in disabled features.", () => {
        expect(isFeatureEnabled(configMock.features.users, "users.add")).toBe(false);
    });
    test("Should return true for array of feature if any feature is not declared in disabled features.", () => {
        expect(isFeatureEnabled(configMock.features.groups, ["groups.edit.advancedSettings", "groups.edit.permissions"])).toBe(true);
    });
    test("Should return false for array of feature if all the features are declared in disabled features.", () => {
        expect(isFeatureEnabled(configMock.features.groups, ["groups.edit", "groups.edit.generalSettings"])).toBe(false);
    });
    test("Should return false for array of feature if at least one features is declared in disabled features.", () => {
        expect(isFeatureEnabled(configMock.features.groups, ["groups.edit", "groups.edit.mapping"])).toBe(false);
    });
});
//# sourceMappingURL=access-control.test.js.map