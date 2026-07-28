export const tradicionais = [
  {
    id: 'morango',
    nome: 'Morango',
    descricao: 'A geleia clássica da casa. Morangos selecionados de agricultores da região, cozidos devagar pra manter o sabor de fruta fresca.',
    cor: 'red',
    tag: 'A mais querida',
  },
  {
    id: 'maca-canela',
    nome: 'Maçã com Canela',
    descricao: 'Maçãs cozidas lentamente com canela em pó, num equilíbrio tão certeiro que quase dispensa acompanhamento.',
    cor: 'orange',
  },
  {
    id: 'abacaxi-pimenta-calabresa',
    nome: 'Abacaxi com Pimenta Calabresa',
    descricao: 'Doce e picante na medida certa. Perfeita pra servir com queijos e tábuas.',
    cor: 'green',
  },
  {
    id: 'goiaba-especiarias',
    nome: 'Goiaba com Especiarias',
    descricao: 'Goiabas maduras com um blend de especiarias que dá um toque aconchegante.',
    cor: 'blue',
  },
  {
    id: 'geleia-de-pimenta',
    nome: 'Geleia de Pimenta',
    descricao: 'Picante na medida certa, ótima pra quem gosta de um toque de ardência no doce.',
    cor: 'red',
  },
]

export const edicoesLimitadas = [
  {
    id: 'frutas-vermelhas',
    nome: 'Frutas Vermelhas',
    descricao: 'Morango, amora e framboesa numa combinação perfeita — deliciosa pura, na sua receita favorita ou como acompanhamento.',
    cor: 'red',
    esgotado: true,
  },
  {
    id: 'frutas-amarelas',
    nome: 'Frutas Amarelas',
    descricao: 'Banana, maracujá e manga num mix refrescante e cheio de sabor.',
    cor: 'orange',
    esgotado: true,
  },
  {
    id: 'frutas-verdes',
    nome: 'Frutas Verdes',
    descricao: 'Kiwi, uva e maçã verde no nosso sabor mais cítrico — uma iguaria à parte.',
    cor: 'green',
    esgotado: true,
  },
]

export const edicoesSazonais = [
  {
    id: 'pinhao-maca',
    nome: 'Pinhão com Maçã',
    descricao: 'Edição sazonal que une o pinhão paranaense com a doçura da maçã.',
    cor: 'green-dark',
    esgotado: true,
  },
]

const produtos = [...tradicionais, ...edicoesLimitadas, ...edicoesSazonais]

export default produtos
