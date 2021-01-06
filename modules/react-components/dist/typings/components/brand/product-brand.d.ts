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
import { ProductVersionConfigInterface, TestableComponentInterface } from "@wso2is/core/models";
import { FunctionComponent, PropsWithChildren } from "react";
/**
 * Product brand component Prop types.
 */
export interface ProductBrandPropsInterface extends TestableComponentInterface {
    /**
     * App name.
     */
    appName?: string;
    /**
     * Additional CSS classes.
     */
    className?: string;
    /**
     * Product logo.
     */
    logo?: any;
    /**
     * Product name.
     */
    productName?: string;
    /**
     * Custom styles object.
     */
    style?: object;
    /**
     * Product version.
     */
    version?: string;
    /**
     * Product version config settings.
     */
    versionUISettings?: ProductVersionConfigInterface;
    /**
     * Mobile view switch.
     */
    mobile?: boolean;
}
/**
 * Product Brand component.
 *
 * @param {React.PropsWithChildren<ProductBrandPropsInterface>} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export declare const ProductBrand: FunctionComponent<PropsWithChildren<ProductBrandPropsInterface>>;