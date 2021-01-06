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
import { InitOptions, Module, TFunction, i18n as i18nInterface } from "i18next";
/**
 * Supported list of i18n frameworks.
 */
export declare enum SupportedI18nFrameworks {
    REACT = "react"
}
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
export declare class I18n {
    static instance: i18nInterface;
    private static defaultFramework;
    private static debug;
    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    private constructor();
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
    static init(options?: InitOptions, override?: boolean, autoDetect?: boolean, useBackend?: boolean, debug?: boolean, framework?: SupportedI18nFrameworks, plugins?: Module[]): Promise<TFunction>;
}
