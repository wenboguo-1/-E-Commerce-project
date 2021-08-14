package com.hellospring.mapper;

import com.hellospring.entity.OnSaleItems;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import java.util.List;

public interface OnSaleItemRepository {
    @Mapper
    public void addNewOnSaleItem(@Param("userId")int userId,@Param("productId") int product,@Param("discount") String discount);
    public List<OnSaleItems>getOnSaleItems();
}
