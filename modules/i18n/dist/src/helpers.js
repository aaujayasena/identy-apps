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
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBackendPaths = exports.isLanguageSupported = exports.getLanguagesSupportedByDefault = exports.getResourcesSupportedByDefault = exports.getNamespacesSupportedByDefault = exports.generateI18nOptions = void 0;
const utils_1 = require("@wso2is/core/utils");
const constants_1 = require("./constants");
/**
 * Generate the i18n options.
 *
 * @param {i18next.InitOptions} options - Options override.
 * @param {boolean} override - Should the passed in options replace the default.
 * @param {boolean} useBackend - XHR back end plugin is used or not. If false, static resources will be loaded.
 * @param {boolean} debug - Debug enabled flag.
 * @param {LocaleBundles} defaultTranslations - Set of translations packed by default.
 * @return {InitOptions} Init options config.
 */
exports.generateI18nOptions = (options, override, useBackend, debug, defaultTranslations) => {
    const DEFAULT_INIT_OPTIONS = {
        contextSeparator: "_",
        debug: false,
        defaultNS: constants_1.I18nModuleConstants.COMMON_NAMESPACE,
        fallbackLng: constants_1.I18nModuleConstants.DEFAULT_FALLBACK_LANGUAGE,
        interpolation: {
            escapeValue: false
        },
        keySeparator: ".",
        ns: defaultTranslations && exports.getNamespacesSupportedByDefault(defaultTranslations),
        nsSeparator: ":",
        pluralSeparator: "_",
        resources: !useBackend
            ? defaultTranslations && exports.getResourcesSupportedByDefault(defaultTranslations)
            : undefined
    };
    if (override) {
        return Object.assign(Object.assign({}, options), { debug });
    }
    return Object.assign(Object.assign(Object.assign({}, DEFAULT_INIT_OPTIONS), { debug }), options);
};
/**
 * Load the namespaces from the default bundle which is inside the module.
 *
 * @param {LocaleBundles} defaultTranslations - Set of translations packed by default.
 * @return {string[]} Namespace array.
 */
exports.getNamespacesSupportedByDefault = (defaultTranslations) => {
    const namespaces = [];
    for (const value of Object.values(defaultTranslations)) {
        for (const namespace of value.meta.namespaces) {
            if (!namespaces.includes(namespace)) {
                namespaces.push(namespace);
            }
        }
    }
    return namespaces;
};
/**
 * Load the default resource bundle available inside the module.
 *
 * @param {LocaleBundles} defaultTranslations - Set of translations packed by default.
 * @return {i18next.Resource} Resource bundle.
 */
exports.getResourcesSupportedByDefault = (defaultTranslations) => {
    let resources = {};
    for (const locale of Object.values(defaultTranslations)) {
        // Try to find the namespace resource file based on the namespaces array declared in meta.
        for (const resource of Object.values(locale.resources)) {
            resources = Object.assign(Object.assign({}, resources), { [locale.meta.code]: Object.assign(Object.assign({}, resources[locale.meta.code]), resource) });
        }
    }
    return resources;
};
/**
 * Get the supported list of languages that are supported by default.
 * i.e. The languages that are packed by default.
 *
 * @param {LocaleBundles} defaultTranslations - Set of translations packed by default.
 * @return {string[]} Supported languages.
 */
exports.getLanguagesSupportedByDefault = (defaultTranslations) => {
    const languages = [];
    for (const value of Object.values(defaultTranslations)) {
        languages.push(value.meta.code);
    }
    return languages;
};
/**
 * Checks if a passed in language is supported or not.
 *
 * @param {string} detectedLanguage - Detected language.
 * @param {string[]} supportedLanguages - Supported languages.
 * @param {SupportedLanguagesMeta} meta - Meta file.
 * @param {LocaleBundles} defaultTranslations - Set of translations packed by default.
 * @return {boolean} Returns true if supported, else returns false.
 */
exports.isLanguageSupported = (detectedLanguage, supportedLanguages, meta, defaultTranslations) => {
    let languages = defaultTranslations
        ? exports.getLanguagesSupportedByDefault(defaultTranslations)
        : [];
    if (supportedLanguages && supportedLanguages instanceof Array && supportedLanguages.length > 0) {
        languages = supportedLanguages;
    }
    else if (meta) {
        languages = Object.keys(meta);
    }
    for (const lang of languages) {
        if (lang === detectedLanguage) {
            return true;
        }
    }
    return false;
};
/**
 * Generates the paths for the XHR backend plugin.
 * Required to fetch namespaces when they are placed in multiple folders.
 *
 * Ex. `resources/i18n/en-US/docs/licence.json`
 *     `resources/i18n/en-US/portals/common.json`
 *
 * @param {string[]} language - Language code.
 * @param {string[]} namespace - Namespace.
 * @param {string} appBaseName - Application basename under which the distribution files are placed.
 * @param {I18nModuleOptionsInterface} i18nBundleOptions - I18n module options.
 * @return {string} Resolved path.
 */
exports.generateBackendPaths = (language, namespace, appBaseName, i18nBundleOptions) => {
    const fullResourcePath = `${utils_1.StringUtils.removeSlashesFromPath(appBaseName)}/${utils_1.StringUtils.removeSlashesFromPath(i18nBundleOptions === null || i18nBundleOptions === void 0 ? void 0 : i18nBundleOptions.resourcePath)}`;
    if (i18nBundleOptions === null || i18nBundleOptions === void 0 ? void 0 : i18nBundleOptions.namespaceDirectories.has(namespace[0])) {
        return `/${fullResourcePath}/${language[0]}/${i18nBundleOptions.namespaceDirectories.get(namespace[0])}/${namespace[0]}.json`;
    }
    return `/${fullResourcePath}/${language[0]}/${namespace[0]}.json`;
};
//# sourceMappingURL=helpers.js.map