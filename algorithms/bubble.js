let arr = [2, 14, 16, 3, 1]
let len = arr.length

function bubbleSort(arr, len) {
	let swapped
	for (let i = 0; i < len - 1; i++) {
		swapped = false
		for (let j = 0; j < len - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = temp

				swapped = true
			}
		}

		if (swapped == false) break
	}
	return arr
}

console.log(bubbleSort(arr, len))
