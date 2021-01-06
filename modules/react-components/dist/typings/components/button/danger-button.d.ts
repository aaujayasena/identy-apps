import { TestableComponentInterface } from "@wso2is/core/models";
import { FunctionComponent } from "react";
import { ButtonProps } from "semantic-ui-react";
/**
 * Danger button Prop types.
 */
export interface DangerButtonPropsInterface extends ButtonProps, TestableComponentInterface {
}
/**
 * Danger button component.
 *
 * @param {DangerButtonPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export declare const DangerButton: FunctionComponent<DangerButtonPropsInterface>;
