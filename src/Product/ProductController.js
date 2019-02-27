class ProductController {
    getProducts(req, res) {
        return res.json(global.productService.getProducts());
    }

    getProductById(req, res) {
        const productId = parseInt(req.params.id);
        return res.json(global.productService.getProductById(productId));
    }
}

export default ProductController;