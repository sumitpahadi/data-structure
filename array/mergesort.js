function printarray(array) {
  let space = "";
  for (let i = 0; i < array.length; i++) {
    space += array[i] + "->";
  }
  console.log(space);
}
function merge(array, low, mid, high) {
  let i = low;
  let j = mid + 1;
  let k = low;
  let array2 = [];
  while (low <= mid && j <= high) {
    if (array[i] < array[j]) {
      array2[k] = array[i];
      k++;
      i++;
    } else {
      array2[k] = array[j];
      j++;
      k++;
    }
  }
  while (i <= mid) {
    array2[k] = array[i];
    k++;
    i++;
  }
  while (j <= high) {
    array2[k] = array[j];
    j++;
    k++;
  }
  for (let i = low; i <= high; i++) {
    array[i] = array2[i];
  }
}

function mergesort(array, low, high) {
  if (low < high) {
    let mid = Math.floor((low + high) / 2);
    mergesort(array, low, mid);
    mergesort(array, mid + 1, high);
    merge(array, low, mid, high);
  }
}
let array = [12, 2, 3, 4, 5, 5, 6];
printarray(array);
mergesort(array, 0, array.length - 1);
printarray(array);
