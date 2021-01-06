/**
 * Copyright (c) 2019, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
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
 *
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
import Axios from "axios";
import Joi from "joi";
/**
 * This validates email addresses. Returns true if valid. False if not valid.
 * Doesn't check for the validity of the top level domain.
 * @param value
 */
export const email = (value) => {
    if (Joi.string()
        .email({ tlds: false })
        .validate(value).error) {
        return false;
    }
    return true;
};
/**
 * This validates mobile numbers. Returns true if valid. False if not valid.
 * Checks if the mobile number input has only numbers, '-', and '+'.
 * @param value
 */
export const mobileNumber = (value) => {
    if (Joi.string()
        .pattern(/^[\d+].[\d-\s+]+[\d]$/)
        .validate(value).error) {
        return false;
    }
    return true;
};
/**
 * This validates URLs. Returns true if valid. False if not valid.
 * Check is the satisfies RFC 3986 specifications
 * @param value
 */
export const url = (value) => {
    if (Joi.string()
        .uri()
        .validate(value).error) {
        return false;
    }
    return true;
};
/**
 * Checks if the image url is valid
 * @param value Url
 */
export const imageUrl = (value) => __awaiter(void 0, void 0, void 0, function* () {
    if (Joi.string()
        .uri()
        .validate(value).error) {
        return Promise.resolve(false);
    }
    else {
        try {
            const response = yield Axios.get(value);
            return Promise.resolve(response.headers["content-type"].includes("image"));
        }
        catch (error) {
            return Promise.resolve(false);
        }
    }
});
//# sourceMappingURL=validation.js.map