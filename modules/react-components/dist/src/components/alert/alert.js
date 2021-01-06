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
import { AlertLevels } from "@wso2is/core/models";
import classNames from "classnames";
import React, { useEffect, useRef } from "react";
import NotificationSystem from "react-notification-system";
import { ReactComponent as ErrorIcon } from "../../assets/images/error-icon.svg";
import { ReactComponent as InfoIcon } from "../../assets/images/info-icon.svg";
import { ReactComponent as SuccessIcon } from "../../assets/images/success-icon.svg";
import { ReactComponent as WarningIcon } from "../../assets/images/warning-icon.svg";
import { GenericIcon } from "../icon";
/**
 * Icons for different alert states.
 * @type {{success: any; warning: any; error: any; info: any}}
 */
const AlertIcons = {
    error: ErrorIcon,
    info: InfoIcon,
    success: SuccessIcon,
    warning: WarningIcon
};
/**
 * Alert component to show success, error, warning and info notifications on the front end dashboards.
 *
 * @param {AlertPropsInterface} props - Props injected in to the alert component.
 *
 * @return {React.ReactElement}
 */
export const Alert = (props) => {
    const { absolute, alert, alertsPosition, alertSystem, dismissible, dismissInterval, onAlertSystemInitialize, withIcon, ["data-testid"]: testId } = props;
    const classes = classNames({
        absolute
    }, "");
    const alertRef = useRef(null);
    useEffect(() => {
        onAlertSystemInitialize(alertRef.current);
    }, []);
    /**
     * Triggered when a new alert is available on the redux store.
     */
    useEffect(() => {
        if (!alertSystem || !alert) {
            return;
        }
        let icon = null;
        switch (alert.level) {
            case AlertLevels.SUCCESS: {
                icon = AlertIcons.success;
                break;
            }
            case AlertLevels.WARNING: {
                icon = AlertIcons.warning;
                break;
            }
            case AlertLevels.ERROR: {
                icon = AlertIcons.error;
                break;
            }
            case AlertLevels.INFO: {
                icon = AlertIcons.info;
                break;
            }
            default:
                break;
        }
        alertSystem.addNotification({
            autoDismiss: dismissInterval,
            dismissible,
            level: alert.level,
            message: (React.createElement("div", { className: "alert-message", "data-testid": `${testId}-${alert.level}-body` },
                React.createElement("div", { className: "header bold-text", "data-testid": `${testId}-${alert.level}-message` }, alert.message),
                React.createElement("div", { className: "description", "data-testid": `${testId}-${alert.level}-description` }, alert.description))),
            position: alertsPosition,
            title: withIcon
                ? (React.createElement(GenericIcon, { icon: icon, colored: true, floated: "left", transparent: true, size: "mini", inline: true, spaced: "right", "data-testid": `${testId}-${alert.level}-icon`, relaxed: true }))
                : null
        });
    }, [alert]);
    return (React.createElement("div", { className: `alert-wrapper ${classes}`, "data-testid": testId },
        React.createElement(NotificationSystem, { ref: alertRef, style: {
                NotificationItem: {
                    DefaultStyle: {
                        cursor: "unset"
                    }
                }
            } })));
};
/**
 * Prop types for the Alert component.
 */
Alert.defaultProps = {
    absolute: false,
    alertsPosition: "br",
    "data-testid": "alert",
    dismissInterval: 5,
    dismissible: true,
    withIcon: true
};
//# sourceMappingURL=alert.js.map