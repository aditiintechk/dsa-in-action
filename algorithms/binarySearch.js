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
