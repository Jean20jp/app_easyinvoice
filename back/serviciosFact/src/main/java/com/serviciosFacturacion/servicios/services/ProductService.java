package com.serviciosFacturacion.servicios.services;

import com.serviciosFacturacion.servicios.models.IvaModel;
import com.serviciosFacturacion.servicios.models.ProductModel;
import com.serviciosFacturacion.servicios.repositories.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ProductService {
    @Autowired
    IProductRepository productRepository;

    public ArrayList<ProductModel> getProducts(){
        return (ArrayList<ProductModel>) productRepository.findAll();
    }
    public ProductModel saveProduct(ProductModel product){

        return productRepository.save(product);
    }
}
