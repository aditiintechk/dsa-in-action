import swap from '../util/swap.js'
import randArr from '../util/randomArray.js'
import unitTest from '../unit-test/unit-test.js'

let arraySize = 40000

function bubbleSort() {
	let arr = randArr(arraySize)
	let len = arr.length
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

function benchMark() {
	let startTime, endTime, elapsedTime
	startTime = performance.now()
	bubbleSort()
	endTime = performance.now()
	elapsedTime = ((endTime - startTime) / 1000).toFixed(2)
	console.log(
		`bubble sort for ${arraySize} numbers took ${elapsedTime} seconds`
	)
}

benchMark()
unitTest(bubbleSort(), 'Bubble')
