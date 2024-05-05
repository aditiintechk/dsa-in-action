export default function binarySearch(arr, num) {
	let l = 0
	let h = arr.length - 1
	let mid

	while (l <= h) {
		mid = l + Math.floor((h - l) / 2)

		if (arr[mid] === num) return mid

		if (arr[mid] > num) h = mid - 1
		else l = mid + 1
	}

	return null
}

/* function sortForVariousInputs() {
	let numArr = [10, 100, 1000, 10000, 40000, 50000, 80000, 100000]
	for (let i = 0; i < numArr.length; i++) {
		benchMark(numArr[i])
		console.log('-------------------------------')
	}
}
 */
