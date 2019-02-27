class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    calculatePrice(sum, product) {
        return sum += product.getPrice();
    }

    calculateDiscount(price, discountPercent = 0) {
        const discount = price * discountPercent;
        return discount;
    }

    getTotalPrice(discount) {
        let totalPrice = this.productRepository.getProducts().reduce(this.calculatePrice, 0);
        totalPrice = totalPrice - this.calculateDiscount(totalPrice, discount);
        return totalPrice;
    }

    getProducts() {
        return this.productRepository.getProducts();
    }

    getProductById(productId) {
        return this.productRepository.getProductById(productId);
    }
}

export default ProductService;