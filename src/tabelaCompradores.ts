export default function tabelaDeCompra(vendas: Venda[]): string {
 let elemento: string = "";
 vendas.forEach((venda) => {
  elemento += ` 
          <tr>
            <td>${venda.nome}</td>
            <td>${venda.email}</td>
            <td>R$ ${venda.valor}</td>
            <td>${venda.forma_de_pagamento}</td>
            <td>${venda.status}</td>
        </tr>
  `;
 });
 return elemento;
}
