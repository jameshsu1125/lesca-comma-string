interface StringKeyObject {
  [name: string]: any;
}

export const CommaStringToObject = (commaDB: String, keys: string[]) => {
  // return empty string
  if (commaDB === '') {
    return [];
  }

  // check keys type
  const checkKeyType = keys.filter((item) => typeof item !== 'string');
  if (checkKeyType.length !== 0) {
    console.warn('[CommaDBtoObject]: parmeter keys type is not string.');
    return false;
  }

  // check keys index number is match commaDB length.
  const splitedDB = commaDB.split(',');
  const keysLength = keys.length;
  const remainder = splitedDB.length % keysLength;
  if (remainder !== 0) {
    console.warn('[CommaDBtoObject]: commaDB index number is not match keys length.');
    return false;
  }

  // convert to object

  const length = Math.ceil(splitedDB.length / keysLength);
  const output = Array.from(new Array(length).keys()).map((i) => {
    const item: StringKeyObject = {};
    keys.forEach((e, index) => {
      item[e] = splitedDB[i * keysLength + index];
    });
    return item;
  });

  return output;
};

export const ObjectToCommaString = (parm: object[]) => {
  // check empty array
  if (parm.length === 0) {
    return '';
  }

  // find keys
  const [item] = parm;
  const keys = Object.keys(item);
  const output = parm.map((e) => Object.values(e).join(',')).join(',');

  return [output, keys];
};

const Misc = {
  CommaStringToObject,
  ObjectToCommaString,
};

export default Misc;
