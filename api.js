document.addEventListener('DOMContentLoaded', () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const nombre = data.name;
            const altura = data.height;
            const peso = data.weight;
            const imagenUrl = data.sprites.other["official-artwork"].front_default;

            document.getElementById('nombre').textContent = nombre;
            document.getElementById('altura').textContent = altura;
            document.getElementById('peso').textContent = peso;
            document.getElementById('imagen').src = imagenUrl;
        })
        .catch(error => {
            console.error('Error al cargar los datos:', error);
        });
});
