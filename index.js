const width = parseInt(process.argv[2], 10)
const goldenRatio = 1.61803398875
const a = width / goldenRatio
const roundedA = Math.round(a)
const roundedB = width - roundedA

const line2 = roundedA + ' ' + roundedB
const widthAsString = String(width)
const spaceBeforeWidth = ' '.repeat(Math.floor((line2.length - widthAsString.length) / 2))
const line1 = spaceBeforeWidth + widthAsString

console.log(line1)
console.log(line2)
