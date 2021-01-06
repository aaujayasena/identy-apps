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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18n = exports.SupportedI18nFrameworks = void 0;
const i18next_1 = __importDefault(require("i18next"));
const exceptions_1 = require("./exceptions");
const helpers_1 = require("./helpers");
const react_i18next_1 = require("react-i18next");
const i18next_browser_languagedetector_1 = __importDefault(require("i18next-browser-languagedetector"));
const i18next_xhr_backend_1 = __importDefault(require("i18next-xhr-backend"));
/**
 * Supported list of i18n frameworks.
 */
var SupportedI18nFrameworks;
(function (SupportedI18nFrameworks) {
    SupportedI18nFrameworks["REACT"] = "react";
})(SupportedI18nFrameworks = exports.SupportedI18nFrameworks || (exports.SupportedI18nFrameworks = {}));
/**
 * I18n class to initialize the `i18next` library.
 *
 * @example
 * Example usage.
 * ```
 * import { I18n } from "@wso2is/i18n";
 *
 * I18n.init(...params);
 *
 * // Get the instance
 * I18n.instance;
 *
 * ```
 */
class I18n {
    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() { }
    /**
     * Initializes the i18next instance.
     *
     * @param {i18next.InitOptions} options - Passed in init options.
     * @param {boolean} override - Should the passed in options replace the default.
     * @param {boolean} autoDetect - If autodetect plugin should be used or not.
     * @param {boolean} useBackend - If XHR back end plugin should be used or not.
     * @param {boolean} debug - If debug is enabled.
     * @param {SupportedI18nFrameworks} framework - The framework to use.
     * @param {i18next.Module[]} plugins - Other plugins to use.
     * @return {Promise<i18next.TFunction>} Init promise.
     */
    static init(options, override, autoDetect, useBackend, debug, framework = this.defaultFramework, plugins) {
        // Resolve debug mode.
        if (options && (options.debug === true || options.debug === false)) {
            this.debug = options.debug;
        }
        else if (debug) {
            this.debug = debug;
        }
        // If `autoDetect` flag is enabled, activate the language detector plugin.
        if (autoDetect) {
            this.instance.use(i18next_browser_languagedetector_1.default);
        }
        // If `useBackend` flag is enabled, activate the XHR backend plugin.
        if (useBackend) {
            this.instance.use(i18next_xhr_backend_1.default);
        }
        // Iterate plugins array and add them to the instance.
        if (plugins && plugins instanceof Array && plugins.length > 0) {
            for (const plugin of plugins) {
                this.instance.use(plugin);
            }
        }
        // Activate the corresponding i18n framework.
        if (framework === SupportedI18nFrameworks.REACT) {
            this.instance.use(react_i18next_1.initReactI18next);
        }
        else {
            throw new exceptions_1.UnsupportedI18nFrameworkException(framework);
        }
        return this.instance.init(helpers_1.generateI18nOptions(options, override, useBackend, this.debug));
    }
}
exports.I18n = I18n;
I18n.instance = i18next_1.default;
I18n.defaultFramework = SupportedI18nFrameworks.REACT;
I18n.debug = false;
//# sourceMappingURL=i18n.js.map