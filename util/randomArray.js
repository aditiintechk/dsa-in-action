export default function randArr(arraySize) {
	let arr = []
	for (let i = 1; i <= arraySize; i++) {
		let randNum = Math.floor(Math.random() * arraySize) + 1
		arr.push(randNum)
	}

	return arr
}
