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
import { CommonGlobalActionTypes } from "./types";
/**
 * Show AJAX top loading bar loader action.
 *
 * @return {ShowAJAXTopLoadingBarAction}
 */
export const showAJAXTopLoadingBar = () => ({
    type: CommonGlobalActionTypes.SHOW_AJAX_TOP_LOADING_BAR
});
/**
 * Hide AJAX top loading bar loader action.
 *
 * @return {HideAJAXTopLoadingBarAction}
 */
export const hideAJAXTopLoadingBar = () => ({
    type: CommonGlobalActionTypes.HIDE_AJAX_TOP_LOADING_BAR
});
/**
 * Dispatches an action to initialize the alerting system.
 *
 * @param {T} alertSystem - Alert system object.
 *
 * @return {InitializeAlertSystemAction<T>}
 */
export const initializeAlertSystem = (alertSystem) => ({
    payload: alertSystem,
    type: CommonGlobalActionTypes.INITIALIZE_ALERT_SYSTEM
});
/**
 * Dispatches an action to add a new alert.
 *
 * @param {T} alert - Alert
 * @return {AddAlertAction<T>}
 */
export const addAlert = (alert) => ({
    payload: alert,
    type: CommonGlobalActionTypes.ADD_ALERT
});
/**
 * Redux action to set the supported i18n languages.
 *
 * @param {T} languages - Supported i18n languages.
 * @return {SetSupportedI18nLanguagesActionInterface<T>}
 */
export const setSupportedI18nLanguages = (languages) => ({
    payload: languages,
    type: CommonGlobalActionTypes.SET_SUPPORTED_I18N_LANGUAGES
});
//# sourceMappingURL=global.js.map