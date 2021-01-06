"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const helpers_1 = require("../helpers");
const DEFAULT_SUPPORTED_LANGUAGES = ["en-US", "pt-BR", "si-LK", "ta-IN"];
const LANGUAGE_BUNDLES = {
    "en-US": {
        "meta": {
            "code": "en-US",
            "flag": "us",
            "name": "English (United States)",
            "namespaces": ["common", "devPortal"]
        },
        "resources": {
            "i18key": "i18value"
        }
    },
    "pt-BR": {
        "meta": {
            "code": "pt-BR",
            "flag": "br",
            "name": "Português (Brazil)",
            "namespaces": ["common"]
        },
        "resources": {
            "i18key": "i18value"
        }
    },
    "si-LK": {
        "meta": {
            "code": "si-LK",
            "flag": "lk",
            "name": "සිංහල (Sri Lanka)",
            "namespaces": ["common"]
        },
        "resources": {
            "i18key": "i18value"
        }
    },
    "ta-IN": {
        "meta": {
            "code": "ta-IN",
            "flag": "in",
            "name": "தமிழ் (India)",
            "namespaces": ["common"]
        },
        "resources": {
            "i18key": "i18value"
        }
    }
};
describe("If default supported language retrieval helper function", () => {
    test("Should return the default supported languages as an array", () => {
        expect(Array.isArray(helpers_1.getLanguagesSupportedByDefault(LANGUAGE_BUNDLES))).toBe(true);
    });
    test("Should return all default supported languages", () => {
        expect(helpers_1.getLanguagesSupportedByDefault(LANGUAGE_BUNDLES)).toStrictEqual(DEFAULT_SUPPORTED_LANGUAGES);
    });
});
describe("If default supported namespaces retrieval helper function", () => {
    const DEFAULT_SUPPORTED_NAMESPACES = [
        constants_1.I18nModuleConstants.COMMON_NAMESPACE,
        constants_1.I18nModuleConstants.CONSOLE_PORTAL_NAMESPACE
    ];
    test("Should return the default supported namespaces as an array", () => {
        expect(Array.isArray(helpers_1.getNamespacesSupportedByDefault(LANGUAGE_BUNDLES))).toBe(true);
    });
    test("Should return all the default supported namespaces", () => {
        expect(helpers_1.getNamespacesSupportedByDefault(LANGUAGE_BUNDLES)).toStrictEqual(DEFAULT_SUPPORTED_NAMESPACES);
    });
});
describe("If default supported resources retrieval helper function", () => {
    test("Should return the default supported resources in correct format", () => {
        expect(typeof helpers_1.getResourcesSupportedByDefault(LANGUAGE_BUNDLES)).toBe("object");
    });
    test("Should return resources for all the supported languages", () => {
        expect(Object.keys(helpers_1.getResourcesSupportedByDefault(LANGUAGE_BUNDLES))).toEqual(DEFAULT_SUPPORTED_LANGUAGES);
    });
});
describe("If supported language checker helper function", () => {
    const VALID_META = {
        "en-US": {
            "code": "en-US",
            "flag": "si",
            "name": "",
            "namespaces": [constants_1.I18nModuleConstants.COMMON_NAMESPACE],
            "paths": {
                [constants_1.I18nModuleConstants.COMMON_NAMESPACE]: "/path"
            }
        }
    };
    const INVALID_META = {
        "code": "en-GB"
    };
    test("Should return false for supported language when only detected language is passed in", () => {
        expect(helpers_1.isLanguageSupported("en-US")).toBe(false);
    });
    test("Should return false for un-supported language when only detected language is passed in", () => {
        expect(helpers_1.isLanguageSupported("fr")).toBe(false);
    });
    test("Should return true for supported language when an array of languages are passed in", () => {
        expect(helpers_1.isLanguageSupported("en-US", DEFAULT_SUPPORTED_LANGUAGES)).toBe(true);
    });
    test("Should return false for un-supported language when an array of languages are passed in", () => {
        expect(helpers_1.isLanguageSupported("fr", DEFAULT_SUPPORTED_LANGUAGES)).toBe(false);
    });
    test("Should return true for supported language when a valid meta file is passed in", () => {
        expect(helpers_1.isLanguageSupported("en-US", null, VALID_META)).toBe(true);
    });
    test("Should return true for supported language when an invalid meta file is passed in", () => {
        expect(helpers_1.isLanguageSupported("en-US", null, INVALID_META)).toBe(false);
    });
});
//# sourceMappingURL=helpers.test.js.map