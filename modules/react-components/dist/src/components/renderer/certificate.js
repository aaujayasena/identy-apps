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
import moment from "moment";
import React, { Fragment } from "react";
import { Divider, Grid, Icon, Popup, Segment } from "semantic-ui-react";
/**
 * This renders the certificate component that displays the details of a certificate.
 *
 * @param {CertificatePropsInterface} props - Props injected to the component.
 * @returns {ReactElement}
 */
export const Certificate = (props) => {
    const { labels, ["data-testid"]: testId } = props;
    const { version, issuerDN, subjectDN, validFrom, validTill } = props.certificate;
    /**
     * Creates the validity icon.
     */
    const showValidTillIcon = () => {
        let icon = null;
        let iconColor = null;
        let popupText = "";
        const currentDate = moment(new Date());
        const expiryDate = moment(validTill);
        const isValid = new Date() <= validTill;
        if (isValid) {
            if (Math.abs(moment.duration(currentDate.diff(expiryDate)).months()) > 1) {
                icon = "check circle";
                iconColor = "green";
                popupText = "Certificate is valid.";
            }
            else {
                icon = "exclamation circle";
                iconColor = "yellow";
                popupText = "Certificate is soon to be expired.";
            }
        }
        else {
            icon = "times circle";
            iconColor = "red";
            popupText = "Certificate is expired.";
        }
        return (React.createElement(React.Fragment, null,
            React.createElement(Popup, { trigger: React.createElement(Icon, { name: icon, color: iconColor }), content: popupText, inverted: true, position: "top center", size: "mini" })));
    };
    /**
     * Creates the validity icon for expiry date.
     */
    const showValidFromIcon = () => {
        let icon = null;
        let iconColor = null;
        let popupText = "";
        const currentDate = moment(new Date());
        const expiryDate = moment(validFrom);
        const isValid = new Date() >= validFrom;
        if (isValid) {
            icon = "check circle";
            iconColor = "green";
            popupText = "Certificate is valid.";
        }
        else {
            if (Math.abs(moment.duration(currentDate.diff(expiryDate)).months()) > 1) {
                icon = "times circle";
                iconColor = "red";
                popupText = "Certificate is still not valid.";
            }
            else {
                icon = "exclamation circle";
                iconColor = "yellow";
                popupText = "Certificate is soon to be valid.";
            }
        }
        return (React.createElement(React.Fragment, null,
            React.createElement(Popup, { trigger: React.createElement(Icon, { name: icon, color: iconColor }), content: popupText, inverted: true, position: "top center", size: "mini" })));
    };
    return (React.createElement(Segment, { className: "certificate", compact: true, "data-testid": testId },
        React.createElement(Grid, null,
            React.createElement(Grid.Row, null,
                React.createElement(Grid.Column, { computer: 16, mobile: 16, tablet: 16 },
                    React.createElement("p", { className: "certificate-field" },
                        React.createElement("span", null,
                            React.createElement("strong", null, labels.validFrom)),
                        React.createElement("span", { className: "valid-before-date" },
                            validFrom.toLocaleString("en-us", {
                                day: "numeric",
                                hour: "numeric",
                                hour12: true,
                                minute: "numeric",
                                month: "long",
                                timeZoneName: "short",
                                weekday: "short",
                                year: "numeric"
                            }),
                            showValidFromIcon())),
                    React.createElement("p", { className: "certificate-field" },
                        React.createElement("span", null,
                            React.createElement("strong", null, labels.validTill)),
                        React.createElement("span", { className: "valid-till-date" },
                            validTill.toLocaleString("en-us", {
                                day: "numeric",
                                hour: "numeric",
                                hour12: true,
                                minute: "numeric",
                                month: "long",
                                timeZoneName: "short",
                                weekday: "short",
                                year: "numeric"
                            }),
                            showValidTillIcon()))))),
        React.createElement(Divider, { hidden: true }),
        React.createElement(Divider, { hidden: true }),
        React.createElement(Grid, { className: "certificate-issuer" },
            React.createElement(Grid.Row, null,
                React.createElement(Grid.Column, { computer: 4, mobile: 4, tablet: 4 }),
                React.createElement(Grid.Column, { computer: 6, mobile: 6, tablet: 6 },
                    React.createElement("p", { className: "certificate-field" },
                        React.createElement("span", null,
                            React.createElement("strong", null, labels.issuerDN)))),
                React.createElement(Grid.Column, { computer: 6, mobile: 6, tablet: 6 },
                    React.createElement("p", { className: "certificate-field" },
                        React.createElement("span", null,
                            React.createElement("strong", null, labels.subjectDN))))),
            issuerDN.map((attribute, index) => (React.createElement(Fragment, { key: index },
                React.createElement(Grid.Row, null,
                    React.createElement(Grid.Column, { computer: 4, mobile: 4, tablet: 4 },
                        React.createElement("p", { className: "certificate-field" },
                            React.createElement("span", null,
                                React.createElement("strong", null, Object.entries(attribute)[0][0])))),
                    React.createElement(Grid.Column, { computer: 6, mobile: 6, tablet: 6 },
                        React.createElement("p", { className: "certificate-field" },
                            React.createElement("span", null, Object.entries(attribute)[0][1]))),
                    React.createElement(Grid.Column, { computer: 6, mobile: 6, tablet: 6 },
                        React.createElement("p", { className: "certificate-field" },
                            React.createElement("span", null, Object.entries(attribute)[0][1])))))))),
        React.createElement(Divider, { hidden: true }),
        React.createElement("p", { className: "certificate-version" },
            React.createElement("span", null, labels.version),
            " ",
            version + " ")));
};
/**
 * Default props for the component.
 */
Certificate.defaultProps = {
    "data-testid": "certificate"
};
//# sourceMappingURL=certificate.js.map