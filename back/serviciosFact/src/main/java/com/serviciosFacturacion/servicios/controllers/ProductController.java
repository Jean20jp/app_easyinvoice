package com.serviciosFacturacion.servicios.controllers;

import com.serviciosFacturacion.servicios.models.ProductModel;
import com.serviciosFacturacion.servicios.models.PromotionModel;
import com.serviciosFacturacion.servicios.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/product")
public class ProductController {
    @Autowired
    private ProductService productService;


    @GetMapping
    public ArrayList<ProductModel> getProducts() {
        return this.productService.getProducts();
    }
    @PostMapping
    public ProductModel saveProduct(@RequestBody ProductModel product) {
        return this.productService.saveProduct(product);
    }
}
