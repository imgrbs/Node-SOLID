import Product from '../Product';
import ProductService from '../ProductService';
import ProductRepository from '../ProductRepository';


describe('> Test ProductService', () => {
    let productService;

    beforeEach(() => {
        let products = [];
        products.push(new Product('Chocolate', 20));
        products.push(new Product('Beer', 20));
        products.push(new Product('Pocky', 20));
        const productRepository = new ProductRepository(products);
        productService = new ProductService(productRepository);
    });

    test('test get total price should return correct value', () => {
        expect(productService.getTotalPrice()).toBe(60);
    });

    test('test get total price with discount value should return correct value', () => {
        const discount20Percent = 0.2;
        expect(productService.getTotalPrice(discount20Percent)).toBe(48);
    });

});