export default function randArr() {
	let arr = []
	for (let i = 1; i <= 10000; i++) {
		let randNum = Math.floor(Math.random() * 10000) + 1
		arr.push(randNum)
	}

	return arr
}
