"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnsupportedI18nFrameworkException = void 0;
const i18n_module_exception_1 = require("./i18n-module-exception");
/**
 * Exception class to handle unsupported i18n frameworks on module initialization.
 */
class UnsupportedI18nFrameworkException extends i18n_module_exception_1.I18nModuleException {
    /**
     * Constructor.
     * @param {any} framework - Requested framework.
     * @param {any} stack - Stack trace.
     */
    constructor(framework, stack) {
        super(`The requested i18n framework (${framework}) is currently not supported`, stack);
        this.framework = framework;
    }
}
exports.UnsupportedI18nFrameworkException = UnsupportedI18nFrameworkException;
//# sourceMappingURL=unsupported-i18n-framework-exception.js.map