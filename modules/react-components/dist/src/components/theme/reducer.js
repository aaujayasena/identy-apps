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
import { ThemeContextReducerActionTypes } from "./actions";
/**
 * Initial theme context state.
 */
export const themeInitialState = {
    appName: "",
    copyrightText: "",
    css: "",
    logo: "",
    productName: "",
    styles: {},
    theme: "default"
};
/**
 * ThemeContext reducer.
 *
 * @param {themeInitialState} [ state ] - Initial Theme Context State.
 * @param {any} action - Reducer actions.
 * @returns
 */
export const themeContextReducer = (state = themeInitialState, action) => {
    switch (action.type) {
        case ThemeContextReducerActionTypes.SET_APP_NAME:
            return Object.assign(Object.assign({}, state), { appName: action.payload });
        case ThemeContextReducerActionTypes.SET_COPYRIGHT_TEXT:
            return Object.assign(Object.assign({}, state), { copyrightText: action.payload });
        case ThemeContextReducerActionTypes.SET_STYLES:
            return Object.assign(Object.assign({}, state), { styles: action.payload });
        case ThemeContextReducerActionTypes.SET_LOGO_URL:
            return Object.assign(Object.assign({}, state), { logo: action.payload });
        case ThemeContextReducerActionTypes.SET_PRODUCT_NAME:
            return Object.assign(Object.assign({}, state), { productName: action.payload });
        case ThemeContextReducerActionTypes.SET_THEME:
            return Object.assign(Object.assign({}, state), { theme: action.payload });
        case ThemeContextReducerActionTypes.SET_CSS:
            return Object.assign(Object.assign({}, state), { css: action.payload });
        default:
            return state;
    }
};
//# sourceMappingURL=reducer.js.map