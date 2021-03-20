import { calculateGoldenRatioSizes } from './calculateGoldenRatioSizes.js'

const width = parseInt(process.argv[2], 10)
const {a, b} = calculateGoldenRatioSizes(width)
output({a, b})

function output({a, b}) {
  const line2 = a + ' ' + b
  const widthAsString = String(width)
  const spaceBeforeWidth = ' '.repeat(Math.floor((line2.length - widthAsString.length) / 2))
  const line1 = spaceBeforeWidth + widthAsString

  console.log(line1)
  console.log(line2)
}
