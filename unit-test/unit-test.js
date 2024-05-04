import binarySearch from '../algorithms/binarySearch.js'

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
	let num = 23
	let arr = [1, 2, 4, 10, 19, 23]

	// 2. Call the binary search function
	let result = binarySearch(arr, num)

	// 3. Verify
	if (result === null) {
		console.log('Test Failed: Number not found')
	} else {
		console.log(`Test successful: ${num} found at index ${result}`)
	}
}

verifyBinarySearch()
