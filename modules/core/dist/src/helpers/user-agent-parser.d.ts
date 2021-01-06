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
/// <reference types="ua-parser-js" />
import IBrowser = IUAParser.IBrowser;
import IDevice = IUAParser.IDevice;
import IOS = IUAParser.IOS;
import IEngine = IUAParser.IEngine;
/**
 * Helper class to parse user agent strings.
 */
export declare class UserAgentParser {
    private static parser;
    /**
     * Constructor.
     */
    constructor();
    /**
     * Set UA string to parse.
     *
     * @param {string} rawString - Raw user agent string.
     */
    set uaString(rawString: string);
    /**
     * Retrieves the browser information.
     *
     * @return {IUAParser.IBrowser}
     */
    get browser(): IBrowser;
    /**
     * Retrieves the device information.
     *
     * @remarks
     * `ua-parser-js` returns undefined for desktop device types. A workaround has been
     * implemented as a fallback. Refer [here]{@link https://github.com/faisalman/ua-parser-js/issues/16}
     * @return {IUAParser.IDevice | {vendor: string; model: string; type: string}}
     */
    get device(): IDevice;
    /**
     * Retrieves the engine information.
     *
     * @return {IUAParser.IEngine}
     */
    get engine(): IEngine;
    /**
     * Retrieves the operating system information.
     *
     * @return {IUAParser.IOS}
     */
    get os(): IOS;
}
