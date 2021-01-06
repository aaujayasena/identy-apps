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
/**
 * Enum for Alert levels.
 *
 * @readonly
 * @enum {string}
 */
export var AlertLevels;
(function (AlertLevels) {
    /**
     * Success alert level.
     *
     * @type {string}
     */
    AlertLevels["SUCCESS"] = "success";
    /**
     * Error alert level.
     *
     * @type {string}
     */
    AlertLevels["ERROR"] = "error";
    /**
     * Info alert level.
     *
     * @type {string}
     */
    AlertLevels["INFO"] = "info";
    /**
     * Warning alert level.
     *
     * @type {string}
     */
    AlertLevels["WARNING"] = "warning";
})(AlertLevels || (AlertLevels = {}));
/**
 * Enum for Product release types.
 *
 * @readonly
 * @enum {string}
 */
export var ProductReleaseTypes;
(function (ProductReleaseTypes) {
    /**
     * Milestone release.
     * @type {string}
     */
    ProductReleaseTypes["MILESTONE"] = "milestone";
    /**
     * Alpha release.
     * @type {string}
     */
    ProductReleaseTypes["ALPHA"] = "alpha";
    /**
     * Beta Release.
     * @type {string}
     */
    ProductReleaseTypes["BETA"] = "beta";
    /**
     * Release candidate.
     * @type {string}
     */
    ProductReleaseTypes["RC"] = "rc";
})(ProductReleaseTypes || (ProductReleaseTypes = {}));
//# sourceMappingURL=core.js.map