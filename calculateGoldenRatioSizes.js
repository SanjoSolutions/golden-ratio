export function calculateGoldenRatioSizes(length) {
  const goldenRatio = 1.61803398875
  const a = length / goldenRatio
  const roundedA = Math.round(a)
  const roundedB = length - roundedA
  return {
    a: roundedA,
    b: roundedB,
  }
}
