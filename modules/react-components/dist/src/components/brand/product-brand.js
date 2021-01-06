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
import { ProductReleaseTypes } from "@wso2is/core/models";
import { CommonUtils } from "@wso2is/core/utils";
import classNames from "classnames";
import React from "react";
import { Label } from "semantic-ui-react";
import { Heading } from "../typography";
/**
 * Product Brand component.
 *
 * @param {React.PropsWithChildren<ProductBrandPropsInterface>} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const ProductBrand = (props) => {
    const { appName, children, className, logo, productName, style, version, versionUISettings, mobile, ["data-testid"]: testId } = props;
    const mainClasses = classNames(className, "product-title");
    const versionLabelClasses = classNames("version-label", {
        "primary": !versionUISettings.labelColor,
        [versionUISettings.labelColor]: (versionUISettings.labelColor === "primary"
            || versionUISettings.labelColor === "secondary")
    });
    /**
     * Resolves the version label color.
     *
     * @return {SemanticCOLORS} Resolved color.
     */
    const resolveVersionLabelColor = (releaseType) => {
        if ((versionUISettings === null || versionUISettings === void 0 ? void 0 : versionUISettings.labelColor) && !(versionUISettings.labelColor === "auto"
            || versionUISettings.labelColor === "primary"
            || versionUISettings.labelColor === "secondary")) {
            return versionUISettings.labelColor;
        }
        if (versionUISettings.labelColor === "primary" || versionUISettings.labelColor === "secondary") {
            return "grey";
        }
        if (releaseType === ProductReleaseTypes.ALPHA) {
            return "red";
        }
        else if (releaseType === ProductReleaseTypes.BETA) {
            return "teal";
        }
        else if (releaseType === ProductReleaseTypes.RC) {
            return "green";
        }
        else if (releaseType === ProductReleaseTypes.MILESTONE) {
            return "violet";
        }
        return "grey";
    };
    /**
     * Resolves the release version.
     *
     * @return {string} Resolved release version.
     */
    const resolveReleaseVersionLabel = () => {
        const [versionNumber, release, releaseType] = CommonUtils.parseProductVersion(version, versionUISettings.allowSnapshot);
        let constructed = `${versionNumber !== null && versionNumber !== void 0 ? versionNumber : ""} ${release !== null && release !== void 0 ? release : ""}`;
        if (versionUISettings) {
            if (versionUISettings.textCase === "lowercase") {
                constructed = constructed.toLowerCase();
            }
            else if (versionUISettings.textCase === "uppercase") {
                constructed = constructed.toUpperCase();
            }
        }
        return (React.createElement("div", { className: "product-title-meta" },
            React.createElement(Label, { color: resolveVersionLabelColor(releaseType), className: versionLabelClasses, size: "mini", "data-testid": `${testId}-version` }, constructed)));
    };
    return (React.createElement("div", { className: mainClasses, style: style, "data-testid": testId },
        version && resolveReleaseVersionLabel(),
        React.createElement("div", { className: `product-title-main ${mobile ? "mt-4" : ""}` },
            logo && logo,
            (appName || productName) && (React.createElement(React.Fragment, null,
                React.createElement(Heading, { className: "product-title-text", style: style, "data-testid": `${testId}-title`, compact: true },
                    productName,
                    !mobile && appName && React.createElement("span", { className: "app-name" }, appName)),
                mobile && appName && React.createElement("span", { className: "app-name display-inline-block" }, appName))),
            children)));
};
/**
 * Default props for the product brand component.
 */
ProductBrand.defaultProps = {
    "data-testid": "product-brand",
    versionUISettings: {
        allowSnapshot: false,
        labelColor: "primary",
        textCase: "uppercase"
    }
};
//# sourceMappingURL=product-brand.js.map