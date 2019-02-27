class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    getPrice() {
        return this.price;
    }

    getId() {
        return this.id;
    }
}

export default Product;