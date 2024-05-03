import swap from '../util/swap.js'
import randArr from '../util/randomArray.js'
import unitTest from '../unit-test/unit-test.js'

let arraySize = 40000
let arr = randArr(arraySize)
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

function benchMark() {
	let startTime, endTime, elapsedTime
	startTime = performance.now()
	selectionSort(arr, len)
	endTime = performance.now()
	elapsedTime = ((endTime - startTime) / 1000).toFixed(2)
	console.log(
		`selection sort for ${arraySize} numbers took ${elapsedTime} seconds`
	)
}

benchMark()
unitTest(selectionSort(arr, len), 'Selection')
