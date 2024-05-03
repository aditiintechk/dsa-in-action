import randArr from '../util/randomArray.js'
import verifySortAlgorithm from '../unit-test/unit-test.js'

// let arraySize = 40000

function insertionSort(arraySize) {
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

function benchMark(arraySize) {
	let startTime, endTime, elapsedTime
	startTime = performance.now()
	insertionSort(arraySize)
	endTime = performance.now()
	elapsedTime = ((endTime - startTime) / 1000).toFixed(2)
	console.log(
		`Insertion sort for ${arraySize} numbers took ${elapsedTime} seconds`
	)
}

function sortForVariousInputs() {
	let numArr = [10, 100, 1000, 10000, 40000, 50000, 80000, 100000]
	for (let i = 0; i < numArr.length; i++) {
		benchMark(numArr[i])
		verifySortAlgorithm(insertionSort(numArr[i]), 'Insertion')
		console.log('-------------------------------')
	}
}

sortForVariousInputs()
