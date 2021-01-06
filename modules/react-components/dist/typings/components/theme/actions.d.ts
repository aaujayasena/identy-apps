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
import { ThemeCompileOptionsInterface } from "./models";
/**
 * ThemeContext reducer actions enum.
 */
export declare enum ThemeContextReducerActionTypes {
    SET_APP_NAME = "SET_APP_NAME",
    SET_COPYRIGHT_TEXT = "SET_COPYRIGHT_TEXT",
    SET_CSS = "SET_CSS",
    SET_LOGO_URL = "SET_LOGO_URL",
    SET_PRODUCT_NAME = "SET_PRODUCT_NAME",
    SET_STYLES = "SET_STYLES",
    SET_THEME = "SET_THEME"
}
/**
 * Theme compile method.
 *
 * @param {any} dispatch - `dispatch` function from ReactContext.
 * @param {any} state - ThemeContext state.
 * @param {ThemeCompileOptionsInterface} options - Less copile options.
 */
export declare const handleCompileTheme: (dispatch: any, state: any, options: ThemeCompileOptionsInterface) => void;
/**
 * Set Application Name method.
 *
 * @param {any} dispatch - `dispatch` function from ReactContext.
 * @param {string} name - Application name.
 */
export declare const handleSetAppName: (dispatch: any, name: string) => void;
/**
 * Set CSS string method.
 *
 * @param {any} dispatch - `dispatch` function from ReactContext.
 * @param {string} css - Compiled CSS string.
 */
export declare const handleCSS: (dispatch: any, css: string) => void;
/**
 * Set Copyright Text method.
 *
 * @param {any} dispatch - `dispatch` function from ReactContext.
 * @param {string} text - Copyright text.
 */
export declare const handleSetCopyrightText: (dispatch: any, text: string) => void;
/**
 * Set Logo URL method.
 *
 * @param {any} dispatch - `dispatch` function from ReactContext.
 * @param {string} url - Product logo URL.
 */
export declare const handleSetLogo: (dispatch: any, url: string) => void;
/**
 * Set Product Name method.
 *
 * @param {any} dispatch - `dispatch` function from ReactContext.
 * @param {string} name - Product name.
 */
export declare const handleProductName: (dispatch: any, name: string) => void;
/**
 * Set LESS style configuration method.
 *
 * @param {any} dispatch - `dispatch` function from ReactContext.
 * @param {string} styles - LESS ModifyVars object.
 */
export declare const handleStyles: (dispatch: any, styles: ThemeCompileOptionsInterface) => void;
/**
 * Theme toggle method.
 *
 * @param {any} dispatch - `dispatch` function from ReactContext.
 * @param {ThemeTypes} theme - Theme. E.g. "default", "dark"
 */
export declare const handleThemeToggle: (dispatch: any, theme: any) => void;
