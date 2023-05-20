package com.fg.GustensBackend.service;

import com.fg.GustensBackend.entity.Product;

import java.util.List;

public interface ProductService {

    List<Product> findAll();

    Product findById(int id);

    Product save(Product product);

    void deleteById(int id);


}
