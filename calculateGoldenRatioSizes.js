export function calculateGoldenRatioSizes(width) {
  const goldenRatio = 1.61803398875
  const a = width / goldenRatio
  const roundedA = Math.round(a)
  const roundedB = width - roundedA
  return {
    a: roundedA,
    b: roundedB,
  }
}
