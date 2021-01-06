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
import React, { createContext, useReducer } from "react";
import { handleCSS, handleCompileTheme, handleProductName, handleSetAppName, handleSetCopyrightText, handleSetLogo, handleStyles, handleThemeToggle } from "./actions";
import { themeContextReducer, themeInitialState } from "./reducer";
/**
 * ThemeContext.
 */
export const ThemeContext = createContext({
    compile: () => { return; },
    dispatch: (() => 0),
    setAppName: () => { return; },
    setCSS: () => { return; },
    setCopyrightText: () => { return; },
    setLogo: () => { return; },
    setProductName: () => { return; },
    setStyles: () => { return; },
    setTheme: () => { return; },
    state: themeInitialState
});
/**
 * ThemeContext Provider.
 *
 * @param {React.PropsWithChildren<ThemeProviderProsInterface>} props - Wrap content/elements.
 * @returns { React.ReactElement } - ThemeContext Provider.
 */
export const ThemeProvider = (props) => {
    const { children, initialState } = props;
    const [state, dispatch] = useReducer(themeContextReducer, Object.assign(Object.assign({}, themeInitialState), initialState));
    const compile = (options) => { handleCompileTheme(dispatch, state, options); };
    const setAppName = (name) => { handleSetAppName(dispatch, name); };
    const setCSS = (css) => { handleCSS(dispatch, css); };
    const setCopyrightText = (text) => { handleSetCopyrightText(dispatch, text); };
    const setLogo = (url) => { handleSetLogo(dispatch, url); };
    const setProductName = (name) => { handleProductName(dispatch, name); };
    const setStyles = (styles) => { handleStyles(dispatch, styles); };
    const setTheme = (theme) => { handleThemeToggle(dispatch, theme); };
    /**
     * Render state, dispatch and special case actions.
     */
    return (React.createElement(ThemeContext.Provider, { value: {
            compile,
            dispatch,
            setAppName,
            setCSS,
            setCopyrightText,
            setLogo,
            setProductName,
            setStyles,
            setTheme,
            state
        } }, children));
};
//# sourceMappingURL=theme.js.map