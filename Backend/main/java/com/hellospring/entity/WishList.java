package com.hellospring.entity;

import lombok.Data;
import lombok.Getter;

@Data
public class WishList {
    @Getter
    private int userId;
    @Getter
    private ProductInfo productInfo;
}
