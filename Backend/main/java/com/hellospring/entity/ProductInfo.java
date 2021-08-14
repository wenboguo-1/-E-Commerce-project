package com.hellospring.entity;

import lombok.Data;
import lombok.Getter;

@Data
public class ProductInfo {
    @Getter
    private int userId;
    @Getter
    private int productId;
    @Getter
    private String productImage;
    @Getter
    private String productName;
    @Getter
    private String productDescription;
    @Getter
    private double productPrice;
    @Getter
    private String productUnit;
    @Getter
    private int numOfSold;
    @Getter
    private boolean isWishAdded;
    @Getter
    private String type;
    @Getter
    private String discount;


}
