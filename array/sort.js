// function bubbleSort(arr) {
//   const length = arr.length;

//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // Swap elements if they are in the wrong order
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }

//   return arr;
// }

// // Example usage:
// const array = [64, 34, 25, 12, 22, 11, 90];
// console.log("Original Array:", array);
// console.log("Sorted Array:", bubbleSort(array)); // Output: Sorted Array: [11, 12, 22, 25, 34, 64, 90]


function bubblesort(array)
{
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length-i-1; j++) {
      if (array[j]>array[j+1]) {
        let temp=array[j]
        array[j]=array[j+1]
        array[j+1]=temp
        
      }
      
      
    }
    
  }
  return array

}
let arr=[12,34,11,9,8,7,78]
console.log(bubblesort(arr))
