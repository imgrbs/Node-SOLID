import ProductService from '../ProductService';
import StubProductRepository from '../__stubs__/StubProductRepository';


describe('> Test ProductService', () => {
    let productService;

    beforeEach(() => {
        const productRepository = new StubProductRepository();
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