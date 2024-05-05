import binarySearch from '../algorithms/binarySearch.js'
import inputForBinarySearch from '../util/inputForBinarySearch.js'

export function verifySortAlgorithm(arr, sortType) {
	let isOrdered = true
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i + 1]) {
			isOrdered = false
			break
		}
	}

	if (isOrdered) console.log(`${sortType} sort: Array is sorted!`)
	else console.log(`Oops! ${sortType} sort: array is not sorted.`)
}

function verifyBinarySearch() {
	// 1. Setup

	let arr = inputForBinarySearch(10000000)
	let num = 756321

	// 2. Call the binary search function
	let result = binarySearch(arr, num)
	benchMarkBinarySearch(arr, num)

	// 3. Verify
	if (result === null) {
		console.log('Test Failed: Number not found')
	} else {
		console.log(`Test successful: ${num} found at index ${result}`)
	}
}

function benchMarkBinarySearch(arr, num) {
	let startTime, endTime, elapsedTime
	startTime = performance.now()
	binarySearch(arr, num)
	endTime = performance.now()
	elapsedTime = (endTime - startTime) / 1000
	console.log(
		`Bubble sort for ${arr.length} numbers took ${elapsedTime} seconds`
	)
}

verifyBinarySearch()
