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
import { ChildRouteInterface, RouteInterface } from "../models";
/**
 * Utility class for application routes related operations.
 */
export declare class RouteUtils {
    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    private constructor();
    /**
     * Filters the set of enabled routes based on the app config.
     *
     * @param {RouteInterface[]} routes - Routes to evaluate.
     * @param {T} featureConfig - Feature config.
     * @param {string} allowedScopes - Set of allowed scopes.
     * @return {RouteInterface[]} Filtered routes.
     */
    static filterEnabledRoutes<T>(routes: RouteInterface[], featureConfig: T, allowedScopes: string): RouteInterface[];
    /**
     * Sanitize the routes for UI. Removes unnecessary routes which are not supposed to be
     * displayed on the UI navigation panels.
     *
     * @param {RouteInterface[]} routes - Routes to evaluate.
     * @param {string[]} hiddenRoutes - Set of hidden routes.
     * @return {RouteInterface[]} Filtered routes.
     */
    static sanitizeForUI<T>(routes: RouteInterface[], hiddenRoutes?: string[]): RouteInterface[];
    /**
     * Checks if the URL path is similar to the path of the route that's passed in.
     *
     * @param {string} pathname - Current pathname in location.
     * @param {RouteInterface | ChildRouteInterface} route - Route to be evaluated.
     * @return {boolean} If the route is active or not.
     */
    static isActiveRoute(pathname: string, route: RouteInterface | ChildRouteInterface): boolean;
    /**
     * Gets the active route on initial app loading time.
     *
     * @param {string} pathname - Current pathname in location.
     * @param {RouteInterface[]} routes - Evaluating routes.
     * @return {RouteInterface | ChildRouteInterface} Initially active route.
     */
    static getInitialActiveRoute(pathname: string, routes: RouteInterface[]): RouteInterface | ChildRouteInterface;
}
