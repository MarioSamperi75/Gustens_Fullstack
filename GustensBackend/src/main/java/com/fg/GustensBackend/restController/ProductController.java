package com.fg.GustensBackend.restController;

import com.fg.GustensBackend.dao.ProductRepository;
import com.fg.GustensBackend.entity.Product;
import com.fg.GustensBackend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ProductController {

    private ProductService productService;
    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @CrossOrigin
    @GetMapping("/products")
    public List<Product> findAll() {
        return productService.findAll();
    }

    @CrossOrigin
    @GetMapping("/products/{productId}")
    public Product getProduct(@PathVariable int productId) {
        return productService.findById(productId);
    }

    @CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
    @PostMapping("/products")
    public Product addProduct(@RequestBody Product product){
        product.setId(0);

        Product dbProduct = productService.save(product);
        return dbProduct;
    }

    @CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
    @PutMapping("/products-update")
    public Product updateProduct(@RequestBody Product product){
        Product dbProduct = productService.save(product);
        return dbProduct;
    }


    @DeleteMapping("/products/{productId}")
    public String deleteProduct(@PathVariable int productId){
        Product product = productService.findById(productId);

        if (product == null) {
            throw new RuntimeException("Product not found - Id: " + productId);
        }

        productService.deleteById(productId);

        return "Product deleted - Id: " + productId;
    }

}
