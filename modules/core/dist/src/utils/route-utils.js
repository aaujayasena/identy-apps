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
 *
 */
import isEmpty from "lodash/isEmpty";
import { matchPath } from "react-router";
import { hasRequiredScopes } from "../helpers";
/**
 * Utility class for application routes related operations.
 */
export class RouteUtils {
    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() { }
    /**
     * Filters the set of enabled routes based on the app config.
     *
     * @param {RouteInterface[]} routes - Routes to evaluate.
     * @param {T} featureConfig - Feature config.
     * @param {string} allowedScopes - Set of allowed scopes.
     * @return {RouteInterface[]} Filtered routes.
     */
    static filterEnabledRoutes(routes, featureConfig, allowedScopes) {
        // Filters features based on scope requirements.
        const filter = (routeArr, allowedScopes) => {
            return routeArr.filter((route) => {
                var _a;
                if (route.children) {
                    route.children = filter(route.children, allowedScopes);
                }
                let feature = null;
                for (const [key, value] of Object.entries(featureConfig)) {
                    if (key === route.id) {
                        feature = value;
                        break;
                    }
                }
                if (!feature) {
                    return true;
                }
                return hasRequiredScopes(feature, (_a = feature === null || feature === void 0 ? void 0 : feature.scopes) === null || _a === void 0 ? void 0 : _a.read, allowedScopes);
            });
        };
        return filter(routes, allowedScopes);
    }
    /**
     * Sanitize the routes for UI. Removes unnecessary routes which are not supposed to be
     * displayed on the UI navigation panels.
     *
     * @param {RouteInterface[]} routes - Routes to evaluate.
     * @param {string[]} hiddenRoutes - Set of hidden routes.
     * @return {RouteInterface[]} Filtered routes.
     */
    static sanitizeForUI(routes, hiddenRoutes = []) {
        // Remove any redundant routes.
        const sanitize = (routeArr) => {
            return routeArr.filter((route) => {
                if (isEmpty(route.children) && !route.path) {
                    return false;
                }
                if (!isEmpty(route.children) && !route.path) {
                    const isFurtherNested = route.children.some((item) => item.children);
                    if (isFurtherNested) {
                        route.children = sanitize(route.children);
                    }
                    else {
                        return route.children.some((item) => item.showOnSidePanel && !hiddenRoutes.includes(item.id));
                    }
                }
                if (route.children) {
                    route.children = sanitize(route.children);
                }
                return route.showOnSidePanel && !hiddenRoutes.includes(route.id);
            });
        };
        return sanitize(routes);
    }
    /**
     * Checks if the URL path is similar to the path of the route that's passed in.
     *
     * @param {string} pathname - Current pathname in location.
     * @param {RouteInterface | ChildRouteInterface} route - Route to be evaluated.
     * @return {boolean} If the route is active or not.
     */
    static isActiveRoute(pathname, route) {
        const match = (routePath) => {
            var _a;
            return (_a = matchPath(pathname, routePath)) === null || _a === void 0 ? void 0 : _a.isExact;
        };
        const checkChildren = (childRoutes) => {
            if (!childRoutes) {
                return false;
            }
            for (const child of childRoutes) {
                const isMatching = match(child.path);
                if (isMatching) {
                    return true;
                }
            }
        };
        return match(route === null || route === void 0 ? void 0 : route.path) || checkChildren(route === null || route === void 0 ? void 0 : route.children);
    }
    /**
     * Gets the active route on initial app loading time.
     *
     * @param {string} pathname - Current pathname in location.
     * @param {RouteInterface[]} routes - Evaluating routes.
     * @return {RouteInterface | ChildRouteInterface} Initially active route.
     */
    static getInitialActiveRoute(pathname, routes) {
        let found = false;
        let activeRoute = null;
        const recurse = (routesArr) => {
            for (const route of routesArr) {
                // Terminate the evaluation if the route is
                // not supposed to be displayed on the side panel.
                if (!route.showOnSidePanel) {
                    continue;
                }
                activeRoute = route;
                if (this.isActiveRoute(pathname, route)) {
                    found = true;
                    break;
                }
                else {
                    if (route.children && route.children.length && route.children.length > 0) {
                        recurse(route.children);
                        if (found) {
                            break;
                        }
                    }
                }
                activeRoute = null;
            }
        };
        recurse(routes);
        return activeRoute;
    }
}
//# sourceMappingURL=route-utils.js.map