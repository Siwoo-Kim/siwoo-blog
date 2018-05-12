package com.siwoo.springblog.web;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-07 오후 7:56
 **/


@Controller
@RequestMapping({"/home","/"})
public class HomeController {

    @Value("${spring.profiles.active}")
    private String profile;

    @GetMapping
    public String home(HttpServletResponse response, HttpServletRequest request) throws IOException {
        System.out.println(profile);
        if("dev".equals(profile)) {
            response.sendRedirect(request.getScheme() + "://" + request.getServerName() + ":" + 4200 + request.getContextPath() + "/");
            return null;
        }
        return "index";
    }

}
