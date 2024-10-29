import fetchData from "./fetchData.js";
import normalizeKeys from "./normalizarObj.js";

export async function estatisticas(): Promise<Venda[]> {
 const data: Venda[] = await fetchData(
  "https://api.origamid.dev/json/transacoes.json"
 );
 // Normalizando as chaves de cada objeto no array
 const vendasNormalizadas: Venda[] = data.map((venda) => normalizeKeys(venda));

 return vendasNormalizadas;
}

export function totalVendas(dados: Venda[]) {
 let total = 0;
 let boleto = 0;
 let cartao = 0;
 dados.forEach((venda) => {
  // 3.2 - Transações por meio de pagamento.
  cartao += meioDePagamento(venda.forma_de_pagamento, "Cartão de Crédito");
  boleto += meioDePagamento(venda.forma_de_pagamento, "Boleto");

  // totalizando as vendas
  if (venda.valor === "-") {
   venda.valor = "";
  } else {
   total += Number(venda.valor.replace(".", "").replace(",", "."));
  }
 });
 return { total, boleto, cartao };
}

// Função para saber meio de pagamento
export function meioDePagamento(venda: string, tipoPagamento: string): number {
 let contador = 0;
 if (venda == tipoPagamento) {
  contador++;
 }
 return contador;
}
