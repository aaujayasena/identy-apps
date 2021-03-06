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
import { RoleListInterface } from "../models";
/**
 * Retrieve the list of groups that are currently in the system.
 * TODO: Return `response.data` rather than `response` and stop returning any.
 *
 * @param {string} domain - User store domain.
 * @return {Promise<RoleListInterface | any>}
 * @throws {IdentityAppsApiException}
 */
export declare const getRolesList: (domain: string) => Promise<RoleListInterface | any>;
