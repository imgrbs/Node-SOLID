class ProductController {
    async getProducts(req, res) {
        return res.json(await global.productService.getProducts());
    }

    async getProductById(req, res) {
        const productId = parseInt(req.params.id);
        return res.json(await global.productService.getProductById(productId));
    }
}

export default ProductController;