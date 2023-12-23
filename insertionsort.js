function insertionSort(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        let currentElement = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = currentElement;
    }

    return arr;
}

// Contoh penggunaan:
const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArray = insertionSort(unsortedArray);
console.log("Array Sebelum Diurutkan:", unsortedArray);
console.log("Array Setelah Diurutkan:", sortedArray);
