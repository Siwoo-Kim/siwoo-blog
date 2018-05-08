package com.siwoo.springblog.support.fixture;

import com.siwoo.springblog.domain.BasicTime;
import com.siwoo.springblog.domain.Category;
import com.siwoo.springblog.domain.Topic;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-06 오후 1:07
 **/


public class TopicFixtureProvider {

    public static List<Topic> springTopics(Category springCategory) {
        List topics = new ArrayList();

        Topic topic = new Topic();
        topic.setName("The IoC container");
        topic.setShortDescription("Introduction to the Spring IoC container and beans");
        topic.setDescription("This chapter covers the Spring Framework implementation of the Inversion of Control (IoC) [1] principle. IoC is also known as dependency injection (DI). It is a process whereby objects define their dependencies, that is, the other objects they work with, only through constructor arguments, arguments to a factory method, or properties that are set on the object instance after it is constructed or returned from a factory method. The container then injects those dependencies when it creates the bean. This process is fundamentally the inverse, hence the name Inversion of Control (IoC), of the bean itself controlling the instantiation or location of its dependencies by using direct construction of classes, or a mechanism such as the Service Locator pattern.");
        topic.setCategory(springCategory);
        topic.setYoutubeId("oTcSW4-_1Ew");
        topic.setBasicTime(new BasicTime(LocalDateTime.of(2018,5,1,1,1,1), null));
        topics.add(topic);

        topic = new Topic();
        topic.setName("Resources");
        topic.setShortDescription("Resource interface is meant to be a more capable interface for abstracting access to low-level resources.");
        topic.setDescription("Java’s standard java.net.URL class and standard handlers for various URL prefixes unfortunately are not quite adequate enough for all access to low-level resources. For example, there is no standardized URL implementation that may be used to access a resource that needs to be obtained from the classpath, or relative to a ServletContext. While it is possible to register new handlers for specialized URL prefixes (similar to existing handlers for prefixes such as http:), this is generally quite complicated, and the URL interface still lacks some desirable functionality, such as a method to check for the existence of the resource being pointed to.");
        topic.setBasicTime(new BasicTime(LocalDateTime.of(2018,5,2,1,1,1), null));
        topic.setYoutubeId("71NVb3vMvMc");
        topic.setCategory(springCategory);
        topics.add(topic);

        topic = new Topic();
        topic.setName("Validation");
        topic.setShortDescription("Spring and JSR-303/JSR-349 Bean Validation.");
        topic.setDescription("There are pros and cons for considering validation as business logic, and Spring offers a design for validation (and data binding) that does not exclude either one of them. Specifically validation should not be tied to the web tier, should be easy to localize and it should be possible to plug in any validator available. Considering the above, Spring has come up with a Validator interface that is both basic and eminently usable in every layer of an application.\n" + "\n" + "Data binding is useful for allowing user input to be dynamically bound to the domain model of an application (or whatever objects you use to process user input). Spring provides the so-called DataBinder to do exactly that. The Validator and the DataBinder make up the validation package, which is primarily used in but not limited to the MVC framework.\n" + "\n" + "The BeanWrapper is a fundamental concept in the Spring Framework and is used in a lot of places. However, you probably will not have the need to use the BeanWrapper directly. Because this is reference documentation however, we felt that some explanation might be in order. We will explain the BeanWrapper in this chapter since, if you were going to use it at all, you would most likely do so when trying to bind data to objects.");
        topic.setYoutubeId("INLNoeCD-m8");
        topic.setBasicTime(new BasicTime(LocalDateTime.of(2018,5,3,1,1,1), null));
        topic.setCategory(springCategory);
        topics.add(topic);

        topic = new Topic();
        topic.setName("SpEL");
        topic.setShortDescription("SpEL is a powerful expression language that supports querying and manipulating an object graph at runtime.");
        topic.setDescription("The Spring Expression Language (SpEL for short) is a powerful expression language that supports querying and manipulating an object graph at runtime. The language syntax is similar to Unified EL but offers additional features, most notably method invocation and basic string templating functionality.\n" + "\n" + "While there are several other Java expression languages available — OGNL, MVEL, and JBoss EL, to name a few — the Spring Expression Language was created to provide the Spring community with a single well supported expression language that can be used across all the products in the Spring portfolio. Its language features are driven by the requirements of the projects in the Spring portfolio, including tooling requirements for code completion support within the Eclipse based Spring Tool Suite. That said, SpEL is based on a technology agnostic API allowing other expression language implementations to be integrated should the need arise.");
        topic.setBasicTime(new BasicTime(LocalDateTime.of(2018,5,4,1,1,1), null));
        topic.setYoutubeId("KvD_KdYB6Xc&t=2s");
        topic.setCategory(springCategory);
        topics.add(topic);

        topic = new Topic();
        topic.setName("AOP");
        topic.setShortDescription("Aspect-Oriented Programming (AOP) complements Object-Oriented Programming (OOP) by providing another way of thinking about program structure.");
        topic.setDescription("Aspect-Oriented Programming (AOP) complements Object-Oriented Programming (OOP) by providing another way of thinking about program structure. The key unit of modularity in OOP is the class, whereas in AOP the unit of modularity is the aspect. Aspects enable the modularization of concerns such as transaction management that cut across multiple types and objects. (Such concerns are often termed crosscutting concerns in AOP literature.)\n" + "\n" + "One of the key components of Spring is the AOP framework. While the Spring IoC container does not depend on AOP, meaning you do not need to use AOP if you don’t want to, AOP complements Spring IoC to provide a very capable middleware solution.");
        topic.setYoutubeId("Ft29HgsePfQ");
        topic.setBasicTime(new BasicTime(LocalDateTime.of(2018,5,5,1,1,1), null));
        topic.setCategory(springCategory);
        topics.add(topic);

        topic = new Topic();
        topic.setName("AOP api");
        topic.setShortDescription("Spring’s support for AOP using @AspectJ and schema-based aspect definitions.");
        topic.setDescription("The previous chapter described the Spring’s support for AOP using @AspectJ and schema-based aspect definitions. In this chapter we discuss the lower-level Spring AOP APIs and the AOP support typically used in Spring 1.2 applications. For new applications, we recommend the use of the Spring 2.0 and later AOP support described in the previous chapter, but when working with existing applications, or when reading books and articles, you may come across Spring 1.2 style examples. Spring 5 remains backwards compatible with Spring 1.2 and everything described in this chapter is fully supported in Spring 5.");
        topic.setYoutubeId("Ft29HgsePfQ");
        topic.setBasicTime(new BasicTime(LocalDateTime.of(2018,5,6,1,1,1), null));
        topic.setCategory(springCategory);
        topics.add(topic);

        return topics;
    }

