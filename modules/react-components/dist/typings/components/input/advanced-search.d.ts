import { TestableComponentInterface } from "@wso2is/core/models";
import { FunctionComponent, PropsWithChildren } from "react";
import { InputProps, PopupProps } from "semantic-ui-react";
/**
 *
 * Proptypes for the advanced search component.
 */
export interface AdvancedSearchPropsInterface extends TestableComponentInterface {
    /**
     * Text alignment.
     */
    aligned?: "left" | "right" | "center";
    /**
     * Additional CSS classes.
     */
    className?: string;
    /**
     * Clear button tooltip label.
     */
    clearButtonPopupLabel?: string;
    /**
     * Clear icon override.
     */
    clearIcon?: any;
    /**
     * Search strategy ex: name sw.
     */
    defaultSearchStrategy: string;
    /**
     * Dropdown appearing position.
     */
    dropdownPosition?: PopupProps["position"];
    /**
     * Dropdown trigger icon label.
     */
    dropdownTriggerPopupLabel?: string;
    /**
     * Search query from outside.
     */
    externalSearchQuery?: string;
    /**
     * Fill color.
     */
    fill?: "white" | "default";
    /**
     * Hint action keyboard keys.
     */
    hintActionKeys?: string;
    /**
     * Hint label.
     */
    hintLabel?: string;
    /**
     * Search input size.
     */
    inputSize?: InputProps["size"];
    /**
     * Callback for external search query clear.
     */
    onExternalSearchQueryClear?: () => void;
    /**
     * Callback for search query submit.
     * @param {boolean} processQuery - process flag.
     * @param {string} query - Search query.
     */
    onSearchQuerySubmit: (processQuery: boolean, query: string) => void;
    /**
     * input placeholder.
     */
    placeholder?: string;
    /**
     * Reset trigger.
     */
    resetSubmittedState?: () => void;
    /**
     * Dropdown heading.
     */
    searchOptionsHeader?: string;
    /**
     * Is form submitted.
     */
    submitted?: boolean;
    /**
     * Manually trigger query clear action from outside.
     */
    triggerClearQuery?: boolean;
}
/**
 * Advanced search component.
 *
 * @param {React.PropsWithChildren<AdvancedSearchPropsInterface>} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export declare const AdvancedSearch: FunctionComponent<PropsWithChildren<AdvancedSearchPropsInterface>>;
