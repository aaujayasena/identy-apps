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
import { MD5 } from "crypto-js";
import sortBy from "lodash/sortBy";
import moment from "moment";
import { ProductReleaseTypes } from "../models";
/**
 * Class containing common utility methods used across application.
 */
export class CommonUtils {
    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() { }
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
    static parseProductVersion(version, allowSnapshot = false) {
        const tokens = version.split("-");
        const versionNo = tokens[0];
        const release = tokens[1];
        let releaseType = undefined;
        if (release) {
            if (release.startsWith("m")) {
                releaseType = ProductReleaseTypes.MILESTONE;
            }
            else if (release.startsWith("alpha")) {
                releaseType = ProductReleaseTypes.ALPHA;
            }
            else if (release.startsWith("beta")) {
                releaseType = ProductReleaseTypes.BETA;
            }
            else if (release.startsWith("rc")) {
                releaseType = ProductReleaseTypes.RC;
            }
        }
        if (allowSnapshot && tokens[2] === "SNAPSHOT") {
            return [versionNo, `${release}-SNAPSHOT`, releaseType];
        }
        return [versionNo, release, releaseType];
    }
    /**
     * Iterates through the announcements array and gets the valid announcement to be displayed.
     *
     * @param {AnnouncementBannerInterface[]} announcements - Array of announcements.
     * @param {string[]} seen - Set of seen announcements.
     * @return {AnnouncementBannerInterface} Valid announcement.
     */
    static getValidAnnouncement(announcements, seen) {
        const sorted = sortBy(announcements, ["order"]);
        let selected = null;
        for (const item of sorted) {
            const isExpired = moment.duration(moment.unix(parseInt(item.expire, 10)).diff(moment()))
                .asMilliseconds() < 0;
            const isSeen = seen.includes(item.id);
            if (!isExpired && !isSeen) {
                selected = item;
                break;
            }
        }
        return selected;
    }
    /**
     * Get user image from gravatar.com.
     *
     * @param {string} emailAddress - email address received authenticated user.
     * @returns {string} - gravatar image path.
     */
    static getGravatar(emailAddress) {
        return "https://www.gravatar.com/avatar/" + MD5(emailAddress.trim()) + "?d=404";
    }
    /**
     * Reloads the current document.
     */
    static refreshPage() {
        window.location.reload();
    }
    /**
     * Scroll page to a specific target element.
     *
     * @param {any} element - target element.
     * @param {number?} offset - scroll stop offset value.
     */
    static scrollToTarget(element, offset) {
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = offset ? elementPosition - offset : elementPosition;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
    ;
}
/**
 * A util method to humanize the last modified date.
 *
 * @param date - Date string which needs to be humanize
 */
CommonUtils.humanizeDateDifference = (date) => {
    const now = moment(new Date());
    const receivedDate = moment(date);
    return "Last modified " + moment.duration(now.diff(receivedDate)).humanize() + " ago";
};
//# sourceMappingURL=common-utils.js.map