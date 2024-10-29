// Função para converter uma string para camelCase
function toSnakeCase(str: string): string {
 if (str === "Valor (R$)") {
  return "valor";
 }
 return str.trim().toLowerCase().replace(" ", "_").replace(" ", "_");
}

// Função para normalizar as chaves de um objeto
export default function normalizeKeys(obj: any): Venda {
 const normalizedObj: any = {};

 Object.keys(obj).forEach((key) => {
  const normalizedKey = toSnakeCase(key);
  normalizedObj[normalizedKey] = obj[key];
 });

 return normalizedObj as Venda;
}
