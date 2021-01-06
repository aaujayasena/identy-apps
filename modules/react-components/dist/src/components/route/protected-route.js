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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import { Redirect, Route } from "react-router-dom";
/**
 * Protected route component.
 *
 * @param {ProtectedRouteProps} props - Props injected in to the component.
 *
 * @return {React.ReactElement}
 */
export const ProtectedRoute = (props) => {
    const { component: Component, currentPath, isAuthorized, onAuthCallbackUrlUpdate, loginPath, loginErrorPath, ["data-testid"]: testId } = props, rest = __rest(props, ["component", "currentPath", "isAuthorized", "onAuthCallbackUrlUpdate", "loginPath", "loginErrorPath", "data-testid"]);
    /**
     * Update existing location path in the state to recall upon page refresh or authentication callback.
     * The login path and the login error path have been skipped.
     */
    if (currentPath !== loginPath && currentPath !== loginErrorPath) {
        onAuthCallbackUrlUpdate(currentPath);
    }
    return (React.createElement(Route, Object.assign({ render: (props) => isAuthorized ?
            React.createElement(Component, Object.assign({}, props)) :
            React.createElement(Redirect, { to: loginPath }), "data-testid": testId }, rest)));
};
//# sourceMappingURL=protected-route.js.map