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
import { Field, Forms, useTrigger } from "@wso2is/forms";
import React, { useEffect, useRef, useState } from "react";
import { Button, Divider, Label, List, Message, Popup } from "semantic-ui-react";
/**
 * This displays a key-value pair of fields that can be dynamically added or removed.
 *
 * @param {DynamicFieldPropsInterface} props - Props injected to the component.
 * @return {React.ReactElement}
 */
export const DynamicField = (props) => {
    const { bottomMargin, data, keyType, keyData, submit, update, keyName, valueName, keyRequiredMessage, valueRequiredErrorMessage, listen, requiredField, duplicateKeyErrorMsg, readOnly, ["data-testid"]: testId } = props;
    const [fields, setFields] = useState();
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState("");
    const [editKey, setEditKey] = useState("");
    const [updateMapIndex, setUpdateMapIndex] = useState(null);
    const [showAddErrorMsg, setAddShowErrorMsg] = useState(false);
    const [showEditErrorMsg, setShowEditErrorMsg] = useState(false);
    const initRender = useRef(true);
    const [add, setAdd] = useTrigger();
    const [reset, setReset] = useTrigger();
    const [updateTrigger, setUpdateTrigger] = useTrigger();
    /**
     * Resets edit states when when editIndex becomes null
     */
    useEffect(() => {
        if (editIndex === null) {
            setEditKey("");
            setEditValue("");
        }
    }, [editIndex]);
    /**
     * Pushes the existing pairs to the state
     */
    useEffect(() => {
        const tempFields = new Map();
        data === null || data === void 0 ? void 0 : data.forEach((field, index) => {
            tempFields.set(index, field);
        });
        setFields(tempFields);
    }, []);
    /**
     * Prevent submit from being triggered during initial render
     */
    useEffect(() => {
        if (initRender.current) {
            initRender.current = false;
        }
        else if (fields) {
            update(Array.from(fields.values()));
        }
    }, [submit]);
    /**
     * Triggers an update when the index of the pair to be updated is set
     */
    useEffect(() => {
        if (updateMapIndex !== null) {
            setUpdateTrigger();
        }
    }, [updateMapIndex]);
    return (React.createElement(React.Fragment, null,
        (keyData === null || keyData === void 0 ? void 0 : keyData.length) !== (fields === null || fields === void 0 ? void 0 : fields.size)
            ? (React.createElement(React.Fragment, null,
                showAddErrorMsg &&
                    React.createElement(Message, { error: true }, duplicateKeyErrorMsg),
                React.createElement(Forms, { onSubmit: (values) => {
                        if (!showAddErrorMsg) {
                            const tempFields = new Map(fields);
                            const newIndex = tempFields.size > 0
                                ? Array.from(tempFields.keys())[tempFields.size - 1] + 1
                                : 0;
                            tempFields.set(newIndex, {
                                key: values.get("key").toString(),
                                value: values.get("value").toString()
                            });
                            setFields(tempFields);
                            if (listen) {
                                listen(Array.from(tempFields.values()));
                            }
                            setReset();
                        }
                    }, submitState: add, resetState: reset },
                    React.createElement(List, { className: "dynamic-field" },
                        React.createElement(List.Item, null, keyType === "dropdown"
                            ? (React.createElement(Field, { type: keyType, placeholder: `Enter a ${keyName}`, required: requiredField, requiredErrorMessage: keyRequiredMessage, name: "key", fluid: true, children: keyType === "dropdown"
                                    ? (keyData === null || keyData === void 0 ? void 0 : keyData.map((key) => {
                                        return {
                                            key: key.id,
                                            text: key.value,
                                            value: key.value
                                        };
                                    }))
                                    : [], displayErrorOn: "submit", validation: (value) => {
                                    let isSameUserStore = false;
                                    for (const mapping of fields) {
                                        if (mapping[1].key === value) {
                                            isSameUserStore = true;
                                            break;
                                        }
                                    }
                                    setAddShowErrorMsg(false);
                                    if (isSameUserStore) {
                                        setAddShowErrorMsg(true);
                                    }
                                }, readOnly: readOnly, "data-testid": `${testId}-${keyType}` }))
                            : (React.createElement(Field, { type: keyType, placeholder: `Enter a ${keyName}`, required: requiredField, requiredErrorMessage: keyRequiredMessage, name: "key", readOnly: readOnly, "data-testid": `${testId}-${keyType}` }))),
                        React.createElement(List.Item, null,
                            React.createElement(Field, { type: "text", placeholder: `Enter a ${valueName}`, required: true, requiredErrorMessage: valueRequiredErrorMessage, name: "value", readOnly: readOnly, "data-testid": `${testId}-input` })),
                        React.createElement(List.Item, null,
                            React.createElement(Popup, { disabled: readOnly, trigger: (React.createElement(Button, { type: "button", className: "list-icon", size: "small", icon: "add", onClick: () => {
                                        setAdd();
                                    }, disabled: readOnly })), position: "top center", content: "Add", inverted: true })))),
                bottomMargin && React.createElement(Divider, { hidden: true })))
            : null,
        fields
            ? (React.createElement(React.Fragment, null,
                showEditErrorMsg &&
                    React.createElement(Message, { error: true }, duplicateKeyErrorMsg),
                React.createElement(Forms, { onSubmit: (values) => {
                        if (!showEditErrorMsg) {
                            const tempFields = new Map(fields);
                            tempFields.set(updateMapIndex, {
                                key: values.get("editKey").toString(),
                                value: values.get("editValue").toString()
                            });
                            setFields(tempFields);
                            setEditIndex(null);
                            setUpdateMapIndex(null);
                        }
                    }, submitState: updateTrigger }, Array.from(fields).map(([mapIndex, field], index) => {
                    return (React.createElement(List, { className: "dynamic-field", key: index },
                        React.createElement(List.Item, null, editIndex === index
                            ? (keyType === "dropdown"
                                ? (React.createElement(Field, { type: keyType, placeholder: `Enter a ${keyName}`, required: requiredField, requiredErrorMessage: keyRequiredMessage, name: "editKey", children: keyType === "dropdown"
                                        ? (keyData === null || keyData === void 0 ? void 0 : keyData.map((key) => {
                                            return {
                                                key: key.id,
                                                text: key.value,
                                                value: key.value
                                            };
                                        }))
                                        : [], value: editKey, displayErrorOn: "blur", validation: (value) => {
                                        let isSameUserStore = false;
                                        for (const mapping of fields) {
                                            if (mapping[1].key === value
                                                && mapping[1] !== field) {
                                                isSameUserStore = true;
                                                break;
                                            }
                                        }
                                        setShowEditErrorMsg(false);
                                        if (isSameUserStore) {
                                            setShowEditErrorMsg(true);
                                        }
                                    }, "data-testid": `${testId}-${keyType}` }))
                                : (React.createElement(Field, { type: keyType, placeholder: `Enter a ${keyName}`, required: requiredField, requiredErrorMessage: keyRequiredMessage, name: "editKey", value: editKey, "data-testid": `${testId}-${keyType}` })))
                            : (React.createElement(Label, { size: "large", className: "properties-label" }, field.key))),
                        React.createElement(List.Item, null, editIndex === index
                            ? (React.createElement(Field, { name: "editValue", required: requiredField, requiredErrorMessage: valueRequiredErrorMessage, type: "text", value: editValue, placeholder: `Enter a ${valueName}` }))
                            : (React.createElement(Label, { size: "large", className: "properties-label" }, field.value))),
                        React.createElement(List.Item, null,
                            editIndex === index
                                ? (React.createElement(Popup, { trigger: (React.createElement(Button, { type: "button", className: "list-icon", size: "small", icon: "checkmark", onClick: () => {
                                            setUpdateMapIndex(mapIndex);
                                        } })), position: "top center", content: "Update", inverted: true }))
                                : (React.createElement(Popup, { trigger: (React.createElement(Button, { type: "button", className: "list-icon", size: "small", icon: "pencil", onClick: () => {
                                            setEditIndex(index);
                                            setEditKey(field.key);
                                            setEditValue(field.value);
                                        } })), position: "top center", content: "Edit", inverted: true })),
                            editIndex === index
                                ? (React.createElement(Popup, { trigger: (React.createElement(Button, { type: "button", className: "list-icon", size: "small", icon: "close", onClick: () => {
                                            setEditIndex(null);
                                        } })), position: "top center", content: "Cancel", inverted: true }))
                                : null,
                            React.createElement(Popup, { trigger: (React.createElement(Button, { type: "button", className: "list-icon", size: "small", icon: "trash", onClick: () => {
                                        setEditIndex(null);
                                        const tempFields = new Map(fields);
                                        tempFields.delete(mapIndex);
                                        setFields(tempFields);
                                    } })), position: "top center", content: "Delete", inverted: true }))));
                }))))
            : null));
};
// Set default props
DynamicField.defaultProps = {
    bottomMargin: true,
    "data-testid": "dynamic-field",
    duplicateKeyErrorMsg: "This is key is already selected. Please choose another key.",
    requiredField: false
};
//# sourceMappingURL=dynamic-field.js.map