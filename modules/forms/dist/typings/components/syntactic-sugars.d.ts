/**
 * Copyright (c) 2019, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
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
import React from "react";
/**
 * This component renders Form elements based on the provided `type` prop
 * @param props
 */
export declare const Field: React.ForwardRefExoticComponent<(import("../models").TextField & React.RefAttributes<unknown>) | (import("../models").PasswordField & React.RefAttributes<unknown>) | (import("../models").RadioField & React.RefAttributes<unknown>) | (import("../models").CheckboxField & React.RefAttributes<unknown>) | (import("../models").QueryParamsField & React.RefAttributes<unknown>) | (import("../models").ToggleField & React.RefAttributes<unknown>) | (import("../models").DropdownField & React.RefAttributes<unknown>) | (import("../models").CustomField & React.RefAttributes<unknown>) | (import("../models").FormSubmit & React.RefAttributes<unknown>) | (import("../models").Reset & React.RefAttributes<unknown>) | (import("../models").FormButton & React.RefAttributes<unknown>) | (import("../models").FormDivider & React.RefAttributes<unknown>)>;
/**
 * Prop types for the GroupFields component
 */
interface GroupFieldsPropsInterface {
    wrapper: React.ComponentType;
    wrapperProps: any;
}
/**
 * This component groups form elements together
 * @param props
 */
export declare const GroupFields: (props: React.PropsWithChildren<GroupFieldsPropsInterface>) => JSX.Element;
export {};
