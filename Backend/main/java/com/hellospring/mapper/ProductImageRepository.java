package com.hellospring.mapper;

import com.hellospring.entity.ProductImages;
import java.util.List;
public interface ProductImageRepository {
      public void newProductImage(ProductImages productImage);
      public List<String> getImages(int id);
}
