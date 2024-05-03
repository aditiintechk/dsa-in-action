import swap from '../util/swap.js'
import randArr from '../util/randomArray.js'
import unitTest from '../unit-test/unit-test.js'

function selectionSort(arraySize) {
	let arr = randArr(arraySize)
	let len = arr.length
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

function benchMark(arraySize) {
	let startTime, endTime, elapsedTime
	startTime = performance.now()
	selectionSort(arraySize)
	endTime = performance.now()
	elapsedTime = ((endTime - startTime) / 1000).toFixed(2)
	console.log(
		`Selection sort for ${arraySize} numbers took ${elapsedTime} seconds`
	)
}

function sortForVariousInputs() {
	let numArr = [10, 100, 1000, 10000, 40000, 50000, 80000, 100000]
	for (let i = 0; i < numArr.length; i++) {
		benchMark(numArr[i])
		unitTest(selectionSort(numArr[i]), 'Selection')
		console.log('-------------------------------')
	}
}

sortForVariousInputs()
