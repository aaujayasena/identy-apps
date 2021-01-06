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
import { Theme, ThemeLessIndex } from "@wso2is/theme";
/**
 * ThemeContext reducer actions enum.
 */
export var ThemeContextReducerActionTypes;
(function (ThemeContextReducerActionTypes) {
    ThemeContextReducerActionTypes["SET_APP_NAME"] = "SET_APP_NAME";
    ThemeContextReducerActionTypes["SET_COPYRIGHT_TEXT"] = "SET_COPYRIGHT_TEXT";
    ThemeContextReducerActionTypes["SET_CSS"] = "SET_CSS";
    ThemeContextReducerActionTypes["SET_LOGO_URL"] = "SET_LOGO_URL";
    ThemeContextReducerActionTypes["SET_PRODUCT_NAME"] = "SET_PRODUCT_NAME";
    ThemeContextReducerActionTypes["SET_STYLES"] = "SET_STYLES";
    ThemeContextReducerActionTypes["SET_THEME"] = "SET_THEME";
})(ThemeContextReducerActionTypes || (ThemeContextReducerActionTypes = {}));
/**
 * Set Theme CSS reducer action.
 *
 * @param {string} css - Compiled CSS string.
 */
const setCSS = (css) => ({
    payload: css,
    type: ThemeContextReducerActionTypes.SET_CSS
});
/**
 * Set User Defined LESS variable values.
 *
 * @param {ThemeCompileOptionsInterface} styles - LESS ModifyVars
 */
const setStyles = (styles) => ({
    payload: styles,
    type: ThemeContextReducerActionTypes.SET_STYLES
});
/**
 * Set Application name reducer action.
 *
 * @param {string} name - Application name.
 */
const setAppName = (name) => ({
    payload: name,
    type: ThemeContextReducerActionTypes.SET_APP_NAME
});
/**
 * Set Application copyright text reducer action.
 *
 * @param {string} text - Application copyright text.
 */
const setCopyrightText = (text) => ({
    payload: text,
    type: ThemeContextReducerActionTypes.SET_COPYRIGHT_TEXT
});
/**
 * Set Product logo reducer action.
 *
 * @param {string} url - Url of logo image
 */
const setLogo = (url) => ({
    payload: url,
    type: ThemeContextReducerActionTypes.SET_LOGO_URL
});
/**
 * Set Product Name reducer action.
 *
 * @param {string} name - Product name.
 */
const setProductName = (name) => ({
    payload: name,
    type: ThemeContextReducerActionTypes.SET_PRODUCT_NAME
});
/**
 * Set Theme name reducer action.
 *
 * @param {ThemeTypes} theme - Theme. E.g. "default", "dark"
 */
const setTheme = (theme) => ({
    payload: theme,
    type: ThemeContextReducerActionTypes.SET_THEME
});
/**
 * Theme compile method.
 *
 * @param {any} dispatch - `dispatch` function from ReactContext.
 * @param {any} state - ThemeContext state.
 * @param {ThemeCompileOptionsInterface} options - Less copile options.
 */
export const handleCompileTheme = (dispatch, state, options) => {
    Theme.compile(ThemeLessIndex(state.theme), { modifyVars: options })
        .then((styles) => {
        dispatch(setStyles(options));
        dispatch(setCSS(styles));
    });
};
/**
 * Set Application Name method.
 *
 * @param {any} dispatch - `dispatch` function from ReactContext.
 * @param {string} name - Application name.
 */
export const handleSetAppName = (dispatch, name) => {
    dispatch(setAppName(name));
};
/**
 * Set CSS string method.
 *
 * @param {any} dispatch - `dispatch` function from ReactContext.
 * @param {string} css - Compiled CSS string.
 */
export const handleCSS = (dispatch, css) => {
    dispatch(setCSS(css));
};
/**
 * Set Copyright Text method.
 *
 * @param {any} dispatch - `dispatch` function from ReactContext.
 * @param {string} text - Copyright text.
 */
export const handleSetCopyrightText = (dispatch, text) => {
    dispatch(setCopyrightText(text));
};
/**
 * Set Logo URL method.
 *
 * @param {any} dispatch - `dispatch` function from ReactContext.
 * @param {string} url - Product logo URL.
 */
export const handleSetLogo = (dispatch, url) => {
    dispatch(setLogo(url));
};
/**
 * Set Product Name method.
 *
 * @param {any} dispatch - `dispatch` function from ReactContext.
 * @param {string} name - Product name.
 */
export const handleProductName = (dispatch, name) => {
    dispatch(setProductName(name));
};
/**
 * Set LESS style configuration method.
 *
 * @param {any} dispatch - `dispatch` function from ReactContext.
 * @param {string} styles - LESS ModifyVars object.
 */
export const handleStyles = (dispatch, styles) => {
    dispatch(setStyles(styles));
};
/**
 * Theme toggle method.
 *
 * @param {any} dispatch - `dispatch` function from ReactContext.
 * @param {ThemeTypes} theme - Theme. E.g. "default", "dark"
 */
export const handleThemeToggle = (dispatch, theme) => {
    dispatch(setTheme(theme));
};
//# sourceMappingURL=actions.js.map