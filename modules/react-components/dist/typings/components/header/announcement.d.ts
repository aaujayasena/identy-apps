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
import { FunctionComponent, ReactNode } from "react";
import { MessageProps, SemanticCOLORS } from "semantic-ui-react";
/**
 * Announcement component prop types.
 */
export interface AnnouncementPropsInterface extends StrictAnnouncementPropsInterface, Omit<MessageProps, "color">, TestableComponentInterface {
    [key: string]: any;
}
/**
 * Announcement component strict prop types.
 */
export interface StrictAnnouncementPropsInterface {
    /**
     * Main message for the announcement.
     */
    message?: ReactNode;
    /**
     * Background color.
     */
    color: SemanticCOLORS | "primary" | "secondary" | string;
    /**
     * Is fluid layout.
     */
    fluid?: boolean;
    /**
     * Show close icon.
     */
    showCloseIcon?: boolean;
}
/**
 * Announcement component.
 *
 * @param {AnnouncementPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export declare const Announcement: FunctionComponent<AnnouncementPropsInterface>;
