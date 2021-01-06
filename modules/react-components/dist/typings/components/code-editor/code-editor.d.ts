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
import { IUnControlledCodeMirror } from "react-codemirror2";
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
/**
 * Code editor component Prop types.
 */
export interface CodeEditorProps extends IUnControlledCodeMirror, TestableComponentInterface {
    /**
     * Whether to format the code.
     */
    beautify?: boolean;
    /**
     * Language the code is written in.
     */
    language?: "javascript" | "json" | "typescript" | "htmlmixed";
    /**
     * Whether to enable linting or not.
     */
    lint?: boolean;
    /**
     * If the editor is read only or not.
     */
    readOnly?: boolean;
    /**
     * Whether to show line numbers.
     */
    showLineNumbers?: boolean;
    /**
     * Whether to enable smart mode which will enable auto bracket
     * closing etc.
     */
    smart?: boolean;
    /**
     * Code to be displayed on the editor.
     */
    sourceCode?: any;
    /**
     * Tab indent size.
     */
    tabSize?: number;
    /**
     * Editor theme.
     */
    theme?: "dark" | "light";
    /**
     * Get theme from the environment.
     */
    getThemeFromEnvironment?: boolean;
}
/**
 * Code editor component.
 *
 * @param {CodeEditorProps} props - Props injected to the danger zone component.
 *
 * @return {React.ReactElement}
 */
export declare const CodeEditor: FunctionComponent<CodeEditorProps>;
