package com.siwoo.springblog.web.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-09 오후 3:22
 **/

@RestController
@RequestMapping("/rest")
public class RestPrivateController {

    @GetMapping("/private")
    public void handle() {
        System.out.println("handled");
    }

    @GetMapping("/login")
    public Principal login(Principal principal) {
        System.out.println(principal);
        return principal;
    }

}
