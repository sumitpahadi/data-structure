function selectionSort(arr) {
  const n = arr.length;

  // Outer loop for traversing the entire array
  for (let i = 0; i < n - 1; i++) {
    // Assume the current index is the minimum
    let minIndex = i;

    // Inner loop to find the minimum element in the unsorted part
    for (let j = i + 1; j < n; j++) {
      // Compare current element with the assumed minimum
      if (arr[j] < arr[minIndex]) {
        // If a smaller element is found, update the minimum index
        minIndex = j;
      }
    }

    // Swap the found minimum element with the first element of the unsorted part
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

// Example usage:
const arrayToSort = [8, 0, 7, 1, 3];
const sortedArray = selectionSort(arrayToSort);
console.log(sortedArray);
