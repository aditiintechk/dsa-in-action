export default function randArr() {
	let arr = []
	for (let i = 1; i <= 100; i++) {
		let randNum = Math.floor(Math.random() * 100) + 1
		arr.push(randNum)
	}

	return arr
}

randArr()
