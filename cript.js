let currentPage = 1;

const loadMoreButtons = document.querySelectorAll('.load-more');

loadMoreButtons.forEach((button, index) => {
    button.addEventListener('click', () => loadMoreMovies(index + 1));
});

function loadMoreMovies(page) {
    const boxContainer = document.querySelector(`.box-container.box-${page}`);

    for (let i = 0; i < 4; i++) {
        const content = document.createElement('div');
        content.classList.add('content');
        content.innerHTML = `
            <img src="Imagenes.pagina web/accion-${Math.floor(Math.random() * 8) + 1}.jpg" alt="Accion ${i + 1}">
            <h3>Pelicula hd ${i + 1}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        `;
        boxContainer.appendChild(content);
    }
}
