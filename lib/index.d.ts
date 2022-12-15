interface StringKeyObject {
    [name: string]: any;
}
export declare const CommaStringToObject: (commaDB: String, keys: string[]) => false | StringKeyObject[];
export declare const ObjectToCommaString: (parm: object[]) => "" | (string | string[])[];
declare const Misc: {
    CommaStringToObject: (commaDB: String, keys: string[]) => false | StringKeyObject[];
    ObjectToCommaString: (parm: object[]) => "" | (string | string[])[];
};
export default Misc;
