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
import { LoadableComponentInterface, TestableComponentInterface } from "@wso2is/core/models";
import React, { MouseEventHandler, ReactElement, ReactNode } from "react";
import { SemanticWIDTHS } from "semantic-ui-react";
/**
 * Page header component Prop types.
 */
export interface PageHeaderPropsInterface extends LoadableComponentInterface, TestableComponentInterface {
    /**
     * Action component.
     */
    action?: ReactNode;
    /**
     * Column width for the action container grid.
     */
    actionColumnWidth?: SemanticWIDTHS;
    /**
     * Go back button.
     */
    backButton?: BackButtonInterface;
    /**
     * Show/ Hide bottom margin.
     */
    bottomMargin?: boolean;
    /**
     * Additional CSS classes.
     */
    className?: string;
    /**
     * Description.
     */
    description?: ReactNode;
    /**
     * Column width for the heading container grid.
     */
    headingColumnWidth?: SemanticWIDTHS;
    /**
     * Optional image.
     */
    image?: any;
    /**
     * Show/ Hide bottom divider.
     */
    showBottomDivider?: boolean;
    /**
     * Header title.
     */
    title?: string | ReactElement;
    /**
     * Title render element.
     */
    titleAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    /**
     * Title text alignment.
     */
    titleTextAlign?: "left" | "center" | "right" | "justified";
}
/**
 * Back button interface.
 */
export interface BackButtonInterface extends TestableComponentInterface {
    /**
     * Button label.
     */
    text: string;
    /**
     * Button Onclick.
     */
    onClick: MouseEventHandler;
}
/**
 * Page header component.
 *
 * @param {PageHeaderPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export declare const PageHeader: React.FunctionComponent<PageHeaderPropsInterface>;
