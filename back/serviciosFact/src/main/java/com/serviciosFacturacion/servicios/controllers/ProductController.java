package com.serviciosFacturacion.servicios.controllers;

import com.serviciosFacturacion.servicios.models.ProductModel;
import com.serviciosFacturacion.servicios.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
