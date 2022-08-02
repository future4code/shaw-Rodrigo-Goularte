
export const numeros: number[] = []

for(let i = 1; i < 101; i++) {
  numeros.push(i)
}

// let soma = 0

// for(let i = 0; i < 101; i++) {
//   soma = soma + i
// }

// console.log(soma)

export const numeroFaltante = (arr: number[]): number => {
  const somaEsperada: number = 5050
  let soma: number = 0

  for(const numero of arr) {
    soma += numero
  }

  return somaEsperada - soma
}