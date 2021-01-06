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
import { Claim, ClaimDialect, ClaimsGetParams, ExternalClaim } from "../models";
/**
 * Fetch all local claims.
 *
 * @param {ClaimsGetParams} params - limit, offset, sort, attributes, filter.
 * @return {Promise<Claim[]>} response.
 * @throws {IdentityAppsApiException}
 */
export declare const getAllLocalClaims: (params: ClaimsGetParams) => Promise<Claim[]>;
/**
 * Get all the claim dialects.
 *
 * @param {ClaimsGetParams} params - sort, filter, offset, attributes, limit.
 * @return {Promise<ClaimDialect[]>} response.
 * @throws {IdentityAppsApiException}
 */
export declare const getDialects: (params: ClaimsGetParams) => Promise<ClaimDialect[]>;
/**
 * Get all the external claims.
 *
 * @param {string } dialectID - Claim Dialect ID.
 * @param {ClaimsGetParams} params - limit, offset, filter, attributes, sort.
 * @return {Promise<ExternalClaim[]>} response.
 * @throws {IdentityAppsApiException}
 */
export declare const getAllExternalClaims: (dialectID: string, params: ClaimsGetParams) => Promise<ExternalClaim[]>;
