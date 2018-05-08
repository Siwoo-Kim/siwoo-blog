package com.siwoo.springblog.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

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

    @GetMapping
    public String home() {
        return "index.html";
    }

}
