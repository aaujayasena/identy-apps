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
import { ReactMarkdownProps } from "react-markdown";
/**
 * Proptypes for the placeholder component.
 */
export interface MarkdownPropsInterface extends ReactMarkdownProps, TestableComponentInterface {
    /**
     * Text alignment.
     */
    textAlign?: "left" | "center" | "right";
}
/**
 * Markdown renderer component.
 *
 * @param {MarkdownPropsInterface} props - Props injected in to the component.
 *
 * @return {React.ReactElement}
 */
export declare const Markdown: FunctionComponent<MarkdownPropsInterface>;