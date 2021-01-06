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
import { GravatarFallbackTypes, ProfileInfoInterface, ProfileSchemaInterface } from "../models";
/**
 * Get Gravatar image using the email address.
 *
 * @param {string} email - Email address.
 * @param {number} size - Size of the image from 1 up to 2048.
 * @param {string} defaultImage - Custom default fallback image URL.
 * @param {GravatarFallbackTypes} fallback - Built in fallback strategy.
 * @return {Promise<string>} Valid Gravatar URL as a Promise.
 * @throws {IdentityAppsApiException}
 */
export declare const getGravatarImage: (email: string, size?: number, defaultImage?: string, fallback?: GravatarFallbackTypes) => Promise<string>;
/**
 * Retrieve the user profile details of the currently authenticated user.
 *
 * @param {string} endpoint - Me endpoint absolute path.
 * @param {string} clientOrigin - Tenant qualified client origin.
 * @param {() => void} onSCIMDisabled - Callback to be fired if SCIM is disabled for the user store.
 * @returns {Promise<ProfileInfoInterface>} Profile information as a Promise.
 * @throws {IdentityAppsApiException}
 */
export declare const getProfileInfo: (endpoint: string, clientOrigin: string, onSCIMDisabled?: () => void) => Promise<ProfileInfoInterface>;
/**
 * Update the required details of the user profile.
 *
 * @param {object} info - Information that needs to ber updated.
 * @return {Promise<ProfileInfoInterface>} Updated profile info as a Promise.
 * @throws {IdentityAppsApiException}
 */
export declare const updateProfileInfo: (info: object) => Promise<ProfileInfoInterface>;
/**
 * Update the logged in user's profile image URL.
 *
 * @param {string} url - Image URL.
 * @return {Promise<ProfileInfoInterface>} Updated profile info as a Promise.
 * @throws {IdentityAppsApiException}
 */
export declare const updateProfileImageURL: (url: string) => Promise<ProfileInfoInterface>;
/**
 * Retrieve the profile schemas of the user claims of the currently authenticated user.
 *
 * @return {Promise<ProfileSchemaInterface[]>} Array of profile schemas as a Promise.
 * @throws {IdentityAppsApiException}
 */
export declare const getProfileSchemas: () => Promise<ProfileSchemaInterface[]>;
