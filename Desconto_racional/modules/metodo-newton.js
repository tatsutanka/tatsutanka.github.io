export function calcTaxaJuros(
  precoAVista,
  precoAPrazo,
  numParcelas,
  temEntrada,
) {
  const tolerancia = 0.0001;
  let taxaDeJuros = 0.1; // palpite inicial
  let taxaJurosAnterior = 0.0;
  let funcao = 0;
  let derivada = 0;
  for (
    let i = 0;
    Math.abs(taxaJurosAnterior - taxaDeJuros) >= tolerancia;
    i++
  ) {
    taxaJurosAnterior = taxaDeJuros;
    funcao = calcularValorFuncao();
    derivada = calcularValorDerivadaFuncao();
    taxaDeJuros = taxaDeJuros - funcao / derivada;
  }
  return taxaDeJuros;
}

export function calcularValorFuncao(
  preceAprazo,
  taxaJuros,
  precoVista,
  temEntrada,
  numParcelas,
) {
  let a = 0;
  let b = 0;
  let c = 0;
  if (temEntrada) {
    a = Math.pow(1 + taxaJuros, numParcelas - 2);
    b = Math.pow(1 + taxaJuros, numParcelas - 1);
    c = Math.pow(1 + taxaJuros, numParcelas);
    return precoVista * taxaJuros * b - (preceAprazo / numParcelas) * (c - 1);
  } else {
    a = Math.pow(1 + taxaJuros, -numParcelas);
    b = Math.pow(1 + taxaJuros, -numParcelas - 1);
    return precoAVista * taxaJuros - (preceAprazo / numParcelas) * (1 - a);
  }
}

export function calcularValorDerivadaFuncao(
  preceAprazo,
  taxaJuros,
  precoAVista,
  temEntrada,
  numParcelas,
) {
  let a = 0;
  let b = 0;
  if (temEntrada) {
    a = Math.pow(1 + taxaDeJuros, numParcelas - 2);
    b = Math.pow(1 + taxaDeJuros, numParcelas - 1);
    return (
      precoAVista * (b + taxaJuros * a * (numParcelas - 1)) - preceAprazo * b
    );
  } else {
    a = Math.pow(1 + taxaDeJuros, -numParcelas);
    b = Math.pow(1 + taxaDeJuros, -numParcelas - 1);
    return precoAVista - preceAprazo * b;
  }
}
