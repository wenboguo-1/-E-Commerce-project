package com.hellospring.entity;

import org.springframework.stereotype.Component;
import lombok.Data;
import lombok.Getter;


@Data
public class UserInfo {

    @Getter
    private int userId;
    @Getter
    private String userEmail;
    @Getter
    private String userName;
    @Getter
    private String userPassword;
    @Getter
    private String userImage;

}