    public static List<Topic> hibernateTopics(Category hibernateCategory) {
        List topics = new ArrayList();

        Topic topic = new Topic();
        topic.setName("Configuration");
        topic.setShortDescription("For this tutorial, the hibernate.cfg.xml file defines the Hibernate configuration information.");
        topic.setDescription("The connection.driver_class, connection.url, connection.username and connection.password <property/> elements define JDBC connection information. These tutorials utilize the H2 in-memory database, so the values of these properties are all specific to running H2 in its in-memory mode. connection.pool_size is used to configure the number of connections in Hibernate’s built-in connection pool.");
        topic.setYoutubeId("HslkJXvqlWs");
        topic.setBasicTime(new BasicTime(LocalDateTime.of(2018,5,1,1,1,1), null));
        topic.setCategory(hibernateCategory);
        topics.add(topic);

        topic = new Topic();
        topic.setName("Annotation Mappings");
        topic.setShortDescription("Use annotations to provide mapping information.");
        topic.setDescription("Objectives\n" + " Bootstrap a Hibernate SessionFactory\n" + "\n" + " Use annotations to provide mapping information\n" + "\n" + " Use the Hibernate native APIs");
        topic.setYoutubeId("019nGJGd9JM");
        topic.setBasicTime(new BasicTime(LocalDateTime.of(2018,5,1,1,1,1), null));
        topic.setCategory(hibernateCategory);
        topics.add(topic);

        topic = new Topic();
        topic.setName("JPA");
        topic.setShortDescription("Introduction for using JPA with hibernate");
        topic.setDescription("Objectives\n" + " Bootstrap a JPA EntityManagerFactory\n" + "\n" + " Use annotations to provide mapping information\n" + "\n" + " Use JPA API calls");
        topic.setBasicTime(new BasicTime(LocalDateTime.of(2018,5,1,1,1,1), null));
        topic.setYoutubeId("yBxP8DMA5jY");
        topic.setCategory(hibernateCategory);
        topics.add(topic);

        return topics;
    }
    
}
