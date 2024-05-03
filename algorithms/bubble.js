import swap from '../util/swap.js'
import randArr from '../util/randomArray.js'
import verifySortAlgorithm from '../unit-test/unit-test.js'

function bubbleSort(arraySize) {
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

function benchMark(arraySize) {
	let startTime, endTime, elapsedTime
	startTime = performance.now()
	bubbleSort(arraySize)
	endTime = performance.now()
	elapsedTime = ((endTime - startTime) / 1000).toFixed(2)
	console.log(
		`Bubble sort for ${arraySize} numbers took ${elapsedTime} seconds`
	)
}

function sortForVariousInputs() {
	let numArr = [10, 100, 1000, 10000, 40000, 50000, 80000, 100000]
	for (let i = 0; i < numArr.length; i++) {
		benchMark(numArr[i])
		verifySortAlgorithm(bubbleSort(numArr[i]), 'Bubble')
		console.log('-------------------------------')
	}
}

sortForVariousInputs()
