import React, { FunctionComponent } from "react";
interface QueryParametersPropsInterface {
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const QueryParameters: FunctionComponent<QueryParametersPropsInterface>;
export {};
