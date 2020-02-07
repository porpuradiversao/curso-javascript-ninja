/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var qualquer = [ 10, 'Kaique', { farol: 'vermelho' }, function() {}, null ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function coco( arr ) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( coco(qualquer)[1] );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myfunction( a, b ) {
  return a[ b ];
}
  

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var qualquer2 = [ 'ourominas', { ram: '8gb' }, false, function(a) {}, [ 1, 2, 3] ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log( myfunction( qualquer2, 0 ) );
console.log( myfunction( qualquer2, 1 ) );
console.log( myfunction( qualquer2, 2 ) );
console.log( myfunction( qualquer2, 3 ) );
console.log( myfunction( qualquer2, 4 ) );

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book( booksname ) {
  var allbooks = {
      'Mente Milionaria': {
        quantidadePaginas: 400,
        autor:'Stevan',
        editora:'Saraiva',
      },
      'Segredos': {
        quantidadePaginas: 205,
        autor:'Lara',
        editora:'Saraiva'
      },
      'Pai rico pai pobre': {
        quantidadePaginas: 150,
        autor:'Lord Evan',
        editora:'Saraiva'
      }
  };
  return !booksname ? allbooks : allbooks[ booksname ];
}
    

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log( 'O livro Pai rico pai pobre tem ' + book( 'Pai rico pai pobre' ).quantidadePaginas + ' páginas!' );

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O autor do livro Segredos é ' + book( 'Segredos' ).autor + '.' );

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( 'O livro Mente Milionaria foi publicado pela editora ' + book( 'Mente Milionaria' ).editora + '.' );
