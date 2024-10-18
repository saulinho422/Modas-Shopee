// script.js
const products = [
    {
        name: "Produto 1",
        image: "imagens/produtos/1.png", // Substitua pela URL da imagem do produto
        link: "#"
    },
    {
        name: "Produto 2",
        image: "imagens/produtos/2.png", // Substitua pela URL da imagem do produto
        link: "#"
    },
    {
        name: "Produto 3",
        image: "imagens/produtos/3.png", // Substitua pela URL da imagem do produto
        link: "#"
    },
];

const productList = document.getElementById('product-list');

products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `
        <h2>${product.name}</h2>
        <img src="${product.image}" alt="${product.name}">
        <a href="${product.link}" target="_blank" rel="noopener noreferrer">Comprar</a>
    `;
    productList.appendChild(productDiv);
});

// script.js
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

// script.js
const product = [
    { id: 1, name: 'Produto 1', image: 'https://via.placeholder.com/600x300' },
    { id: 2, name: 'Produto 2', image: 'https://via.placeholder.com/600x300' },
    { id: 3, name: 'Produto 3', image: 'https://via.placeholder.com/600x300' },
    // ...
];

function searchProducts() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach((product) => {
        if (product.name.toLowerCase().includes(searchTerm)) {
            const productHTML = `
                <div class="product">
                    <h2>${product.name}</h2>
                    <img src="${product.image}" alt="${product.name}">
                    <a href="${product.link}" target="_blank" rel="noopener noreferrer">Comprar</a>
                </div>
            `;
            productList.innerHTML += productHTML;
        }
    });

    const productsToShow = productList.children;
    for (let i = 0; i < productsToShow.length; i++) {
        productsToShow[i].classList.add('show');
    }
}
