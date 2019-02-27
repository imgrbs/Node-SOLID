import Product from './Product';

class ProductRepository {
    constructor() {
        let products = [];
        products.push(new Product(1, 'Chocolate', 20));
        products.push(new Product(2, 'Beer', 20));
        products.push(new Product(3, 'Pocky', 20));

        this.products = products;
    }

    getProducts() {
        return this.products;
    }

    getProductById(productId) {
        return this.products.filter(product => product.getId() === productId);
    }
}

export default ProductRepository;