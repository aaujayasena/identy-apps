import { TestableComponentInterface } from "@wso2is/core/models";
import { FunctionComponent, PropsWithChildren } from "react";
/**
 * Help side panel action bar Prop types.
 */
export interface HelpPanelActionBarInterface extends TestableComponentInterface {
    /**
     * Additional CSS classes.
     */
    className?: string;
    /**
     * Float clearing.
     */
    clearing?: boolean;
    /**
     * Floated direction.
     */
    floated?: "left" | "right";
}
/**
 * Help side panel action bar.
 *
 * @param {PropsWithChildren<HelpPanelActionBarInterface>} props
 *
 * @return {React.ReactElement}
 */
export declare const HelpPanelActionBar: FunctionComponent<PropsWithChildren<HelpPanelActionBarInterface>>;
