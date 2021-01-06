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
import { useEffect, useState } from "react";
/**
 * React Hook to resolve lazily loaded SVGs.
 *
 * @param {Promise<SVGRLoadedInterface> | SVGRLoadedInterface} imagePromise - Image to be resolved.
 * @return {[string, React.FunctionComponent<React.SVGProps<SVGSVGElement>>]}
 */
export const useSVGPromise = (imagePromise) => {
    const [image, setImage] = useState(imagePromise);
    const [imageAsDataURL, setImageAsDataURL] = useState(null);
    const [imageAsReactComponent, setImageAsReactComponent] = useState(null);
    useEffect(() => {
        if (image instanceof Promise) {
            image
                .then((response) => {
                setImageAsDataURL(response === null || response === void 0 ? void 0 : response.default);
                setImageAsReactComponent(response === null || response === void 0 ? void 0 : response.ReactComponent);
            });
        }
        else if (image.default || image.ReactComponent) {
            setImageAsDataURL(image.default);
            setImageAsReactComponent(image.ReactComponent);
        }
    }, [image]);
    return [imageAsDataURL, imageAsReactComponent];
};
//# sourceMappingURL=use-svg-promise.js.map