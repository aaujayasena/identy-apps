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
import { AddAlertAction, HideAJAXTopLoadingBarAction, InitializeAlertSystemAction, SetSupportedI18nLanguagesActionInterface, ShowAJAXTopLoadingBarAction } from "./types";
/**
 * Show AJAX top loading bar loader action.
 *
 * @return {ShowAJAXTopLoadingBarAction}
 */
export declare const showAJAXTopLoadingBar: () => ShowAJAXTopLoadingBarAction;
/**
 * Hide AJAX top loading bar loader action.
 *
 * @return {HideAJAXTopLoadingBarAction}
 */
export declare const hideAJAXTopLoadingBar: () => HideAJAXTopLoadingBarAction;
/**
 * Dispatches an action to initialize the alerting system.
 *
 * @param {T} alertSystem - Alert system object.
 *
 * @return {InitializeAlertSystemAction<T>}
 */
export declare const initializeAlertSystem: <T = {}>(alertSystem: T) => InitializeAlertSystemAction<T>;
/**
 * Dispatches an action to add a new alert.
 *
 * @param {T} alert - Alert
 * @return {AddAlertAction<T>}
 */
export declare const addAlert: <T = {}>(alert: T) => AddAlertAction<T>;
/**
 * Redux action to set the supported i18n languages.
 *
 * @param {T} languages - Supported i18n languages.
 * @return {SetSupportedI18nLanguagesActionInterface<T>}
 */
export declare const setSupportedI18nLanguages: <T = {}>(languages: T) => SetSupportedI18nLanguagesActionInterface<T>;
