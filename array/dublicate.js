function dublicate(arr) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
      let flag = false;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
          flag = true;
          break
        }
      }
      if (!flag) {
        array.push(arr[i]);
      }
     
    }
    return array;
  }
  let arr = [12, 2, 2, 3, 4, 5, 5, 6,6,6,6];
  console.log(dublicate(arr));
  