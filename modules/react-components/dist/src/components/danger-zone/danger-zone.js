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
import React from "react";
import { Button, Checkbox, Header, Responsive, Segment } from "semantic-ui-react";
/**
 * Danger zone component.
 *
 * @param {DangerZoneProps} props - Props injected to the danger zone component.
 *
 * @return {React.ReactElement}
 */
export const DangerZone = (props) => {
    const { actionTitle, header, subheader, onActionClick, toggle, ["data-testid"]: testId } = props;
    return (React.createElement(Segment, { "data-testid": testId, className: "danger-zone", padded: true, clearing: true },
        React.createElement(Header, { as: "h5", color: "red", floated: "left", "data-testid": `${testId}-header` },
            header,
            React.createElement(Header.Subheader, { className: "sub-header", "data-testid": `${testId}-sub-header` }, subheader)),
        toggle ?
            React.createElement(Checkbox, { toggle: true, id: toggle === null || toggle === void 0 ? void 0 : toggle.id, onChange: toggle === null || toggle === void 0 ? void 0 : toggle.onChange, checked: toggle === null || toggle === void 0 ? void 0 : toggle.checked, className: "danger-zone toggle-switch", "data-testid": `${testId}-toggle` })
            :
                React.createElement(Button, { "data-testid": testId + "-delete-button", fluid: window.innerWidth <= Responsive.onlyTablet.maxWidth, negative: true, className: (window.innerWidth <= Responsive.onlyTablet.maxWidth)
                        ? "mb-1x mt-1x"
                        : "", floated: "right", onClick: onActionClick }, actionTitle)));
};
/**
 * Default props for the danger zone component.
 */
DangerZone.defaultProps = {
    "data-testid": "danger-zone"
};
//# sourceMappingURL=danger-zone.js.map