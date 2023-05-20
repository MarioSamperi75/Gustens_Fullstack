package com.fg.GustensBackend.service;

import com.fg.GustensBackend.dao.ProductRepository;
import com.fg.GustensBackend.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService{

    private ProductRepository productRepository;

    @Autowired
    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public List<Product> findAll() {
        return productRepository.findAll();
    }

    @Override
    public Product findById(int id) {
        Product product = null;
        Optional<Product> result = productRepository.findById(id);

        if(result.isPresent()){
            product = result.get();
        }
        else {
            throw new RuntimeException("Product not found - Id: " + id);
        }
        return product;
    }

    @Override
    public Product save(Product product) {
        return productRepository.save(product);
    }

    @Override
    public void deleteById(int id) {
        productRepository.deleteById(id);

    }
}
