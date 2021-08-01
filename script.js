const nomePerson = document.getElementById('name');
const height = document.getElementById('height');
const birthYear = document.getElementById('birth-year');
const eyeColor = document.getElementById('eye-color');

fetch('https://swapi.dev/api/people/1')   
    .then((response) => response.json())
    .then((dados) => {
        console.log(dados);
        nomePerson.innerHTML = dados.name;
        height.innerHTML = dados.height + ' cm';
        birthYear.innerHTML = dados.birth_year;
        eyeColor.innerHTML = dados.eye_color;
    });