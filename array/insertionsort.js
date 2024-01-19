function insertionSort(arr) {
    const n = arr.length;
  
    for (let i = 1; i < n; i++) {
      let currentElement = arr[i];
      let j = i - 1;
  
      // Move elements greater than the current element to the right
      while (j >= 0 && arr[j] > currentElement) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      // Place the current element in its correct position
      arr[j + 1] = currentElement;
    }
  
    return arr;
  }
  
  // Example usage:
  const arrayToSort = [12, 7, 3, 1, 5, 6];
  const sortedArray = insertionSort(arrayToSort);
  console.log(sortedArray);
  