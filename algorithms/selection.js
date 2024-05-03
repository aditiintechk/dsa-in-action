import swap from '../util/swap.js'
import randArr from '../util/randomArray.js'
import unitTest from '../unit-test/unit-test.js'

let arr = randArr()
let len = arr.length

function selectionSort(arr, len) {
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

unitTest(selectionSort(arr, len))
