import swap from '../util/swap.js'

let arr = [2, 14, 16, 3, 1, 10, 27, 89, 0]
let len = arr.length

function bubbleSort(arr, len) {
	let swapped
	for (let i = 0; i < len - 1; i++) {
		swapped = false
		for (let j = 0; j < len - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1)
				swapped = true
			}
		}

		if (swapped == false) break
	}
	return arr
}

console.log(bubbleSort(arr, len))
