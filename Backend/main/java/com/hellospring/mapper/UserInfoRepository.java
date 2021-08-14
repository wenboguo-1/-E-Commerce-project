package com.hellospring.mapper;

import com.hellospring.entity.UserInfo;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface UserInfoRepository {
    public List<UserInfo> findAll();
    public UserInfo findByEmail(String userEmail);
    public UserInfo findByEmailAndPassword(String userEmail,String userPassword);
    public void newUser(UserInfo userInfo);
    public boolean isEmileExit(String email);

}
