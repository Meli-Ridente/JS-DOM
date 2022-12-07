//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const boton = document.querySelector('.showme');
console.log(boton)

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const pillado = document.querySelector('#pillado');
console.log(pillado)

//1.3 Usa querySelector para mostrar por consola todos los p

const parrafos = document.querySelectorAll('p');
console.log(parrafos)

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

const pokemon = document.querySelectorAll('.pokemon')
console.log(pokemon)

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".

const TestMe = document.querySelectorAll('[data-function="testMe"]');
console.log(TestMe)

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
console.log(TestMe[3])