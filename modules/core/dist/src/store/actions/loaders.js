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
import { CommonRequestLoadersActionTypes } from "./types";
/**
 * Redux action to set profile info request loading status.
 *
 * @param {boolean} isLoading - Flag to determine if the request is loading.
 * @return {SetProfileInfoRequestLoadingStatusActionInterface} An action to set loading state.
 */
export const setProfileInfoRequestLoadingStatus = (isLoading) => ({
    payload: isLoading,
    type: CommonRequestLoadersActionTypes.SET_PROFILE_INFO_REQUEST_LOADING_STATUS
});
/**
 * Redux action to set profile schema request loading status.
 *
 * @param {boolean} isLoading - Flag to determine if the request is loading.
 * @return {SetProfileSchemaRequestLoadingStatusActionInterface} An action to set loading state.
 */
export const setProfileSchemaRequestLoadingStatus = (isLoading) => ({
    payload: isLoading,
    type: CommonRequestLoadersActionTypes.SET_PROFILE_SCHEMA_REQUEST_LOADING_STATUS
});
/**
 * Redux action to set token request loading status.
 *
 * @param {boolean} isLoading - Flag to determine if the request is loading.
 * @return {SetTokenRequestLoadingStatusActionInterface} An action to set loading state.
 */
export const setTokenRequestLoadingStatus = (isLoading) => ({
    payload: isLoading,
    type: CommonRequestLoadersActionTypes.SET_TOKEN_REQUEST_LOADING_STATUS
});
/**
 * Redux action to set sign out request loading status.
 *
 * @param {boolean} isLoading - Flag to determine if the request is loading.
 * @return {SetSignOutRequestLoadingStatusActionInterface} An action to set loading state.
 */
export const setSignOutRequestLoadingStatus = (isLoading) => ({
    payload: isLoading,
    type: CommonRequestLoadersActionTypes.SET_SIGN_OUT_REQUEST_LOADING_STATUS
});
/**
 * Redux action to set token revoke request loading status.
 *
 * @param {boolean} isLoading - Flag to determine if the request is loading.
 * @return {SetTokenRevokeRequestLoadingStatusActionInterface} An action to set loading state.
 */
export const setTokenRevokeRequestLoadingStatus = (isLoading) => ({
    payload: isLoading,
    type: CommonRequestLoadersActionTypes.SET_TOKEN_REVOKE_REQUEST_LOADING_STATUS
});
//# sourceMappingURL=loaders.js.map