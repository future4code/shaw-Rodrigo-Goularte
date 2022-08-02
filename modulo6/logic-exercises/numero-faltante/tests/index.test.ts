import { numeroFaltante, numeros } from "../src"

describe("Testes da função", () => {

  test("Testa se a função detecta que o 70 está faltando", () => {

    const numerosNovo = numeros.filter((num) => num !== 70)

    const result = numeroFaltante(numerosNovo)

    expect(result).toBe(70)
  })

  test("Testa se o array não tem número faltante", () => {

    const result = numeroFaltante(numeros)

    expect(result).toBe(0)
  })
})