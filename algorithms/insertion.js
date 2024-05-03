/* Algorithm:
1. start the iteration from 2nd element
2. check if the element is less than the elements before it
3. if it is, then keep swapping until it reaches the point where the number is not less than the its previous element 
*/

let arr = [2, 13, 3, 10, 1, 8, 19]
let len = arr.length

function insertionSort(arr, len) {
	let key, j
	for (let i = 1; i < len; i++) {
		key = arr[i]
		j = i - 1

		while (j >= 0 && arr[j] > key) {
			arr[j + 1] = arr[j]
			j = j - 1
		}

		arr[j + 1] = key
	}

	return arr
}

console.log(insertionSort(arr, len))
