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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import JSBeautify from "js-beautify";
import { JSHINT } from "jshint/dist/jshint";
import React, { useEffect, useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/addon/lint/lint";
import "codemirror/addon/lint/javascript-lint";
import "codemirror/addon/hint/sql-hint";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/sql/sql";
import "codemirror/mode/xml/xml";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/javascript-hint";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/addon/lint/lint.css";
import "codemirror/addon/hint/show-hint.css";
window.JSHINT = JSHINT;
/**
 * Code editor component.
 *
 * @param {CodeEditorProps} props - Props injected to the danger zone component.
 *
 * @return {React.ReactElement}
 */
export const CodeEditor = (props) => {
    const { beautify, getThemeFromEnvironment, language, lint, options, readOnly, showLineNumbers, smart, sourceCode, tabSize, theme, ["data-testid"]: testId } = props, rest = __rest(props, ["beautify", "getThemeFromEnvironment", "language", "lint", "options", "readOnly", "showLineNumbers", "smart", "sourceCode", "tabSize", "theme", "data-testid"]);
    const [dark, setDark] = useState(false);
    /**
     * Gets the browser color scheme so that the color scheme of the textarea can be decided.
     */
    useEffect(() => {
        if (getThemeFromEnvironment && window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)").matches) {
            setDark(true);
        }
        const callback = (e) => {
            if (e.matches) {
                setDark(true);
            }
            else {
                setDark(false);
            }
        };
        getThemeFromEnvironment &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme:dark)").addEventListener("change", callback);
        return () => {
            getThemeFromEnvironment &&
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme:dark)").removeEventListener("change", callback);
        };
    }, [getThemeFromEnvironment]);
    /**
     * Resolves the language mode.
     *
     * @param {string} language - Selected language.
     * @return {object} Resolved mode.
     */
    const resolveMode = (language) => {
        if (!language) {
            throw new Error("Please define a language.");
        }
        return {
            json: language === "json",
            name: (language === "json" || language === "typescript") ? "javascript" : language,
            statementIndent: 4,
            typescript: language === "typescript"
        };
    };
    /**
     * Resolves the editor theme.
     *
     * @return {object} Resolved mode.
     */
    const resolveTheme = () => {
        if (getThemeFromEnvironment) {
            return (dark ? "material" : "default");
        }
        if (!(theme === "dark" || theme === "light")) {
            throw new Error("Please select a supported theme. Only `dark` and `light` are supported at the moment.");
        }
        return (theme === "dark" ? "material" : "default");
    };
    /**
     * Beautifies the source code.
     *
     * @return {string} Beautified source code snippet.
     */
    const beautifyCode = () => {
        let code = sourceCode;
        if (code instanceof Array) {
            code = code.join("");
        }
        if (language === "javascript") {
            // eslint-disable-next-line @typescript-eslint/camelcase
            return JSBeautify(code, { indent_size: tabSize, space_in_empty_paren: true });
        }
        return code;
    };
    return (React.createElement(CodeMirror, Object.assign({}, rest, { value: beautify ? beautifyCode() : sourceCode, options: Object.assign(Object.assign({}, options), { autoCloseBrackets: smart, autoCloseTags: smart, extraKeys: smart ? { "Ctrl-Space": "autocomplete" } : {}, gutters: ["note-gutter", "CodeMirror-linenumbers", "CodeMirror-lint-markers"], indentUnit: tabSize, lineNumbers: showLineNumbers, lint, matchBrackets: smart, matchTags: smart, mode: (options === null || options === void 0 ? void 0 : options.mode) ? options.mode : resolveMode(language), readOnly,
            tabSize, theme: resolveTheme() }), "data-testid": testId })));
};
/**
 * Default props for the code editor component.
 */
CodeEditor.defaultProps = {
    "data-testid": "code-editor",
    language: "javascript",
    lint: false,
    readOnly: false,
    showLineNumbers: true,
    smart: false,
    tabSize: 4,
    theme: "dark"
};
//# sourceMappingURL=code-editor.js.map