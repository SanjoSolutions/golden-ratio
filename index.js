const width = Number(process.argv[2])
const goldenRatio = 1.61803398875
const a = width / goldenRatio
console.log(Math.round(a))
