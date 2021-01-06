import { TestableComponentInterface } from "@wso2is/core/models";
import { ForwardRefExoticComponent, PropsWithoutRef, ReactNode, RefAttributes } from "react";
import { SidebarProps } from "semantic-ui-react";
import { HelpPanelActionBar } from "./help-panel-action-bar";
import { GenericIconProps } from "../icon";
/**
 * Component ref type.
 */
export declare type HelpPanelRefType = HTMLDivElement;
/**
 * Help side panel component sub component.
 */
export interface HelpPanelSubComponentsInterface {
    ActionBar: typeof HelpPanelActionBar;
}
/**
 * Help panel interface.
 */
export interface HelpPanelPropsInterface extends SidebarProps, TestableComponentInterface {
    /**
     * Set of actions for the top action bar.
     */
    actions?: HelpPanelActionInterface[];
    /**
     * Enable borders.
     */
    bordered?: "left" | "right" | "bottom" | "top" | boolean;
    /**
     * Array of objects describing tabs.
     */
    tabs: HelpPanelTabInterface[];
    /**
     * Is mini sidebar enabled.
     */
    sidebarMiniEnabled?: boolean;
    /**
     * Tooltip for the sidebar toggle button.
     */
    sidebarToggleTooltip?: string;
    /**
     * Flag to show/hide tab labels on mini sidebar.
     */
    showLabelsOnSidebarMini?: boolean;
    /**
     * Flag to enable/disable showing tool tips on action bar.
     */
    showTooltipsOnActionBar?: boolean;
    /**
     * Flag to enable/disable showing tool tips on sidebar mini.
     */
    showTooltipsOnSidebarMini?: boolean;
    /**
     * Callback to be called on sidebar toggle.
     */
    onSidebarToggle?: () => void;
    /**
     * Called on sidebar mini item click.
     * @param {string} item - Clicked on item.
     */
    onSidebarMiniItemClick?: (item: string) => void;
    /**
     * Should the help panel appear raised.
     */
    raised?: boolean;
    /**
     * Initial tabs active index.
     */
    tabsActiveIndex?: number;
}
/**
 * Interface for help panel actions.
 */
export interface HelpPanelActionInterface extends GenericIconProps {
    /**
     * Tooltip for the button.
     */
    tooltip?: string;
}
/**
 * Help panel component Prop types.
 */
export interface HelpPanelComponentPropsInterface extends HelpPanelPropsInterface, HelpPanelSubComponentsInterface {
}
/**
 * Help panel tab interface.
 */
export interface HelpPanelTabInterface {
    heading: any;
    hidden: boolean;
    content: ReactNode;
    icon: GenericIconProps;
}
/**
 * Help side panel.
 *
 * @param {React.PropsWithChildren<HelpPanelComponentPropsInterface>} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export declare const HelpPanel: ForwardRefExoticComponent<PropsWithoutRef<HelpPanelComponentPropsInterface> & RefAttributes<HelpPanelRefType>> & any;
