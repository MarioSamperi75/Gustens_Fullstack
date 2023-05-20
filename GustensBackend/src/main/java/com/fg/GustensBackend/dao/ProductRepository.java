package com.fg.GustensBackend.dao;

import com.fg.GustensBackend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Integer> {
}
