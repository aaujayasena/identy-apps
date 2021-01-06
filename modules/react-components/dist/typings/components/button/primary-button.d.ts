import { TestableComponentInterface } from "@wso2is/core/models";
import { FunctionComponent } from "react";
import { ButtonProps } from "semantic-ui-react";
/**
 * Primary button component Prop types.
 */
export interface PrimaryButtonPropsInterface extends ButtonProps, TestableComponentInterface {
}
/**
 * Primary button component.
 *
 * @param {PrimaryButtonPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export declare const PrimaryButton: FunctionComponent<PrimaryButtonPropsInterface>;
