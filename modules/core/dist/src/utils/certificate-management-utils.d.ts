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
import * as forge from "node-forge";
import { Certificate, DisplayCertificate } from "../models";
/**
 * Utility class for certificate management operations.
 */
export declare class CertificateManagementUtils {
    /**
     * Private constructor to avoid object instantiation from outside
     * the class.
     *
     * @hideconstructor
     */
    private constructor();
    /**
     * Converts a PEM encoded string to a Forge certificate object.
     *
     * @param {string} pem The PEM encoded certificate content.
     *
     * @returns {forge.pki.Certificate} The Forge Certificate object.
     */
    static decodeCertificate(pem: string): forge.pki.Certificate;
    /**
     * This serializes the certificate content to a displayable format.
     *
     * @param {Certificate} certificate The Certificate object returned by teh API endpoints.
     * @param {string} pem The PEM encoded certificate content.
     * @return {DisplayCertificate}
     */
    static displayCertificate(certificate: Certificate, pem: string): DisplayCertificate;
    /**
     * This serializes the certificate object.
     *
     * @param {Certificate} data The data object containing the alias and the PEM string.
     * @param {forge.pki.Certificate} certificateForge The Forge Certificate object.
     */
    static decodeForgeCertificate(data: Certificate, certificateForge: forge.pki.Certificate): DisplayCertificate;
    /**
     * The following function search the issuerDN array and return a alias for the issuer.
     *
     * @param issuerDN
     */
    static searchIssuerDNAlias(issuerDN: object[]): string;
    /**
     * This converts a PEM-encoded certificate to a
     * DER encoded ASN.1 certificate and saves it to the disk.
     *
     * ```
     * const intArray = der.data.split("").map(char => {
            return char.charCodeAt(0);
        });
     * ```
     * The `ByteStringBuffer` that holds the DER encoded
     * string actually has `UTF-16` encoded string values.
     *
     * The above code snippet is used to decode the `UTF-16` string.
     *
     * @param {string} name The alias of the certificate.
     * @param {string} pem The PEM encoded certificate content.
     */
    static exportCertificate(name: string, pem: string): void;
}
