const products = [
    {id: 1, photo: "img/1.jpg", title: 'Notebook', price: 2000,},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, photo: "img/2.jpg", title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, photo: "img/2.jpg", title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
    {id: 2, title: 'Mouse', price: 20},
];
//Функция для формирования верстки каждого товара
const renderProduct = (photo, title, price) => {
    if (photo) {
        return `<div class="product-item">
                <div class="img_cont"><img src="${photo}" alt="фото товара"></div>
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    } else {
        return `<div class="product-item">
                <div class="img_cont"><img src="img/none.jpg" alt="фото товара"></div>
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }

};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.photo, item.title, item.price));
    // console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join("");
};

renderPage(products);