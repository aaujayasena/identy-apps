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
import { TestableComponentInterface } from "@wso2is/core/models";
import { FunctionComponent } from "react";
/**
 * Footer component prop types.
 */
export interface FooterPropsInterface extends TestableComponentInterface {
    /**
     * Additional CSS classes.
     */
    className?: string;
    /**
     * Copyright text.
     */
    copyright?: string;
    /**
     * Currently selected language.
     */
    currentLanguage?: string;
    /**
     * Fixed direction.
     */
    fixed?: "left" | "right" | "bottom" | "top";
    /**
     * Flag for fluid behavior.
     */
    fluid?: boolean;
    /**
     * Set of footer links.
     */
    links?: FooterLinkInterface[];
    /**
     * Callback for language change.
     * @param {string} language - Changed language.
     */
    onLanguageChange?: (language: string) => void;
    /**
     * Show/Hide language switcher dropdown caret icon.
     */
    showLanguageSwitcherDropdownCaret?: boolean;
    /**
     * Should the switcher be shown.
     */
    showLanguageSwitcher?: boolean;
    /**
     * Set of supported languages.
     */
    supportedLanguages?: object;
}
/**
 * Footer links interface.
 */
export interface FooterLinkInterface {
    /**
     * Link location.
     */
    to: string;
    /**
     * Link name.
     */
    name: string;
}
/**
 * Footer component.
 *
 * @param {FooterPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export declare const Footer: FunctionComponent<FooterPropsInterface>;
