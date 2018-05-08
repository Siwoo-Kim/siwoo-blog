package com.siwoo.springblog.support.fixture;

import com.siwoo.springblog.domain.BasicTime;
import com.siwoo.springblog.domain.Category;
import com.siwoo.springblog.domain.CategoryType;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-05 오후 6:26
 **/

public class CategoryFixtureProvider {

    static List<Category> categories() {
        List categoiries = new ArrayList();

        Category category = new Category();
        category.setName("Spring");
        category.setDescription("The Spring Framework provides a comprehensive programming and configuration model for modern Java-based enterprise applications - on any kind of deployment platform. A key element of Spring is infrastructural support at the application level: Spring focuses on the \"plumbing\" of enterprise applications so that teams can focus on application-level business logic, without unnecessary ties to specific deployment environments");
        category.setShortDescription("Using Spring Framework to build solid backend application");
        category.setBasicTime(new BasicTime(LocalDateTime.of(2018,5,4,6,24,0), null));
        category.setImgName("spring-img");
        category.setType(CategoryType.FRAMEWORK);
        categoiries.add(category);

        category = new Category();
        category.setName("Hibernate");
        category.setDescription("Working with both Object-Oriented software and Relational Databases can be cumbersome and time consuming. Development costs are significantly higher due to a paradigm mismatch between how data is represented in objects versus relational databases. Hibernate is an Object/Relational Mapping (ORM) solution for Java environments. The term Object/Relational Mapping refers to the technique of mapping data between an object model representation to a relational data model representation.");
        category.setShortDescription("Hibernate can certainly help you to remove or encapsulate vendor-specific SQL code and streamlines the common task of translating result sets from a tabular representation to a graph of objects.");
        category.setBasicTime(new BasicTime(LocalDateTime.of(2018,5,6,6,24,0), null));
        category.setImgName("hibernate-img");
        category.setType(CategoryType.FRAMEWORK);
        categoiries.add(category);

        return categoiries;
    }

}
