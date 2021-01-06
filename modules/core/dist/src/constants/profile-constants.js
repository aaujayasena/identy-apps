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
/**
 * Class containing profile operation constants.
 */
export class ProfileConstants {
    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    /* eslint-disable @typescript-eslint/no-empty-function */
    constructor() { }
}
// SCIM2 schema IDs
ProfileConstants.SCIM2_CORE_USER_SCHEMA = "urn:ietf:params:scim:schemas:core:2.0:User";
ProfileConstants.SCIM2_ENT_USER_SCHEMA = "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User";
// API errors
ProfileConstants.SCHEMA_FETCH_REQUEST_INVALID_RESPONSE_CODE_ERROR = "Received an invalid status " +
    "code while retrieving the profile schemas.";
ProfileConstants.SCHEMA_FETCH_REQUEST_ERROR = "An error occurred while fetching the profile " +
    "schemas.";
ProfileConstants.PROFILE_INFO_FETCH_REQUEST_INVALID_RESPONSE_CODE_ERROR = "Received an invalid " +
    "status code while retrieving profile info.";
ProfileConstants.PROFILE_INFO_FETCH_REQUEST_ERROR = "An error occurred while fetching the profile " +
    "info.";
ProfileConstants.PROFILE_INFO_UPDATE_REQUEST_INVALID_RESPONSE_CODE_ERROR = "Received an invalid " +
    "status code while updating profile info.";
ProfileConstants.PROFILE_INFO_UPDATE_REQUEST_ERROR = "An error occurred while updating the " +
    "profile info.";
ProfileConstants.ACCOUNT_SWITCH_REQUEST_ERROR = "An error occurred while switching the account.";
ProfileConstants.GRAVATAR_IMAGE_FETCH_REQUEST_ERROR = "An error occurred while fetching the " +
    "gravatar.";
/**
 * Set of SCIM2 schema names.
 * @constant
 * @type {Map<string, string>}
 * @default
 */
ProfileConstants.SCIM2_SCHEMA_DICTIONARY = new Map()
    .set("EMAILS", "emails")
    .set("USERNAME", "userName")
    .set("NAME", "name")
    .set("ROLES_DEFAULT", "roles.default")
    .set("PROFILE_URL", "profileUrl")
    .set("ACCOUNT_LOCKED", "accountLocked")
    .set("ACCOUNT_DISABLED", "accountDisabled")
    .set("ONETIME_PASSWORD", "oneTimePassword");
/**
 * States if the SCIM schema is mutable.
 */
ProfileConstants.READONLY_SCHEMA = "READ_ONLY";
//# sourceMappingURL=profile-constants.js.map