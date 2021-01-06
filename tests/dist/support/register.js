/*
 *Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 *WSO2 Inc. licenses this file to you under the Apache License,
 *Version 2.0 (the "License"); you may not use this file except
 *in compliance with the License.
 *You may obtain a copy of the License at
 *
 *http://www.apache.org/licenses/LICENSE-2.0
 *
 *Unless required by applicable law or agreed to in writing,
 *software distributed under the License is distributed on an
 *"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *KIND, either express or implied.  See the License for the
 *specific language governing permissions and limitations
 *under the License.
 */
var addContext = require("mochawesome/addContext");
var MAX_TEST_NAME_LENGTH = 1000;
Cypress.on("test:after:run", function (test, runnable) {
    if (test.state !== "failed") {
        return;
    }
    var fullTestName = getFullTestName(runnable);
    var imagePath = "screenshots/" + Cypress.spec.name + "/" + fullTestName + " (failed).png";
    addContext({ test: test }, imagePath);
});
var getFullTestName = function (runnable) {
    var item = runnable;
    var name = [runnable.title];
    while (item.parent) {
        name.unshift(item.parent.title);
        item = item.parent;
    }
    return name
        .filter(Boolean)
        .map(function (n) { return n.trim(); })
        .join(" -- ")
        .substring(0, MAX_TEST_NAME_LENGTH);
};
