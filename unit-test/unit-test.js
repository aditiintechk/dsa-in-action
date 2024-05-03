export default function unitTest(arr) {
	let isOrdered = true
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i + 1]) {
			isOrdered = false
			break
		}
	}

	if (isOrdered) console.log(`It is sorted!`)
	else console.log('Oops! Not sorted.')
}
