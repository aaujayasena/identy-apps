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
import { Button, Form, Icon, Label, Popup } from "semantic-ui-react";
import React, { useEffect, useState } from "react";
import _ from "lodash";
export const QueryParameters = (props) => {
    const { value, onChange } = props;
    const QUERY_PARAMETER_SEPARATOR = ",";
    const [queryParamName, setQueryParamName] = useState("");
    const [queryParamValue, setQueryParamValue] = useState("");
    const [queryParams, setQueryParams] = useState([]);
    /**
     * Build query parameter object from the given string form.
     *
     * @param queryParameter Query parameter in the string form.
     */
    const buildQueryParameter = (queryParameter) => {
        return {
            name: queryParameter === null || queryParameter === void 0 ? void 0 : queryParameter.split("=")[0],
            value: queryParameter === null || queryParameter === void 0 ? void 0 : queryParameter.split("=")[1]
        };
    };
    /**
     * Build query parameter string value, from it's object form.
     */
    const buildQueryParameterString = (queryParam) => queryParam.name + "=" + queryParam.value;
    /**
     * Build query parameters string value, from it's object form.
     */
    const buildQueryParametersString = (queryParams) => { var _a; return (_a = queryParams === null || queryParams === void 0 ? void 0 : queryParams.map(buildQueryParameterString)) === null || _a === void 0 ? void 0 : _a.join(","); };
    /**
     * Trigger provided onChange handler with provided query parameters.
     *
     * @param queryParams QueryParameters.
     * @param onChange onChange handler.
     */
    const fireOnChangeEvent = (queryParams, onChange) => {
        onChange({
            target: {
                value: buildQueryParametersString(queryParams)
            }
        });
    };
    /**
     * Update input field values for query parameter.
     *
     * @param queryParam QueryParameter.
     */
    const updateQueryParameterInputFields = (queryParam) => {
        setQueryParamName(queryParam === null || queryParam === void 0 ? void 0 : queryParam.name);
        setQueryParamValue(queryParam === null || queryParam === void 0 ? void 0 : queryParam.value);
    };
    /**
     * Called when `initialValue` is changed.
     */
    useEffect(() => {
        var _a;
        if (_.isEmpty(value)) {
            return;
        }
        setQueryParams((_a = value.split(QUERY_PARAMETER_SEPARATOR)) === null || _a === void 0 ? void 0 : _a.map(buildQueryParameter));
    }, [value]);
    /**
     * Called when `queryParams` is changed.
     */
    useEffect(() => {
        fireOnChangeEvent(queryParams, onChange);
    }, [queryParams]);
    const handleQueryParameterAdd = (event) => {
        event.preventDefault();
        if (_.isEmpty(queryParamName) || _.isEmpty(queryParamValue)) {
            return;
        }
        const inputQueryParameter = {
            name: queryParamName,
            value: queryParamValue
        };
        const constructedQueryParameters = _.unionWith(queryParams, [inputQueryParameter], _.isEqual);
        setQueryParams(constructedQueryParameters);
        updateQueryParameterInputFields({
            name: "",
            value: ""
        });
    };
    const handleLabelRemove = (queryParameter) => {
        if (_.isEmpty(queryParameter)) {
            return;
        }
        setQueryParams(_.filter(queryParams, queryParam => !_.isEqual(queryParam, buildQueryParameter(queryParameter))));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Form.Group, { inline: true, widths: "equal", unstackable: true },
            React.createElement(Form.Input, { fluid: true, value: queryParamName, focus: true, placeholder: "name", onChange: (event, data) => {
                    setQueryParamName(data.value);
                } }),
            React.createElement(Form.Input, { fluid: true, value: queryParamValue, focus: true, placeholder: "value", onChange: (event, data) => {
                    setQueryParamValue(data.value);
                } }),
            React.createElement(Popup, { trigger: (React.createElement(Button, { onClick: (e) => handleQueryParameterAdd(e), icon: "add", type: "button", disabled: false })), position: "top center", content: "Add key value pair", inverted: true })),
        queryParams && (queryParams === null || queryParams === void 0 ? void 0 : queryParams.map((eachQueryParam, index) => {
            const queryParameter = eachQueryParam.name + "=" + eachQueryParam.value;
            return (React.createElement(Label, { key: index },
                queryParameter,
                React.createElement(Icon, { name: "delete", onClick: () => handleLabelRemove(queryParameter) })));
        }))));
};
//# sourceMappingURL=query-parameters.js.map