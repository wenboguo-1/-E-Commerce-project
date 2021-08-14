package com.hellospring.mapper;

import com.hellospring.entity.ProductInfo;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;
@Component
public interface ProductInfoRepository {


    public void newProduct(ProductInfo productInfo);
    public List<ProductInfo> getAllProducts();
    public List <ProductInfo> findProductsByUserId(int productId);
    @Mapper
    public void updateProductInfo(@Param("productInfo") ProductInfo productInfo);
    public void deleteProductById(int id);
    @Mapper
    public void setOnSaleItemById( @Param("discount")  String discount, @Param("productId") int productId);
    public List<ProductInfo> getItemsByType(String type);


}
