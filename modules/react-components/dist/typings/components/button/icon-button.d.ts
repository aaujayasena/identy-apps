import { TestableComponentInterface } from "@wso2is/core/models";
import { FunctionComponent, PropsWithChildren } from "react";
import { ButtonProps } from "semantic-ui-react";
import { GenericIconSizes } from "../icon";
/**
 * Icon button component Prop types.
 */
export interface IconButtonPropsInterface extends ButtonProps, TestableComponentInterface {
    customIcon?: any;
    customIconPosition?: "left" | "right";
    customIconSize?: GenericIconSizes;
}
/**
 * Icon button component.
 *
 * @param {IconButtonPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export declare const IconButton: FunctionComponent<PropsWithChildren<IconButtonPropsInterface>>;
