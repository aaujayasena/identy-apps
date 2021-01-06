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
import classNames from "classnames";
import React, { Children, cloneElement, useEffect, useState } from "react";
import { Divider } from "semantic-ui-react";
import { Step } from "./step";
/**
 * Steps component.
 *
 * @param {React.PropsWithChildren<StepsPropsInterface>} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const Steps = (props) => {
    const { children, className, current, header, initial, style, ["data-testid"]: testId } = props;
    const [filteredChildren, setFilteredChildren] = useState([]);
    const classes = classNames("steps", className);
    useEffect(() => {
        setFilteredChildren(React.Children.toArray(children).filter((child) => !!child));
    }, []);
    return (React.createElement("div", { className: classes, style: style, "data-testid": testId },
        header && (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "header", "data-testid": `${testId}-header` }, header),
            React.createElement(Divider, { hidden: true }))),
        Children.map(filteredChildren, (child, index) => {
            if (!child) {
                return null;
            }
            const stepNumber = initial + index;
            const childProps = Object.assign({ stepNumber: `${stepNumber + 1}` }, child.props);
            if (!child.props.status) {
                if (stepNumber === current) {
                    childProps.status = "active";
                }
                else if (stepNumber < current) {
                    childProps.status = "completed";
                }
                else {
                    childProps.status = undefined;
                }
            }
            childProps.active = stepNumber === current;
            return cloneElement(child, childProps);
        })));
};
Steps.Group = Steps;
Steps.Step = Step;
/**
 * Wizard component default props.
 */
Steps.defaultProps = {
    current: 0,
    "data-testid": "steps",
    initial: 0
};
//# sourceMappingURL=steps.js.map