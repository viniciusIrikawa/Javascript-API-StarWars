// fetch('https://swapi.dev/api/people/1')
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(dados){
//         console.log(dados);
//         console.log('Nome do personagem: ' + dados.name);
//         console.log('Veículo: ' + dados.vehicles[0]);

//     })

const nome = document.getElementById('nome');
const altura = document.getElementById('altura');
const dataNasc = document.getElementById('data-nasc');
const corOlhos = document.getElementById('cor-olhos');

fetch('https://swapi.dev/api/people/83')
    .then((response) => response.json())
    .then((dados) => {
        console.log(dados);
        // console.log(`Nome do personagem: ${dados.name}`);
        // console.log(`Altura: ${dados.height} cm`);
        // console.log(`Ano de nascimento: ${dados.birth_year} `);
        nome.innerHTML = dados.name;
        altura.innerHTML = dados.height + ' cm';
        dataNasc.innerHTML = dados.birth_year;
        corOlhos.innerHTML = dados.eye_color;
    });