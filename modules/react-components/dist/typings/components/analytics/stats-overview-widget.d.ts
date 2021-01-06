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
import { TestableComponentInterface } from "@wso2is/core/models";
import { FunctionComponent } from "react";
import { HeaderProps } from "semantic-ui-react";
import { StatCountCardPropsInterface } from "../card";
/**
 *
 * Proptypes for the statistics overview widget.
 */
interface StatsOverviewWidgetPropsInterface extends TestableComponentInterface {
    /**
     * Heading for the widget
     */
    heading?: string;
    /**
     * Element to render heading.
     */
    headingAs?: HeaderProps["as"];
    /**
     * Maximum card count in a row.
     */
    maxRowCount?: number;
    /**
     * Sub heading for the widget.
     */
    subHeading?: string;
    /**
     * Element to render sub heading.
     */
    subHeadingAs?: HeaderProps["as"];
    /**
     * Set of stats for the widget.
     */
    stats: StatCountCardPropsInterface[];
}
/**
 * Statistics overview widget.
 *
 * @param {StatsOverviewWidgetPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export declare const StatsOverviewWidget: FunctionComponent<StatsOverviewWidgetPropsInterface>;
export {};
