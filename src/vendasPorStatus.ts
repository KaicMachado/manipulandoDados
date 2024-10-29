export default function vendasPorStatus(dados: Venda[]) {
 let pagas = 0;
 let recusadas = 0;
 let aguardando = 0;
 let estornadas = 0;
 dados.forEach((venda) => {
  switch (venda.status) {
   case "Paga":
    pagas++;
    break;
   case "Recusada pela operadora de cartão":
    recusadas++;
    break;
   case "Aguardando pagamento":
    aguardando++;
    break;
   case "Estornada":
    estornadas++;
    break;
  }
 });
 return { pagas, recusadas, aguardando, estornadas };
}
