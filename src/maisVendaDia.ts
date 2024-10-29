export default function diaComMaisVenda(vendas: Venda[]): string {
 const diasDaSemana = formatarEAdicionarVendas(vendas);
 let maisVenda = diasDaSemana[0];
 for (let i = 0; i < diasDaSemana.length; i++) {
  if (maisVenda.qntdVenda < diasDaSemana[i].qntdVenda) {
   maisVenda = diasDaSemana[i];
  }
 }
 return maisVenda.dia;
}

// formatar data vinda dos dados e adicionar qntd de vendas
function formatarEAdicionarVendas(vendas: Venda[]) {
 const diasDaSemana = [
  { dia: "Domingo", qntdVenda: 0 },
  { dia: "Segunda-Feira", qntdVenda: 0 },
  { dia: "Terça-feira", qntdVenda: 0 },
  { dia: "Quarta-feira", qntdVenda: 0 },
  { dia: "Quinta-feira", qntdVenda: 0 },
  { dia: "Sexta-feira", qntdVenda: 0 },
  { dia: "Sábado", qntdVenda: 0 },
 ];

 vendas.forEach((venda) => {
  const [dia, mes, ano] = venda.data.split(" ")[0].split("/").map(Number);

  const dataObj = new Date(ano, mes - 1, dia);
  const diaSemana = diasDaSemana[dataObj.getDay()];
  switch (diaSemana) {
   case diasDaSemana[0]:
    diasDaSemana[0].qntdVenda++;
    break;
   case diasDaSemana[1]:
    diasDaSemana[1].qntdVenda++;
    break;
   case diasDaSemana[2]:
    diasDaSemana[2].qntdVenda++;
    break;
   case diasDaSemana[3]:
    diasDaSemana[3].qntdVenda++;
    break;
   case diasDaSemana[4]:
    diasDaSemana[4].qntdVenda++;
    break;
   case diasDaSemana[5]:
    diasDaSemana[5].qntdVenda++;
    break;
   case diasDaSemana[6]:
    diasDaSemana[6].qntdVenda++;
    break;
  }
 });
 return diasDaSemana;
}
