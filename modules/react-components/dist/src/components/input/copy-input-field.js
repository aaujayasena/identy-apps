/**
* Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
*
* WSO2 Inc. licenses this file to you under the Apache License,
* Version 2.0 (the 'License'); you may not use this file except
* in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied. See the License for the
* specific language governing permissions and limitations
* under the License.
*/
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { Button, Icon, Input, Popup } from "semantic-ui-react";
/**
 * Copy to clipboard input field component.
 *
 * @param {CopyInputFieldPropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const CopyInputField = (props) => {
    const { value, className, hideSecretLabel, secret, showSecretLabel, ["data-testid"]: testId } = props;
    const classes = classNames("copy-input", className);
    const inputRef = useRef(null);
    const copyButtonRef = useRef(null);
    const [copied, setCopied] = useState(false);
    const [show, setShow] = useState(false);
    useEffect(() => {
        if (copied) {
            copyButtonRef.current.focus();
        }
    }, [copied]);
    return (React.createElement(Input, { ref: inputRef, value: value, labelPosition: "right", readOnly: true, action: React.createElement(Popup, { trigger: (React.createElement(Button, { className: "copy-input-action", icon: "copy", type: "button", onMouseEnter: () => {
                    setCopied(false);
                }, ref: copyButtonRef, onClick: (e) => {
                    var _a;
                    e.stopPropagation();
                    (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.select();
                    setCopied(true);
                    document.execCommand("copy");
                    copyButtonRef.current.ref.current.blur();
                    if (window.getSelection) {
                        window.getSelection().removeAllRanges();
                    }
                } })), openOnTriggerFocus: true, closeOnTriggerBlur: true, position: "top center", content: copied ? "Copied!" : "Copy to clipboard", inverted: true }), fluid: true, className: classes, type: !secret
            ? "text"
            : show
                ? "text"
                : "password", icon: secret && (React.createElement(Popup, { trigger: (React.createElement(Icon, { className: "copy-input-eye-icon", name: !show
                    ? "eye"
                    : "eye slash", disabled: !value, link: true, onClick: () => {
                    setShow(!show);
                } })), position: "top center", content: !show
                ? showSecretLabel
                : hideSecretLabel, inverted: true })), "data-testid": `${testId}-wrapper` }));
};
/**
 * Default proptypes for the copy input component.
 */
CopyInputField.defaultProps = {
    "data-testid": "copy-input",
    hideSecretLabel: "Show",
    secret: false,
    showSecretLabel: "Hide"
};
//# sourceMappingURL=copy-input-field.js.map