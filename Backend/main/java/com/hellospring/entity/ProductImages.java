package com.hellospring.entity;

import lombok.Data;
import lombok.Getter;

@Data
public class ProductImages {
    @Getter
    private String image;
    @Getter
    private int productId;
}
