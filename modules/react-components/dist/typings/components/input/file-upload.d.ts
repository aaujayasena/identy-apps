/**
 * Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the 'License'); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { TestableComponentInterface } from "@wso2is/core/models";
import { FunctionComponent, ReactNode } from "react";
/**
 * Component to upload file and read the content.
 */
export interface FileUploadPropsInterface extends TestableComponentInterface {
    /**
     * Dropzone placeholder icon.
     */
    dropzoneIcon?: ReactNode | any;
    /**
     * Method to update file state in parent component.
     */
    updateFile: (file: File) => void;
    /**
     * Method to update file name state in parent component.
     */
    updateFileName: (name: string) => void;
    /**
     * Method to update file content in parent component.
     */
    updateContent: (value: string) => void;
    /**
     * Method to update paste value in parent component.
     */
    updatePasteContent?: (value: string) => void;
    /**
     * Encode the file content or not.
     */
    encode?: boolean;
    /**
     * Initial file name.
     */
    initialName?: string;
    /**
     * Initial file.
     */
    initialFile?: File;
    /**
     * Initial paste value.
     */
    initialPasteValue?: string;
    /**
     * Initial file content.
     */
    initialContent?: string;
    /**
     * Trigger empty file error.
     */
    triggerEmptyFileError?: boolean;
    /**
     * File type that can be uploaded.
     */
    fileTypeToUpload?: string;
}
/**
 * Component to upload file and read the content.
 * TODO: Pass localized strings and remove the hardcoded text.
 *
 * @param {FileUploadPropsInterface} props - Props injected to the component.
 * @return {React.ReactElement}.
 */
export declare const FileUpload: FunctionComponent<FileUploadPropsInterface>;
