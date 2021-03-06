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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { IdentityClient } from "@asgardio/oidc-js";
import axios from "axios";
import { CommonServiceResourcesEndpoints } from "../configs";
import { ProfileConstants } from "../constants";
import { IdentityAppsApiException } from "../exceptions";
import { HTTPRequestHeaders } from "../helpers";
import { AcceptHeaderValues, ContentTypeHeaderValues, HttpMethods } from "../models";
import { ContextUtils, ProfileUtils } from "../utils";
/**
 * auth instance.
 */
const auth = IdentityClient.getInstance();
/**
 * Get an http client instance.
 *
 */
const httpClient = auth.httpRequest.bind(auth);
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
export const getGravatarImage = (email, size, defaultImage, fallback = "404") => {
    const requestConfig = {
        method: HttpMethods.GET,
        url: ProfileUtils.buildGravatarURL(email, size, defaultImage, fallback)
    };
    return axios.request(requestConfig)
        .then(() => {
        return Promise.resolve(requestConfig.url);
    })
        .catch((error) => {
        throw new IdentityAppsApiException(ProfileConstants.GRAVATAR_IMAGE_FETCH_REQUEST_ERROR, error.stack, error.code, error.request, error.response, error.config);
    });
};
/**
 * Retrieve the user profile details of the currently authenticated user.
 *
 * @param {string} endpoint - Me endpoint absolute path.
 * @param {string} clientOrigin - Tenant qualified client origin.
 * @param {() => void} onSCIMDisabled - Callback to be fired if SCIM is disabled for the user store.
 * @returns {Promise<ProfileInfoInterface>} Profile information as a Promise.
 * @throws {IdentityAppsApiException}
 */
export const getProfileInfo = (endpoint, clientOrigin, onSCIMDisabled) => {
    const orgKey = "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User";
    const requestConfig = {
        headers: HTTPRequestHeaders(clientOrigin, AcceptHeaderValues.APP_JSON, ContentTypeHeaderValues.APP_SCIM),
        method: HttpMethods.GET,
        url: endpoint
    };
    return httpClient(requestConfig)
        .then((response) => __awaiter(void 0, void 0, void 0, function* () {
        if (response.status !== 200) {
            throw new IdentityAppsApiException(ProfileConstants.PROFILE_INFO_FETCH_REQUEST_INVALID_RESPONSE_CODE_ERROR, null, response.status, response.request, response, response.config);
        }
        const profileResponse = Object.assign({ emails: response.data.emails || "", name: response.data.name || { familyName: "", givenName: "" }, organisation: response.data[orgKey] ? response.data[orgKey].organization : "", phoneNumbers: response.data.phoneNumbers || [], profileUrl: response.data.profileUrl || "", responseStatus: response.status || null, roles: response.data.roles || [], 
            // TODO: Validate if necessary.
            userImage: response.data.userImage || response.data.profileUrl, userName: response.data.userName || "" }, response.data);
        return Promise.resolve(profileResponse);
    }))
        .catch((error) => {
        // Check if the API responds with a `500` error, if it does,
        // navigate the user to the login error page.
        if (error.response
            && error.response.data
            && error.response.data.status
            && error.response.data.status === "500") {
            // Fire `onSCIMDisabled` callback which will navigate the
            // user to the corresponding error page.
            onSCIMDisabled && onSCIMDisabled();
        }
        throw new IdentityAppsApiException(ProfileConstants.PROFILE_INFO_FETCH_REQUEST_ERROR, error.stack, error.code, error.request, error.response, error.config);
    });
};
/**
 * Update the required details of the user profile.
 *
 * @param {object} info - Information that needs to ber updated.
 * @return {Promise<ProfileInfoInterface>} Updated profile info as a Promise.
 * @throws {IdentityAppsApiException}
 */
export const updateProfileInfo = (info) => {
    const requestConfig = {
        data: info,
        headers: HTTPRequestHeaders(ContextUtils.getRuntimeConfig().clientHost, null),
        method: HttpMethods.PATCH,
        url: CommonServiceResourcesEndpoints(ContextUtils.getRuntimeConfig().serverHost).me
    };
    return httpClient(requestConfig)
        .then((response) => {
        if (response.status !== 200) {
            throw new IdentityAppsApiException(ProfileConstants.PROFILE_INFO_UPDATE_REQUEST_INVALID_RESPONSE_CODE_ERROR, null, response.status, response.request, response, response.config);
        }
        return Promise.resolve(response.data);
    })
        .catch((error) => {
        throw new IdentityAppsApiException(ProfileConstants.PROFILE_INFO_UPDATE_REQUEST_ERROR, error.stack, error.code, error.request, error.response, error.config);
    });
};
/**
 * Update the logged in user's profile image URL.
 *
 * @param {string} url - Image URL.
 * @return {Promise<ProfileInfoInterface>} Updated profile info as a Promise.
 * @throws {IdentityAppsApiException}
 */
export const updateProfileImageURL = (url) => {
    const data = {
        Operations: [
            {
                op: "replace",
                value: {
                    profileUrl: url
                }
            }
        ],
        schemas: ["urn:ietf:params:scim:api:messages:2.0:PatchOp"]
    };
    return updateProfileInfo(data);
};
/**
 * Retrieve the profile schemas of the user claims of the currently authenticated user.
 *
 * @return {Promise<ProfileSchemaInterface[]>} Array of profile schemas as a Promise.
 * @throws {IdentityAppsApiException}
 */
export const getProfileSchemas = () => {
    const requestConfig = {
        headers: HTTPRequestHeaders(ContextUtils.getRuntimeConfig().clientHost, null, ContentTypeHeaderValues.APP_JSON),
        method: HttpMethods.GET,
        url: CommonServiceResourcesEndpoints(ContextUtils.getRuntimeConfig().serverHost).profileSchemas
    };
    const schemaAttributes = [];
    return httpClient(requestConfig)
        .then((response) => {
        if (response.status !== 200) {
            throw new IdentityAppsApiException(ProfileConstants.SCHEMA_FETCH_REQUEST_INVALID_RESPONSE_CODE_ERROR, null, response.status, response.request, response, response.config);
        }
        // Retrieve the attributes from all the available resources, and if the
        // attribute belongs to an schema extension the boolean extended will be
        // appended to the attribute object.
        response.data.map((schema) => {
            schema.attributes.map((attribute) => {
                if (schema.id !== ProfileConstants.SCIM2_CORE_USER_SCHEMA) {
                    schemaAttributes.push(Object.assign(Object.assign({}, attribute), { extended: true }));
                    return;
                }
                schemaAttributes.push(attribute);
            });
        });
        return Promise.resolve(schemaAttributes);
    })
        .catch((error) => {
        throw new IdentityAppsApiException(ProfileConstants.SCHEMA_FETCH_REQUEST_ERROR, error.stack, error.code, error.request, error.response, error.config);
    });
};
//# sourceMappingURL=profile.js.map