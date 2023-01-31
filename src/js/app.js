export default function orderByProps(obj, arr) {
  const propsObj = [];
  const sortObj = [];

  for (const key in obj) {
    if (arr.includes(key)) {
      propsObj.push({ key, value: obj[key] });
    } else {
      sortObj.push({ key, value: obj[key] });
    }
  }

  sortObj.sort((a, b) => (a.key > b.key ? 1 : -1));

  return [...propsObj, ...sortObj];
}
