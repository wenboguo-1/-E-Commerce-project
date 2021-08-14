package com.hellospring.mapper;

import com.hellospring.entity.WishList;
import org.springframework.stereotype.Component;

import java.util.List;
@Component
public interface WishListRepository {

    public List<WishList> getWishLit(int userId);
}
