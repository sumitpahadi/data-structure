function printarray(array) {
  let space = "";
  for (let i = 0; i < array.length; i++) {
    space += array[i] + "->";
  }
  console.log(space);
}
function partition(arr, low, high) {
    let pivot = arr[low];
    let i = low + 1;
    let j = high;

    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            // Swap arr[i] and arr[j]
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }

    // Swap arr[low] and arr[j]
    let temp = arr[low];
    arr[low] = arr[j];
    arr[j] = temp;

    return j;
}
function quicksort(arr, low, high) {
  if (low < high) {
    let partitionindex = partition(arr, low, high);
    quicksort(arr, low, partitionindex - 1);
    quicksort(arr, partitionindex + 1, high);
  }
}

let array = [22, 34, 23, 7, 8, 9, 56, 43, 12];
printarray(array);
quicksort(array, 0, array.length - 1);
printarray(array);
