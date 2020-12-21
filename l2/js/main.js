class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];//массив товаров
//        this.allProducts=[];//массив объектов
        this._fetchProducts();
    }

    _fetchProducts() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObject = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', productObject.render());
        }
    }

    priceList() {
        let sum = 0;
        this.goods.forEach((arrayItem) => {
            for (let key in arrayItem) {
            }
            sum += arrayItem.price;
        });
        return console.log(sum);
    }

}

class ProductItem {
    constructor(product, img = 'https://placehold.it/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    render() {
        return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

class Basket {

}

class good {

}

let list = new ProductsList();
list.render();

let Price = new ProductsList();
Price.priceList();

