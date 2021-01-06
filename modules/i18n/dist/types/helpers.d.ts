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
import { InitOptions, Resource } from "i18next";
import { I18nModuleOptionsInterface, LocaleBundles, SupportedLanguagesMeta } from "./models";
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
export declare const generateI18nOptions: (options: InitOptions, override: boolean, useBackend: boolean, debug: boolean, defaultTranslations?: LocaleBundles) => InitOptions;
/**
 * Load the namespaces from the default bundle which is inside the module.
 *
 * @param {LocaleBundles} defaultTranslations - Set of translations packed by default.
 * @return {string[]} Namespace array.
 */
export declare const getNamespacesSupportedByDefault: (defaultTranslations: LocaleBundles) => string[];
/**
 * Load the default resource bundle available inside the module.
 *
 * @param {LocaleBundles} defaultTranslations - Set of translations packed by default.
 * @return {i18next.Resource} Resource bundle.
 */
export declare const getResourcesSupportedByDefault: (defaultTranslations: LocaleBundles) => Resource;
/**
 * Get the supported list of languages that are supported by default.
 * i.e. The languages that are packed by default.
 *
 * @param {LocaleBundles} defaultTranslations - Set of translations packed by default.
 * @return {string[]} Supported languages.
 */
export declare const getLanguagesSupportedByDefault: (defaultTranslations: LocaleBundles) => string[];
/**
 * Checks if a passed in language is supported or not.
 *
 * @param {string} detectedLanguage - Detected language.
 * @param {string[]} supportedLanguages - Supported languages.
 * @param {SupportedLanguagesMeta} meta - Meta file.
 * @param {LocaleBundles} defaultTranslations - Set of translations packed by default.
 * @return {boolean} Returns true if supported, else returns false.
 */
export declare const isLanguageSupported: (detectedLanguage: string, supportedLanguages?: string[], meta?: SupportedLanguagesMeta, defaultTranslations?: LocaleBundles) => boolean;
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
export declare const generateBackendPaths: (language: string[], namespace: string[], appBaseName: string, i18nBundleOptions: I18nModuleOptionsInterface) => string;
