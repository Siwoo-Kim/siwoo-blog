package com.siwoo.springblog.support.fixture;

import com.siwoo.springblog.domain.BasicTime;
import com.siwoo.springblog.domain.Domain;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-05 오후 6:19
 **/

public class DomainFixtureProvider {

    static List<Domain> domains() {
        List domains = new ArrayList();

        Domain category = new Domain();
        category.setName("Category");
        category.setDescription("This page provides a brief overview of categories. It serves as a map for the rest of the category.");
        category.setBasicTime(new BasicTime(LocalDateTime.of(2018,5,5,6,24,0), null));
        category.setImgName("category-img");
        domains.add(category);

        category = new Domain();
        category.setName("Category Introduction");
        category.setDescription("Designed to introduce the category and show you list of topics in the category you choose, with easy handy tool \"Search Table\".");
        category.setBasicTime(new BasicTime(LocalDateTime.of(2018,5,6,3,24,0), null));
        category.setImgName("category_introduction-img");
        domains.add(category);

        category = new Domain();
        category.setName("Topic");
        category.setDescription("The Page id designed to be completed in 15-30 minutes, provide quick, hands-on instructions.");
        category.setBasicTime(new BasicTime(LocalDateTime.of(2018,5,7,10,24,0), null));
        category.setImgName("topic-img");
        domains.add(category);

        Domain guides = new Domain();
        guides.setName("Guides");
        guides.setDescription("Guides are the perfect match if you're just getting to know this page or tackling something new");
        guides.setBasicTime(new BasicTime(LocalDateTime.of(2018,5,5,6,24,0), null));
        guides.setImgName("guides-img");
        domains.add(guides);

        return domains;
    }

}
