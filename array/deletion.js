let array = [1, 2, 3, 4, 56, 6, 7,3];
function deletion(arr, element) {
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == element) {
      flag = true;
    }
    if (flag) {
      arr[i] = arr[i + 1];
    }
  }
//   if (flag) {
//     arr.length = arr.length - 1;
//   }
  return arr;
}
console.log(deletion(array, 2));
