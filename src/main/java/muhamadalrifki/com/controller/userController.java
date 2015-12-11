/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package muhamadalrifki.com.controller;

import muhamadalrifki.com.domain.user;
import muhamadalrifki.com.service.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author al
 */
@RestController
@RequestMapping("/api/user")
public class userController {
    @Autowired
    private UserDao userDao;
    
    @RequestMapping(value = "/loggedin",method = RequestMethod.GET)
    public user getUserLoggedIn(){
        return null;
    }
}
