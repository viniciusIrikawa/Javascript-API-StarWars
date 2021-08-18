
for(let i = 1; i <= 5; i++){  
    create(i);
}
for(let i = 1; i <= 5; i++){   
    // `https://swapi.dev/api/people/${i}`
    // 'https://swapi.dev/api/people/1'
    fetch(`https://swapi.dev/api/people/${i}`)
    .then((response) => response.json())
    .then((dados) => {
        const nomePerson = document.getElementById('name'+i);
        const height = document.getElementById('height'+i);
        const birthYear = document.getElementById('birth-year'+i);
        const eyeColor = document.getElementById('eye-color'+i);
        console.log(dados);
        nomePerson.innerHTML = dados.name;
        height.innerHTML = dados.height + ' cm';
        birthYear.innerHTML = dados.birth_year;
        eyeColor.innerHTML = dados.eye_color;
    });
}
