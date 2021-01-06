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
import { ThemeContextStateInterface } from "./models";
/**
 * Initial theme context state.
 */
export declare const themeInitialState: ThemeContextStateInterface;
/**
 * ThemeContext reducer.
 *
 * @param {themeInitialState} [ state ] - Initial Theme Context State.
 * @param {any} action - Reducer actions.
 * @returns
 */
export declare const themeContextReducer: (state: ThemeContextStateInterface, action: any) => ThemeContextStateInterface | {
    appName: any;
    copyrightText?: string;
    css?: string;
    logo?: string;
    productName?: string;
    styles?: import("./models").ThemeCompileOptionsInterface;
    theme?: any;
} | {
    copyrightText: any;
    appName?: string;
    css?: string;
    logo?: string;
    productName?: string;
    styles?: import("./models").ThemeCompileOptionsInterface;
    theme?: any;
} | {
    styles: any;
    appName?: string;
    copyrightText?: string;
    css?: string;
    logo?: string;
    productName?: string;
    theme?: any;
} | {
    logo: any;
    appName?: string;
    copyrightText?: string;
    css?: string;
    productName?: string;
    styles?: import("./models").ThemeCompileOptionsInterface;
    theme?: any;
} | {
    productName: any;
    appName?: string;
    copyrightText?: string;
    css?: string;
    logo?: string;
    styles?: import("./models").ThemeCompileOptionsInterface;
    theme?: any;
} | {
    css: any;
    appName?: string;
    copyrightText?: string;
    logo?: string;
    productName?: string;
    styles?: import("./models").ThemeCompileOptionsInterface;
    theme?: any;
};
