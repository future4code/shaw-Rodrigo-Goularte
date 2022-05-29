type Produto = {
  nome: string,
  quantidade: number,
  valorUnitario: number | string
}

const ajustaPreco = (preco: any): string => {
  const valorAjustado: string = preco.toFixed(2).replace('.', ',')
  return "R$ " + valorAjustado
}

const estoqueTotal: Produto[] = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

function OrdenaPorQuantidade(estoque: Produto[]): Produto[] {
  
  const estoqueComPrecoAjustado: Produto[] = []

  estoque.map((item) => {

    const produtoAtualizado: Produto = {
      nome: item.nome,
      quantidade: item.quantidade,
      valorUnitario: ajustaPreco(item.valorUnitario)
    }

    return estoqueComPrecoAjustado.push(produtoAtualizado)    
  })

  
  estoqueComPrecoAjustado.sort((a,b) => {
    return a.quantidade - b.quantidade
  })

  return estoqueComPrecoAjustado
}

console.log(OrdenaPorQuantidade(estoqueTotal))