package com.siwoo.springblog;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.siwoo.springblog.converter.StringToCategoryConverter;
import com.siwoo.springblog.converter.StringToDomainConverter;
import com.siwoo.springblog.converter.StringToTopicConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.format.FormatterRegistry;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import java.util.List;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-06 오전 9:14
 **/

@Configuration
public class WebConfiguration extends WebMvcConfigurationSupport {

    // Enable MVC Conversion Support
    // name:String -> Domain[entity]
    // name:String -> Category[entity]
    // id:String -> Long -> Topic[entity]
    @Autowired
    StringToDomainConverter stringToDomainConverter;
    @Autowired
    StringToCategoryConverter stringToCategoryConverter;
    @Autowired
    StringToTopicConverter stringToTopicConverter;


    @Bean
    public ViewResolver viewResolver() {
        return new InternalResourceViewResolver("/static/", "");
    }

    @Override
    protected void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/static/**").addResourceLocations("classpath:/static/");
        registry.addResourceHandler("/**").addResourceLocations("classpath:/static/");
    }


    @Override
    protected void addFormatters(FormatterRegistry registry) {
        registry.addConverter(stringToDomainConverter);
        registry.addConverter(stringToCategoryConverter);
        registry.addConverter(stringToTopicConverter);
    }

    @Bean
    RestTemplate restTemplate() {
        return new RestTemplate();
    }

    //Configure JSON Message Converter
    // -> INDENT , WRITE TIMESTAMP AS STRING
    @Bean
    ObjectMapper objectMapper() {
        return Jackson2ObjectMapperBuilder
                .json()
                .indentOutput(true)
                .featuresToDisable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS)
                .build();
    }

    @Bean
    public MappingJackson2HttpMessageConverter mappingJackson2HttpMessageConverter() {
        return new MappingJackson2HttpMessageConverter(objectMapper());
    }

    @Override
    protected void extendMessageConverters(List<HttpMessageConverter<?>> converters) {
        converters.add(0, mappingJackson2HttpMessageConverter());
    }
}

