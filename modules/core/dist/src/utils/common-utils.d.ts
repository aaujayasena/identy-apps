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
import { AnnouncementBannerInterface, ProductReleaseTypes } from "../models";
/**
 * Class containing common utility methods used across application.
 */
export declare class CommonUtils {
    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    private constructor();
    /**
     * A util method to humanize the last modified date.
     *
     * @param date - Date string which needs to be humanize
     */
    static humanizeDateDifference: (date: string) => string;
    /**
     * Parses the product version.
     * @example
     * // returns [ version = "5.11.0", release = "m23", type = "milestone" ]
     * const [ version, release, type ] = CommonUtils.parseProductVersion("5.11.0-m23-SNAPSHOT");
     *
     * @param {string} version- Raw version in the form of `5.11.0-m23-SNAPSHOT`.
     * @param {boolean} allowSnapshot - Show the SNAPSHOT label.
     * @return {[string, string, ProductReleaseTypes]}
     */
    static parseProductVersion(version: string, allowSnapshot?: boolean): [string, string, ProductReleaseTypes];
    /**
     * Iterates through the announcements array and gets the valid announcement to be displayed.
     *
     * @param {AnnouncementBannerInterface[]} announcements - Array of announcements.
     * @param {string[]} seen - Set of seen announcements.
     * @return {AnnouncementBannerInterface} Valid announcement.
     */
    static getValidAnnouncement(announcements: AnnouncementBannerInterface[], seen: string[]): AnnouncementBannerInterface;
    /**
     * Get user image from gravatar.com.
     *
     * @param {string} emailAddress - email address received authenticated user.
     * @returns {string} - gravatar image path.
     */
    static getGravatar(emailAddress: string): string;
    /**
     * Reloads the current document.
     */
    static refreshPage(): void;
    /**
     * Scroll page to a specific target element.
     *
     * @param {any} element - target element.
     * @param {number?} offset - scroll stop offset value.
     */
    static scrollToTarget(element: any, offset?: number): void;
}
