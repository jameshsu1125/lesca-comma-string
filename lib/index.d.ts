interface StringKeyObject {
    [name: string]: any;
}
export declare const CommaStringToList: (commaString: String, keys: string[]) => false | StringKeyObject[];
export declare const ListToCommaString: (parm: object[]) => "" | (string | string[])[];
export declare const CommaStringToArray: (commastring: string) => string[];
export declare const ArrayToCommaString: (data: string[]) => string;
declare const Misc: {
    CommaStringToList: (commaString: String, keys: string[]) => false | StringKeyObject[];
    ListToCommaString: (parm: object[]) => "" | (string | string[])[];
    CommaStringToArray: (commastring: string) => string[];
    ArrayToCommaString: (data: string[]) => string;
};
export default Misc;
