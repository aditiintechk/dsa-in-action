export default function verifySortAlgorithm(arr, sortType) {
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
