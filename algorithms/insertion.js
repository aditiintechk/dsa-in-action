import randArr from '../util/randomArray.js'
import unitTest from '../unit-test/unit-test.js'

let arraySize = 40000

function insertionSort() {
	let arr = randArr(arraySize)
	let len = arr.length
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

function benchMark() {
	let startTime, endTime, elapsedTime
	startTime = performance.now()
	insertionSort()
	endTime = performance.now()
	elapsedTime = ((endTime - startTime) / 1000).toFixed(2)
	console.log(
		`insertion sort for ${arraySize} numbers took ${elapsedTime} seconds`
	)
}

benchMark()
unitTest(insertionSort(), 'Insertion')
