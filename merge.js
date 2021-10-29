function merge(arr1, arr2) {
  let out = [];
  let i = 0;
  let i2 = 0;

  while (i < arr1.length && i2 < arr2.length) {
    if (arr1[i] < arr2[i2]) {
      out.push(arr1[i]);
      i++;
    } else {
      out.push(arr2[i2]);
      i2++;
    }
  }

  while (i < arr1.length) {
    out.push(arr1[i]);
    i++;
  }
  while (i2 < arr2.length) {
    out.push(arr2[i2]);
    i2++;
  }
  return out;
}

function mergeSort(arr) {
  let m = Math.floor(arr.length / 2);

  if (arr.length <= 1) return arr;
  let leftArr = mergeSort(arr.slice(0, m));
  let rightArr = mergeSort(arr.slice(m));

  return merge(leftArr, rightArr);
}

module.exports = { merge, mergeSort };
