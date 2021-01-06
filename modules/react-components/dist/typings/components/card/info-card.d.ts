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
import { CardProps } from "semantic-ui-react";
import { GenericIconSizes } from "../icon";
/**
 * Proptypes for the info card component.
 */
export interface InfoCardPropsInterface extends CardProps, TestableComponentInterface {
    /**
     * Is card disabled.
     */
    disabled?: boolean;
    /**
     * Side of the image.
     */
    fluidImageSize?: GenericIconSizes;
    /**
     * Is card used to display a github repo info.
     */
    githubRepoCard?: boolean;
    /**
     * Id for the card.
     */
    id?: string;
    /**
     * Image for the card.
     */
    image?: any;
    /**
     * Side of the image.
     */
    imageSize?: GenericIconSizes;
    /**
     * Github repo metadata.
     */
    githubRepoMetaInfo?: GithubHubRepoMetaInfoInterface;
    /**
     * If the card is selected.
     */
    selected?: boolean;
    /**
     * Card sub header.
     */
    subHeader?: string;
    /**
     * Set of tags.
     */
    tags?: string[];
    /**
     * Text alignment.
     */
    textAlign?: "center" | "left" | "right";
    /**
     * If the card should be inline.
     */
    inline?: boolean;
}
/**
 * Interface for Github repo meta info.
 */
export interface GithubHubRepoMetaInfoInterface {
    language?: any;
    languageLogo?: any;
    forks: number;
    stars: number;
    watchers: number;
}
/**
 * Selection card component.
 *
 * @param {InfoCardPropsInterface} props - Props injected to the components.
 *
 * @return {React.ReactElement}
 */
export declare const InfoCard: FunctionComponent<InfoCardPropsInterface>;
