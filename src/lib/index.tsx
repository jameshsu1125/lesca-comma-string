interface StringKeyObject {
  [name: string]: any;
}

export const CommaStringToList = (commaString: String, keys: string[]) => {
  // return empty string
  if (commaString === '') {
    return [];
  }

  // check keys type
  const checkKeyType = keys.filter((item) => typeof item !== 'string');
  if (checkKeyType.length !== 0) {
    console.warn('[CommaDBtoObject]: parmeter keys type is not string.');
    return false;
  }

  // check keys index number is match commaString length.
  const splitedDB = commaString.split(',');
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

export const ListToCommaString = (parm: object[]) => {
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

export const CommaStringToArray = (commastring: string) => {
  if (commastring === '') return [];
  return commastring.split(',');
};

export const ArrayToCommaString = (data: string[]) => {
  return data.join(',');
};

const Misc = {
  CommaStringToList,
  ListToCommaString,
  CommaStringToArray,
  ArrayToCommaString,
};

export default Misc;
