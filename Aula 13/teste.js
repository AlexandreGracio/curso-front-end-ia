console.log(document.title);   // titulo da pagina
console.log(document.body);    // o elemento <body> inteiro

// getElementById — busca pelo atributo id (retorna 1 elemento)
const titulo = document.getElementById('titulo');

// querySelector — busca pelo seletor CSS (retorna o PRIMEIRO encontrado)
const titulo2  = document.querySelector('#titulo');     // por id
const descricao = document.querySelector('.descricao'); // por classe
const botao    = document.querySelector('button');      // por tag
const lista    = document.querySelector('#lista-historico');

// querySelectorAll — retorna TODOS os elementos que correspondem
const todosOsBotoes = document.querySelectorAll('button');
const todosOsItens  = document.querySelectorAll('li');

console.log(todosOsBotoes.length); // quantos botoes ha na pagina



/*
console.log('alexandre');
console.log(2024-1990);
console.log('js é incrivel!');

// const — valor fixo, não pode ser reatribuído
const nomeBanco = 'Banco InovaWeb';
const numeroConta = '001';

// let — valor pode ser reatribuído ao longo do programa
let saldo = 1000;
let nomeCliente = 'Maria Silva';

// Reatribuindo let
saldo = 1500; // ✅ funciona
// nomeBanco = 'Outro'; // ❌ erro — const não pode mudar

console.log(nomeBanco);
console.log(saldo);


// String — texto (use aspas ou template literal)
let nome = 'João'; // aspas simples
let cidade = "Rio de Janeiro"; // aspas duplas
let apresentacao = `Olá, meu nome é ${nome}!`; // template literal usa crases ao invés de aspas e permite chamar variáveis dentro da string

// Number — qualquer número
let idade = 25;
let preco = 1500.99;

// Boolean — verdadeiro ou falso
let ativo = true;
let bloqueado = false;

// Descobrindo o tipo com typeof
console.log(typeof nome);    // "string"
console.log(typeof idade);   // "number"
console.log(typeof ativo);   // "boolean"



const cliente = 'Ana';
 saldo = 2500;

// Forma antiga — concatenação com +
console.log('Olá ' + cliente + '! Seu saldo é R$ ' + saldo);

// Template literal — muito mais legível
console.log(`Olá ${cliente}! Seu saldo é R$ ${saldo}`);


saldo = 500;
let valorSaque = 200;

if (valorSaque > saldo) {
  console.log('Saldo insuficiente!');
} else if (valorSaque <= 0) {
  console.log('Valor inválido!');
} else {
  saldo = saldo - valorSaque;
  console.log(`Saque realizado. Novo saldo: R$ ${saldo}`);
}


let saldo = 1000;


// Função com múltiplos parâmetros
function depositar(saldoAtual, valor) {
  if (valor <= 0) {
    console.log('Valor inválido!');
    return saldoAtual; // retorna sem alterar
  }
  const novoSaldo = saldoAtual + valor;
  console.log(`Depósito de R$ ${valor}. Novo saldo: R$ ${novoSaldo}`);
  return novoSaldo;
}

saldo = depositar(saldo, 500);  // 1500
saldo = depositar(saldo, -100); // inválido, saldo não muda
console.log(`Saldo final: R$ ${saldo}`);




// Criando um array com colchetes [ ]
const times = ['Flamengo', 'Vasco', 'Botafogo', 'Fluminense'];
const numeros = [10, 20, 30, 40, 50];

// Acessando pelo índice — começa em 0
console.log(times[0]); // 'Flamengo'
console.log(times[1]); // 'Vasco'
console.log(times[3]); // 'Fluminense'

// Índice que não existe retorna undefined
console.log(times[9]); // undefined

// Quantidade de itens no array
console.log(times.length); // 4

// Acessando o último elemento — truque útil
console.log(times[times.length - 1]); // 'Fluminense'




const frutas = ['maca', 'banana'];
frutas[0] = 'laranja'; // funciona — alterando o conteúdo
// frutas = ['uva'];   // erro — tentando substituir o array
console.log(frutas[0]);
console.log(frutas[1]);
frutas[2] = 'pera';
console.log(frutas[2]);




let historico = [];

// push — adiciona um item no FINAL
historico.push('Deposito: R$ 500.00');
historico.push('Saque: R$ 200.00');
historico.push('Deposito: R$ 300.00');
console.log(historico.length); // 3
console.log(historico[0]);     // 'Deposito: R$ 500.00'

// pop — remove e retorna o ÚLTIMO item
const ultimo = historico.pop();
console.log(ultimo);           // 'Deposito: R$ 300.00'
console.log(historico.length); // 2 — um item foi removido

// includes — verifica se um valor existe no array
console.log(historico.includes('Saque: R$ 200.00')); // true
console.log(historico.includes('Pix: R$ 100.00'));   // false

// indexOf — retorna a posição de um item (-1 se não encontrar)
console.log(historico.indexOf('Saque: R$ 200.00')); // 1

// join — transforma o array em uma string
console.log(historico.join(' | '));
// 'Deposito: R$ 500.00 | Saque: R$ 200.00'



const transacoes = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];

// slice(início, fim) — fim não é incluído
const primeiras3 = transacoes.slice(0, 3);
console.log(primeiras3); // ['T1', 'T2', 'T3']

// slice com índice negativo — conta a partir do final
const ultimas3 = transacoes.slice(-3);
console.log(ultimas3); // ['T5', 'T6', 'T7']

// Se o array tiver menos itens que o solicitado,
// retorna todos os disponíveis sem gerar erro
const array2itens = ['T1', 'T2'];
console.log(array2itens.slice(-5)); // ['T1', 'T2']




const  compras = ['c1', 'c2', 'c3', 'c4', 'c5'];
compras.push('c6');
console.log(compras);
const ultima = compras.pop();
console.log(ultima);
console.log(compras);

console.log(compras.slice(-3));


// for (início; condição; incremento)
for (let i = 0; i < 5; i++) {
  console.log(`Volta número ${i}`);
}
// Exibe: Volta número 0, 1, 2, 3, 4

// Percorrendo um array com for clássico
const nomes = ['Ana', 'Bruno', 'Carlos'];

for (let i = 0; i < nomes.length; i++) {
  console.log(`${i + 1}. ${nomes[i]}`);
}
// 1. Ana
// 2. Bruno
// 3. Carlos

// Percorrendo ao contrário
for (let i = nomes.length - 1; i >= 0; i--) {
  console.log(nomes[i]);
}
// Carlos, Bruno, Ana



const transacoes = [
  'Deposito: R$ 500.00',
  'Saque: R$ 200.00',
  'Deposito: R$ 300.00'
];

// for...of — percorre os valores diretamente
for (const transacao of transacoes) {
  console.log(transacao);
}
// Deposito: R$ 500.00
// Saque: R$ 200.00
// Deposito: R$ 300.00

// Combinando com if dentro do loop
for (const transacao of transacoes) {
  if (transacao.includes('Deposito')) {
    console.log('Entrada detectada:', transacao);
  }
}



// while (condição)
let tentativas = 3;

while (tentativas > 0) {
  console.log(`Tentativas restantes: ${tentativas}`);
  tentativas--; // reduz 1 a cada volta — essencial para não travar
}
// Para quando tentativas chegar a 0

// Exemplo prático — redução progressiva de valor
let valor = 1000;
let maxTentativas = 4;
let tentativa = 0;

while (tentativa < maxTentativas && valor > 500) {
  tentativa++;
  console.log(`Tentativa ${tentativa}: R$ ${valor.toFixed(2)}`);
  valor = valor * 0.8; // reduz 20% a cada volta
}


const historico = [
  'Deposito: R$ 500.00 | Saldo: R$ 1500.00',
  'Saque: R$ 200.00 | Saldo: R$ 1300.00',
  'Deposito: R$ 300.00 | Saldo: R$ 1600.00',
  'Saque: R$ 100.00 | Saldo: R$ 1500.00',
  'Deposito: R$ 400.00 | Saldo: R$ 1900.00'
];

// Variáveis acumuladoras — declaradas ANTES do loop
let totalDepositos = 0;
let totalSaques = 0;
let totalTransacoes = 0;

// Loop que processa cada item
for (const transacao of historico) {
  if (transacao.includes('Deposito')) {
    totalDepositos++;
  } else if (transacao.includes('Saque')) {
    totalSaques++;
  }
  totalTransacoes++;
}

// Resultado após o loop
console.log(`Depósitos: ${totalDepositos}`);   // 3
console.log(`Saques: ${totalSaques}`);         // 2
console.log(`Total: ${totalTransacoes}`);      // 5

console.log("----------------");

*/


