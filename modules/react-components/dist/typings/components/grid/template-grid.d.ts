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
import { ReactElement, ReactNode, SyntheticEvent } from "react";
import { TemplateCardPropsInterface } from "../card";
/**
 * Proptypes for the template grid component.
 */
export interface TemplateGridPropsInterface<T> extends TestableComponentInterface {
    /**
     * Empty placeholder
     */
    emptyPlaceholder?: ReactElement;
    /**
     * Heading for the grid.
     */
    heading?: ReactNode;
    /**
     * Size of the icon.
     */
    templateIconSize?: TemplateCardPropsInterface["imageSize"];
    /**
     * Icon options.
     */
    templateIconOptions?: TemplateCardPropsInterface["imageOptions"];
    /**
     * Callback to be fired on template selection.
     */
    onTemplateSelect: (e: SyntheticEvent, { id }: {
        id: string;
    }) => void;
    /**
     * Callback to be fired on secondary template selection.
     */
    onSecondaryTemplateSelect?: (e: SyntheticEvent, { id }: {
        id: string;
    }) => void;
    /**
     * Enable/ Disable pagination.
     */
    paginate?: boolean;
    /**
     * Pagination limit.
     */
    paginationLimit?: number;
    /**
     * Grid pagination options.
     */
    paginationOptions?: TemplateGridPaginationOptionsInterface;
    /**
     * Show/Hide tags section.
     */
    showTags?: TemplateCardPropsInterface["showTags"];
    /**
     * Show/Hide tags section.
     */
    showTagIcon?: TemplateCardPropsInterface["showTagIcon"];
    /**
     * Sub heading for the grid.
     */
    subHeading?: ReactNode;
    /**
     * Title for the tags section.
     */
    tagsSectionTitle?: TemplateCardPropsInterface["tagsSectionTitle"];
    /**
     * List of templates.
     */
    templates: T[];
    /**
     * List of secondary templates.
     */
    secondaryTemplates?: T[];
    /**
     * Selected template.
     */
    selectedTemplate?: T;
    /**
     * Template icons.
     */
    templateIcons?: object;
    /**
     * Element to render the tag as.
     */
    tagsAs?: TemplateCardPropsInterface["tagsAs"];
    /**
     * Key to access the tags.
     * ex: `types` if the tags are in `template.types`
     */
    tagsKey?: string;
    /**
     * Grid type.
     */
    type: "application" | "idp" | "userstore";
    /**
     * Use selection card
     */
    useSelectionCard?: boolean;
    /**
     * Use initial as Image
     */
    useNameInitialAsImage?: boolean;
}
/**
 * Interface for grid pagination options.
 */
export interface TemplateGridPaginationOptionsInterface {
    /**
     * Show more button label.
     */
    showMoreButtonLabel: string;
    /**
     * Show less button label.
     */
    showLessButtonLabel: string;
}
/**
 * Interface to extend the generic `T` interface in-order to access properties.
 */
interface WithPropertiesInterface {
    /**
     * Template description
     */
    description?: TemplateCardPropsInterface["description"];
    /**
     * Template ID.
     */
    id?: TemplateCardPropsInterface["id"];
    /**
     * Template image.
     */
    image?: TemplateCardPropsInterface["image"];
    /**
     * Template Name.
     */
    name: TemplateCardPropsInterface["name"];
}
/**
 * Template grid component.
 *
 * @param {TemplateGridPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export declare const TemplateGrid: {
    <T extends WithPropertiesInterface>(props: TemplateGridPropsInterface<T>): ReactElement;
    /**
     * Default props for template grid component.
     */
    defaultProps: {
        "data-testid": string;
        iconSize: string;
        paginate: boolean;
        paginationLimit: number;
        paginationOptions: {
            showLessButtonLabel: string;
            showMoreButtonLabel: string;
        };
        useSelectionCard: boolean;
    };
};
export {};
