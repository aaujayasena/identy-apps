import { TestableComponentInterface } from "@wso2is/core/models";
import { FunctionComponent } from "react";
import { ButtonProps } from "semantic-ui-react";
/**
 * Secondary button component Prop types.
 */
export interface SecondaryButtonPropsInterface extends ButtonProps, TestableComponentInterface {
}
/**
 * Secondary button component.
 *
 * @param {SecondaryButtonPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export declare const SecondaryButton: FunctionComponent<SecondaryButtonPropsInterface>;
