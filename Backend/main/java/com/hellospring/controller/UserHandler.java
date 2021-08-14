package com.hellospring.controller;
import com.hellospring.entity.*;
import com.hellospring.mapper.OnSaleItemRepository;
import com.hellospring.mapper.ProductImageRepository;
import com.hellospring.mapper.ProductInfoRepository;
import com.hellospring.mapper.UserInfoRepository;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserHandler {

    @Autowired
    UserInfoRepository userInfoRepository;
    @Autowired
    ProductInfoRepository productInfoRepository;
    @Autowired
    ProductImageRepository productImageRepository;
    @Autowired
    OnSaleItemRepository onSaleItemRepository;

    @GetMapping("/usersInfo")
    public List<UserInfo> findAll(){;
       return userInfoRepository.findAll();
    }
    @GetMapping("/userInfo/{userEmail}")
    public UserInfo findByEmail(@PathVariable("userEmail") String userEmail){
         System.out.println(userInfoRepository.findByEmail(userEmail));
         if(userInfoRepository.findByEmail(userEmail) == null){
             return null;
         }
         return userInfoRepository.findByEmail(userEmail);
    }
    @GetMapping(value = "/login", produces = "application/json")
    public UserInfo findByEmailAndPassword
            (@RequestParam(value = "userEmail") String userEmail, @RequestParam(value = "userPassword") String userPassword){
        return userInfoRepository.findByEmailAndPassword(userEmail,userPassword);
    }

    @PostMapping(value = "/updateProduct",produces = "application/json")
    public void updateProductInfo(@RequestBody ProductInfo productInfo){
         productInfoRepository.updateProductInfo(productInfo);
    }
    @PostMapping(value = "/newUserInfo",produces = "application/json")
    public void newUserInfo(@RequestBody UserInfo userInfo){
        System.out.println(userInfo.toString());
        userInfoRepository.newUser(userInfo);
    }

    @PostMapping(value = "/newProduct", produces = "application/json")
    public void newProduct( @RequestBody ProductInfo productInfo){
        productInfoRepository.newProduct(productInfo);
    }

    @GetMapping(value = "/allProducts", produces =  "application/json")
    public List<ProductInfo> getAllProduct(){
        System.out.println(""
        );
        return productInfoRepository.getAllProducts();
    }
    @PostMapping(value = "/newProductImages", produces = "applicatin/json")
    public void newProductImages(ProductImages productImages){
        productImageRepository.newProductImage(productImages);
    }

    @GetMapping(value = "/findProductsByUserId/{userId}", produces = "application/json")
    public List< ProductInfo> findProductsByUserId(@PathVariable("userId") int userId){
        return productInfoRepository.findProductsByUserId(userId);
    }
    @PostMapping(value = "/deleteItem/{productId}",produces = "application/json")
    public void deleteProduct (@PathVariable("productId") int productId){
         productInfoRepository.deleteProductById(productId);
    }

    @PostMapping(value = "/newOnSaleItem",produces = "application/json")
    public void newOnSaleItem(int userId,int productId,String discount){

        productInfoRepository.deleteProductById(productId);
        onSaleItemRepository.addNewOnSaleItem(userId,productId,discount);
    }
    @PostMapping(value = "/setOnSaleItemById",produces = "application/json")
    public void setOnSaleItemById(@RequestBody OnSaleItems onSaleItems){
        System.out.println("123");
        productInfoRepository.setOnSaleItemById(onSaleItems.getDiscount(),onSaleItems.getProductId());

    }
    @GetMapping(value = "/itemListByType/{type}",produces = "application/json")
    public List<ProductInfo> getItemsByType(@PathVariable("type") String type){
        return productInfoRepository.getItemsByType(type);
    }

    /*
    @RequestMapping(value = "/testImage", produces = {MediaType.IMAGE_PNG_VALUE, "application/json"})
    public void testImage(@RequestParam("multipartFile") MultipartFile imageTest) throws IOException, SQLException {
        System.out.println(imageTest);
        userInfo.testImage(imageTest);
    }
    @GetMapping("/image")
    public List<ImageTest> getImage(){
       return userInfo.getImage();
    }

     */

}
