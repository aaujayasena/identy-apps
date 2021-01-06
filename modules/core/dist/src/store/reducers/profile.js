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
import { CommonProfileActionTypes } from "../actions/types";
/**
 * Reducer to handle the state of profile related actions.
 *
 * @param {CommonProfileReducerStateInterface<T, S, U>} initialState - Reducer initial state.
 * @returns {CommonProfileReducerStateInterface<T, S, U>} The new state
 */
export const commonProfileReducer = (initialState) => (state = initialState, action) => {
    switch (action.type) {
        case CommonProfileActionTypes.SET_PROFILE_INFO:
            return Object.assign(Object.assign({}, state), { profileInfo: action.payload });
        case CommonProfileActionTypes.SET_PROFILE_SCHEMAS:
            return Object.assign(Object.assign({}, state), { profileSchemas: action.payload });
        case CommonProfileActionTypes.SET_PROFILE_LINKED_ACCOUNTS:
            return Object.assign(Object.assign({}, state), { linkedAccounts: action.payload });
        case CommonProfileActionTypes.TOGGLE_SCIM_ENABLED:
            return Object.assign(Object.assign({}, state), { isSCIMEnabled: action.payload });
        default:
            return state;
    }
};
//# sourceMappingURL=profile.js.map