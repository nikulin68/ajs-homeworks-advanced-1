const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

export default function orderByProps(object, keyArray) {
  const result = [];
  const keys = Object.keys(object);

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && keyArray.includes(key) === false) {
      result.push({
        key,
        value: object[key],
      });
    }
  }

  result.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    }
    return -1;
  });

  keyArray.forEach((entry) => {
    if (keys.includes(entry)) {
      result.unshift({
        key: entry,
        value: object[entry],
      });
    }
  });

  return result;
}

orderByProps(obj, ['name', 'level']);