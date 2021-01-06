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
import { FunctionComponent, SyntheticEvent } from "react";
import { CheckboxProps } from "semantic-ui-react";
/**
 * Danger zone component Prop types.
 */
export interface DangerZoneProps extends TestableComponentInterface {
    /**
     * Title for the danger zone action.
     */
    actionTitle: string;
    /**
     * Heading for the danger zone.
     */
    header: string;
    /**
     * Sub heading for the danger zone.
     */
    subheader: string;
    /**
     * Use toggle button for the danger zone.
     */
    toggle?: DangerZoneToggleProps;
    /**
     * OnClick callback for the danger zone action.
     * @param {React.SyntheticEvent<HTMLButtonElement>} e - Click event.
     */
    onActionClick: (e: SyntheticEvent<HTMLButtonElement>) => void;
}
/**
 * Danger zone toggle Prop types.
 */
export interface DangerZoneToggleProps {
    /**
     * Checked state.
     */
    checked: boolean;
    /**
     * Toggle onchange callback.
     * @param event - Toggle event.
     * @param {CheckboxProps} data - Checkbox data.
     */
    onChange: (event: any, data: CheckboxProps) => void;
    /**
     * ID of the toggle.
     */
    id?: string;
}
/**
 * Danger zone component.
 *
 * @param {DangerZoneProps} props - Props injected to the danger zone component.
 *
 * @return {React.ReactElement}
 */
export declare const DangerZone: FunctionComponent<DangerZoneProps>;
