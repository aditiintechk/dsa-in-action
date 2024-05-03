import swap from '../util/swap.js'
import randArr from '../util/randomArray.js'
import unitTest from '../unit-test/unit-test.js'

let arr = randArr()
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

unitTest(bubbleSort(arr, len))
