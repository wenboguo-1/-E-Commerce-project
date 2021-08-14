package com.hellospring.entity;

import lombok.Data;
import lombok.Getter;

@Data
public class OnSaleItems {

    @Getter
    private int productId;
    @Getter
    private String discount;
}
