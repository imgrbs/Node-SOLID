import Product from './Product';
import knex from '../Utils/knex'

function toProducts({ id, name, price }) {
    return new Product(id, name, price);
};

class ProductRepository {
    async getProducts() {
        let products = await knex.select('id', 'name', 'price').from('products').map(toProducts);
        return products;
    }

    async getProductById(productId) {
        let product = await knex.select('id', 'name', 'price').from('products').where('id', productId).map(toProducts);
        return product;
    }
}

export default ProductRepository;