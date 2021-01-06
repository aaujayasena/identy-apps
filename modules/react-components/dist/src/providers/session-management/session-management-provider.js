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
import { CommonConstants } from "@wso2is/core/constants";
import React, { useEffect, useRef, useState } from "react";
import { Trans } from "react-i18next";
import { SessionTimeoutModal } from "../../components";
/**
 * Session management provider component.
 *
 * @param {React.PropsWithChildren<SessionManagementProviderPropsInterface>} props - Props injected to the component.
 * @return {React.ReactElement}
 */
export const SessionManagementProvider = (props) => {
    const { children, onSessionLogout, onSessionTimeoutAbort, modalOptions } = props;
    const timerIntervalID = useRef(null);
    const [sessionTimeoutEventState, setSessionTimeoutEventState] = useState(undefined);
    const [showSessionTimeoutModal, setShowSessionTimeoutModal] = useState(false);
    const [timerDisplay, setTimerDisplay] = useState(undefined);
    useEffect(() => {
        window.addEventListener("popstate", e => {
            const { state } = e;
            if (!state) {
                return;
            }
            setSessionTimeoutEventState(state);
            const { url, idleTimeout, idleWarningTimeout } = state;
            const parsedURL = new URL(url);
            const timeout = parsedURL.searchParams.get(CommonConstants.SESSION_TIMEOUT_WARNING_URL_SEARCH_PARAM_KEY);
            if (timeout === undefined) {
                return;
            }
            if (timeout) {
                startTimer(idleTimeout - idleWarningTimeout);
            }
            setShowSessionTimeoutModal(!!timeout);
        });
        return () => {
            performCleanupTasks();
        };
    }, []);
    /**
     * Handles session timeout abort.
     */
    const handleSessionTimeoutAbort = () => {
        const parsedURL = new URL(sessionTimeoutEventState.url);
        if (parsedURL && parsedURL.searchParams) {
            if (parsedURL.searchParams.get(CommonConstants.SESSION_TIMEOUT_WARNING_URL_SEARCH_PARAM_KEY)) {
                parsedURL.searchParams.delete(CommonConstants.SESSION_TIMEOUT_WARNING_URL_SEARCH_PARAM_KEY);
                onSessionTimeoutAbort(parsedURL);
            }
        }
        performCleanupTasks();
        setShowSessionTimeoutModal(false);
    };
    /**
     * Handles session logout click.
     */
    const handleSessionLogout = () => {
        performCleanupTasks();
        setShowSessionTimeoutModal(false);
        onSessionLogout();
    };
    /**
     * Performs housekeeping tasks.
     */
    const performCleanupTasks = () => {
        setTimerDisplay(undefined);
        window.clearInterval(timerIntervalID.current);
        timerIntervalID.current = null;
    };
    /**
     * Starts the timer.
     * @param {number} duration - Timer duration.
     */
    const startTimer = (duration) => {
        let timer = duration;
        let minutes = 0;
        let seconds = 0;
        if (!timerIntervalID.current) {
            timerIntervalID.current = window.setInterval(() => {
                minutes = Math.floor(timer / 60);
                seconds = Math.floor(timer % 60);
                setTimerDisplay((minutes < 10 ? "0" + minutes : minutes)
                    + ":"
                    + (seconds < 10 ? "0" + seconds : seconds));
                if (--timer < 0) {
                    handleSessionLogout();
                }
            }, 1000);
        }
    };
    return (React.createElement(React.Fragment, null,
        children,
        React.createElement(SessionTimeoutModal, { open: showSessionTimeoutModal, onClose: handleSessionTimeoutAbort, onPrimaryActionClick: handleSessionTimeoutAbort, onSecondaryActionClick: handleSessionLogout, heading: React.createElement(Trans, { i18nKey: modalOptions === null || modalOptions === void 0 ? void 0 : modalOptions.headingI18nKey, tOptions: { time: timerDisplay } }), description: modalOptions === null || modalOptions === void 0 ? void 0 : modalOptions.description, primaryButtonText: modalOptions === null || modalOptions === void 0 ? void 0 : modalOptions.primaryButtonText, secondaryButtonText: modalOptions === null || modalOptions === void 0 ? void 0 : modalOptions.secondaryButtonText })));
};
//# sourceMappingURL=session-management-provider.js.map