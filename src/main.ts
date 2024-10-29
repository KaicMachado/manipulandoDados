// Manipulação de Dados
import { estatisticas, totalVendas } from "./estatisticas.js";
import vendasPorStatus from "./vendasPorStatus.js";
import diaComMaisVenda from "./maisVendaDia.js";
import tabelaDeCompra from "./tabelaCompradores.js";
// 1 - Acesse os dados da api: https://api.origamid.dev/json/transacoes.json
async function iniciar() {
 const dados = await estatisticas();

 // 2 - Mostre em uma tabela os dados de cada transação.
 const tabela = tabelaDeCompra(dados);

 // 3 - Calcule:
 // 3.1 - Soma total dos valores
 const { total, cartao, boleto } = totalVendas(dados);
 // 3.3 - Transações por status.
 const { pagas, recusadas, aguardando, estornadas } = vendasPorStatus(dados);
 // 3.4 - Total de vendas por dia da semana.
 // 3.5 - Dia da semana com mais vendas.
 const diaComMaisVendas = diaComMaisVenda(dados);

 // 4 - Mostre as estatísticas na tela.
 document.body.innerHTML += `
 <div>
    <h1>Estatísticas</h1>
    <p>Total : R$ ${total.toLocaleString("pt-BR", {
     style: "currency",
     currency: "BRL",
    })}</p>
    <p>Cartão de Crédito : ${cartao}</p>
    <p>Boleto : ${boleto}</p>
  </div>
  <div>
    <p>Pagas : ${pagas}</p>
    <p>Recusadas pela operador de cartão : ${recusadas}</p>
    <p>Aguardando Pagamento : ${aguardando}</p>
    <p>Estornadas : ${estornadas}</p>
    <p>Dia com mais vendas : ${diaComMaisVendas}</p>
  </div>
  <div> 
    <h2>Dados </h2>
    <table> 
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Email</th>
            <th scope="col">Compra</th>
            <th scope="col">Pagamento</th>
            <th scope="col">Status</th>
          </tr>
      </thead>
      <tbody> 
      ${tabela}
      </tbody>
    </table>
  </div>
  `;
}

iniciar();
