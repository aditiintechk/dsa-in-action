import swap from '../util/swap.js'

let arr = [2, 13, 3, 10, 1, 20, 61, 82, 12, 11]
let len = arr.length

function selection(arr, len) {
	let minIndex
	for (let i = 0; i < len - 1; i++) {
		minIndex = i
		for (let j = i + 1; j < len; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j
			}
		}

		swap(arr, minIndex, i)
	}
	return arr
}

console.log(selection(arr, len))

// First Try 😙
/* function selection(arr, len) {
	for (let i = 0; i < len; i++) {
		currentMinVal = arr[i]
		for (let j = i; j < len; j++) {
			if (currentMinVal > arr[j]) {
				let temp = arr[j]
				arr[j] = arr[i]
				arr[i] = temp
			}
		}
	}

	return arr
} */
