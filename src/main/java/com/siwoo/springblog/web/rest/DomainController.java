package com.siwoo.springblog.web.rest;

import com.siwoo.springblog.domain.Domain;
import com.siwoo.springblog.repository.DomainRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-05 오후 6:47
 **/

@RestController
@RequestMapping("/rest/domain")
public class DomainController {

    @Autowired
    DomainRepository domainRepository;

    @GetMapping
    public List<Domain> all() {
        return domainRepository.findAll();
    }

    @GetMapping(params = "by=name")
    public Domain byName(@RequestParam("value") Domain domain) {
        return domain;
    }

}
